/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"], // <-- and this
  },
};
module.exports = nextConfig;

// next.config.js
// const webpack = require('webpack');
// require('dotenv').config();

// module.exports = {
//   webpack: (config) => {
//     config.plugins.push(new webpack.EnvironmentPlugin(process.env));
//     return config;
//   },
// };
