/** Inline icon set traced from the reference screenshot. */
type P = { className?: string }

const S = (p: P & { children: React.ReactNode; fill?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={p.className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {p.children}
  </svg>
)

export const HomeIcon = (p: P) => (
  <S {...p}>
    <path d="M3.5 10.6 12 3.6l8.5 7" />
    <path d="M5.8 9.6V20h12.4V9.6" />
    <path d="M10 20v-5h4v5" />
  </S>
)

export const WifiIcon = (p: P) => (
  <S {...p}>
    <path d="M3.5 9.2a13 13 0 0 1 17 0" />
    <path d="M6.8 12.8a8.3 8.3 0 0 1 10.4 0" />
    <path d="M10 16.3a3.6 3.6 0 0 1 4 0" />
    <circle cx="12" cy="19.4" r="1.1" fill="currentColor" stroke="none" />
  </S>
)

export const BillIcon = (p: P) => (
  <S {...p}>
    <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" />
    <path d="M8 8h8M8 11.5h8M8 15h5" />
  </S>
)

export const PlaneIcon = (p: P) => (
  <S {...p}>
    <path d="M21.2 2.9 2.9 9.9a.6.6 0 0 0 0 1.1l7.4 2.7 2.7 7.4a.6.6 0 0 0 1.1 0z" />
    <path d="M21.2 2.9 10.3 13.7" />
  </S>
)

export const LoanIcon = (p: P) => (
  <S {...p}>
    <path d="M9.2 3.2h5.6l-1.5 3.4h-2.6z" />
    <path d="M10.7 6.6C7.6 7.8 4.8 11 4.8 14.7c0 3.3 2.7 5.6 7.2 5.6s7.2-2.3 7.2-5.6c0-3.7-2.8-6.9-5.9-8.1z" />
    <path d="M9.9 11.4h4.2M9.9 13.5h4.2M13.2 11.4c0 2.2-1.8 2.4-3 2.4l3.2 3.5" strokeWidth={1.4} />
  </S>
)

export const RechargeIcon = (p: P) => (
  <S {...p}>
    <path d="M20 12a8 8 0 1 0-2.5 5.8" />
    <path d="M20 6.5V12h-5.2" />
    <path d="M9.6 9.5h4.8M9.6 12h4.8M13.4 9.5c0 2.6-2.1 2.7-3.4 2.7l3.7 4" strokeWidth={1.4} />
  </S>
)

export const ReceiptIcon = (p: P) => (
  <S {...p}>
    <path d="M6 3h12v18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4L6 21z" />
    <path d="M9.2 8h5.6M9.2 11.2h5.6M13.6 8c0 2.4-1.9 2.5-3.1 2.5l3.4 3.6" strokeWidth={1.4} />
  </S>
)

export const ClaimIcon = (p: P) => (
  <S {...p}>
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5.5 20c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2" />
    <path d="M18.5 4.5 20 6l2.5-2.5" strokeWidth={1.4} />
  </S>
)

export const MusicIcon = (p: P) => (
  <S {...p}>
    <path d="M9 18V6.2l9-2v11.4" />
    <circle cx="6.8" cy="18" r="2.6" />
    <circle cx="15.8" cy="15.6" r="2.6" />
  </S>
)

export const DishIcon = (p: P) => (
  <S {...p}>
    <ellipse cx="11" cy="10.5" rx="7.6" ry="6.6" />
    <path d="M11 14.5V20M7.5 20h7" />
    <path d="M16 7.2 19.4 4" />
    <circle cx="20.2" cy="3.4" r="1.4" fill="currentColor" stroke="none" />
  </S>
)

export const GridIcon = (p: P) => (
  <S {...p}>
    <rect x="4" y="4" width="6.5" height="6.5" rx="1.8" />
    <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.8" />
    <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.8" />
    <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.8" />
  </S>
)

export const SearchIcon = (p: P) => (
  <S {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </S>
)

export const MenuIcon = (p: P) => (
  <S {...p}>
    <path d="M3 6h18M3 12h13M3 18h18" />
  </S>
)

export const ScanIcon = (p: P) => (
  <S {...p}>
    <path d="M4 8.5V5.5A1.5 1.5 0 0 1 5.5 4h3M15.5 4h3A1.5 1.5 0 0 1 20 5.5v3M20 15.5v3a1.5 1.5 0 0 1-1.5 1.5h-3M8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-3" />
    <path d="M4 12h16" strokeWidth={1.5} />
  </S>
)

export const EyeIcon = (p: P) => (
  <S {...p}>
    <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="2.8" />
  </S>
)

export const ChevronIcon = (p: P) => (
  <S {...p}>
    <path d="M9 5l7 7-7 7" strokeWidth={2} />
  </S>
)

export const BoltIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <defs>
      <linearGradient id="airtel-bolt" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ff7a00" />
        <stop offset="1" stopColor="#e40000" />
      </linearGradient>
    </defs>
    <path d="M13.5 2 4 13.6h6.2L9.8 22 20 9.9h-6.6z" fill="url(#airtel-bolt)" />
  </svg>
)

export const MoonIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" fill="currentColor" />
  </svg>
)

export const SignalIcon = ({ className }: P) => (
  <svg viewBox="0 0 18 12" className={className}>
    <rect x="0" y="8" width="2.6" height="4" rx="1" fill="currentColor" />
    <rect x="4" y="5.5" width="2.6" height="6.5" rx="1" fill="currentColor" />
    <rect x="8" y="3" width="2.6" height="9" rx="1" fill="currentColor" />
    <rect x="12" y="0" width="2.6" height="12" rx="1" fill="currentColor" />
  </svg>
)
