const path = require('path');
const webpackMerge = require('webpack-merge');
const baseComponentConfig = require('@splunk/webpack-configs/component.config').default;

module.exports = webpackMerge(baseComponentConfig, {
    entry: {
        FileUploader: path.join(__dirname, 'src/FileUploader.jsx'),
    },
    output: {
        path: path.join(__dirname),
    },
});
