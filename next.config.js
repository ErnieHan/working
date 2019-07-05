require("dotenv").config();
const withCSS = require("@zeit/next-css");
const debug = process.env.NODE_ENV !== "production";
const path = require("path");
const Dotenv = require("dotenv-webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ANALYZE } = process.env;

module.exports = withCSS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
          openAnalyzer: true
        })
      );
    }

    return config;
  },
  assetPrefix: !debug ? "" : "",
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === "string"
        ? process.env.LOCALE_SUBPATHS
        : "none"
  },
  exportPathMap: defaultPathMap => {
    return {
      "/": { page: "/" },
      "/work/youtube-video-api": {
        page: "/work",
        query: { id: "youtube-video-api" }
      }
    };
  }
});
