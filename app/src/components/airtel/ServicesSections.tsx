import * as React from "react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { BoltIcon, ChevronIcon, ClaimIcon, DishIcon, EyeIcon, GridIcon, MusicIcon, PlaneIcon, RechargeIcon, ReceiptIcon, WifiIcon } from "./icons"
import { Rail, Section, SectionHeader, pressable, tap } from "./primitives"

/* ------------------------------------------------------------ my services */
export function MyServices() {
  const [shown, setShown] = React.useState(false)
  const card =
    "flex flex-row items-center gap-[9px] min-h-[70px] rounded-[12px] border-hairline px-[10px] py-0 pt-[15px] pb-3"

  return (
    <Section>
      <SectionHeader title="My Services" />
      <Rail basis="50%">
        {[
          <Card key="svc" className={cn(card, pressable)} onClick={() => tap("4 Services")}>
            <img src="./assets/airtel-logo.svg" alt="" className="size-[22px] shrink-0" />
            <div className="flex min-w-0 flex-col gap-[2px]">
              <b className="text-[13px] font-extrabold tracking-[-0.2px]">4 Services</b>
              <span className="text-[10px] font-semibold text-airtel">Dth expiring in</span>
            </div>
          </Card>,

          <Card key="bank" className={cn(card, pressable)} onClick={() => tap("Bank Account")}>
            <span className="flex shrink-0 flex-col items-center gap-[2px]">
              <img src="./assets/apb-logo.svg" alt="" className="size-6" />
              <span className="text-center text-[5.5px] leading-[1.15] font-extrabold tracking-[0.2px] text-ash-2 uppercase">
                Payments
                <br />
                Bank
              </span>
            </span>
            <div className="flex min-w-0 flex-col gap-[2px]">
              <b className="text-[13px] font-extrabold tracking-[-0.2px]">Bank Account</b>
              <span className="flex items-center gap-[6px] text-[11px] text-ash">
                <i className="font-bold tracking-[0.5px] text-ink-2 not-italic">
                  {shown ? "₹4,820.50" : "₹••••••"}
                </i>
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation()
                    setShown((s) => !s)
                  }}
                  className="inline-flex cursor-pointer items-center gap-[3px] font-semibold text-ash"
                >
                  {shown ? "Hide" : "View"}
                  <EyeIcon className="size-3" />
                </span>
              </span>
            </div>
          </Card>,
        ]}
      </Rail>
    </Section>
  )
}

/* --------------------------------------------------- buy airtel products */
type Product = { label: string; art: string; tag?: string }

const PRODUCTS: Product[] = [
  { label: "Personal Loan", art: "il-loan" },
  { label: "Credit Card", art: "il-card" },
  { label: "Fixed Deposit", art: "il-fd" },
  { label: "Credit Score", art: "il-score" },
  { label: "Expert Wi-Fi", art: "il-wifi", tag: "Refer" },
  { label: "Get Postpaid SIM", art: "il-sim", tag: "20+OTTs" },
  { label: "Refer Bank & Earn", art: "il-bank" },
  { label: "New Prepaid SIM", art: "il-prepaid" },
  { label: "DTH", art: "il-dth" },
]

const EXTRA: Product[] = [
  { label: "Airtel Black", art: "il-tv" },
  { label: "Xstream Fiber", art: "il-wifi" },
  { label: "Buy Insurance", art: "il-bank" },
  { label: "Gold Loan", art: "il-fd" },
  { label: "IPTV", art: "il-dth" },
  { label: "Data Packs", art: "il-prepaid" },
]

function ProductCard({ label, art, tag, isNew }: Product & { isNew?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => tap(label)}
      className={cn(
        "relative flex min-h-[112px] flex-col items-start rounded-[12px] border border-hairline bg-white px-2 pt-[10px] pb-2",
        "transition-all duration-150 active:scale-[0.97] active:shadow-[0_1px_3px_rgba(17,19,24,0.06),0_6px_18px_rgba(17,19,24,0.05)]",
        isNew && "animate-in fade-in zoom-in-90 duration-300"
      )}
    >
      {tag && (
        <Badge className="absolute -top-[7px] left-1/2 -translate-x-1/2 rounded-full bg-ink px-2 py-[2.5px] text-[7.5px] font-extrabold tracking-[0.2px] text-white">
          {tag}
        </Badge>
      )}
      <span className="text-left text-[10.5px] leading-[1.25] font-bold tracking-[-0.15px] text-ink">
        {label}
      </span>
      <img src={`./assets/${art}.svg`} alt="" className="mx-auto mt-auto size-[57px]" />
    </button>
  )
}

export function BuyProducts() {
  const [expanded, setExpanded] = React.useState(false)
  return (
    <Section>
      <SectionHeader
        title="Buy Airtel Products"
        action={expanded ? "View Less" : "View All"}
        onAction={() => setExpanded((v) => !v)}
      />
      <div className="grid grid-cols-3 gap-[9px]">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.label} {...p} />
        ))}
        {expanded && EXTRA.map((p) => <ProductCard key={p.label} {...p} isNew />)}
      </div>
    </Section>
  )
}

/* ------------------------------------------------------------ promo strip */
export function PromoStrip() {
  return (
    <Section>
      <button
        type="button"
        onClick={() => tap("Up to 2X speeds")}
        className="flex w-full items-center gap-2 rounded-[12px] border border-[#f4e7e3] bg-[linear-gradient(90deg,#fff3ef_0%,#fffdfc_55%,#fff_100%)] p-[10px] transition-transform duration-150 active:scale-[0.985]"
      >
        <span className="grid size-[22px] shrink-0 place-items-center">
          <BoltIcon className="size-5" />
        </span>
        <span className="flex-1 text-left text-[11.5px] font-bold tracking-[-0.15px] text-ink">
          Up to 2X speeds &amp; unlimited data on Postpaid
        </span>
        <ChevronIcon className="size-[13px] shrink-0 text-ink-2" />
      </button>
    </Section>
  )
}

/* -------------------------------------------------------- manage services */
const MANAGE = [
  { label: "Recharge", icon: RechargeIcon },
  { label: "Pay Bills", icon: ReceiptIcon },
  { label: "Claim OTTs & More", icon: ClaimIcon },
  { label: "International Roaming", icon: PlaneIcon, hot: true },
  { label: "Set Hellotunes", icon: MusicIcon },
  { label: "My DTH Channels", icon: DishIcon },
  { label: "My Expert Wi-Fi", icon: WifiIcon },
  { label: "More", icon: GridIcon },
]

export function ManageServices() {
  return (
    <Section>
      <SectionHeader title="Manage Services" />
      <div className="grid grid-cols-4 gap-x-[6px] gap-y-5">
        {MANAGE.map(({ label, icon: Icon, hot }) => (
          <button
            key={label}
            type="button"
            onClick={() => tap(label)}
            className="group flex flex-col items-center gap-[7px]"
          >
            <span
              className={cn(
                "grid size-[46px] place-items-center rounded-full bg-white text-ink-2 transition-all duration-150 group-active:scale-90 group-active:bg-chip",
                hot
                  ? "border-[1.6px] border-transparent [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(135deg,#ff8a00,#e40000_60%,#ff3d6e)_border-box]"
                  : "border border-hairline-2"
              )}
            >
              <Icon className="size-[21px]" />
            </span>
            <span className="max-w-[74px] text-center text-[9.5px] leading-[1.25] font-semibold tracking-[-0.1px] text-ink-2">
              {label}
            </span>
          </button>
        ))}
      </div>
    </Section>
  )
}
