/**
 * Created by brsmith on 7/3/17.
 */
const path = require('path')
const webpack =  require('webpack')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const JavaScriptObfuscator = require('webpack-obfuscator')
var WebpackStrip = require('webpack-strip')
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')
const ENV = require('./env').default

const PUBLIC_PATH = 'https://seacloud9.org/'

module.exports = {
    mode: 'production', 
    context: __dirname + '/src',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': ENV,
            'process.env.NODE_ENV': JSON.stringify('production'),
            'GENERATE_SOURCEMAP': false
        }),
        new TerserPlugin(),
        new BundleAnalyzerPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
      })
    ],

    entry: {
        javascript: './index.js'
    },

    output: {
        filename: 'app.js',
        path: __dirname + '/public/js',
        publicPath: PUBLIC_PATH
    },

    devServer: {
        contentBase: 'public'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, "/src/"),
            "node_modules"
        ]

    },
    optimization: {
        minimizer: [new TerserPlugin()]
    },
    module: {
        rules: [
            {
              test: /\.gz$/,
              enforce: 'pre',
              use: 'gzip-loader'
            }
        ],
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
              loader: 'babel-loader',
                options: {
                    presets: ["es2015", "stage-2", "stage-3", "react"],
                    plugins: ["babel-plugin-transform-object-rest-spread", "babel-plugin-transform-class-properties"]
                },
            }],
        }, {
            test: /\.js$/,
            use: ['react-hot-loader/webpack'],
            include: path.resolve(__dirname, './src/')
      }
    ],
    }
}
