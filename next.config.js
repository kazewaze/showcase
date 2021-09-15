module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/view',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'camo.githubusercontent.com'],
  },
}