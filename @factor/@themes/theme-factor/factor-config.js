module.exports = {
  config: {
    theme: "@factor/theme-doc-engine",
    admins: {
      "arpowers@gmail.com": "owner",
      "andrew@fiction.com": "owner",
      "ray@fiction.com": "owner"
    },
    sendgrid: {
      transactional: "d-0c548da614734c159dc107c4e7f75be3"
    },
    sheets: {
      master: "1NxAcrM0V661g2SEHwVaMOSG2XHaGKUh-0GyIv67tQbc"
    },
    algolia: {
      appId: "1PB2CVUAH5",
      searchKey: "6c7454492c80221b0410b411b52b2245"
    },
    bugsnag: {
      clientKey: "be2b4a0c651443122cb08f2b5e6afb55"
    },
    ip: {
      location: "https://ipapi.co/json/"
    },
    intercom: {
      clientId: "1ab2f5fe-d1e9-40cd-a15a-22708270ec12",
      app_id: "un5xw1rn"
    }
  },
  development: {
    facebook: {
      appId: "467810077059731"
    },
    stripe: {
      public_key: "pk_test_jbW9mKYjd1PXtJklKiqJtIq4"
    },
    plaid: {
      clientName: "Fiction.com",
      env: "sandbox",
      public_key: "35aada978ed8d09e34c5e71aa6b722"
    },

    firebase: {
      apiKey: "AIzaSyDNAsK7SVeOjnJWyk-LK42ib5pgi-r-Ts8",
      authDomain: "factor-docs-staging.firebaseapp.com",
      databaseURL: "https://fiction-staging.firebaseio.com",
      projectId: "fiction-staging",
      storageBucket: "fiction-staging.appspot.com",
      messagingSenderId: "740526030910",
      firebaserc: {
        targets: {
          "fiction-staging": {
            hosting: {
              docs: ["factor-docs-dev"]
            }
          }
        }
      },
      firebaseJson: {
        hosting: {
          target: "docs"
        }
      }
    },
    google: {
      clientId: "740526030910-ik29ukuvap4pg9josek5qjbo3v60robn.apps.googleusercontent.com",
      apiKey: "AIzaSyDNAsK7SVeOjnJWyk-LK42ib5pgi-r-Ts8",
      mapsApiKey: "AIzaSyCblTEsdhjooPRGlz3NLrTxhto0dij9RWg"
    }
  },
  production: {
    facebook: {
      appId: "141257623220074"
    },
    stripe: {
      public_key: "pk_live_mNp1P1HlMMP4gxpc0aUMuayE"
    },
    plaid: {
      clientName: "Fiction.com",
      env: "production",
      public_key: "35aada978ed8d09e34c5e71aa6b722"
    },
    firebase: {
      apiKey: "AIzaSyA7PZv4dR1criMJtSob8i1iFTM_xa_-ZP0",
      authDomain: "factor-docs-production.firebaseapp.com",
      databaseURL: "https://fiction-com.firebaseio.com",
      projectId: "fiction-com",
      storageBucket: "fiction-com.appspot.com",
      messagingSenderId: "120004271877",
      firebaserc: {
        targets: {
          "fiction-com": {
            hosting: {
              docs: ["factor-docs-production"]
            }
          }
        }
      },
      firebaseJson: {
        hosting: {
          target: "docs"
        }
      }
    },
    google: {
      clientId: "120004271877-0h9jrhepph4g13jkhajo66qtdtrefh7a.apps.googleusercontent.com",
      apiKey: "AIzaSyBdsxQIlzbq3nzZKgbd1HirCcASi9M5L_g",
      mapsApiKey: "AIzaSyBAK49mYyBLVjZEzkFvO4vJcTN0PII1Qj8"
    }
  }
}