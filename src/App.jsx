import React, { useRef, useState, useEffect, forwardRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import {
  Download, Mail, MapPin, Phone, Github,
  Server, Cloud, ShieldCheck, Activity, Users, Zap,
  ChevronDown, ChevronUp, Calendar, Award, Code2,
  Cpu, Database, TestTube2, Sparkles, Menu, X,
  Coffee, Terminal, Braces, LayoutGrid, Smartphone,
  ArrowUpRight,
} from 'lucide-react'
import { CV_DATA } from './data'

const ICON_MAP = { Server, Cloud, ShieldCheck, Activity, Users, Zap }

const BADGE_BG = {
  blue:    { bg: 'rgba(99,102,241,0.1)',  color: '#a5b4fc', border: 'rgba(99,102,241,0.2)'  },
  violet:  { bg: 'rgba(139,92,246,0.1)', color: '#c4b5fd', border: 'rgba(139,92,246,0.2)' },
  sky:     { bg: 'rgba(6,182,212,0.1)',  color: '#67e8f9', border: 'rgba(6,182,212,0.2)'  },
  teal:    { bg: 'rgba(20,184,166,0.1)', color: '#5eead4', border: 'rgba(20,184,166,0.2)' },
  amber:   { bg: 'rgba(245,158,11,0.1)', color: '#fcd34d', border: 'rgba(245,158,11,0.2)' },
  emerald: { bg: 'rgba(16,185,129,0.1)', color: '#6ee7b7', border: 'rgba(16,185,129,0.2)' },
  rose:    { bg: 'rgba(244,63,94,0.1)',  color: '#fda4af', border: 'rgba(244,63,94,0.2)'  },
  purple:  { bg: 'rgba(168,85,247,0.1)', color: '#d8b4fe', border: 'rgba(168,85,247,0.2)' },
}

const CAT_ICON_MAP = {
  'Core Languages & Runtimes':    Cpu,
  'Frameworks & APIs':            Code2,
  'Cloud & Infrastructure':       Cloud,
  'CI/CD & DevOps':              Zap,
  'Observability & Security':     ShieldCheck,
  'Databases':                    Database,
  'Testing':                      TestTube2,
  'AI & Productivity Tools':      Sparkles,
}

const HERO_TECHS = [
  { name: 'Java',    Icon: Coffee,     color: '#f89820' },
  { name: 'Golang',  Icon: Terminal,   color: '#00acd7' },
  { name: 'Python',  Icon: Braces,     color: '#3776ab' },
  { name: 'ReactJS', Icon: LayoutGrid, color: '#61dafb' },
  { name: 'VueJS',   Icon: LayoutGrid, color: '#42b883' },
  { name: 'Native',  Icon: Smartphone, color: '#a78bfa' },
]

// ─────────────────────────────────────────────────────────────────────────────
//  PRINT / PDF COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const PrintCV = forwardRef((_, ref) => {
  const d = CV_DATA
  return (
    <div ref={ref} className="pcv">
      <div className="pcv-header">
        <h1 className="pcv-name">{d.name}</h1>
        <p className="pcv-title">{d.title}</p>
        <div className="pcv-contact-row">
          {d.contact.email    && <span>✉ {d.contact.email}</span>}
          {d.contact.phone    && <span>✆ {d.contact.phone}</span>}
          {d.contact.location && <span>⌖ {d.contact.location}</span>}
          {d.contact.github   && <span>⌥ {d.contact.github}</span>}
        </div>
      </div>
      <div className="pcv-section">
        <div className="pcv-section-title">Professional Summary</div>
        <ul className="pcv-summary-list">
          {d.summary.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
      <div className="pcv-section">
        <div className="pcv-section-title">Technical Skills</div>
        {d.techCategories.map((cat, i) => (
          <div key={i} className="pcv-skill-row">
            <span className="pcv-skill-cat">{cat.category}:</span>
            {cat.items.map((item, j) => <span key={j} className="pcv-skill-badge">{item}</span>)}
          </div>
        ))}
      </div>
      <div className="pcv-section">
        <div className="pcv-section-title">Professional Experience</div>
        {d.experience.map((exp, ei) => (
          <div key={ei} style={{ marginBottom: '12px' }}>
            <p className="pcv-job-header">
              {exp.company} &nbsp;|&nbsp; {exp.role} &nbsp;|&nbsp; {exp.period}
            </p>
            {exp.projects.map((proj, i) => (
              <div key={i} className="pcv-project">
                <div className="pcv-project-top">
                  <span className="pcv-project-name">{proj.name}</span>
                  <span className="pcv-project-period">{proj.period}</span>
                </div>
                <p className="pcv-project-desc">{proj.description}</p>
                {proj.responsibilities && (
                  <ul className="pcv-bullets">
                    {proj.responsibilities.map((r, j) => <li key={j}>{r}</li>)}
                  </ul>
                )}
                <p className="pcv-tech-line"><strong>Technologies:</strong> {proj.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="pcv-section">
        <div className="pcv-section-title">Certifications</div>
        {d.certifications.map((cert, i) => (
          <p key={i} className="pcv-cert-row">
            {cert.period} — <strong>{cert.institution}</strong>
            {cert.subject ? ` — ${cert.subject}` : ''}
          </p>
        ))}
      </div>
    </div>
  )
})
PrintCV.displayName = 'PrintCV'

// ─────────────────────────────────────────────────────────────────────────────
//  Scroll-fade hook
// ─────────────────────────────────────────────────────────────────────────────
function useFadeIn(ref) {
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current.classList.add('visible') },
      { threshold: 0.08 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
}

// ─────────────────────────────────────────────────────────────────────────────
//  SIDEBAR
// ─────────────────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'about',          label: 'About'          },
  { id: 'experience',     label: 'Experience'     },
  { id: 'tech-stack',     label: 'Tech Stack'     },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact',        label: 'Contact'        },
]

function SidebarContent({ activeSection, onNavClick, onPrint }) {
  const c = CV_DATA.contact
  const contactLinks = [
    { Icon: Mail,   value: c.email,    href: `mailto:${c.email}`,          title: c.email    },
    { Icon: Phone,  value: c.phone,    href: `tel:${c.phone}`,             title: c.phone    },
    { Icon: MapPin, value: c.location, href: null,                          title: c.location },
    { Icon: Github, value: c.github,   href: c.github ? `https://${c.github}` : null, title: c.github },
  ].filter(i => i.value)

  return (
    <div className="flex flex-col h-full px-5 py-7 overflow-y-auto">

      {/* Profile block */}
      <div className="flex flex-col items-center text-center mb-7">
        <div className="relative mb-4">
          <div
            className="w-[88px] h-[88px] rounded-2xl overflow-hidden"
            style={{ border: '2px solid rgba(99,102,241,0.35)', boxShadow: '0 0 20px rgba(99,102,241,0.15)' }}
          >
            <img src="/avatar.png" alt="Tran Quoc Dung" className="w-full h-full object-cover object-top" />
          </div>
          {/* Online dot */}
          <div
            className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500"
            style={{ border: '2px solid #070c18', boxShadow: '0 0 6px rgba(16,185,129,0.6)' }}
          />
        </div>
        <h1 className="text-white font-black text-sm leading-tight mb-1 tracking-tight">
          {CV_DATA.name}
        </h1>
        <p
          className="text-[11px] font-semibold leading-snug px-2"
          style={{
            background: 'linear-gradient(90deg, #818cf8, #67e8f9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {CV_DATA.title}
        </p>
        <div
          className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-emerald-400"
          style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to work
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 mb-7">
        {CV_DATA.stats.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl px-3 py-2.5 text-center"
            style={{ background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.13)' }}
          >
            <p
              className="font-black text-lg leading-none"
              style={{
                background: 'linear-gradient(135deg, #a5b4fc, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {stat.value}
            </p>
            <p className="text-[9px] text-slate-600 font-medium mt-1 leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Nav */}
      <nav className="mb-7">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-700 mb-2 px-2">Menu</p>
        <ul className="space-y-0.5">
          {NAV_ITEMS.map(({ id, label }) => {
            const active = activeSection === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={onNavClick}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group"
                  style={active ? {
                    background: 'rgba(99,102,241,0.12)',
                    color: '#a5b4fc',
                  } : {
                    color: '#475569',
                  }}
                >
                  <span
                    className="w-1 h-4 rounded-full transition-all duration-200"
                    style={{ background: active ? 'linear-gradient(to bottom, #6366f1, #06b6d4)' : 'rgba(255,255,255,0.06)' }}
                  />
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Core tech chips */}
      <div className="mb-7">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-700 mb-2 px-1">Core Tech</p>
        <div className="flex flex-wrap gap-1.5">
          {HERO_TECHS.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="flex items-center gap-1.5 px-2 py-1 rounded-lg text-[10px] font-medium text-slate-500"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <Icon size={10} style={{ color }} />
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mb-7">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-700 mb-2 px-1">Contact</p>
        <div className="space-y-2">
          {contactLinks.map(({ Icon, href, title }, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Icon size={11} style={{ color: '#6366f1', flexShrink: 0 }} />
              {href ? (
                <a href={href} className="text-slate-500 text-[11px] hover:text-indigo-400 transition-colors truncate" title={title}>
                  {title}
                </a>
              ) : (
                <span className="text-slate-500 text-[11px] truncate">{title}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Download */}
      <button
        onClick={onPrint}
        className="no-print w-full py-2.5 rounded-xl text-white text-[13px] font-bold flex items-center justify-center gap-2 mt-auto"
        style={{
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
        }}
      >
        <Download size={13} />
        Download CV
      </button>
    </div>
  )
}

function Sidebar({ activeSection, onPrint }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside
        className="hidden lg:block fixed left-0 top-0 h-screen w-64 z-40 no-print"
        style={{ background: '#070c18', borderRight: '1px solid rgba(255,255,255,0.05)' }}
      >
        <SidebarContent
          activeSection={activeSection}
          onNavClick={() => {}}
          onPrint={onPrint}
        />
      </aside>

      {/* ── Mobile top bar ── */}
      <div
        className="lg:hidden no-print fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3"
        style={{ background: 'rgba(7,12,24,0.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(99,102,241,0.3)' }}>
            <img src="/avatar.png" alt="" className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">Tran Quoc Dung</p>
            <p className="text-indigo-400 text-[10px] mt-0.5">Senior Java Developer</p>
          </div>
        </div>
        <button onClick={() => setMobileOpen(o => !o)} className="text-slate-400 hover:text-white p-1">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex" onClick={() => setMobileOpen(false)}>
          <div
            className="w-64 h-full overflow-hidden"
            style={{ background: '#070c18', borderRight: '1px solid rgba(255,255,255,0.05)' }}
            onClick={e => e.stopPropagation()}
          >
            <SidebarContent
              activeSection={activeSection}
              onNavClick={() => setMobileOpen(false)}
              onPrint={onPrint}
            />
          </div>
          <div className="flex-1" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }} />
        </div>
      )}
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  SECTION HEADING
// ─────────────────────────────────────────────────────────────────────────────
function SectionHeading({ label, title }) {
  return (
    <div className="mb-10">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2" style={{ color: '#6366f1' }}>{label}</p>
      <h2 className="font-black text-white text-3xl leading-tight">{title}</h2>
      <div className="mt-3 flex items-center gap-2">
        <div className="h-0.5 w-10 rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }} />
        <div className="h-0.5 w-4 rounded-full" style={{ background: 'rgba(99,102,241,0.2)' }} />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  ABOUT SECTION
// ─────────────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="px-8 pt-20 pb-16 lg:pt-16">
      <div className="section-fade" style={{ opacity: 1, transform: 'none' }}>

        {/* ── Hero row: intro left + summary right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-start">

          {/* Left: name + tagline */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#6366f1' }}>
              Hello, I'm
            </p>
            <h1
              className="font-black leading-[0.88] mb-6"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)' }}
            >
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #c7d2fe 55%, #67e8f9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Tran Quoc Dung
              </span>
              <span className="block text-xl font-bold mt-3 tracking-wide" style={{ color: '#475569' }}>
                Senior Java / Tech Lead Developer
              </span>
            </h1>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              Over <span className="text-white font-semibold">8 years</span> building robust backend systems,
              microservices architectures, and cloud-native solutions — with a passion for clean code,
              team mentorship, and delivering products that scale.
            </p>
          </div>

          {/* Right: summary bullets */}
          <div
            className="rounded-2xl p-6 h-full"
            style={{
              background: 'rgba(99,102,241,0.04)',
              border: '1px solid rgba(99,102,241,0.1)',
            }}
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] mb-4" style={{ color: '#6366f1' }}>
              Professional Summary
            </p>
            <ul className="space-y-3">
              {CV_DATA.summary.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                  <span
                    className="mt-[7px] w-1 h-1 rounded-full shrink-0"
                    style={{ background: 'linear-gradient(135deg, #818cf8, #67e8f9)' }}
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Competency cards — 3-col grid ── */}
        <SectionHeading label="Core Expertise" title="What I Bring" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {CV_DATA.competencies.map((c, i) => {
            const Icon = ICON_MAP[c.icon] || Code2
            return (
              <div
                key={i}
                className="rounded-2xl p-5 cursor-default transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(99,102,241,0.06)'
                  e.currentTarget.style.border = '1px solid rgba(99,102,241,0.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.15)' }}
                >
                  <Icon size={16} style={{ color: '#818cf8' }} />
                </div>
                <p className="text-white font-bold text-sm mb-1">{c.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  EXPERIENCE — company tabs + project list
// ─────────────────────────────────────────────────────────────────────────────
function Experience() {
  const ref = useRef(null)
  useFadeIn(ref)
  const [activeTab, setActiveTab] = useState(0)
  const [openProj, setOpenProj] = useState(0)

  const exp = CV_DATA.experience[activeTab]

  return (
    <section id="experience" className="px-8 py-16" style={{ background: 'rgba(255,255,255,0.012)' }}>
      <div ref={ref} className="section-fade">
        <SectionHeading label="Career History" title="Experience" />

        {/* Split: company tabs left | projects right */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left: vertical company selector */}
          <div className="lg:w-64 shrink-0 flex flex-row lg:flex-col gap-3">
            {CV_DATA.experience.map((e, i) => (
              <button
                key={i}
                onClick={() => { setActiveTab(i); setOpenProj(0) }}
                className="flex-1 lg:flex-none text-left rounded-2xl p-4 transition-all duration-200"
                style={activeTab === i ? {
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.07))',
                  border: '1px solid rgba(99,102,241,0.35)',
                } : {
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <p className="font-bold text-sm" style={{ color: activeTab === i ? '#a5b4fc' : '#64748b' }}>
                  {e.company}
                </p>
                <p className="text-xs mt-0.5 leading-tight" style={{ color: activeTab === i ? '#818cf8' : '#334155' }}>
                  {e.role}
                </p>
                <p className="text-xs mt-2 flex items-center gap-1" style={{ color: activeTab === i ? '#6366f1' : '#1e293b' }}>
                  <Calendar size={10} /> {e.period}
                </p>
              </button>
            ))}
          </div>

          {/* Right: project accordion */}
          <div className="flex-1 min-w-0 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            {exp.projects.map((proj, i) => {
              const isOpen = openProj === i
              return (
                <div
                  key={i}
                  style={{ borderBottom: i < exp.projects.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                >
                  <button
                    className="w-full px-5 py-4 flex items-center justify-between text-left transition-colors duration-200"
                    style={{ background: isOpen ? 'rgba(99,102,241,0.06)' : 'transparent' }}
                    onClick={() => setOpenProj(isOpen ? -1 : i)}
                  >
                    <div className="flex-1 min-w-0 flex items-center gap-3">
                      <span
                        className="w-2 h-2 rounded-full shrink-0 transition-all duration-200"
                        style={{ background: isOpen ? 'linear-gradient(135deg, #6366f1, #06b6d4)' : '#1e293b' }}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-bold" style={{ color: isOpen ? '#a5b4fc' : '#cbd5e1' }}>
                          {proj.name}
                        </p>
                        <p className="text-xs mt-0.5 flex items-center gap-1 text-slate-600">
                          <Calendar size={9} /> {proj.period}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4 shrink-0" style={{ color: isOpen ? '#6366f1' : '#334155' }}>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(99,102,241,0.03)' }}>
                      <p
                        className="text-slate-400 text-sm leading-relaxed mt-4 mb-5 pl-3 italic"
                        style={{ borderLeft: '2px solid rgba(99,102,241,0.35)' }}
                      >
                        {proj.description}
                      </p>
                      {proj.responsibilities && (
                        <div className="mb-5">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-3">Responsibilities</p>
                          <ul className="space-y-2">
                            {proj.responsibilities.map((r, j) => (
                              <li key={j} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                                <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: '#6366f1' }} />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-3">Technologies</p>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.technologies.map((tech, j) => (
                            <span
                              key={j}
                              className="text-xs px-2.5 py-1 rounded-lg font-medium"
                              style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)', color: '#818cf8' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  TECH STACK
// ─────────────────────────────────────────────────────────────────────────────
function TechStack() {
  const ref = useRef(null)
  useFadeIn(ref)

  return (
    <section id="tech-stack" className="px-8 py-16">
      <div ref={ref} className="section-fade">
        <SectionHeading label="Tools & Languages" title="Tech Stack" />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {CV_DATA.techCategories.map((cat, i) => {
            const CatIcon = CAT_ICON_MAP[cat.category] || Code2
            const palette = BADGE_BG[cat.color] || BADGE_BG.blue

            return (
              <div
                key={i}
                className="rounded-2xl p-4 transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: palette.bg, border: `1px solid ${palette.border}` }}
                  >
                    <CatIcon size={13} style={{ color: palette.color }} />
                  </div>
                  <p className="text-slate-300 font-semibold text-sm">{cat.category}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item, j) => (
                    <span
                      key={j}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg cursor-default transition-all duration-150"
                      style={{
                        background: palette.bg,
                        border: `1px solid ${palette.border}`,
                        color: palette.color,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  CERTIFICATIONS
// ─────────────────────────────────────────────────────────────────────────────
function Certifications() {
  const ref = useRef(null)
  useFadeIn(ref)

  return (
    <section id="certifications" className="px-8 py-16" style={{ background: 'rgba(255,255,255,0.012)' }}>
      <div ref={ref} className="section-fade">
        <SectionHeading label="Education & Credentials" title="Certifications" />
        <div className="space-y-3">
          {CV_DATA.certifications.map((cert, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(251,191,36,0.04)'
                e.currentTarget.style.border = '1px solid rgba(251,191,36,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.15)' }}
              >
                <Award size={18} style={{ color: '#fbbf24' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm">{cert.institution}</p>
                {cert.subject && <p className="text-slate-400 text-xs mt-0.5">{cert.subject}</p>}
              </div>
              <span
                className="text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: 'rgba(251,191,36,0.08)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.15)' }}
              >
                {cert.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  CONTACT
// ─────────────────────────────────────────────────────────────────────────────
function Contact({ onPrint }) {
  const ref = useRef(null)
  useFadeIn(ref)
  const c = CV_DATA.contact
  const contactItems = [
    { Icon: Mail,   label: 'Email',    value: c.email,    href: `mailto:${c.email}` },
    { Icon: Phone,  label: 'Phone',    value: c.phone,    href: `tel:${c.phone}` },
    { Icon: MapPin, label: 'Location', value: c.location, href: null },
    { Icon: Github, label: 'GitHub',   value: c.github,   href: c.github ? `https://${c.github}` : null },
  ].filter(i => i.value)

  return (
    <section id="contact" className="px-8 py-16">
      <div ref={ref} className="section-fade">
        <SectionHeading label="Let's Connect" title="Get in Touch" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {contactItems.map(({ Icon, label, value, href }, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 flex items-center gap-3 transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)' }}
              >
                <Icon size={14} style={{ color: '#818cf8' }} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-700">{label}</p>
                {href ? (
                  <a href={href} className="text-slate-300 text-sm hover:text-indigo-400 transition-colors truncate flex items-center gap-1 mt-0.5">
                    <span className="truncate">{value}</span>
                    <ArrowUpRight size={10} style={{ color: '#475569', flexShrink: 0 }} />
                  </a>
                ) : (
                  <p className="text-slate-300 text-xs mt-0.5 truncate">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA download card */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))',
            border: '1px solid rgba(99,102,241,0.2)',
          }}
        >
          <p className="text-slate-400 text-sm mb-5 leading-relaxed max-w-sm mx-auto">
            I'm actively looking for <span className="text-white font-semibold">Senior / Tech Lead</span> roles in backend and cloud-native engineering. Download my full CV to learn more.
          </p>
          <button
            onClick={onPrint}
            className="no-print inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              boxShadow: '0 8px 32px rgba(99,102,241,0.35)',
            }}
          >
            <Download size={15} />
            Download PDF CV
          </button>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="no-print px-8 py-6 text-center"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <p className="text-slate-800 text-xs">
        © {new Date().getFullYear()} Tran Quoc Dung — Built with React & Tailwind CSS
      </p>
    </footer>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  ROOT APP — active section tracking
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const printRef = useRef(null)
  const [activeSection, setActiveSection] = useState('about')

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'CV_TranQuocDung_Senior_Java_Developer',
    pageStyle: '@page { size: A4; margin: 0; } body { margin: 0; }',
  })

  // Track active section for sidebar nav highlight
  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.id)
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#050a14' }}>
      {/* Hidden print target */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0, zIndex: -1 }} aria-hidden="true">
        <PrintCV ref={printRef} />
      </div>

      <Sidebar activeSection={activeSection} onPrint={handlePrint} />

      {/* Main content offset by sidebar width on desktop */}
      <div className="lg:ml-64">
        <About />
        <Experience />
        <TechStack />
        <Certifications />
        <Contact onPrint={handlePrint} />
        <Footer />
      </div>
    </div>
  )
}
