/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['files.stripe.com'], // Add the hostname here
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.stripe.com',
                port: '',
                pathname: '/account123/**',
            },
        ],
    },
};

export default nextConfig;
