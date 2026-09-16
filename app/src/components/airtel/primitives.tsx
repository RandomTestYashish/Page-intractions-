import * as React from "react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

/** Uppercase section eyebrow, with an optional blue action on the right. */
export function SectionHeader({
  title,
  action,
  onAction,
}: {
  title: string
  action?: string
  onAction?: () => void
}) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-[10.5px] font-bold tracking-[0.9px] text-eyebrow uppercase">{title}</h2>
      {action && (
        <button
          type="button"
          onClick={onAction}
          className="text-[12px] font-bold tracking-[-0.1px] text-link active:opacity-60"
        >
          {action}
        </button>
      )}
    </div>
  )
}

/** A page section with the standard 14px gutter. */
export function Section({ className, children }: { className?: string; children: React.ReactNode }) {
  return <section className={cn("px-[14px] pt-4 pb-[18px]", className)}>{children}</section>
}

/** The 10px grey divider band between sections. */
export const Band = () => <div className="h-[10px] bg-band" />

/**
 * Horizontal rail built on the shadcn Carousel (embla).
 * `basis` sets each item's width; `bleed` lets cards run to the screen edges.
 */
export function Rail({
  children,
  basis,
  bleed = false,
  gap = 10,
  align = "start",
  startIndex = 0,
  dragFree = true,
  className,
  itemClassName,
}: {
  children: React.ReactNode[]
  basis: string
  bleed?: boolean
  gap?: number
  align?: "start" | "center"
  startIndex?: number
  dragFree?: boolean
  className?: string
  itemClassName?: string
}) {
  const [, setApi] = React.useState<CarouselApi>()
  return (
    <Carousel
      setApi={setApi}
      opts={{ align, dragFree, startIndex, containScroll: dragFree ? "trimSnaps" : false }}
      className={cn(bleed && "-mx-[14px]", className)}
    >
      <CarouselContent
        style={{ marginLeft: -gap }}
        className={bleed ? "px-[4px]" : undefined}
      >
        {children.map((child, i) => (
          <CarouselItem
            key={i}
            style={{ paddingLeft: gap, flexBasis: basis }}
            className={itemClassName}
          >
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

/** Press feedback shared by every tappable surface in the reference. */
export const pressable =
  "transition-transform duration-150 active:scale-[0.975] [-webkit-tap-highlight-color:transparent] cursor-pointer"

export function tap(label: string) {
  toast(`${label} →`)
}
