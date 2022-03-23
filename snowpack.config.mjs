/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [
    [
      "@snowpack/plugin-babel",
      {
        input: [".js", ".mjs", ".jsx", ".ts", ".tsx"], // (optional) specify files for Babel to transform
        transformOptions: {},
      },
    ],
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-webpack",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-typescript",
  ],

  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
