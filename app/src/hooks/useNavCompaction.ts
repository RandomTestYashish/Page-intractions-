import * as React from "react"

/**
 * Maps window scroll onto a 0 → 1 "compaction" progress, eased so the first
 * pixels of scroll do most of the shrinking. The value is written straight to
 * a CSS custom property (--p) so the browser can size the nav without React
 * re-rendering on every frame.
 */
export function useNavCompaction(el: React.RefObject<HTMLElement | null>, compactAt = 84) {
  React.useEffect(() => {
    const node = el.current
    if (!node) return

    let ticking = false
    let last = -1

    const apply = () => {
      ticking = false
      const y = window.scrollY || 0
      const p = Math.min(1, Math.max(0, y / compactAt))
      const eased = 1 - Math.pow(1 - p, 2)
      if (Math.abs(eased - last) > 0.004) {
        last = eased
        node.style.setProperty("--p", eased.toFixed(3))
      }
      node.dataset.stuck = y > 4 ? "true" : "false"
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(apply)
      }
    }

    apply()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [el, compactAt])
}
