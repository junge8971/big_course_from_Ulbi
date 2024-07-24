import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildPaths } from './types/config';

export const buildPlugins = (
  paths: BuildPaths,
  isDev: boolean,
): webpack.WebpackPluginInstance[] => [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
  new webpack.HotModuleReplacementPlugin(),
];
