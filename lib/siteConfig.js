const port = process.env.PORT ?? '3007'

export const SITE_URL =
  process.env.SITE_URL ??
  (process.env.NODE_ENV === 'production'
    ? 'https://mukesh-cmp.vercel.app'
    : `http://localhost:${port}`)
