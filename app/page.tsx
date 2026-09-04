import { ArrowRight, CalendarDays, CheckCircle2, ClipboardCheck, Instagram, Menu, ShieldCheck, Smile, Sparkles, Stethoscope } from 'lucide-react'

const services = [
  { icon: Sparkles, title: 'Diseño de Sonrisa', text: 'Planificación digital para crear sonrisas estéticas, naturales y armoniosas.' },
  { icon: Smile, title: 'Carillas de Porcelana', text: 'Transformamos tu sonrisa con carillas ultrafinas y altamente estéticas.' },
  { icon: Stethoscope, title: 'Implantes Dentales', text: 'Recupera tu confianza con implantes seguros, duraderos y estéticamente perfectos.' },
  { icon: Smile, title: 'Blanqueamiento Dental', text: 'Resultados visibles y seguros para una sonrisa más blanca y luminosa.' },
  { icon: Sparkles, title: 'Ortodoncia Estética', text: 'Alineamos tu sonrisa con opciones discretas, cómodas y efectivas.' },
]
const team = [
  ['JM', 'Dr. Javier Morales', 'Director Clínico', 'Rehabilitación Oral e Implantología', 'C.O.P 12345'],
  ['CR', 'Dra. Camila Rojas', 'Estética Dental', 'Diseño de Sonrisa y Carillas', 'C.O.P 23456'],
  ['SA', 'Dr. Sebastián Arce', 'Ortodoncia', 'Ortodoncia Invisible', 'C.O.P 34567'],
  ['VP', 'Dra. Valentina Paz', 'Odontología General', 'Odontología General y Estética', 'C.O.P 45678'],
]
const steps = [
  { icon: CalendarDays, title: 'Agenda tu consulta', text: 'Elige el día y horario que mejor se adapten a ti.' },
  { icon: Smile, title: 'Evaluación personalizada', text: 'Realizamos un diagnóstico completo con tecnología avanzada.' },
  { icon: ClipboardCheck, title: 'Plan de tratamiento', text: 'Diseñamos un plan a tu medida, explicado paso a paso.' },
  { icon: CheckCircle2, title: 'Transformamos tu sonrisa', text: 'Ejecutamos tu tratamiento con precisión y cuidado.' },
  { icon: Sparkles, title: 'Resultados que te acompañan', text: 'Seguimiento personalizado para mantener tu sonrisa radiante.' },
]

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="logo" href="#inicio" aria-label="Clínica Aurea, inicio"><span>◡</span> Clínica Aurea</a>
      <nav aria-label="Navegación principal"><a className="active" href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#equipo">Nuestro Equipo</a><a href="#nosotros">Sobre Nosotros</a><a href="#contacto">Contacto</a></nav>
      <a className="button header-button" href="#contacto">Agendar Consulta <CalendarDays size={17}/></a><button className="menu-button" aria-label="Abrir menú"><Menu/></button>
    </header>
    <section className="hero" id="inicio">
      <div className="hero-copy"><p className="eyebrow">Clínica dental estética</p><h1>Diseñamos sonrisas<br/>que elevan tu confianza</h1><div className="gold-line"/><p className="lead">Odontología estética avanzada en un entorno diseñado para tu bienestar. Resultados naturales, funcionales y armónicos con la más alta tecnología.</p><a className="button" href="#contacto"><Smile size={19}/> Agendar Consulta</a></div>
      <div className="hero-art" role="img" aria-label="Consultorio dental moderno y luminoso"><div className="sun-arch"/><div className="plant"><i/><i/><i/></div><div className="lamp"><span/></div><div className="chair"><span className="headrest"/><span className="seat"/><span className="base"/></div><div className="cabinet"/><div className="art-sign"><Smile size={26}/><span>Clínica<br/>Aurea</span></div></div>
    </section>
    <section className="services section" id="servicios"><div className="section-intro"><p className="eyebrow">Nuestros servicios</p><h2>Soluciones estéticas<br/>para cada sonrisa</h2><p>Tratamientos personalizados con enfoque integral, tecnología de vanguardia y materiales de la más alta calidad.</p><a className="text-link" href="#contacto">Ver todos los servicios <ArrowRight size={15}/></a></div><div className="service-grid">{services.map(({icon:Icon,title,text})=><article className="service-card" key={title}><div className="icon-ring"><Icon/></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="team section" id="equipo"><div className="section-intro"><p className="eyebrow">Nuestro equipo</p><h2>Especialistas que<br/>cuidan de ti</h2><p>Profesionales altamente capacitados comprometidos con tu salud, estética y bienestar.</p></div><div className="team-grid">{team.map(([initials,name,role,specialty,license],i)=><article className="profile" key={name}><div className={`avatar avatar-${i}`}>{initials}</div><div><h3>{name}</h3><strong>{role}</strong><p>{specialty}</p><small>{license}</small><Instagram size={14}/></div></article>)}</div></section>
    <section className="process section" id="nosotros"><div className="section-intro"><p className="eyebrow">Nuestro proceso</p><h2>Así es tu experiencia<br/>con nosotros</h2><p>Un proceso simple, transparente y personalizado para lograr la sonrisa que mereces.</p></div><div className="steps">{steps.map(({icon:Icon,title,text},i)=><article className="step" key={title}><div className="step-top"><span className="number">0{i+1}</span><span className="step-icon"><Icon/></span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="contact" id="contacto"><div><p className="eyebrow light">Tu sonrisa empieza aquí</p><h2>Conversemos sobre la sonrisa<br/>que siempre has querido</h2></div><a className="button button-light" href="tel:+34915550182"><ShieldCheck size={19}/> +34 915 550 182</a></section>
    <footer><span>© 2026 Clínica Aurea</span><span>Av. Velázquez 114, Madrid · Lun–Vie 9:00–20:00</span></footer>
  </main>
}
