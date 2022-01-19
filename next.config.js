const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([optimizedImages], { target: "serverless" });

// const isProd = process.env.NODE_ENV === "production";

// module.exports = {
// 	// Use the CDN in production and localhost for development.
// 	assetPrefix: isProd ? "https://cdn.mydomain.com" : "",
// };

// module.exports = {
// 	basePath: "/docs",
// };
