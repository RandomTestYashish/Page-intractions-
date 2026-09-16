import { cn } from "@/lib/utils"
import { Rail, pressable, tap } from "./primitives"

const BENEFITS = [
  { logo: "logo-netflix", title: "Netflix Basic", sub: "Included in your Airtel Xstream Play Subscription" },
  { logo: "logo-duolingo", title: "Super Duolingo", sub: "Worth ₹3120, free with Airtel" },
  { logo: "logo-prime", title: "Prime Lite", sub: "3 months free on select postpaid plans" },
]

export function ClaimSection() {
  return (
    <section className="bg-[radial-gradient(120%_90%_at_88%_6%,rgba(255,120,170,0.28)_0%,rgba(255,120,170,0)_55%),linear-gradient(150deg,#5c1436_0%,#3d0f36_45%,#26103a_100%)] pt-5 pb-6 text-white">
      <div className="flex min-h-[96px] items-end justify-between px-[14px]">
        <div>
          <h2 className="text-[32px] leading-none font-extrabold tracking-[-1px]">Claim</h2>
          <p className="mt-[6px] text-[11px] font-bold tracking-[3.2px] text-white/80 uppercase">
            Your Benefits
          </p>
        </div>
        <img src="./assets/il-claim.svg" alt="" className="-mb-2 w-[108px] self-end" />
      </div>

      <div className="relative z-10 mt-[18px] px-[14px]">
        <Rail basis="140px">
          {BENEFITS.map(({ logo, title, sub }) => (
            <div
              key={title}
              onClick={() => tap(title)}
              className={cn(
                "flex min-h-[136px] flex-col rounded-[12px] border border-white/10 bg-white/[0.07] px-[10px] pt-[11px] pb-[10px] backdrop-blur-[2px]",
                pressable
              )}
            >
              <img src={`./assets/${logo}.svg`} alt="" className="mb-[9px] size-[30px] rounded-lg" />
              <b className="text-[11.5px] font-extrabold tracking-[-0.15px]">{title}</b>
              <span className="mt-[3px] text-[8.5px] leading-[1.35] text-white/60">{sub}</span>
              <span className="mt-auto pt-[9px] text-[8.5px] font-extrabold tracking-[0.5px] text-[#ff9a8f]">
                CLAIM NOW →
              </span>
            </div>
          ))}
        </Rail>
      </div>
    </section>
  )
}
