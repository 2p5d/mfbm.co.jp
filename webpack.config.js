const path = require("path");

module.exports = {
	entry: {
		common: "./src/script/common.js",
		/*
    bundle時にファイル名となる"key"にはハイフンが使えないので、ファイル名もアンダースコアを使う（preprosコンパルとの両立のため）
    */
		common_second: "./src/script/common_second.js",
		top: "./src/script/top.js",
		about01: "./src/script/about01.js",
		business: "./src/script/business.js",
		person: "./src/script/person.js",
		culture: "./src/script/culture.js",
	},
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "/recruit01/assets/js"),
	},
	optimization: {
		splitChunks: {
			name: "vendor",
			chunks: "initial",
		},
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: [
					"style-loader",
					{
						loader: "css-loader", // swiperのスタイルをモジュールインポートしているので
						options: { url: false },
					},
				],
			},
		],
	},
};
