/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://recipies-blog.vercel.app", // replace with your deployed site URL
  generateRobotsTxt: true, // also generates robots.txt
  sitemapSize: 5000,       // splits into multiple files if you have 5000+ pages
};