import * as React from "react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle,
} from "@/components/ui/sheet"
import { Section } from "./primitives"

const PLANS = [
  { price: "₹558.47", note: "Same as current pack · 1 month" },
  { price: "₹1,599", note: "3 months · Save ₹76" },
  { price: "₹6,150", note: "12 months · Save ₹552" },
]

export function PackSection() {
  const [open, setOpen] = React.useState(false)
  const [plan, setPlan] = React.useState(0)

  return (
    <Section className="pt-5 pb-[14px]">
      <div className="relative">
        <Badge className="absolute -top-[9px] left-1/2 z-10 -translate-x-1/2 rounded-full bg-airtel px-[13px] py-[3.5px] text-[8.5px] font-extrabold tracking-[0.8px] text-white uppercase">
          Pack Status
        </Badge>

        <Card className="gap-0 rounded-[14px] border-hairline px-[14px] py-0 pt-4 pb-[14px] shadow-[0_1px_3px_rgba(17,19,24,0.06),0_6px_18px_rgba(17,19,24,0.05)]">
          <div className="mb-[10px] flex items-center justify-between">
            <span className="flex items-center gap-[5px] text-[12.5px] font-bold text-ink">
              <img src="./assets/airtel-logo.svg" alt="" className="size-[15px]" />
              <b>Dth</b>
            </span>
            <span className="text-[11.5px] font-semibold text-ash">3004211238-001</span>
          </div>

          <h2 className="text-center text-[14.5px] leading-[1.3] font-extrabold tracking-[-0.2px] text-ink">
            Your ₹558.47 pack will expire in 3 days
          </h2>
          <p className="mt-[5px] text-center text-[12px] leading-[1.45] text-ash">
            Recharge now to continue watching movies and shows on your TV.
          </p>

          <Button
            onClick={() => setOpen(true)}
            className="mt-[14px] h-[42px] w-full rounded-[8px] bg-ink text-[13.5px] font-bold tracking-[-0.1px] text-white hover:bg-ink active:scale-[0.985]"
          >
            Recharge Now
          </Button>
        </Card>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="bottom"
          showClose={false}
          className="mx-auto max-w-[420px] gap-0 rounded-t-[20px] border-0 px-[14px] pt-[10px] pb-[calc(18px+env(safe-area-inset-bottom,0px))]"
        >
          <span className="mx-auto mb-[14px] block h-1 w-[38px] rounded-[2px] bg-hairline-2" />
          <SheetHeader className="gap-0 p-0">
            <SheetTitle className="text-[16px] font-extrabold tracking-[-0.3px]">Recharge DTH</SheetTitle>
            <SheetDescription className="mt-[3px] text-[11.5px] text-ash">
              3004211238-001 · Pack expires in 3 days
            </SheetDescription>
          </SheetHeader>

          <div className="mt-[14px] mb-1 flex flex-col gap-2">
            {PLANS.map((p, i) => (
              <button
                key={p.price}
                type="button"
                onClick={() => setPlan(i)}
                className={cn(
                  "flex flex-col items-start gap-[2px] rounded-[12px] border-[1.4px] px-3 py-[10px] text-left transition-all duration-200 active:scale-[0.99]",
                  plan === i ? "border-ink bg-[#fafafb]" : "border-hairline-2"
                )}
              >
                <b className="text-[14px] font-extrabold tracking-[-0.2px]">{p.price}</b>
                <span className="text-[10.5px] text-ash">{p.note}</span>
              </button>
            ))}
          </div>

          <Button
            onClick={() => {
              setOpen(false)
              toast(`Recharge of ${PLANS[plan].price} started`)
            }}
            className="mt-[14px] h-[42px] w-full rounded-[8px] bg-ink text-[13.5px] font-bold text-white hover:bg-ink"
          >
            Proceed to Pay
          </Button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-[10px] h-[34px] w-full text-[12.5px] font-bold text-ash"
          >
            Close
          </button>
        </SheetContent>
      </Sheet>
    </Section>
  )
}
