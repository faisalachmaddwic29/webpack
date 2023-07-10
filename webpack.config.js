/// "build": "webpack -o ./output --output-filename bundle.js", cara cepet
// webpack --config mywebpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // node: {
    //     global: false,
    //     __filename: false,
    //     __dirname: false,
    // },
    entry: {
        main: {
            import: "./src/index.js",
            dependOn: "shared",
        },
        vendor: "./src/vendor.js",
        hello: {
            import: "./src/hello.js",
            dependOn: "shared",
        },
        shared: "lodash",
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
    devtool: false, // agar bisa membaca file hasil bundlingnya
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: ["style-loader", "css-loader"], // css loader hanya untuk naro file css ke javascript jadi butuh style loader untuk naro ke domnya
            // },
            {
                test: /\.(?:js|mjs|cjs)$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        // presets: [
                        //     ["@babel/preset-env", { targets: "ie all" }],
                        // ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
        ],
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
        },
    },
};
