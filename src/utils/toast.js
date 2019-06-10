const _ = require('./statement')

const defaultDuring = 2000

const instance = new _.Toast({
  el: document.createElement('div'),
})
console.log('instance', instance)

const toast = (options) => {
  console.log('options', options)
  const { icon = '', during = 2000, content = '' } = options

  instance.icon = icon
  instance.content = content
  instance.during = during
  console.log('instance', instance)

  instance.show()
  // document.body.appendChild(loadingEl)

  if (during > 0) {
    setTimeout(() => {
      instance.close()
    }, during)
  }
}

module.exports = {
  close () {
    console.log('关')
  },
  success (params) {
    console.log('params', params)
    const type = typeof params
    let options = {
      icon: 'icon-success',
      during: defaultDuring,
    }
    if (type === 'string') {
      options.content = params
    } else if (type === 'object') {
      Object.assign(options, params)
    } else {
      return
    }
    toast(options)
  },
  error (params) {
    const type = typeof params
    let options = {
      icon: 'icon-close',
      during: defaultDuring,
    }
    if (type === 'string') {
      options.content = params
    } else if (type === 'object') {
      Object.assign(options, params)
    } else {
      return
    }
    toast(options)
  },
  info (params) {
    console.log('params', params)
    const type = typeof params
    let options = {
      icon: 'icon-info',
      during: defaultDuring,
    }
    if (type === 'string') {
      options.content = params
    } else if (type === 'object') {
      Object.assign(options, params)
    } else {
      return
    }
    toast(options)
  },
  loading () {
    let options = {
      icon: 'icon-loading',
      during: -1,
    }
    toast(options)
  },
}
