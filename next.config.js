const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    // NOTE: Even though `react-native` is never used in Next.js,
    // you need to list `react-native` because `react-native-web`
    // is aliased to `react-native`. Adding `react-native-web` will not work.
    "react-native",
    "expo",
    // Add more React Native / Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

module.exports = nextConfig;
