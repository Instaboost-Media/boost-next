import localFont from '@next/font/local'

export const nexa = localFont({
  src: [
    {
      path: '../public/fonts/nexa/Nexa-ExtraLight.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/nexa/Nexa-Light.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/nexa/Nexa-Regular.otf',
      weight: '500'
    },
    {
      path: '../public/fonts/nexa/Nexa-Bold.otf',
      weight: '600'
    },
    {
      path: '../public/fonts/nexa/Nexa-Heavy.ttf',
      weight: '700'
    }
  ],
  variable: '--font-nexa'
})

export const avenir = localFont({
  src: [
    {
      path: '../public/fonts/avenir/Avenir-Black.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/avenir/Avenir-Heavy.ttf',
      weight: '600'
    },    
    {
      path: '../public/fonts/avenir/Avenir-Regular.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/avenir/Avenir-Book.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/avenir/Avenir-Light.ttf',
      weight: '300'
    },
  ],
  variable: '--font-nexa'
})
