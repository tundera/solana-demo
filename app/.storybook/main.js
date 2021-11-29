const tsconfigPaths = require('vite-tsconfig-paths').default

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-addon-performance/register',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.plugins.push(tsconfigPaths())

    // return the customized config
    return config
  },
}
