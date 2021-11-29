import { create } from '@storybook/theming'
// @ts-ignore
import brandImage from '../src/brand-logo-full.svg'

export default create({
  base: 'light',
  brandTitle: 'tundera.dev',
  brandUrl: 'https://tundera.dev',
  brandImage,
})
