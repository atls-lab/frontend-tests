# Frontend testing site

[//]: # 'VERSIONS'

[<img src="https://img.shields.io/static/v1?style=for-the-badge&label=%40atls%2Fcode-service&message=0.0.21&labelColor=ECEEF5&color=D7DCEB">](https://npmjs.com/package/@atls/code-service)

[//]: # 'VERSIONS'
[//]: # 'VERSIONS'

[<img src="https://img.shields.io/static/v1?style=for-the-badge&label=%40atls%2Fcode-service&message=0.0.24&labelColor=ECEEF5&color=D7DCEB" alt='badge'>](https://npmjs.com/package/@atls/code-service)

## Next.JS 14

Для работы с нашим стеком необходимо иметь следующий конфиг `Next.JS`

Пример для `"type": "module"`:

```js
import { join } from 'path'
import { dirname } from 'path'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
export default {
  experimental: {
    externalDir: true,
    /**
     * Новая опция, которую необходимо явно указывать для всех версий Next.JS старше 12.3.4
     */
    outputFileTracingRoot: join(__dirname, './'),
    esmExternals: 'loose',
  },
  /**
   * Дополнительная настройка для вебпака NextJS.
   * Начиная с Typescript версий 4.7 добавился новый API -
   * при указании module и moduleResolution на Node16 или NodeNext
   * по умолчанию в package.json будет ставиться "type": "commonjs".
   * Однако, если мы захотим поменять на "type": "module", то typescript
   * будет требовать явного указания расширений файлов при импорте, напр.
   *
   * export * from './testing-file.js
   *
   * Настройка вебпака ниже позволяет Next.JS правильно резолвить такие экспорты/импорты.
   */
  webpack: (webpackConfig, { webpack }) => {
    webpackConfig.plugins.push(
      new webpack.NormalModuleReplacementPlugin(new RegExp(/\.js$/), function (
        /** @type {{ request: string }} */
        resource
      ) {
        resource.request = resource.request.replace('.js', '')
      })
    )
    return webpackConfig
  },
  /**
   * Это требуется чтобы формировался чистый JS который можно
   * запустить с помощью NodeJS без установки Next.JS.
   */
  output: 'standalone',
}
```

Касательно скрипта билда:

```json
    "build": "yarn next build src --no-lint && rm ./src/.next/standalone/package.json ; cp -r ./src/.next/standalone ./dist && cp -r ./src/.next/static ./dist/src/.next/static && mv ./dist/src/server.js ./dist/src/index.cjs",
```

Его можно разбить на смысловые части:

- `yarn next build src --no-lint` - использование стокового билдера `Next.JS` с отключением линтера
- `rm ./src/.next/standalone/package.json` - удаляем дубликат `package.json` из билда на случай дубликата (арр роутер зачем то его добавляет в билд)
- `cp -r ./src/.next/standalone ./dist` - вытаскиваем результат билда выше чтобы не тянутся до нужных файлов скриптом `start`
- `cp -r ./src/.next/static ./dist/src/.next/static` - копируем самостоятельно все что оказалось в статике. Обычно это все что не JS/TS и JSON, который импортируются напрямую в JS/TS. К сожалению, `Next.JS` их при билде не копирует
- `cp -r ./src/public ./dist/public` - аналогично статике - эту папку `Next.JS` игнорирует в билде, поэтому копируем сами.
- `mv ./dist/src/server.js ./dist/src/index.cjs` - переименовываем файл запуска в тот, который будем потреблять в скрипте `start`
