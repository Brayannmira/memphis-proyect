import SectionLink from './SectionLink.jsx'

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 flex h-12 items-center justify-between border-t-4 border-black bg-black px-4 text-white md:px-10">
      <div className="flex items-center gap-2">
        <span className="inline-block h-3 w-3 bg-[#FFD600]" />
        <span className="text-[10px] font-black uppercase tracking-widest sm:text-xs">
          VITA+ Centro Médico
        </span>
      </div>
      <div className="hidden items-center gap-4 text-xs font-bold uppercase sm:flex">
        <span className="text-[#72EFDD]">● Urgencias 24H</span>
        <span className="text-[#FFD600]">● Av. Central 420</span>
      </div>
      <SectionLink
        sectionId="inicio"
        className="border border-white bg-[#FF4D6D] px-2.5 py-0.5 text-[11px] font-black uppercase text-white transition-colors hover:bg-[#FFD600] hover:text-black"
      >
        ↑ Subir
      </SectionLink>
    </footer>
  )
}
