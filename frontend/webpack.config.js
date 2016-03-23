'use strict';

module.exports = {
    entry: {
        base: "./scripts/base/base"
    },

    output: {
        path: '../public',
        filename: "[name].entry.js"
    },

    watch: true,

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.styl$/,
                loader: "style-loader!css-loader!stylus-loader"
            }
        ]
    }
};