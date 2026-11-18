import { invite } from '../data/invite'

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  )
}

const link = {
  href: invite.credit.url,
  target: '_blank',
  rel: 'noopener noreferrer',
  'aria-label': `Designed by ${invite.credit.name} - chat with us on WhatsApp`,
}

// Understated footer credit: small muted line; opens a WhatsApp chat with Velora.
export function Credit() {
  return (
    <div className="mt-16 flex justify-center">
      <a {...link} className="inline-flex items-center gap-1.5 text-[11px] tracking-wide text-[#7A7266]/70 transition-colors hover:text-[#4F5D2A]">
        <WhatsAppIcon size={12} />
        <span>Designed by {invite.credit.name}</span>
      </a>
    </div>
  )
}
