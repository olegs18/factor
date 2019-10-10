import { resolve, join, dirname } from "path"
export { default as getPort } from "get-port"
export { default as rp } from "request-promise-native"

export const waitFor = ms => {
  return new Promise(resolve => setTimeout(resolve, ms || 0))
}

export const indexHtml = () => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>NOT SET</title>
    </head>
    <body>
      <div id="app"></div> 
    </body>
  </html>`
}

export const buildFixture = fixture => {
  process.env.FACTOR_CWD = dirname(require.resolve(fixture))
  process.env.FACTOR_ENV = "test"

  test(`Build ${fixture}`, async () => {
    const cli = require("@factor/cli").default

    try {
      const Factor = await cli.factorize()

      await Factor.$filters.run("create-distribution-app", { testing: true })
    } catch (error) {
      console.error(error)
    }

    expect(2).toBe(2)
  }, 100000)
}

export const loadFixture = async fixture => {
  process.env.FACTOR_CWD = dirname(require.resolve(fixture))
  process.env.FACTOR_ENV = "test"
  const cli = require("@factor/cli").default

  return await cli.factorize()
}