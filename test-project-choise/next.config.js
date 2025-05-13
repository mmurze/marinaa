const development = process.env.NODE_ENV === "development"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n:{
    locales: ["en", "ru"],
    defaultLocale: "en",
    localeDetection: false
  },
  compiler: {
    styledComponents: true
  },
  env:{
    ROUTE_PATH: development ? "http://localhost:3000" : "https://some-domain.ru"
  }
}

module.exports = nextConfig
