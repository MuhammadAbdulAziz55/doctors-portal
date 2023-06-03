module.exports = {
  // ...other configuration options...
  module: {
    rules: [
      // ...other rules...
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
