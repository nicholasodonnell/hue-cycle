module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [require.resolve('@babel/plugin-proposal-export-namespace-from')],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        alias: {
          api: './api',
          actions: './actions',
          assets: './assets',
          components: './components',
          containers: './containers',
          constants: './constants',
          lottie: './lottie',
          models: './models',
          reducer: './reducer',
          screens: './screens',
          state: './state',
          utils: './utils'
        }
      }
    ]
  ]
}
