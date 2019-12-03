import { EndpointMeta, ResponseType } from "@factor/endpoint/types"
import { FactorPost, PostActions } from "@factor/post/types"
import { Request, Response } from "express"
import { addEndpoint, processEndpointRequest } from "@factor/endpoint/server"
import { applyFilters, pushToFilter, runCallbacks } from "@factor/tools/filters"
import { objectId, postPermission } from "@factor/post/util"

import { getModel } from "@factor/post/server"
import mime from "mime-types"
import multer from "multer"
import storageSchema from "./schema"
import { uploadEndpointPath } from "./util"

addEndpoint({ id: "storage", handler: { deleteImage } })

pushToFilter("data-schemas", () => storageSchema)

pushToFilter("middleware", {
  path: uploadEndpointPath(),
  middleware: [
    multer().single("imageUpload"),
    async (request: Request, response: Response): Promise<void> => {
      return await processEndpointRequest({
        request,
        response,
        handler: _ => handleUpload(_)
      })
    }
  ]
})

async function handleUpload({
  meta
}: {
  meta: EndpointMeta;
}): Promise<ResponseType | void> {
  const { bearer, request } = meta
  const { file } = request ?? {}

  if (!file || !bearer) return

  const { buffer, mimetype, size } = file

  const attachmentModel = getModel("attachment")
  const attachment = new attachmentModel()

  Object.assign(attachment, {
    author: [objectId(bearer._id)],
    mimetype,
    size
  })

  const attachmentUrl = await applyFilters("storage-attachment-url", {
    buffer,
    key: `${attachment._id}.${mime.extension(mimetype)}`,
    _id: attachment._id
  })

  attachment.url =
    typeof attachmentUrl == "string"
      ? attachmentUrl
      : `data:${mimetype};base64,${buffer.toString("base64")}`

  await attachment.save()

  return attachment.toObject()
}

export async function deleteImage(
  { _id }: { _id: string },
  { bearer }: EndpointMeta
): Promise<FactorPost | void> {
  const post = await getModel("attachment").findOne({ _id })

  if (!post) return

  postPermission({ bearer, post, action: PostActions.Delete })

  const doc = await post.deleteOne({ _id })

  if (doc && !doc.url.includes("base64")) {
    await runCallbacks("delete-attachment", doc)
  }

  return doc
}
