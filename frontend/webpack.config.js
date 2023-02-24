const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "web",
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  context: __dirname,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", "js", "jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: { importLoaders: 2 },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
        ],
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "javascript/auto",
        loader: "file-loader",
        options: {
          publicPath: "../",
          name: "[path][name].[ext]",
          context: path.resolve(__dirname, "src/public"),
          emitFile: true,
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "javascript/auto",
        exclude: /images/,
        loader: "file-loader",
        options: {
          publicPath: "../",
          context: path.resolve(__dirname, "src/public"),
          name: "[path][name].[ext]",
          emitFile: true,
        },
      },
    ],
  },
  optimization: {
    minimize: false,
    nodeEnv: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].css",
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
