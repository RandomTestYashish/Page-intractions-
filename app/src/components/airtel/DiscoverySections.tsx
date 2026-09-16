import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { BoltIcon, WifiIcon } from "./icons"
import { Rail, Section, SectionHeader, pressable, tap } from "./primitives"

/* ------------------------------------------------ explore airtel products */
const EXPLORE = [
  { title: ["Fast Lane", "Postpaid"], bg: "bg-[linear-gradient(150deg,#ff5442_0%,#e01008_55%,#b60b06_100%)]", art: "bolt" },
  { title: ["Expert", "Wi-Fi"], bg: "bg-[linear-gradient(150deg,#8b7bff_0%,#5b45e0_55%,#4130b8_100%)]", art: "wifi" },
  { title: ["Prepaid", "SIM"], bg: "bg-[linear-gradient(150deg,#ff5fa8_0%,#f0027f_60%,#c6006a_100%)]", art: "sim" },
]

export function ExploreProducts() {
  return (
    <Section>
      <SectionHeader title="Explore Airtel Products" />
      <Rail basis="33.3333%">
        {EXPLORE.map(({ title, bg, art }) => (
          <button
            key={title.join(" ")}
            type="button"
            onClick={() => tap(title.join(" "))}
            className={cn(
              "relative flex aspect-[1/1.06] w-full items-end overflow-hidden rounded-[16px] p-[10px] text-left text-white",
              bg,
              pressable
            )}
          >
            {art === "bolt" && <BoltIcon className="absolute top-2 right-[6px] size-11 opacity-30 [&_path]:fill-white" />}
            {art === "wifi" && <WifiIcon className="absolute top-2 right-[6px] size-11 text-white opacity-30" />}
            {art === "sim" && (
              <svg viewBox="0 0 24 24" className="absolute top-2 right-[6px] size-11 opacity-30">
                <path d="M6 2.5h8l4.5 4.5v14.5H6z" fill="#fff" />
              </svg>
            )}
            <span className="text-[12px] leading-[1.2] font-extrabold tracking-[-0.2px]">
              {title[0]}
              <br />
              {title[1]}
            </span>
            <span className="absolute right-[9px] bottom-[9px] grid size-[17px] place-items-center rounded-full bg-white/20 text-[10px] font-bold">
              →
            </span>
          </button>
        ))}
      </Rail>
    </Section>
  )
}

/* ------------------------------------------------------- curated for you */
const CURATED = [
  {
    title: ["Data packs", "at ₹19"],
    cta: "Recharge now",
    art: "il-prepaid",
    bg: "bg-[linear-gradient(135deg,#ff6fb0_0%,#f0007f_55%,#c9006b_100%)]",
    vivid: true,
  },
  {
    title: ["Custom DTH packs", "for you"],
    cta: "Starting at ₹1500",
    art: "il-dish-big",
    bg: "bg-[linear-gradient(115deg,#dff1f4_0%,#f6fbfc_42%,#ffffff_100%)]",
    vivid: false,
  },
  {
    title: ["Xstream Play", "on your TV"],
    cta: "Explore packs",
    art: "il-tv",
    bg: "bg-[linear-gradient(135deg,#9b86ff_0%,#6a4bea_55%,#4c2fc6_100%)]",
    vivid: true,
  },
]

export function CuratedForYou() {
  return (
    <Section className="pb-4">
      <SectionHeader title="Curated For You" />
      <Rail basis="calc(100% - 38px)" bleed gap={9} align="center" startIndex={1} dragFree={false}>
        {CURATED.map(({ title, cta, art, bg, vivid }) => (
          <div
            key={title.join(" ")}
            onClick={() => tap(title.join(" "))}
            className={cn(
              "flex h-[172px] items-center gap-[6px] overflow-hidden rounded-[16px] border py-[14px] pr-[14px] pl-[6px]",
              vivid ? "border-transparent" : "border-ink/5",
              bg,
              pressable
            )}
          >
            <img src={`./assets/${art}.svg`} alt="" className="h-[132px] w-[136px] shrink-0 object-contain" />
            <div className="flex min-w-0 flex-col items-start gap-3">
              <h3
                className={cn(
                  "text-[17px] leading-[1.22] font-extrabold tracking-[-0.45px]",
                  vivid ? "text-white" : "text-ink"
                )}
              >
                {title[0]}
                <br />
                {title[1]}
              </h3>
              <span
                className={cn(
                  "inline-block rounded-full px-[14px] py-2 text-[11.5px] font-bold tracking-[-0.1px] whitespace-nowrap",
                  vivid ? "bg-white text-ink" : "bg-ink text-white"
                )}
              >
                {cta}
              </span>
            </div>
          </div>
        ))}
      </Rail>

      <MiniCards />
    </Section>
  )
}

/* ------------------------------------------------------ mini service cards */
function MiniCards() {
  const base =
    "relative flex min-h-[86px] flex-col items-start gap-0 overflow-hidden rounded-[12px] border-hairline py-0 px-2 pt-[10px] pb-[9px]"
  return (
    <div className="mt-[14px] grid grid-cols-3 gap-[9px]">
      <Card className={cn(base, pressable)} onClick={() => tap("Call Manager")}>
        <span className="text-left text-[10px] leading-[1.25] font-bold tracking-[-0.15px]">Call Manager</span>
        <img src="./assets/il-callmgr.svg" alt="" className="mt-auto size-[38px]" />
      </Card>
      <Card className={cn(base, pressable)} onClick={() => tap("Rewards & OTTs")}>
        <span className="text-left text-[10px] leading-[1.25] font-bold tracking-[-0.15px]">Rewards &amp; OTTs</span>
        <img src="./assets/il-rewards.svg" alt="" className="mt-auto size-[38px]" />
      </Card>
      <Card className={cn(base, pressable)} onClick={() => tap("Refer & Earn")}>
        <span className="text-left text-[10px] leading-[1.25] font-bold tracking-[-0.15px]">
          Refer &amp; Earn
          <br />₹300
        </span>
        <img src="./assets/il-referearn.svg" alt="" className="mt-auto size-[38px]" />
        <span className="absolute right-0 bottom-0 rounded-tl-[9px] rounded-br-[12px] bg-[#ffd60a] px-[7px] py-1 text-center text-[6.5px] leading-[1.15] font-extrabold tracking-[0.2px] text-[#4a3500]">
          SAVE
          <br />
          <b className="text-[11px] tracking-[-0.2px]">₹300</b>
        </span>
      </Card>
    </div>
  )
}

/* --------------------------------------------------- recharge for others */
const PACKS = [
  { name: "Box Office Pack", price: "₹200", big: "20+", unit: "OTTs", bg: "bg-[linear-gradient(145deg,#a45bff_0%,#7a2ce0_55%,#5a17b5_100%)]", logos: false },
  { name: "Blockbuster Pack", price: "₹100", big: "19+", unit: "OTTs", bg: "bg-[linear-gradient(145deg,#3c3c46_0%,#23232b_60%,#141418_100%)]", logos: true },
  { name: "Data Pack", price: "₹49", big: "6GB", unit: "Data", bg: "bg-[linear-gradient(145deg,#2fb8b0_0%,#12857f_60%,#0a5f5a_100%)]", logos: false },
]

export function RechargeForOthers() {
  return (
    <Section>
      <SectionHeader title="Recharge For Others" />
      <Rail basis="50%">
        {PACKS.map(({ name, price, big, unit, bg, logos }) => (
          <div
            key={name}
            onClick={() => tap(name)}
            className={cn("relative flex h-[162px] flex-col overflow-hidden rounded-[16px] p-3 text-white", bg, pressable)}
          >
            <span className="text-[11px] font-bold tracking-[-0.1px] opacity-95">{name}</span>
            <span className="mt-px text-[19px] leading-[1.15] font-extrabold tracking-[-0.6px]">{price}</span>
            <span className="mt-auto flex items-baseline gap-1">
              <b className="text-[32px] leading-[0.95] font-extrabold tracking-[-1.6px]">{big}</b>
              <i className="text-[15px] font-extrabold tracking-[-0.4px] not-italic">{unit}</i>
            </span>
            {logos && (
              <span className="mt-2 flex items-center gap-[5px]">
                <img src="./assets/logo-sonyliv.svg" alt="SonyLIV" className="h-[15px] w-[42px]" />
                <em className="rounded-[4px] bg-white/15 px-[5px] py-[2px] text-[9px] font-extrabold not-italic">1L</em>
                <em className="rounded-[4px] bg-white/15 px-[5px] py-[2px] text-[9px] font-extrabold not-italic">6GB</em>
              </span>
            )}
          </div>
        ))}
      </Rail>
    </Section>
  )
}

/* ------------------------------------------------------------ you might like */
const LIKES = [
  { art: "il-travel", title: ["Access best local", "networks abroad"], cta: "Buy Pack", bg: "bg-[linear-gradient(160deg,#ffe2e0_0%,#ffd3cf_100%)]" },
  { art: "il-refer", title: ["Pay ₹300 less on", "your next bill"], cta: "Refer Wi-Fi", bg: "bg-[linear-gradient(160deg,#eef0f4_0%,#e4e7ed_100%)]" },
  { art: "il-score", title: ["Check your free", "credit score"], cta: "Check Now", bg: "bg-[linear-gradient(160deg,#ddf3e6_0%,#cfeddc_100%)]" },
]

export function YouMightLike() {
  return (
    <Section>
      <SectionHeader title="You Might Like" />
      <Rail basis="50%">
        {LIKES.map(({ art, title, cta, bg }) => (
          <div
            key={cta}
            onClick={() => tap(title.join(" "))}
            className={cn("flex h-[208px] flex-col rounded-[16px] border border-ink/5 p-[10px]", bg, pressable)}
          >
            <img src={`./assets/${art}.svg`} alt="" className="mb-[7px] h-[94px] w-full object-contain" />
            <h3 className="text-[12.5px] leading-[1.25] font-extrabold tracking-[-0.25px] text-ink">
              {title[0]}
              <br />
              {title[1]}
            </h3>
            <span className="mt-auto grid h-8 place-items-center rounded-[7px] bg-ink text-[12px] font-bold text-white">
              {cta}
            </span>
          </div>
        ))}
      </Rail>
    </Section>
  )
}

/* --------------------------------------------------------- featuring fresh */
export function FeaturingFresh() {
  return (
    <Section>
      <SectionHeader title="Featuring Fresh" />
      <div
        onClick={() => tap("The 90s are back")}
        className={cn(
          "flex flex-col items-center overflow-hidden rounded-[16px] border border-ink/5 px-[14px] pt-5 pb-[18px] text-center",
          "bg-[linear-gradient(170deg,#efeafc_0%,#f6f3fd_45%,#fdfcff_100%)]",
          pressable
        )}
      >
        <h3 className="text-[21px] font-extrabold tracking-[-0.6px] text-ink">The 90s are back</h3>
        <p className="mt-[3px] text-[13px] font-semibold text-ink-2">Watch ad-free movies &amp; songs</p>
        <img src="./assets/il-tv.svg" alt="" className="my-[14px] w-[232px] max-w-[78%]" />
        <span className="inline-block rounded-full bg-ink px-[18px] py-[9px] text-[12.5px] font-bold text-white">
          Add @ ₹42/month
        </span>
      </div>
    </Section>
  )
}
