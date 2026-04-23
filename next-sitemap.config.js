/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://polepole.netlify.app",
  generateRobotsTxt: true,
  exclude: ["/signin"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "Googlebot",
        disallow: ["/nogooglebot/"],
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
