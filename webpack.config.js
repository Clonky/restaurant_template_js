const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        menu_item: "./src/menu_item.js",
        items: "./src/items.js",
        parts: "./src/page_parts.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Clonky's Pub",
        }),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true,
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/i,
                type: "asset/resource"
            },
        ],
    },
};
