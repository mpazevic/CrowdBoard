var path = require("path");

module.exports = {

  // This is the entry point or start of the react applicaton
  entry: "./src/app.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    filename: "./src/bundle.js"
  },
  watch: true,

  // This section desribes the transformations performed
  module: {

      loaders: [
      {
        // Only working with files that are in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our src folder. This avoids processing
        // node modules and server files unnecessarily
        include: /src/,
        loader: "babel-loader",
        query: {
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]
        }
      },
      {
      test: /\.scss$/,
      use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }
    ]

  },
  // Without this the console says all errors are coming from bundle.js
  devtool: "eval-source-map"
};
