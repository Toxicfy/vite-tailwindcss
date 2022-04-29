const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin({
            "BASE_URL": '`./`'
        }),
        new HTMLWebpackPlugin({
            title: '通过html-webpack-plugin修改的title',
            template: './public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                }, 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
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
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}