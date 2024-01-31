'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.mergeLocales = void 0
const fs_1 = require('fs')
const fs_2 = require('fs')
const fs_3 = require('fs')
const fs_4 = require('fs')
const path_1 = require('path')
const mergeLocales = (files, outputPath) => {
  const mergedLocales = {}
  files.forEach((file) => {
    if ((0, fs_1.existsSync)(file)) {
      const content = JSON.parse((0, fs_2.readFileSync)(file, 'utf8'))
      Object.assign(mergedLocales, content)
    }
  })
  const directory = (0, path_1.dirname)(outputPath)
  if (!(0, fs_1.existsSync)(directory)) {
    ;(0, fs_3.mkdirSync)(directory, { recursive: true })
  }
  ;(0, fs_4.writeFileSync)(outputPath, JSON.stringify(mergedLocales, null, 2), 'utf8')
}
exports.mergeLocales = mergeLocales
//# sourceMappingURL=merge-locales.js.map
