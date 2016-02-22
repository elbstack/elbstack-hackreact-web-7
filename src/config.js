require('babel/polyfill')

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development']

const titleText = 'hackreact web'
const descText = titleText + ' - kickoff'

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT || 5000,
  app: {
    title: titleText,
    description: descText,
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': titleText,
        'og:locale': 'de_DE'
      }
    }
  },
  sendbird: {
    app_id: process.env.SENDBIRD_APP_ID
  }
}, environment)
