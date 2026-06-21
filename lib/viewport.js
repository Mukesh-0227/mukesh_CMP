import profile from '@/data/profile.json'

export const MOBILE_MQ = '(max-width: 767px)'

const PUB_SLIDES = 3

export function isMobileViewport() {
  if (typeof window === 'undefined') return false
  return window.matchMedia(MOBILE_MQ).matches
}

/** Pixel height of one slide — matches CSS `--slide-height` on the scroll root. */
export function getSlideHeight() {
  if (typeof window === 'undefined') return 800
  const main = document.querySelector('main.scrollRoot')
  if (main?.clientHeight > 0) return main.clientHeight
  return window.innerHeight
}

export function getTotalSnaps() {
  return 3 + profile.projects.length + 1 + PUB_SLIDES
}

export function getSnapScrollTop(idx) {
  return idx * getSlideHeight()
}

export function getSnapIndex(scrollTop) {
  const slideH = getSlideHeight()
  return Math.max(0, Math.min(getTotalSnaps() - 1, Math.round(scrollTop / slideH)))
}
