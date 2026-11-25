import { useState } from 'react'
import Card from '../components/Card.jsx'
import DoctorCard from '../components/DoctorCard.jsx'
import Icon from '../components/Icon.jsx'
import PlanCard from '../components/PlanCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SectionLink from '../components/SectionLink.jsx'
import SpecialtyCard from '../components/SpecialtyCard.jsx'
import {
  appointmentTimes,
  doctors,
  healthPlans,
  heroStats,
  specialties,
  technologyFeatures,
} from '../data/siteData.js'

function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] snap-start items-center justify-center overflow-hidden bg-[#FFFDF5] px-5 pb-20 pt-24 md:px-12"
    >
      <svg
        className="pointer-events-none absolute left-6 top-20 hidden h-20 w-20 md:block"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        {[15, 35, 55].map((x) =>
          [15, 35, 55].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="black" />
          )),
        )}
      </svg>
      <svg
        className="pointer-events-none absolute bottom-20 left-12 hidden h-10 w-28 sm:block"
        viewBox="0 0 120 40"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 30 20 10 35 30 50 10 65 30 80 10 95 30 110 10" stroke="#FF4D6D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg
        className="pointer-events-none absolute right-10 top-24 hidden h-16 w-16 md:block"
        viewBox="0 0 80 80"
        aria-hidden="true"
      >
        <polygon points="40,8 72,68 8,68" fill="#FFD600" stroke="black" strokeWidth="4" />
      </svg>

      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-4 md:gap-5 lg:col-span-6">
          <div className="-rotate-2 inline-flex items-center gap-2 border-2 border-black bg-[#72EFDD] px-4 py-1.5 shadow-[4px_4px_0px_0px_#000]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
            </svg>
            <span className="text-xs font-black uppercase tracking-widest">
              Centro Médico Integral
            </span>
          </div>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl xl:text-7xl">
            Salud
            <span className="mt-2 inline-block rotate-1 border-4 border-black bg-[#FFD600] px-3 py-1 shadow-[6px_6px_0px_0px_#000]">
              Sin pausa
            </span>
          </h1>

          <p className="max-w-md border-2 border-black bg-white px-4 py-3 text-sm font-bold text-neutral-800 shadow-[4px_4px_0px_0px_#000] sm:text-base">
            Atención médica inmediata, diagnóstico digital y más de 20 especialistas certificados en un solo lugar.
          </p>

          <div className="flex flex-wrap gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className={`flex items-center gap-2 border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000] ${stat.className}`}
              >
                {stat.label === 'Atención' && (
                  <span className="h-3 w-3 rounded-full border border-black bg-[#38B000]" />
                )}
                <span className="text-base font-black">{stat.value}</span>
                {stat.label !== 'Atención' && (
                  <span className="text-xs font-bold uppercase">{stat.label}</span>
                )}
              </div>
            ))}
          </div>

          <SectionLink
            sectionId="especialidades"
            className="mt-1 inline-flex items-center gap-3 border-2 border-black bg-black px-7 py-3 text-sm font-black uppercase tracking-wider text-white shadow-[6px_6px_0px_0px_#FFD600] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Explorar Áreas
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
              <path d="M12 5v14m-7-7 7 7 7-7" />
            </svg>
          </SectionLink>
        </div>

        <div className="flex justify-center lg:col-span-6">
          <div className="relative w-full max-w-md border-4 border-black bg-[#72EFDD] p-4 shadow-[10px_10px_0px_0px_#000]">
            <div className="absolute -left-5 -top-5 z-20 flex h-14 w-14 items-center justify-center rounded-full border-4 border-black bg-[#FFD600] shadow-[4px_4px_0px_0px_#000]">
              <Icon name="cross" className="h-7 w-7 text-[#FF4D6D]" />
            </div>
            <div className="aspect-[4/3] overflow-hidden border-4 border-black bg-white">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                alt="Consulta médica en VITA+ Centro Médico"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="mt-3 flex items-center justify-between border-2 border-black bg-white px-3 py-2">
              <span className="text-xs font-black uppercase tracking-wide">
                Diagnóstico Digital
              </span>
              <span className="border border-black bg-[#80ED99] px-2 py-0.5 text-[11px] font-black uppercase">
                En vivo
              </span>
            </div>
            <div className="absolute -bottom-5 -right-4 z-20 flex rotate-3 items-center gap-3 border-4 border-black bg-white px-4 py-2 shadow-[5px_5px_0px_0px_#000]">
              <svg className="h-5 w-9 text-[#FF4D6D]" viewBox="0 0 60 30" fill="none" aria-hidden="true">
                <path d="M2 15h12L20 4l8 22 7-16 5 5h16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-black">72 BPM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="relative flex min-h-[100svh] snap-start flex-col items-center justify-center overflow-hidden border-t-4 border-black bg-[#72EFDD] px-5 pb-20 pt-24 md:px-12"
    >
      <svg className="pointer-events-none absolute right-12 top-20 hidden h-20 w-20 md:block" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="35" fill="#FFD600" stroke="black" strokeWidth="4" />
        <circle cx="50" cy="50" r="15" fill="#72EFDD" stroke="black" strokeWidth="4" />
      </svg>
      <svg className="pointer-events-none absolute bottom-16 left-8 hidden h-16 w-16 md:block" viewBox="0 0 80 80" aria-hidden="true">
        <rect x="15" y="15" width="50" height="50" fill="#FF4D6D" stroke="black" strokeWidth="4" transform="rotate(15 40 40)" />
      </svg>

      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-5">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <SectionHeading
            number="02"
            title="Áreas Médicas"
            description="Tecnología clínica y atención personalizada en cada consulta."
          />
          <div className="hidden items-center gap-3 border-2 border-black bg-white px-3 py-1.5 shadow-[4px_4px_0px_0px_#000] sm:flex">
            <img
              src={doctors[0].image}
              alt=""
              className="h-9 w-9 rounded-full border-2 border-black object-cover"
              loading="lazy"
            />
            <div className="leading-tight">
              <p className="text-xs font-black uppercase">{doctors[0].name}</p>
              <p className="text-[11px] font-bold text-neutral-600">
                Dirección Médica · +20 Especialistas
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {specialties.map((specialty) => (
            <SpecialtyCard key={specialty.name} specialty={specialty} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section
      id="equipo"
      className="relative flex min-h-[100svh] snap-start flex-col items-center justify-center overflow-hidden border-t-4 border-black bg-[#C8B6FF] px-5 pb-20 pt-24 md:px-12"
    >
      <svg className="pointer-events-none absolute left-8 top-20 hidden h-10 w-20 md:block" viewBox="0 0 120 40" fill="none" aria-hidden="true">
        <path d="m5 30 15-20 15 20 15-20 15 20 15-20 15 20 15-20" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="pointer-events-none absolute bottom-16 right-10 hidden h-16 w-16 md:block" viewBox="0 0 80 80" aria-hidden="true">
        <polygon points="40,8 72,68 8,68" fill="#FFD600" stroke="black" strokeWidth="4" />
      </svg>

      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <SectionHeading
            number="03"
            title="Equipo Médico"
            description="Especialistas certificados con trato cercano y tecnología de punta."
          />
          <span className="hidden rotate-2 border-2 border-black bg-[#FFD600] px-4 py-1.5 text-xs font-black uppercase shadow-[4px_4px_0px_0px_#000] sm:inline-block">
            +20 Doctores
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.name} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlansSection() {
  return (
    <section
      id="planes"
      className="relative flex min-h-[100svh] snap-start flex-col items-center justify-center overflow-hidden border-t-4 border-black bg-[#FFFDF5] px-5 pb-20 pt-24 md:px-12"
    >
      <svg className="pointer-events-none absolute right-10 top-20 hidden h-20 w-20 md:block" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        {[20, 50, 80].map((x) =>
          [20, 50].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#FF4D6D" />
          )),
        )}
      </svg>
      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-5">
        <SectionHeading
          number="04"
          title="Planes VITA+"
          description="Membresías mensuales sin letras pequeñas ni tiempos de espera."
          badgeClassName="border-2 border-black bg-[#FF4D6D] text-white"
        />
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {healthPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TechnologySection() {
  return (
    <section
      id="tecnologia"
      className="relative flex min-h-[100svh] snap-start items-center justify-center overflow-hidden border-t-4 border-black bg-[#80ED99] px-5 pb-20 pt-24 md:px-12"
    >
      <svg className="pointer-events-none absolute bottom-16 right-8 hidden h-20 w-20 md:block" viewBox="0 0 80 80" aria-hidden="true">
        <rect x="15" y="15" width="50" height="50" fill="#FFD600" stroke="black" strokeWidth="4" transform="rotate(12 40 40)" />
      </svg>
      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Card className="bg-[#FFFDF5] p-4 shadow-[8px_8px_0px_0px_#000]">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-black">
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80"
                alt="Tecnología médica moderna"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute left-3 top-3 border-2 border-black bg-[#FF4D6D] px-3 py-1 text-xs font-black uppercase text-white shadow-[3px_3px_0px_0px_#000]">
                Equipamiento 2026
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm font-black uppercase">Salas Digitales</span>
              <span className="border-2 border-black bg-[#FFD600] px-2.5 py-0.5 text-xs font-bold">
                Certificación ISO
              </span>
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-6">
          <SectionHeading
            number="05"
            title="Clínica Inteligente"
            description="Infraestructura diseñada para darte diagnósticos precisos en minutos."
            badgeClassName="bg-black text-[#80ED99]"
          />
          <div className="grid grid-cols-2 gap-3">
            {technologyFeatures.map((feature) => (
              <Card
                key={feature.name}
                className="bg-[#FFFDF5] p-4 shadow-[4px_4px_0px_0px_#000]"
              >
                <span className={`mb-2 inline-block border border-black px-2 py-0.5 text-[10px] font-black uppercase ${feature.labelClassName}`}>
                  {feature.category}
                </span>
                <h3 className="text-sm font-black uppercase">{feature.name}</h3>
                <p className="mt-1 text-xs font-medium text-neutral-700">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AppointmentSection() {
  const [selectedTime, setSelectedTime] = useState(appointmentTimes[0])
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="cita"
      className="relative flex min-h-[100svh] snap-start items-center justify-center overflow-hidden border-t-4 border-black bg-[#FFD600] px-5 pb-20 pt-24 md:px-12"
    >
      <svg className="pointer-events-none absolute left-8 top-20 hidden h-20 w-20 md:block" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path d="m10 20 20 20-20 20m30-40 20 20-20 20" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
        <Card className="flex flex-col gap-4 bg-[#FFFDF5] p-5 shadow-[8px_8px_0px_0px_#000] md:p-7">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black uppercase">Tu Cita</h2>
              <p className="mt-0.5 text-xs font-bold text-neutral-700">
                Elige un horario y confirma tu solicitud.
              </p>
            </div>
            <span className="-rotate-3 border-2 border-black bg-[#FF4D6D] px-3 py-1 text-xs font-black uppercase text-white">
              Hoy
            </span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <fieldset>
              <legend className="mb-2 text-xs font-black uppercase">Horario</legend>
              <div className="grid grid-cols-3 gap-2">
                {appointmentTimes.map((time, index) => (
                  <button
                    key={time}
                    type="button"
                    aria-pressed={selectedTime === time}
                    onClick={() => {
                      setSelectedTime(time)
                      setSubmitted(false)
                    }}
                    className={`border-2 border-black py-2 text-sm font-black shadow-[3px_3px_0px_0px_#000] transition-colors hover:bg-[#3A86FF] hover:text-white ${
                      selectedTime === time
                        ? 'bg-[#72EFDD]'
                        : index === 2
                          ? 'bg-[#C8B6FF]'
                          : 'bg-white'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="sr-only" htmlFor="appointment-name">
              Nombre completo
            </label>
            <input
              id="appointment-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Nombre completo"
              required
              onChange={() => setSubmitted(false)}
              className="w-full border-2 border-black bg-white px-4 py-2 text-sm font-bold placeholder:text-neutral-600 focus:bg-[#72EFDD] focus:outline-none"
            />
            <label className="sr-only" htmlFor="appointment-phone">
              Teléfono o WhatsApp
            </label>
            <input
              id="appointment-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Teléfono / WhatsApp"
              required
              onChange={() => setSubmitted(false)}
              className="w-full border-2 border-black bg-white px-4 py-2 text-sm font-bold placeholder:text-neutral-600 focus:bg-[#72EFDD] focus:outline-none"
            />
            <label className="sr-only" htmlFor="appointment-specialty">
              Especialidad
            </label>
            <select
              id="appointment-specialty"
              name="specialty"
              defaultValue=""
              required
              onChange={() => setSubmitted(false)}
              className="w-full border-2 border-black bg-white px-4 py-2 text-sm font-bold focus:bg-[#72EFDD] focus:outline-none"
            >
              <option value="" disabled>
                Selecciona una especialidad
              </option>
              {specialties.map((specialty) => (
                <option key={specialty.name} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>

            <input type="hidden" name="time" value={selectedTime} />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 border-2 border-black bg-[#FF4D6D] py-3 text-sm font-black uppercase tracking-wider text-white shadow-[5px_5px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Reservar Ahora
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </button>
            <p className="min-h-5 text-xs font-bold" role="status" aria-live="polite">
              {submitted
                ? `Solicitud validada para las ${selectedTime}. Esta demostración no envía datos.`
                : 'La reserva es una demostración local; no se envían datos.'}
            </p>
          </form>
        </Card>

        <Card className="flex flex-col gap-4 bg-[#C8B6FF] p-5 shadow-[8px_8px_0px_0px_#000]">
          <div className="relative h-48 overflow-hidden border-4 border-black bg-white md:h-52">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80"
              alt="Instalaciones de VITA+ Centro Médico"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <span className="absolute left-3 top-3 border-2 border-black bg-[#FFD600] px-3 py-1 text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000]">
              Sede Central
            </span>
          </div>
          <div className="flex flex-col gap-1 border-2 border-black bg-white p-3">
            <h3 className="text-sm font-black uppercase">
              Visítanos sin cita previa en Urgencias
            </h3>
            <p className="text-xs font-bold text-neutral-700">
              Estacionamiento gratuito y acceso directo para ambulancias.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 border-2 border-black bg-white px-3 py-1.5 shadow-[3px_3px_0px_0px_#000]">
              <Icon name="pin" className="h-4 w-4 text-[#FF4D6D]" />
              <span className="text-xs font-black uppercase">Av. Central 420</span>
            </div>
            <a
              href="tel:8008482"
              className="flex items-center gap-2 border-2 border-black bg-[#FFD600] px-3 py-1.5 text-black shadow-[3px_3px_0px_0px_#000]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-xs font-black">800-8482</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main className="snap-y snap-proximity">
      <HeroSection />
      <SpecialtiesSection />
      <TeamSection />
      <PlansSection />
      <TechnologySection />
      <AppointmentSection />
    </main>
  )
}
