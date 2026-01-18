export interface AppConfig {
    name: string
    tagline: string
    version: string
    landingPage: string
    defaultAuthenticatedRoute: string
    loginRoute: string
    baseUrl: string
    timeout: number
    apiKey: string
    googleAnalyticsId: string
    enabled: boolean
    autoTrackPageViews: boolean
    trackOutboundLinks: boolean
    defaultTitle: string
    titleTemplate: string
    defaultDescription: string
    defaultKeywords: string[]
    contactAddressShort: string
    contactNumber: string
    siteUrl: string
    defaultOgImage: string
    facebook: string
    twitter: string
    linkedin: string
    instagram: string
    helpCenter: string
    contactEmail: string
    documentation: string
    privacyPolicy: string
    termsOfService: string
    cookiePolicy: string
    defaultLayout: string
}

export const APP_CONFIG: AppConfig = {
    name: 'Chopra Estate Developers',
    tagline: 'Your trusted platform for land, growth, and stability',
    version: '1.0.0',
    landingPage: '/',
    defaultAuthenticatedRoute: '/properties',
    loginRoute: '/login',
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    timeout: 30000,
    apiKey: import.meta.env.VITE_API_KEY || '',
    googleAnalyticsId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
    enabled: import.meta.env.PROD || false,
    autoTrackPageViews: true,
    trackOutboundLinks: true,
    defaultTitle: 'EstateX - Real Estate Management Platform',
    titleTemplate: '%s | EstateX',
    defaultDescription: 'Your trusted platform for land, growth, and stability. Professional real estate management made simple.',
    defaultKeywords: ['real estate', 'property management', 'EstateX', 'land', 'properties'],
    contactAddressShort: 'Indiranagar, Bangalore',
    contactNumber: '+91 98765 43210',
    siteUrl: import.meta.env.VITE_SITE_URL || 'https://estatex.com',
    defaultOgImage: '/og-image.png',
    facebook: 'https://facebook.com/estatex',
    twitter: 'https://twitter.com/estatex',
    linkedin: 'https://linkedin.com/company/estatex',
    instagram: 'https://instagram.com/estatex',
    helpCenter: 'https://help.estatex.com',
    contactEmail: 'support@estatex.com',
    documentation: 'https://docs.estatex.com',
    privacyPolicy: '/privacy',
    termsOfService: '/terms',
    cookiePolicy: '/cookies',
    defaultLayout: 'Default',
}




