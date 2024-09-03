import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { buildCssLoader } from './loaders/cssLoader';
import { buildSvgLoader } from './loaders/svgLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const babelLoader = {
    test: /\.m?(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['i18next-extract'],
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|wof)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = buildSvgLoader();

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(options.isDev);

  return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader];
};
