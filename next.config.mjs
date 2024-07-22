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
        ],
      },
        experimental: {
            instrumentationHook: true,
        },
};

export default nextConfig;
