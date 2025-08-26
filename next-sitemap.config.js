// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//     siteUrl: "https://www.kript.africa", // Replace with your actual domain
//     generateRobotsTxt: true,           // Generates robots.txt automatically
//     sitemapSize: 5000,                 // Max URLs per sitemap file
//     changefreq: "weekly",              // Default change frequency
//     priority: 0.7,                     // Default priority
//     transform: async (config, path) => {
//       // Optional: customize each URL
//       return {
//         loc: path,                     // The URL
//         changefreq: "weekly",
//         priority: path === "/" ? 1.0 : 0.7,
//         lastmod: new Date().toISOString(),
//       };
//     },
//   };
  
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.kript.africa", // Replace with your domain
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,

  // Manually list all routes in your app/ folder
  additionalPaths: async (config) => {
    return [
      { loc: "/", lastmod: new Date().toISOString() },
      { loc: "/about", lastmod: new Date().toISOString() },
      { loc: "/bill", lastmod: new Date().toISOString() },
      { loc: "/buy-usdt", lastmod: new Date().toISOString() },
      { loc: "/privacy-policy", lastmod: new Date().toISOString() },
      { loc: "/markets", lastmod: new Date().toISOString() },
      // Add all other static routes here
    ];
  },
};
