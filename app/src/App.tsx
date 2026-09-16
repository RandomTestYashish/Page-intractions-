import { Toaster } from "@/components/ui/sonner"
import { Header } from "@/components/airtel/Header"
import { PackSection } from "@/components/airtel/PackSection"
import {
  BuyProducts, ManageServices, MyServices, PromoStrip,
} from "@/components/airtel/ServicesSections"
import {
  CuratedForYou, ExploreProducts, FeaturingFresh, RechargeForOthers, YouMightLike,
} from "@/components/airtel/DiscoverySections"
import { ClaimSection } from "@/components/airtel/ClaimSection"
import { Band } from "@/components/airtel/primitives"

export default function App() {
  return (
    <div className="relative mx-auto min-h-screen max-w-[420px] overflow-x-clip bg-white sm:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_24px_60px_rgba(0,0,0,0.18)]">
      <Header />

      <main>
        <PackSection />
        <Band />
        <MyServices />
        <Band />
        <BuyProducts />
        <PromoStrip />
        <Band />
        <ManageServices />
        <Band />
        <ExploreProducts />
        <Band />
        <CuratedForYou />
        <Band />
        <RechargeForOthers />
        <Band />
        <YouMightLike />
        <Band />
        <FeaturingFresh />
        <ClaimSection />
      </main>

      <Toaster position="bottom-center" toastOptions={{ className: "!rounded-full !text-[12px]" }} />
    </div>
  )
}
