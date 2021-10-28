module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/lb-covid-visualizer-daily' : '/',
  transpileDependencies: ['vuetify'],
}
