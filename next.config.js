/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    serverComponentsExternalPackages: ['resend'],
  },
}

module.exports = nextConfig;
