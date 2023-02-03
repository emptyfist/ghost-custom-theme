// postcss.config.js
module.exports = {
  plugins: {
    "postcss-easy-import": { prefix: "_", extensions: [".css", ".scss"] },
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {},
  },
};
