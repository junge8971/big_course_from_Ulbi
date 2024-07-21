import path from "path";

import webpack from "webpack";

import { buildWebPackConfig } from "./config/build/buildWebPackConfig";
import { BuildPaths } from "./config/build/types/config";

const mode = "development";
const isDev = mode === "development";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const config: webpack.Configuration = buildWebPackConfig({
  mode,
  paths,
  isDev,
});

export default config;
