/** @type {import('next').NextConfig} */
import path from "path";
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["lucide-react"],
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
};

export default nextConfig;
