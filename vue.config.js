module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/ah-online/'
      : '/',
    // publicPath: '/',
    outputDir: "docs"
  }