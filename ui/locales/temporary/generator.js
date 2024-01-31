'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const merge_locales_1 = require('./merge-locales')
const process_directory_1 = require('./process-directory')
const allLocales = []
const defaultPaths = ['../../fragments', '../../pages']
let outputFile = 'ru'
const argPaths = []
process.argv.slice(2).forEach((arg) => {
  if (!arg.startsWith('--out=')) {
    argPaths.push(arg)
  } else {
    outputFile = arg.split('=')[1]
  }
})
const paths = argPaths.length ? argPaths : defaultPaths
paths.forEach((path) =>
  (0, process_directory_1.processDirectory)(path, 'locales', allLocales, outputFile)
)
;(0, merge_locales_1.mergeLocales)(allLocales, `./locales/${outputFile}.json`)
//# sourceMappingURL=generator.js.map
