import * as React from "react"

import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useNavCompaction } from "@/hooks/useNavCompaction"
import {
  BillIcon, HomeIcon, LoanIcon, MenuIcon, MoonIcon, PlaneIcon,
  ScanIcon, SearchIcon, SignalIcon, WifiIcon,
} from "./icons"
import { tap } from "./primitives"

const CATEGORIES = [
  { id: "All", icon: HomeIcon, caption: null },
  { id: "Wi-Fi", icon: WifiIcon, caption: null },
  { id: "Postpaid", icon: BillIcon, caption: "Unlimited" },
  { id: "Roaming", icon: PlaneIcon, caption: null },
  { id: "Loan", icon: LoanIcon, caption: null },
] as const

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-[14px] pt-[7px] pb-[2px]">
      <div className="flex items-center gap-[5px]">
        <span className="text-[13.5px] font-bold tracking-[0.2px]">10:32</span>
        <MoonIcon className="size-[11px]" />
      </div>
      <div className="flex items-center gap-[5px]">
        <SignalIcon className="h-[10px] w-[15px]" />
        <span className="text-[11px] font-bold tracking-[0.2px]">5G</span>
        <span className="relative inline-flex h-[12px] w-[24px] items-center rounded-[3.5px] border-[1.2px] border-ink/35 after:absolute after:top-[3.5px] after:-right-[3px] after:h-[5px] after:w-[2px] after:rounded-r-[2px] after:bg-ink/35 after:content-['']">
          <i className="absolute inset-[1.2px] rounded-[2px] bg-[#33c95f]" />
          <b className="relative z-10 w-full text-center text-[8px] font-extrabold text-[#0b2a14]">87</b>
        </span>
      </div>
    </div>
  )
}

function TopBar() {
  const iconBtn =
    "grid size-[30px] place-items-center rounded-full text-ink transition-all duration-150 active:scale-90 active:bg-chip"
  return (
    <div className="flex items-center justify-between px-[14px] pt-[6px] pb-[8px]">
      <button type="button" aria-label="Menu" className={iconBtn} onClick={() => tap("Menu")}>
        <MenuIcon className="size-[22px]" />
      </button>
      <div className="flex items-center gap-[6px]">
        <button type="button" aria-label="Search" className={iconBtn} onClick={() => tap("Search")}>
          <SearchIcon className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => tap("Scan QR")}
          className="h-[26px] rounded-full border border-hairline-2 bg-[#fbfbfc] px-3 text-[11.5px] font-bold italic tracking-[0.1px] text-ink transition-all duration-150 active:scale-95 active:bg-chip"
        >
          Scan QR
        </button>
        <button type="button" aria-label="Scan" className={iconBtn} onClick={() => tap("Scan")}>
          <ScanIcon className="size-5" />
        </button>
      </div>
    </div>
  )
}

export function Header() {
  const ref = React.useRef<HTMLElement>(null)
  const [active, setActive] = React.useState<string>("All")
  useNavCompaction(ref)

  return (
    <header
      ref={ref}
      style={{ ["--p" as string]: 0 }}
      data-stuck="false"
      className="sticky top-[env(safe-area-inset-top,0px)] z-40 bg-white transition-shadow duration-300 data-[stuck=true]:shadow-[0_2px_10px_rgba(17,19,24,0.07)]"
    >
      <StatusBar />
      <TopBar />

      <Tabs
        value={active}
        onValueChange={(v) => {
          setActive(v)
          if (v !== "All") tap(`${v} services`)
        }}
      >
        <TabsList className="catnav relative grid h-auto w-full grid-cols-5 items-end rounded-none border-b border-hairline bg-transparent p-0 px-2 pb-0">
          {CATEGORIES.map(({ id, icon: Icon, caption }) => (
            <TabsTrigger
              key={id}
              value={id}
              className="cat-gap group relative flex flex-col items-center rounded-none border-0 bg-transparent p-0 pb-[6px] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              <span
                className={cn(
                  "cat-chip grid place-items-center border transition-[background-color,border-color,transform] duration-200 group-active:scale-[0.93]",
                  active === id ? "border-ink bg-ink" : "border-hairline bg-chip"
                )}
              >
                <Icon className={cn("cat-ico", active === id ? "text-white" : "text-ink-2")} />
              </span>
              <span className="cat-cap block">
                {caption && (
                  <em className="block text-[8.5px] leading-[11px] font-bold tracking-[0.1px] text-airtel not-italic">
                    {caption}
                  </em>
                )}
              </span>
              <span
                className={cn(
                  "cat-label leading-tight tracking-[-0.1px] transition-colors duration-200",
                  active === id ? "font-extrabold text-airtel" : "font-semibold text-ash"
                )}
              >
                {id}
              </span>
              {active === id && (
                <span className="absolute -bottom-[1px] left-1/2 h-[2.5px] w-[calc(100%-18px)] -translate-x-1/2 rounded-[2px] bg-airtel" />
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </header>
  )
}
