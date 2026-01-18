import type { RouteConfig } from '@/helpers/route.helper'

/**
 * EstateX Route Configuration
 * 
 * Centralized route definitions for the application.
 * Add new routes here with lazy-loaded components.
 */
export const routeConfig: RouteConfig[] = [
    {
        path: '/',
        component: () => import('@/views/users/Home'),
    },
    {
        path: '/about',
        component: () => import('@/views/users/About'),
    },
    {
        path: '/properties',
        component: () => import('@/views/Properties'),
    },
    {
        path: '/emi-calculator',
        component: () => import('@/views/users/EMICalculator'),
    },
    {
        path: '/area-converter',
        component: () => import('@/views/users/AreaConverter'),
    },
    {
        path: '/services',
        component: () => import('@/views/users/Services'),
    },
    {
        path: '/contact',
        component: () => import('@/views/users/Contact'),
    },
    {
        path: '*',
        component: () => import('@/views/NotFound'),
    },
]
