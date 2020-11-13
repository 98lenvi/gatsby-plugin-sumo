module.exports = {
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    'dynamic-import-node',
    "@babel/plugin-transform-runtime"
  ],
  "only": ["src/", "test/"],
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": true
        }
      }
    ]
  ],
};
