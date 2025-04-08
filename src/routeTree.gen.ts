/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as OrdersImport } from './routes/orders'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as Guitars24guitarIdImport } from './routes/guitars/%24guitarId'
import { Route as GuitarsGuitarIdImport } from './routes/guitars/$guitarId'

// Create/Update Routes

const OrdersRoute = OrdersImport.update({
  id: '/orders',
  path: '/orders',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const Guitars24guitarIdRoute = Guitars24guitarIdImport.update({
  id: '/guitars/%24guitarId',
  path: '/guitars/%24guitarId',
  getParentRoute: () => rootRoute,
} as any)

const GuitarsGuitarIdRoute = GuitarsGuitarIdImport.update({
  id: '/guitars/$guitarId',
  path: '/guitars/$guitarId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/orders': {
      id: '/orders'
      path: '/orders'
      fullPath: '/orders'
      preLoaderRoute: typeof OrdersImport
      parentRoute: typeof rootRoute
    }
    '/guitars/$guitarId': {
      id: '/guitars/$guitarId'
      path: '/guitars/$guitarId'
      fullPath: '/guitars/$guitarId'
      preLoaderRoute: typeof GuitarsGuitarIdImport
      parentRoute: typeof rootRoute
    }
    '/guitars/%24guitarId': {
      id: '/guitars/%24guitarId'
      path: '/guitars/%24guitarId'
      fullPath: '/guitars/%24guitarId'
      preLoaderRoute: typeof Guitars24guitarIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/orders': typeof OrdersRoute
  '/guitars/$guitarId': typeof GuitarsGuitarIdRoute
  '/guitars/%24guitarId': typeof Guitars24guitarIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/orders': typeof OrdersRoute
  '/guitars/$guitarId': typeof GuitarsGuitarIdRoute
  '/guitars/%24guitarId': typeof Guitars24guitarIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/orders': typeof OrdersRoute
  '/guitars/$guitarId': typeof GuitarsGuitarIdRoute
  '/guitars/%24guitarId': typeof Guitars24guitarIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/orders'
    | '/guitars/$guitarId'
    | '/guitars/%24guitarId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/orders' | '/guitars/$guitarId' | '/guitars/%24guitarId'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/orders'
    | '/guitars/$guitarId'
    | '/guitars/%24guitarId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  OrdersRoute: typeof OrdersRoute
  GuitarsGuitarIdRoute: typeof GuitarsGuitarIdRoute
  Guitars24guitarIdRoute: typeof Guitars24guitarIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  OrdersRoute: OrdersRoute,
  GuitarsGuitarIdRoute: GuitarsGuitarIdRoute,
  Guitars24guitarIdRoute: Guitars24guitarIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/orders",
        "/guitars/$guitarId",
        "/guitars/%24guitarId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/orders": {
      "filePath": "orders.tsx"
    },
    "/guitars/$guitarId": {
      "filePath": "guitars/$guitarId.tsx"
    },
    "/guitars/%24guitarId": {
      "filePath": "guitars/%24guitarId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
