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
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "***.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "https://node-js-e-commerce-1-y-1.vercel.app/",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
