/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/styles/': ['./src/styles/**/*'],
    },
  },
};

export default nextConfig;
