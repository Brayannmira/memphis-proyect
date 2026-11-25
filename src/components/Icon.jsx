const iconShapes = {
  cross: (
    <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" fill="currentColor" stroke="black" strokeWidth="1.5" />
  ),
  heart: (
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" stroke="black" strokeWidth="1.5" />
  ),
  star: (
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" stroke="black" strokeWidth="1.5" />
  ),
  tooth: (
    <path d="M7 4c-2.5 0-4 2-4 5 0 3 1.5 5 2 8 .5 2.5 1.5 4 2.5 4s1.5-2 2.5-4c.5-1 1.5-1 2 0 1 2 1.5 4 2.5 4s2-1.5 2.5-4c.5-3 2-5 2-8 0-3-1.5-5-4-5-1.5 0-2.5.8-3 1.5C11.5 4.8 10.5 4 7 4z" fill="currentColor" stroke="black" strokeWidth="1.5" />
  ),
  flask: (
    <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" fill="#FFD600" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </>
  ),
  pin: (
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" />
  ),
}

export default function Icon({ name, className = 'h-7 w-7' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {iconShapes[name] ?? iconShapes.cross}
    </svg>
  )
}
