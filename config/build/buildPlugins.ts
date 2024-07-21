import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

import { BuildPaths } from "./types/config";

export const buildPlugins = (
  paths: BuildPaths
): webpack.WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];
};
