const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
    // node: {
    //     global: false,
    //     __filename: false,
    //     __dirname: false,
    // },
    // entry: "./src/index.js",
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "src"),
        },
        compress: true,
        port: 9000,
        liveReload: true,
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        clean: true,
        assetModuleFilename: 'img/[name][ext]'
    },
    plugins: [new MiniCssExtractPlugin()],
});
