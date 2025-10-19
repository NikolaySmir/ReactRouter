import { merge } from "webpack-merge";
import coomonConfig from "./webpack.config.common.js";
import ESLintPlugin from "eslint-webpack-plugin";

export default merge(coomonConfig, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		port: 3000,
		hot: true,
		open: true,
	},
	plugins: [
		new ESLintPlugin({
			extensions: ["js", "jsx", "ts", "tsx"],
			emitWarning: true,
			failOnError: false,
		}),
	],
});
