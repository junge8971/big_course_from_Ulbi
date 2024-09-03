import path from 'path';

import webpack, { DefinePlugin } from 'webpack';

import { buildCssLoader } from '../build/loaders/cssLoader';
import { buildSvgLoader } from '../build/loaders/svgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  config.module?.rules?.push(buildCssLoader(true));
  config.module?.rules?.push(buildSvgLoader());

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  return config;
};
