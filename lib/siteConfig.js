const port = process.env.PORT ?? '3001'

export const SITE_URL =
  process.env.SITE_URL ??
  (process.env.NODE_ENV === 'production'
    ? 'https://hariprasathportfolio.balajiloanagency.de'
    : `http://localhost:${port}`)
