module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  },
  lintOnSave: false, //关闭语法检查
  // // 方式一：开启代理服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  // 方式二：开启代理服务器
  devServer: {
    proxy: {
      '/hhj': {   //通过请求的前缀来判断是否转发给代理服务器，如果前缀是hhj就转发
        target: 'http://localhost:5000',   //转发的给谁
        // 将以/hhj开头的路径，替换为空
        pathRewrite: { '^/hhj': '' },
        ws: true,   //用于支持websocket 
        // changeOrigin: true   //用于控制请求头中的host值
      },
      '/demo': {   //通过请求的前缀来判断是否转发给代理服务器，如果前缀是hhj就转发
        target: 'http://localhost:5001',   //转发的给谁
        // 将以/hhj开头的路径，替换为空
        pathRewrite: { '^/demo': '' },
        // ws: true,   //用于支持websocket 
        // changeOrigin: true   //用于控制请求头中的host值
      },
    }
  }
}