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
      protocol: 'http',
      hostname: 'localhost',
    },
{
   protocol: 'https',
   hostname: '***.com',
   port: '',
   pathname: '/**',
   },
{
   protocol: 'http',
   hostname: 'localhost:4000',
   port: '',
   pathname: '/**',
   },
{
   protocol: 'https',
   hostname: '***.net',
   port: '',
   pathname: '/**',
   },
   {
   protocol: 'http',
   hostname: 'localhost',
   port: '',
   pathname: '/**',
   },
   {
   protocol: 'https',
   hostname: 'bit.ly',
   port: '',
   pathname: '/**',
   },
   {
   protocol: 'https',
   hostname: 'www.sender.net',
   port: '',
   pathname: '/**',
   },
   {
   protocol: 'https',
   hostname: 'hillfresh.eu',
   port: '',
   pathname: '/**',
   },
  ],
   },
  };
  
  export default nextConfig;