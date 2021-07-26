const withPlugins = require('next-compose-plugins');

const nextTranslate = require('next-translate')
const withTM = require('next-transpile-modules')(['use-voice-recorder']);

module.exports = withPlugins([
  withTM,
  nextTranslate({
    webpack: (config, { isServer, webpack }) => {
      return config;
    }
  }),

])
