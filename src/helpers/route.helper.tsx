import { lazy, Suspense } from 'react'
import type { ComponentType } from 'react'
import type { RouteObject } from 'react-router-dom'
import { APP_CONFIG } from '@/config/app.config'
import { LAYOUT_CONFIG } from '@/config/layout.config'

/**
 * Type definition for route configuration
 */
export interface RouteConfig {
    path: string
    component: () => Promise<{ default: ComponentType<any> }>
    layout?: string
    children?: RouteConfig[]
}

/**
 * Loading fallback component
 */
const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
            <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
    </div>
)

/**
 * Helper to create lazy component with Suspense
 */
const createLazyComponent = (importFn: () => Promise<{ default: ComponentType<any> }>) => {
    const LazyComponent = lazy(importFn)
    return (
        <Suspense fallback={<LoadingFallback />}>
            <LazyComponent />
        </Suspense>
    )
}

/**
 * Convert route config to React Router route objects
 */
export const createRoutes = (routes: RouteConfig[]): RouteObject[] => {
    const layouts = routes.reduce((acc, route) => {
        const layoutName = route.layout || APP_CONFIG.defaultLayout
        if (!acc[layoutName]) {
            acc[layoutName] = []
        }
        acc[layoutName].push(route)
        return acc
    }, {} as Record<string, RouteConfig[]>)

    return Object.entries(layouts).map(([layoutName, layoutRoutes]) => {
        const LayoutComponent = LAYOUT_CONFIG[layoutName as keyof typeof LAYOUT_CONFIG] || LAYOUT_CONFIG.Default

        return {
            element: (
                <Suspense fallback={<LoadingFallback />}>
                    <LayoutComponent />
                </Suspense>
            ),
            children: layoutRoutes.map((route) => ({
                path: route.path,
                element: createLazyComponent(route.component),
                ...(route.children && { children: createRoutes(route.children) }),
            })),
        }
    })
}

/**
 * Custom hook to get current route information
 */
export const useRouteHelper = () => {
    return {}
}
