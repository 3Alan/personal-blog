const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react'
  }
});

module.exports = withMDX({
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  // 打包后的文件中没有posts文件
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Important: return the modified config
  //   if (!isServer) return config;
  //   config.plugins.push(
  //     new CopyWebpackPlugin({
  //       patterns: [
  //         {
  //           from: path.join(__dirname, '_posts'),
  //           to: path.join(__dirname, '_posts')
  //         }
  //       ]
  //     })
  //   );
  //   return config;
  // }
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
});
