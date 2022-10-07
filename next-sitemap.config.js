/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nutriction-website-fe.vercel.app/',
  generateRobotsTxt: true,
  changefreq: 'monthly',
};
