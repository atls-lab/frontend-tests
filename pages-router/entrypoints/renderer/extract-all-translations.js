/* eslint-disable */

import { readdirSync, existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { execSync } from 'child_process'

const processDirectory = (startPath, folderName, allLocales) => {
  if (!existsSync(startPath)) {
    console.log('No directory ', startPath)
    return
  }

  const directories = readdirSync(startPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

  directories.forEach((dir) => {
    const localePath = join(startPath, dir)
    if (existsSync(`${localePath}/${folderName}`)) {
      const command = `formatjs extract "${localePath}/**/*.tsx" --out-file "${localePath}/${folderName}/ru.json" --format simple`
      console.log(`Running: ${command}`)
      execSync(command, { stdio: 'inherit' })
      allLocales.push(`${localePath}/${folderName}/ru.json`)
    }
  })
}

const mergeLocales = (files, outputPath) => {
  const mergedLocales = {}
  files.forEach((file) => {
    if (existsSync(file)) {
      const content = JSON.parse(readFileSync(file, 'utf8'))
      Object.assign(mergedLocales, content)
    }
  })
  writeFileSync(outputPath, JSON.stringify(mergedLocales, null, 2), 'utf8')
}

const allLocales = []
processDirectory('../../fragments', 'locales', allLocales)
processDirectory('../../pages', 'locales', allLocales)
mergeLocales(allLocales, './locales/ru.json')
