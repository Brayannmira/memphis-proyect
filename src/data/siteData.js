export const navigationLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'especialidades', label: 'Áreas' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'planes', label: 'Planes' },
  { id: 'tecnologia', label: 'Clínica' },
  { id: 'cita', label: 'Cita' },
]

export const heroStats = [
  { value: '24/7', label: 'Atención', className: 'bg-white' },
  { value: '+15', label: 'Áreas', className: 'bg-[#C8B6FF]' },
  { value: '15 min', label: 'Espera máx.', className: 'bg-[#FF4D6D] text-white' },
]

export const specialties = [
  {
    name: 'Cardiología',
    description: 'Electrocardiogramas, ecocardio y chequeo preventivo.',
    icon: 'heart',
    className: 'bg-[#FF4D6D] text-white',
    iconClassName: 'bg-white text-[#FF4D6D]',
  },
  {
    name: 'Pediatría',
    description: 'Control de crecimiento, vacunas y cuidado infantil.',
    icon: 'star',
    className: 'bg-[#FFD600]',
    iconClassName: 'rotate-3 rounded-2xl bg-white text-[#3A86FF]',
  },
  {
    name: 'Odontología',
    description: 'Limpieza dental, ortodoncia y estética sin dolor.',
    icon: 'tooth',
    className: 'bg-[#FFFDF5]',
    iconClassName: 'rounded-full bg-[#72EFDD] text-black',
  },
  {
    name: 'Laboratorio',
    description: 'Análisis clínicos con resultados digitales el mismo día.',
    icon: 'flask',
    className: 'bg-[#C8B6FF]',
    iconClassName: '-rotate-3 bg-[#FFD600] text-black',
  },
  {
    name: 'Urgencias',
    description: 'Atención rápida las 24 horas todos los días del año.',
    icon: 'cross',
    className: 'bg-[#3A86FF] text-white',
    iconClassName: 'rounded-full bg-white text-[#FF4D6D]',
  },
  {
    name: 'Oftalmología',
    description: 'Examen visual completo y salud ocular avanzada.',
    icon: 'eye',
    className: 'bg-[#80ED99]',
    iconClassName: 'rounded-2xl bg-white text-black',
  },
]

export const doctors = [
  {
    name: 'Dra. Laura Méndez',
    specialty: 'Cardiología Clínica',
    experience: '12 años exp.',
    description: 'Especialista en diagnóstico cardiovascular no invasivo y prevención.',
    image: 'https://images.unsplash.com/photo-1673865641073-4479f93a7776?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Dra. Laura Méndez',
    imageBackground: 'bg-[#72EFDD]',
    experienceBackground: 'bg-[#FFD600]',
    specialtyColor: 'text-[#FF4D6D]',
  },
  {
    name: 'Dr. Carlos Rivas',
    specialty: 'Medicina Interna',
    experience: '15 años exp.',
    description: 'Atención integral de adultos y control de enfermedades crónicas.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Dr. Carlos Rivas',
    imageBackground: 'bg-[#FFD600]',
    experienceBackground: 'bg-[#72EFDD]',
    specialtyColor: 'text-[#3A86FF]',
  },
  {
    name: 'Dra. Sofía Torres',
    specialty: 'Pediatría General',
    experience: '9 años exp.',
    description: 'Seguimiento infantil, vacunación y urgencias pediátricas.',
    image: 'https://images.unsplash.com/photo-1666887360364-4919ae373fcb?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Dra. Sofía Torres',
    imageBackground: 'bg-[#FF4D6D]',
    experienceBackground: 'bg-[#80ED99]',
    specialtyColor: 'text-[#38B000]',
  },
]

export const healthPlans = [
  {
    name: 'Esencial',
    price: '$29',
    className: 'bg-[#72EFDD]',
    features: [
      'Consultas generales ilimitadas',
      'Telemedicina 24/7',
      '20% dto. en laboratorio',
    ],
  },
  {
    name: 'Familiar',
    price: '$59',
    className: 'bg-[#FFD600] md:-translate-y-2',
    featured: true,
    features: [
      'Hasta 4 integrantes',
      'Pediatría y Odontología incluidas',
      'Urgencias 24H sin copago',
    ],
  },
  {
    name: 'Preventivo+',
    price: '$45',
    className: 'bg-[#C8B6FF]',
    features: [
      'Chequeo anual completo',
      'Cardiología y Oftalmología',
      'Análisis clínicos incluidos',
    ],
  },
]

export const technologyFeatures = [
  {
    category: 'Imagen',
    name: 'Resonancia 3T',
    description: 'Alta definición en tiempo récord.',
    labelClassName: 'bg-[#FFD600]',
  },
  {
    category: 'App',
    name: 'Historial Cloud',
    description: 'Tus recetas y estudios en tu móvil.',
    labelClassName: 'bg-[#72EFDD]',
  },
  {
    category: 'Lab',
    name: 'Resultados Express',
    description: 'Entrega digital en menos de 3 horas.',
    labelClassName: 'bg-[#C8B6FF]',
  },
  {
    category: '24H',
    name: 'Farmacia Propia',
    description: 'Surtido inmediato al salir de consulta.',
    labelClassName: 'bg-[#FF4D6D] text-white',
  },
]

export const appointmentTimes = ['09:00', '11:30', '16:00']
