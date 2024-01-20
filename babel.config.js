module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx",
        ],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@global": "./src/global",
          "@lib": "./src/lib",
          "@mocks": "./src/mocks",
          "@routes": "./src/routes",
          "@schemas": "./src/schemas",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@stores": "./src/stores",
          "@utils": "./src/utils",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
