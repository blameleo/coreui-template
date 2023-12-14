/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/apps',
        destination: '/apps/invoicing/invoice',
        permanent: true,
      },
      {
        source: '/apps/invoicing',
        destination: '/apps/invoicing/invoice',
        permanent: true,
      },
      {
        source: '/components',
        destination: '/components/base/accordion',
        permanent: true,
      },
      {
        source: '/components/base',
        destination: '/components/base/accordion',
        permanent: true,
      },
      {
        source: '/components/buttons',
        destination: '/components/buttons/buttons',
        permanent: true,
      },
      {
        source: '/components/forms',
        destination: '/components/forms/form-control',
        permanent: true,
      },
      {
        source: '/components/icons',
        destination: '/components/icons/free',
        permanent: true,
      },
      {
        source: '/components/notifications',
        destination: '/components/notifications/alerts',
        permanent: true,
      },
      {
        source: '/plugins',
        destination: '/plugins/calendar',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
