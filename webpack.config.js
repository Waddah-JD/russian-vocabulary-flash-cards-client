/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotEnv = require("dotenv-webpack");

/** @type { import('webpack').Configuration } */
const baseConfig = {
  entry: path.join(__dirname, "src", "index.tsx"),
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      // { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      components: path.resolve(__dirname, "./src/components/"),
      types: path.resolve(__dirname, "./src/types/"),
      selectors: path.resolve(__dirname, "./src/selectors/"),
      slices: path.resolve(__dirname, "./src/slices/"),
      hooks: path.resolve(__dirname, "./src/hooks/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join("public", "index.html") }),
  ],
  mode: "none",
  devServer: { historyApiFallback: true },
  output: { publicPath: "/" },
};

/** @type { import('webpack').Configuration } */
const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [...baseConfig.plugins, new DotEnv({ path: ".env.dev" })],
};

/** @type { import('webpack').Configuration } */
const prodConfig = {
  mode: "production",
  plugins: [...baseConfig.plugins, new DotEnv({ path: ".env" })],
};

module.exports = (env) => {
  // opt-in PRODUCTION explicitly otherwise, DEVELOPMENT mode will be used
  const isProduction = env.mode === "production";
  const envConfig = isProduction ? prodConfig : devConfig;

  return { ...baseConfig, ...envConfig };
};
