// Venue card: hand-drawn style illustrated map + venue name, address and a directions button.

const TREES = [
  [38, 40, 13], [70, 22, 10], [118, 30, 12], [452, 26, 11], [488, 46, 14], [530, 22, 10], [566, 54, 13],
  [212, 118, 10], [236, 132, 8], [404, 150, 11], [430, 166, 9], [560, 150, 12], [584, 176, 10],
  [26, 196, 12], [58, 214, 9], [150, 206, 11], [296, 34, 9], [322, 24, 8], [350, 196, 10], [372, 212, 8],
  [498, 120, 9], [522, 106, 7], [268, 210, 9],
]

function Tree({ x, y, r }) {
  return (
    <g>
      <ellipse cx={x + 3} cy={y + r * 0.9} rx={r * 0.9} ry={r * 0.32} fill="#d9cfb4" opacity=".6" />
      <rect x={x - 1.2} y={y} width="2.4" height={r * 0.9} fill="#8b7a5c" rx="1" />
      <circle cx={x} cy={y - r * 0.15} r={r} fill="#a7b48c" />
      <circle cx={x - r * 0.35} cy={y - r * 0.45} r={r * 0.55} fill="#bcc7a2" />
      <circle cx={x + r * 0.3} cy={y + r * 0.1} r={r * 0.5} fill="#93a278" opacity=".7" />
    </g>
  )
}

function MapIllustration() {
  return (
    <svg className="venue-map-svg" viewBox="0 0 600 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="vm-paper" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="#f4ead3" />
          <circle cx="1" cy="1" r=".6" fill="#ead9b6" opacity=".6" />
        </pattern>
        <linearGradient id="vm-water" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c3d3c4" />
          <stop offset="1" stopColor="#aec3b3" />
        </linearGradient>
        <linearGradient id="vm-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3dfa6" />
          <stop offset="1" stopColor="#c9a25a" />
        </linearGradient>
      </defs>

      <rect width="600" height="240" fill="url(#vm-paper)" />

      {/* city blocks */}
      <g fill="#f9f2e2" stroke="#e8d8b6" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5, 6].map((c) =>
          [0, 1, 2, 3].map((r) => (
            <rect key={`${c}-${r}`} x={130 + c * 66 + (r % 2) * 8} y={8 + r * 60} width="54" height="46" rx="5" />
          )),
        )}
      </g>
      {/* diagonal avenues */}
      <g stroke="#fffaf0" strokeLinecap="round" fill="none">
        <path d="M120 236 L600 40" strokeWidth="11" />
        <path d="M250 0 L380 240" strokeWidth="8" />
        <path d="M120 120 L600 128" strokeWidth="7" />
      </g>
      <g stroke="#e6d4ae" strokeLinecap="round" fill="none" strokeWidth="1">
        <path d="M120 230 L600 34" />
        <path d="M120 242 L600 46" />
      </g>

      {/* parks */}
      <g fill="#dfe4c6" stroke="#ccd3ad" strokeWidth="1">
        <rect x="196" y="100" width="56" height="44" rx="8" />
        <rect x="392" y="136" width="60" height="44" rx="8" />
        <path d="M540 130 q40 -10 60 10 v70 h-70 q-12 -40 10 -80z" />
        <path d="M0 180 q60 -10 110 6 l20 54 h-130z" />
      </g>
      {/* roundabout */}
      <circle cx="252" cy="190" r="16" fill="#f7efdc" stroke="#e0cca2" strokeWidth="1.5" />
      <circle cx="252" cy="190" r="7" fill="#dfe4c6" />

      {/* river with bridges */}
      <path d="M40 0 C70 60 20 110 60 160 S120 220 96 240 L60 240 C80 210 20 170 22 140 S40 60 0 0 Z" fill="url(#vm-water)" />
      <path d="M30 20 C52 60 22 100 44 140" stroke="#e4ece2" strokeWidth="1.5" fill="none" opacity=".8" />
      <g fill="#efe3c8" stroke="#cdb88d" strokeWidth="1">
        <rect x="10" y="84" width="74" height="9" rx="2" />
        <rect x="40" y="168" width="80" height="9" rx="2" />
      </g>
      <g fill="none" stroke="#cdb88d" strokeWidth="1">
        <path d="M16 93 q8 8 16 0 q8 8 16 0 q8 8 16 0 q8 8 16 0" />
        <path d="M46 177 q8 8 16 0 q8 8 16 0 q8 8 16 0 q8 8 16 0" />
      </g>
      <ellipse cx="44" cy="46" rx="9" ry="3.5" fill="#efe3c8" stroke="#bfa877" strokeWidth=".8" />

      {/* temple (landmark) */}
      <g transform="translate(372 52)">
        <ellipse cx="22" cy="52" rx="34" ry="6" fill="#dccfae" opacity=".7" />
        <rect x="0" y="22" width="44" height="30" fill="#f6ead0" stroke="#c9a25a" strokeWidth="1.2" />
        <path d="M-4 22 h52 l-26 -12 z" fill="url(#vm-gold)" stroke="#b08a43" strokeWidth="1" />
        <path d="M10 10 q12 -22 24 0 z" fill="url(#vm-gold)" stroke="#b08a43" strokeWidth="1" />
        <line x1="22" y1="-12" x2="22" y2="-2" stroke="#b08a43" strokeWidth="1.4" />
        <path d="M22 -14 l6 3 l-6 3 z" fill="#c0392b" />
        <rect x="17" y="36" width="10" height="16" rx="5" fill="#d8c08c" />
        <rect x="5" y="30" width="6" height="8" rx="3" fill="#e5d3a6" />
        <rect x="33" y="30" width="6" height="8" rx="3" fill="#e5d3a6" />
      </g>
      {/* small domed building */}
      <g transform="translate(520 150)">
        <rect x="0" y="16" width="34" height="24" fill="#f6ead0" stroke="#c9a25a" strokeWidth="1" />
        <path d="M2 16 q15 -26 30 0 z" fill="url(#vm-gold)" stroke="#b08a43" strokeWidth="1" />
        <line x1="17" y1="-6" x2="17" y2="2" stroke="#b08a43" strokeWidth="1.2" />
      </g>
      {/* obelisk */}
      <g transform="translate(330 120)">
        <path d="M4 0 l4 0 l2 34 h-8 z" fill="#efe1c2" stroke="#c9a25a" strokeWidth=".9" />
        <rect x="-1" y="34" width="14" height="5" fill="#e3cf9f" />
      </g>

      {TREES.map(([x, y, r], i) => (
        <Tree key={i} x={x} y={y} r={r} />
      ))}

      {/* venue pin */}
      <g transform="translate(300 74)">
        <ellipse cx="0" cy="34" rx="9" ry="3" fill="#000" opacity=".18" />
        <path d="M0 34 C-4 24 -15 14 -15 1 A15 15 0 1 1 15 1 C15 14 4 24 0 34 Z" fill="#d23b32" stroke="#a82a22" strokeWidth="1" />
        <circle cx="0" cy="0" r="5.5" fill="#7d1d17" />
        <circle cx="-5" cy="-6" r="3" fill="#fff" opacity=".35" />
      </g>
    </svg>
  )
}

export default function VenueCard({ name, address, href }) {
  return (
    <div className="venue-card">
      <div className="venue-map">
        <MapIllustration />
      </div>
      <div className="venue-info">
        <p className="venue-name">{name}</p>
        <p className="venue-address">{address}</p>
        <a className="venue-btn" href={href} target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 11 22 2l-9 19-2-8-8-2z" />
          </svg>
          <span>मार्ग देखें</span>
        </a>
      </div>
    </div>
  )
}
