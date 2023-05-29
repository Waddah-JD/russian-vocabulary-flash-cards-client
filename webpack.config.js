/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotEnv = require("dotenv-webpack");

/** @type { import('webpack').Configuration } */
const baseConfig = {
  entry: path.join(__dirname, "src", "index.tsx"),
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      components: path.resolve(__dirname, "./src/components/"),
      types: path.resolve(__dirname, "./src/types/"),
      hooks: path.resolve(__dirname, "./src/hooks/"),
      api: path.resolve(__dirname, "./src/api/"),
      utils: path.resolve(__dirname, "./src/utils/"),
      contexts: path.resolve(__dirname, "./src/contexts/"),
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: path.join("public", "index.html") })],
  mode: "none",
  output: { publicPath: "/" },
  devServer: { historyApiFallback: true },
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = (env) => {
  // opt-in PRODUCTION explicitly otherwise, DEVELOPMENT mode will be used
  const isProduction = env.mode === "production";
  const envConfig = isProduction ? prodConfig : devConfig;

  return { ...baseConfig, ...envConfig };
};
