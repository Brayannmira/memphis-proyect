export default function SectionHeading({
  number,
  title,
  description,
  badgeClassName = 'bg-black text-[#FFD600]',
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={`px-3 py-1 font-black text-sm uppercase ${badgeClassName}`}>
          {number}
        </span>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
          {title}
        </h2>
      </div>
      {description && (
        <p className="mt-1 text-xs sm:text-sm font-bold">{description}</p>
      )}
    </div>
  )
}
