
let instance = null

class Translator {
  messages = {};

  setLanguage(locale) {
    this.messages = require('../../static/i18n/' + locale + '.json')
  }

  constructor() {
    if (!instance) {
      instance = this
    }

    instance.setLanguage('de')

    return instance
  }

  translate(key) {
    return typeof this.messages[key] === 'undefined' ? key : this.messages[key]
  }
}

export default new Translator()
