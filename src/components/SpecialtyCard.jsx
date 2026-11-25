import Card from './Card.jsx'
import Icon from './Icon.jsx'

export default function SpecialtyCard({ specialty }) {
  return (
    <Card
      className={`flex flex-col items-center gap-2 p-4 text-center shadow-[6px_6px_0px_0px_#000] transition-transform hover:-translate-y-1 md:p-5 ${specialty.className}`}
    >
      <div className={`flex h-12 w-12 items-center justify-center border-2 border-black ${specialty.iconClassName}`}>
        <Icon name={specialty.icon} />
      </div>
      <h3 className="text-sm font-black uppercase tracking-wide md:text-base">
        {specialty.name}
      </h3>
      <p className="hidden text-xs font-bold leading-snug sm:block">
        {specialty.description}
      </p>
    </Card>
  )
}
