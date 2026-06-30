import { useId } from 'react'

/*
 * Zenvora bolt-Z mark — angular notched "Z" knocked out in ember on a
 * charcoal rounded badge. Self-contained, so it reads on light and dark
 * backgrounds alike. The notch is transparent (masked), so it shows the
 * badge through it.
 */
export default function Logo({ size = 28, badge = true, ember = '#F1652A', tile = '#14130F' }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const maskId = `zmask-${uid}`
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Zenvora Labs">
      <defs>
        <mask id={maskId}>
          <rect width="100" height="100" fill="black" />
          <g fill="white">
            <polygon points="27,27 73,27 73,41 27,41" />
            <polygon points="55,39 73,39 45,61 27,61" />
            <polygon points="27,59 73,59 73,73 27,73" />
          </g>
          <polygon points="40,43 53,50 40,57" fill="black" />
        </mask>
      </defs>
      {badge && (
        <rect x="3" y="3" width="94" height="94" rx="24" fill={tile} stroke="#F1ECDF" strokeOpacity="0.12" strokeWidth="1.5" />
      )}
      <rect width="100" height="100" fill={ember} mask={`url(#${maskId})`} />
    </svg>
  )
}
