'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.processDirectory = void 0
const child_process_1 = require('child_process')
const fs_1 = require('fs')
const fs_2 = require('fs')
const path_1 = require('path')
const remove_empty_locale_1 = require('../remove-empty-locale')
const processDirectory = (startPath, folderName, allLocales, outputLocale) => {
  if (!(0, fs_1.existsSync)(startPath)) {
    console.log('No directory ', startPath)
    return
  }
  const directories = (0, fs_2.readdirSync)(startPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
  directories.forEach((dir) => {
    const localePath = (0, path_1.join)(startPath, dir)
    if ((0, fs_1.existsSync)(localePath)) {
      const outputFilePath = `${localePath}/${folderName}/${outputLocale}.json`
      const command = `formatjs extract "${localePath}/**/*.tsx" --out-file "${outputFilePath}" --format simple`
      console.log(`Running: ${command}`)
      ;(0, child_process_1.execSync)(command, { stdio: 'inherit' })
      ;(0, remove_empty_locale_1.removeEmptyLocale)(
        outputFilePath,
        localePath,
        folderName,
        allLocales
      )
    }
  })
}
exports.processDirectory = processDirectory
//# sourceMappingURL=process-directory.js.map
