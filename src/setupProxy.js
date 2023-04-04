const {
  createProxyMiddleware,
} = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/submit_pfb", {
      target: "http://149.102.158.186:26659",
      changeOrigin: true,
      // new
      secure: false,
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader(
          "Referer",
          "https://payforblob.vercel.app/"
        );
      },
    })
  );
  app.use(
    createProxyMiddleware(
      "/namespaced_shares/:namespacedShares/height/:height",
      {
        target: "http://149.102.158.186:26659",
        changeOrigin: true,
      }
    )
  );
};
