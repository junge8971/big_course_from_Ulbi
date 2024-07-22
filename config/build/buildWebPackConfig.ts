import path from "path";

import webpack from "webpack";

import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebPackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[name].[contenthash].bundle.js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(paths),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
