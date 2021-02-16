module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-controls'
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);

    return config;
  }
}
