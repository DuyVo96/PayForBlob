const {
  createProxyMiddleware,
} = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/submit_pfb", {
      // target: "http://149.102.158.186:26659",

      target:
        "https://celestia.onepiece-cosmos-explorer.xyz",

      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware(
      "/namespaced_shares/:namespacedShares/height/:height",
      {
        // target: "http://149.102.158.186:26659",
        target:
          "https://celestia.onepiece-cosmos-explorer.xyz",

        changeOrigin: true,
      }
    )
  );
};
