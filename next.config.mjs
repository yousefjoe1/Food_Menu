/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
remotePatterns: [
{
   protocol: 'https',
   hostname: '***.com',
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