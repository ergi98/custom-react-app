module.exports = {
  presets: [
    "@babel/preset-env", // Compiling ES2015+ syntax
    ["@babel/preset-react", { runtime: "automatic" }], // For react,
    "@babel/preset-typescript",
  ],
};
