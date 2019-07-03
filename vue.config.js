module.exports = {
    devServer:{
        proxy: {
            '/api': {
                target: 'https://m.228.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''   
                }  
            }
        }
    }
}