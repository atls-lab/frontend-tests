'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.removeEmptyLocale = void 0
const fs_1 = require('fs')
const fs_2 = require('fs')
const fs_3 = require('fs')
const fs_4 = require('fs')
const fs_5 = require('fs')
const path_1 = require('path')
const removeEmptyLocale = (outputFilePath, localePath, folderName, allLocales) => {
  if ((0, fs_1.existsSync)(outputFilePath)) {
    const content = (0, fs_2.readFileSync)(outputFilePath, 'utf8').trim()
    if (content === '{}' || content === '{\n}') {
      ;(0, fs_5.unlinkSync)(outputFilePath)
      if ((0, fs_3.readdirSync)((0, path_1.join)(localePath, folderName)).length === 0) {
        ;(0, fs_4.rmSync)((0, path_1.join)(localePath, folderName), {
          recursive: true,
          force: true,
        })
      }
    } else {
      allLocales.push(outputFilePath)
    }
  }
}
exports.removeEmptyLocale = removeEmptyLocale
//# sourceMappingURL=remove-empty-locale.js.map
