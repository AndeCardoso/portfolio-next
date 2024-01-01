/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['resend'],
  },
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
      {
        protocol: 'https',
        hostname: '292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com',
        port: '',
        pathname: '/PostImagem/22811/5-fatores-que-influenciam-para-o-seu-perfil-no-linkedin_abradilan-20-anos-62.jpg',
      },
    ],
	}
}

module.exports = nextConfig;
