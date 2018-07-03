'use strict'

exports.__esModule = true
const delayLoad = function (delay) {
  if (delay === void 0) { delay = 0 }
  return function (loader) {
    return new Promise((resolve => {
      setTimeout(() => resolve(loader()), delay)
    }))
  }
}
exports['default'] = delayLoad
