import { ArrowRight, CalendarDays, CheckCircle2, ClipboardCheck, Instagram, Linkedin, Menu, ShieldCheck, Smile, Sparkles } from 'lucide-react'

const services = [
  { kind: 'tooth', title: 'Diseño de Sonrisa', text: 'Planificación digital para crear sonrisas estéticas, naturales y armoniosas.' },
  { kind: 'veneer', title: 'Carillas de Porcelana', text: 'Transformamos tu sonrisa con carillas ultrafinas y altamente estéticas.' },
  { kind: 'implant', title: 'Implantes Dentales', text: 'Recupera tu confianza con implantes seguros, duraderos y estéticamente perfectos.' },
  { kind: 'shine', title: 'Blanqueamiento Dental', text: 'Resultados visibles y seguros para una sonrisa más blanca y luminosa.' },
  { kind: 'sparkles', title: 'Ortodoncia Estética', text: 'Alineamos tu sonrisa con opciones discretas, cómodas y efectivas.' },
]
const team = [
  ['Dr. Javier Morales', 'Director Clínico', 'Especialista en Rehabilitación Oral e Implantología', 'C.O.P 12345'],
  ['Dra. Camila Rojas', 'Estética Dental', 'Diseño de Sonrisa y Carillas', 'C.O.P 23456'],
  ['Dr. Sebastián Arce', 'Ortodoncia', 'Ortodoncia Invisible', 'C.O.P 34567'],
  ['Dra. Valentina Paz', 'Odontología General', 'Odontología General y Estética', 'C.O.P 45678'],
]
const steps = [
  { icon: CalendarDays, title: 'Agenda tu consulta', text: 'Elige el día y horario que mejor se adapten a ti. Estamos aquí para escucharte.' },
  { icon: Smile, title: 'Evaluación personalizada', text: 'Realizamos un diagnóstico completo con tecnología avanzada.' },
  { icon: ClipboardCheck, title: 'Plan de tratamiento', text: 'Diseñamos un plan a tu medida, explicado paso a paso y sin sorpresas.' },
  { icon: CheckCircle2, title: 'Transformamos tu sonrisa', text: 'Ejecutamos tu tratamiento con precisión, cuidado y enfoque en la estética.' },
  { icon: Sparkles, title: 'Resultados que te acompañan', text: 'Seguimiento personalizado para mantener tu sonrisa radiante a largo plazo.' },
]

function DentalIcon({ kind }: { kind: string }) {
  if (kind === 'implant') return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M16 13c1-7 15-7 16 0 0 4-3 5-3 9l-2 15h-6l-2-15c0-4-3-5-3-9Z"/><path d="M19 25h10M20 29h8M21 33h6"/></svg>
  if (kind === 'sparkles') return <Sparkles />
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M13 11c5-4 8 0 11 0s6-4 11 0c5 4 1 12-1 16-2 3-2 10-5 10-4 0-2-10-5-10s-1 10-5 10c-3 0-3-7-5-10-2-4-6-12-1-16Z"/>{kind === 'veneer' && <path d="M17 11c1 4 3 6 7 6s6-2 7-6"/>}{kind === 'shine' && <path d="m28 18 3 3 6-6"/>}</svg>
}

export default function Home() {
  return <main>
    <header className="site-header"><a className="logo" href="#inicio">Project 1788484010061</a><nav aria-label="Navegación principal"><a className="active" href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#equipo">Nuestro Equipo</a><a href="#nosotros">Sobre Nosotros</a><a href="#contacto">Contacto</a></nav><a className="button header-button" href="#contacto">Agendar Consulta <CalendarDays size={17}/></a><button className="menu-button" aria-label="Abrir menú"><Menu/></button></header>
    <section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow">Clínica dental estética</p><h1>Diseñamos sonrisas<br/>que elevan tu confianza</h1><div className="gold-line"/><p className="lead">Odontología estética avanzada en un entorno diseñado para tu bienestar. Resultados naturales, funcionales y armónicos con la más alta tecnología.</p><a className="button" href="#contacto"><Smile size={19}/> Agendar Consulta</a></div><div className="hero-photo" role="img" aria-label="Consultorio dental moderno, cálido y luminoso" /></section>
    <section className="services section" id="servicios"><div className="section-intro"><p className="eyebrow">Nuestros servicios</p><h2>Soluciones estéticas<br/>para cada sonrisa</h2><p>Tratamientos personalizados con enfoque integral, tecnología de vanguardia y materiales de la más alta calidad.</p><a className="text-link" href="#contacto">Ver todos los servicios <ArrowRight size={15}/></a></div><div className="service-grid">{services.map(({kind,title,text})=><article className="service-card" key={title}><div className="icon-ring"><DentalIcon kind={kind}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="team section" id="equipo"><div className="section-intro"><p className="eyebrow">Nuestro equipo</p><h2>Especialistas que<br/>cuidan de ti</h2><p>Profesionales altamente capacitados comprometidos con tu salud, estética y bienestar.</p></div><div className="team-grid">{team.map(([name,role,specialty,license],i)=><article className="profile" key={name}><div className={`portrait portrait-${i}`} role="img" aria-label={`Retrato de ${name}`}/><div><h3>{name}</h3><strong>{role}</strong><p>{specialty}</p><small>{license}</small><span className="socials"><Instagram/><Linkedin/></span></div></article>)}</div></section>
    <section className="process section" id="nosotros"><div className="section-intro"><p className="eyebrow">Nuestro proceso</p><h2>Así es tu experiencia<br/>con nosotros</h2><p>Un proceso simple, transparente y personalizado para lograr la sonrisa que mereces.</p></div><div className="steps">{steps.map(({icon:Icon,title,text},i)=><article className="step" key={title}><div className="step-top"><span className="number">0{i+1}</span><span className="step-icon"><Icon/></span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="contact" id="contacto"><div><p className="eyebrow light">Tu sonrisa empieza aquí</p><h2>Conversemos sobre la sonrisa<br/>que siempre has querido</h2></div><a className="button button-light" href="tel:+34915550182"><ShieldCheck size={19}/> +34 915 550 182</a></section><footer><span>© 2026 Project 1788484010061</span><span>Av. Velázquez 114, Madrid · Lun–Vie 9:00–20:00</span></footer>
  </main>
}
