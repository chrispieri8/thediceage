const PreloadWebpackPlugin = require('preload-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
            },
            'data:image': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
        },
    },
    configureWebpack: {
        plugins: [
            new PreloadWebpackPlugin({
                rel: 'preload',
                include: 'initial',
            }),
            new WorkboxWebpackPlugin.InjectManifest({
                swSrc: './public/sw.js',
                swDest: 'sw.js',
                // maximumFileSizeToCacheInBytes: 30000000,
            }),
        ],
    },
};

// module.exports = {
//     devServer: {
//       proxy: 'http://localhost:3001',
//       changeOrigin: true,
//     },
//   };
