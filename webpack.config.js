const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }, 
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [
                    { loader: 'url-loader' }
                ]
            }
        ]
    }
};