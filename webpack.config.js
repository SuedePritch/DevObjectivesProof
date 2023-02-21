module.exports = {
  mode: "development",
  entry: ["./src/App.tsx"],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|\.webpack)/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "css-loader" }],
      },
      {
        // SCSS (SASS) Loader
        test: /\.s[ac]ss$/i,
        use: [{ loader: "css-loader" }, { loader: "sass-loader" }],
      },
      {
        // Less loader
        test: /\.less$/,
        use: [{ loader: "css-loader" }, { loader: "less-loader" }],
      },
      {
        test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
        type: "asset",
        generator: {
          filename: "assets/[hash][ext][query]",
        },
      },
    ],
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
  stats: "errors-warnings",
};
