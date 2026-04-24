/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'pixabay.com' },
    ],
  },
  experimental: {
    serverActions: {
      // Allow localhost in dev + any Vercel preview/production domain
      allowedOrigins: [
        'localhost:3000',
        process.env.NEXT_PUBLIC_APP_URL?.replace(/^https?:\/\//, '') ?? '',
      ].filter(Boolean),
    },
  },
}

module.exports = nextConfig
