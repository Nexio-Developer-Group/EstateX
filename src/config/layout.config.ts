import { lazy } from 'react'

/**
 * Layout Configuration
 * 
 * Maps layout names to their respective components.
 * Each layout follows a folder-based structure with an index.tsx entry point.
 */
export const LAYOUT_CONFIG = {
    Default: lazy(() => import('@/layouts/default')),
    Plain: lazy(() => import('@/layouts/plain')),
} as const

export type LayoutName = keyof typeof LAYOUT_CONFIG
