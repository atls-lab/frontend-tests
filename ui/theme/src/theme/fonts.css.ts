import { globalFontFace } from '@vanilla-extract/css'

const inter = 'Inter'

globalFontFace(inter, {
  src: "url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap) format('woff2')",
  fontStyle: 'normal',
  fontDisplay: 'swap',
})

export const fonts = {
  primary: inter,
}