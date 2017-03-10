const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    return {
        entry: path.join(__dirname, 'test.js'),
        output: {
            filename: '[name].js',
            path: path.join(__dirname, 'dist')
        },

        module: {
            rules: [
                // {
                //     test: /\.less$/,
                //     loader: ExtractTextPlugin.extract({
                //             fallback: 'style-loader',
                //             use: [
                //                 'css-loader',
                //                 'theme-loader',
                //                 'less-loader'
                //             ]
                //         }
                //     )
                // },
                {
                    test: /\.less$/,
                    use: [
                        'css-loader',
                        'theme-loader',
                        'less-loader'
                    ]
                }
            ]
        },
        plugins: [
            // new ExtractTextPlugin({filename: "[name].css"})
        ],
        resolveLoader: {
            alias: {
                "theme-loader": path.join(__dirname, "./theme-loader")
            }
        },
    }


};
