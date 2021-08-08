const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  // 打包后的文件中没有posts文件
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    console.log(isServer, 'isServer---');
    if (!isServer) return config;
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, '_posts')
          }
        ]
      })
    );
    return config;
  }
};
