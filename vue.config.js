module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
            },
            '/images': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
        },
    },
};

// module.exports = {
//     devServer: {
//       proxy: 'http://localhost:3001',
//       changeOrigin: true,
//     },
//   };
