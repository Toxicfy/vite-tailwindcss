const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CompressionWebpackPlugin({
            threshold: 10240,
            test: /\.(js|css)$/
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    }
                }, 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    }
                }, 'postcss-loader', 'sass-loader']
            },
            // {
            //     test: /\.(png|jpe?g)$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             name: 'img/[name].[hash:4].[ext]',
            //             limit: 2048
            //         }
            //     }]
            // },
            {
                test: /\.(jpe?g|png|svg|gif)/i,
                type: 'asset',
                generator: {
                    filename: 'img/[name].[hash:4][ext]' // 局部指定输出位置
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 2 * 1024 // 限制于 2kb
                    }
                }
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[hash:3][ext]'
                }
            }
        ]
    }
}