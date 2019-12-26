// webpackで開発用/本番用の設定を分ける - Qiita https://qiita.com/teinen_qiita/items/4e828ac30221efb624e1
// Typescript 3.x と Webpack 4.x を合わせて使う方法まとめ │ Web備忘録 https://webbibouroku.com/Blog/Article/ts-webpack
module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  }
};
