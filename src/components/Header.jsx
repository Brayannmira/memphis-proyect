import { useState } from 'react'
import Icon from './Icon.jsx'
import SectionLink from './SectionLink.jsx'
import { navigationLinks } from '../data/siteData.js'

function NavigationItems({ onNavigate }) {
  return navigationLinks.map((item, index) => (
    <SectionLink
      key={item.id}
      sectionId={item.id}
      onClick={onNavigate}
      className={`border-2 border-black px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${
        index === 0
          ? 'bg-[#FFD600]'
          : index === 1
            ? 'bg-[#72EFDD]'
            : index === 2
              ? 'bg-[#C8B6FF]'
              : index === 3
                ? 'bg-white'
                : index === 4
                  ? 'bg-[#80ED99]'
                  : 'bg-[#FF4D6D] text-white'
      }`}
    >
      {String(index + 1).padStart(2, '0')} {item.label}
    </SectionLink>
  ))
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b-4 border-black bg-[#FFFDF5] px-4 md:px-10">
      <SectionLink sectionId="inicio" className="group flex items-center gap-2.5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-[#FF4D6D] text-white shadow-[3px_3px_0px_0px_#000] transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none">
          <Icon name="cross" className="h-5 w-5" />
        </span>
        <span className="text-xl font-black uppercase tracking-tight">
          VITA<span className="text-[#FF4D6D]">+</span>
        </span>
      </SectionLink>

      <nav aria-label="Navegación principal" className="hidden items-center gap-2 lg:flex">
        <NavigationItems />
      </nav>

      <div className="flex items-center gap-2">
        <SectionLink
          sectionId="cita"
          className="hidden items-center gap-2 border-2 border-black bg-[#FF4D6D] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_0px_#000] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:flex"
        >
          <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#FFD600]" />
          Urgencias 24H
        </SectionLink>
        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="border-2 border-black bg-[#FFD600] px-3 py-2 text-xs font-black uppercase shadow-[2px_2px_0px_0px_#000] lg:hidden"
        >
          {menuOpen ? 'Cerrar' : 'Menú'}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="absolute inset-x-0 top-full flex flex-col gap-2 border-b-4 border-black bg-[#FFFDF5] p-4 shadow-[0_6px_0_#000] lg:hidden"
        >
          <NavigationItems onNavigate={closeMenu} />
          <SectionLink
            sectionId="cita"
            onClick={closeMenu}
            className="border-2 border-black bg-[#FF4D6D] px-3 py-2 text-center text-xs font-black uppercase text-white"
          >
            Urgencias 24H
          </SectionLink>
        </nav>
      )}
    </header>
  )
}
