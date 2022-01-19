const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, "src/index.tsx"),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11",
                                        },
                                        // 指定 corejs 的版本
                                        "corejs": "3",
                                        // 使用 corejs 的方式 "usage" 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ],
                                [
                                    "@babel/preset-typescript",
                                ],
                                [
                                    "@babel/preset-react",
                                    {

                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader:"ts-loader"
                    }
                ],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader:"style-loader",
                    },
                    {
                        loader:"css-loader",
                        options:{
                            importLoaders:1
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, 'postcss.config.js')
                            }
                        }
                    },
                    {
                        loader:"sass-loader"
                    }
                ]
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[sha512:hash:base64:7].[ext]'
            //             }
            //         }
            //     ]
            // } // by junfenghe 2021-12-06
            {
                test: /\.(png|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'
                }
            },
            {
                test: /\.svg/,
                type: 'asset/inline'
            },
            // {
            //     test: /\.(txt|pdf|excel)$/,
            //     type: 'asset/source'
            // }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        assetModuleFilename: "images/[hash][ext][query]" // by junfenghe 2021-12-06
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html')
        }),
        new CleanWebpackPlugin({
            path: path.join(__dirname, 'build')
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        historyApiFallback: true,
        port: 3000,
    }
}
