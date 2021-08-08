module.exports = {
  publicPath: process.env.NODE_ENV === "produciton" ? './' : '/',
  devServer:{
      Headers:{
        'Access-Control-Allow-Origin':"*",
      },
      hotOnly:false,
      disableHostCheck:true
  }
}