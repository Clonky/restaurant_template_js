const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        menu_item: "./src/menu_item.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
    module: {
        rules: [
            { test: /\.css$/i, use: "css-loader" }
        ],
    },
};
