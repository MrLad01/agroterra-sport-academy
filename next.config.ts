import type { NextConfig } from "next";

const withVideos = require('next-videos');

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.mp4': {
        loaders: ['raw-loader'],  // Or 'file-loader' if you prefer URLs
        as: '*.js',
      },
    },
  },
};

export default withVideos(nextConfig);
