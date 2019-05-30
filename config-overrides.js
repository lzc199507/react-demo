const path = require('path')

module.exports = function override (config, env) {
  let newAlias = {
    utils: path.resolve(__dirname, './src/utils'),
    server: path.resolve(__dirname, './src/server'),
    store: path.resolve(__dirname, './src/store'),
    components: path.resolve(__dirname, './src/components'),
  }
  config.resolve.alias = Object.assign(config.resolve.alias, newAlias)
  console.log('config.resolve.alias', config.resolve.alias)
  return config
}
