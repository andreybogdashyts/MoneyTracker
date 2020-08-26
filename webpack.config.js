const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
               test: /\.css?$/,
               // test: /\.css$/i,
               // exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
           // { test: /\.(html|css)$/, loader: 'raw-loader' },
            // {
            //     test: /\.(sa|sc|c)ss$/,
            //     use: ["style-loader", "css-loader", "sass-loader"]
            //   },





            {
                test: /\.(jpe?g|png|gif|svg|pdf|mov)$/i,
                exclude: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]?[hash]',
                        context: 'src'
                    }
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'ttf-loader',
                    options: {
                        name: './font/[hash].[ext]',
                    },
                }, ]
            }
        ]
    },
    devtool:'inline-source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            parallel: true,
        })],
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            maxSize: 1000000,
            minChunks: 1,
        }
    },
    // Add development plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new CleanWebpackPlugin()
    ],
    resolve: { extensions: [".tsx", ".ts", ".js", "css", "scss"] },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.[contenthash].js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3400
    }
};