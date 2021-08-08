module.exports = {
  publicPath: process.env.NODE_ENV === "produciton" ? './' : '/',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': "*",
    },
    hotOnly: false,
    disableHostCheck: true
  },
  css: { extract: false, sourceMap: false },


}