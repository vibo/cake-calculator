const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },

    resolve: {
        extensions: [".js", ".ts", ".tsx", "jsx", ".json"]
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: 'raw'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }, 
        /*
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                loader: 'css-loader!less-loader'
            })
        }, 
        */
        {
            test: /\.tsx?$/,
            use: 'awesome-typescript-loader'
        }, {
            enforce: "pre",
            test: /\.js$/, 
            use: "source-map-loader"
        }]
    }
};