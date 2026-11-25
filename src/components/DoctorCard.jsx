import Card from './Card.jsx'

export default function DoctorCard({ doctor }) {
  return (
    <Card className="flex flex-col gap-3 bg-[#FFFDF5] p-4 shadow-[6px_6px_0px_0px_#000]">
      <div className={`relative h-44 overflow-hidden border-2 border-black ${doctor.imageBackground}`}>
        <img
          src={doctor.image}
          alt={doctor.imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className={`absolute bottom-2 left-2 border-2 border-black px-2.5 py-0.5 text-[11px] font-black uppercase ${doctor.experienceBackground}`}>
          {doctor.experience}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-black uppercase">{doctor.name}</h3>
        <p className={`text-xs font-bold uppercase ${doctor.specialtyColor}`}>
          {doctor.specialty}
        </p>
        <p className="mt-1 text-xs font-medium text-neutral-700">
          {doctor.description}
        </p>
      </div>
    </Card>
  )
}
