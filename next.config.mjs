/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //    domains: ['localhost','bit.ly',
  //       'www.sender.net',
  //       'hillfresh.eu','cdn-prod.medicalnewstoday.com','t3.ftcdn.net','www.simplyrecipes.com','hips.hearstapps.com'],
  //  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "***.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fruit-commerc.vercel.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bit.ly",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.sender.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
