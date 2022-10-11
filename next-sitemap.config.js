/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://informacoesnutricionais.com.br/',
  generateRobotsTxt: true,
  changefreq: 'monthly',
};
