import Card from './Card.jsx'
import SectionLink from './SectionLink.jsx'

export default function PlanCard({ plan }) {
  return (
    <Card className={`flex flex-col justify-between gap-4 p-5 shadow-[6px_6px_0px_0px_#000] ${plan.className} ${plan.featured ? 'shadow-[8px_8px_0px_0px_#000]' : ''}`}>
      <div>
        <div className="flex items-center justify-between">
          <span className={`border-2 border-black px-2.5 py-0.5 text-xs font-black uppercase ${plan.featured ? 'bg-[#FF4D6D] text-white' : 'bg-white'}`}>
            {plan.name}
          </span>
          {plan.featured && (
            <span className="bg-black px-2 py-0.5 text-[10px] font-black uppercase text-[#FFD600]">
              Popular
            </span>
          )}
        </div>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-4xl font-black">{plan.price}</span>
          <span className="text-xs font-bold uppercase">/ mes</span>
        </div>
        <ul className="mt-4 flex flex-col gap-2 text-xs font-bold">
          {plan.features.map((feature) => (
            <li className="flex items-center gap-2" key={feature}>
              <span className="inline-block h-3 w-3 bg-black" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <SectionLink
        sectionId="cita"
        className={`w-full border-2 border-black py-2.5 text-center text-xs font-black uppercase shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${plan.featured ? 'bg-black text-white shadow-[4px_4px_0px_0px_#FF4D6D]' : 'bg-white'}`}
      >
        Elegir {plan.name}
      </SectionLink>
    </Card>
  )
}
