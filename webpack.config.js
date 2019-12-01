const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = (env) => {

    const devMode = !(env === 'production');
    console.log(devMode);
    return ({
        entry: ['@babel/polyfill', './src/index.js'],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'public', 'dist'),
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [{
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: !devMode,
                            },
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
                sourceMap: true
            }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'MRH COMPANY',
                template: 'src/index.html',
                filename: '../index.html'
            }),
            new WorkboxPlugin.GenerateSW({
                 // these options encourage the ServiceWorkers to get in there fast
                 // and not allow any straggling "old" SWs to hang around
                clientsClaim: true,
                skipWaiting: true,
            }),
        ],
        devtool: devMode ? 'inline-source-map' : 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    })
}