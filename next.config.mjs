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
   protocol: 'http',
   hostname: '',
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
  ],
   },
  };
  
  export default nextConfig;