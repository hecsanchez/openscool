/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: true
    }
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/community',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
