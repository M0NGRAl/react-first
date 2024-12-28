import { fileURLToPath } from "url";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Получение пути и имени директории
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "development", // Установите режим сборки
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"), // Формирование корректного пути
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"), // Корректный путь к шаблону HTML
        }),
    ],
};