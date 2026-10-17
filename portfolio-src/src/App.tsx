import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Copy, Linkedin, Menu, Plus, X } from 'lucide-react'
import HalftoneWordmarkFooter from '@/components/ui/halftone-wordmark-footer'
import { experience, profile, projects } from './content'

const categories = ['All work', 'AI & Automation', 'Finance', 'Research']

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === 'workflow') return <div className="workflow-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="flow-node node-one">A<span>Lead captured</span></div><div className="flow-node node-two"><span className="node-spark">✳</span><span>Intelligence layer</span></div><div className="flow-node node-three">↗<span>Action, automated.</span></div><span className="art-caption">LESS FRICTION. MORE FLOW.</span></div>
  if (kind === 'finance') return <div className="finance-art" aria-hidden="true"><div className="finance-head"><span>THE FUNDAMENTALS</span><span>↗</span></div><div className="chart-bars">{[22, 35, 29, 46, 39, 57, 51, 67, 62, 80, 72, 96].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><span className="chart-note">VALUE BEYOND THE NUMBERS</span><span className="chart-watermark">α</span></div>
  if (kind === 'research') return <div className="research-art" aria-hidden="true"><span className="paper-label">A WORKING PAPER / ECONOMETRICS</span><div className="paper-title">A signal.<br />Not just noise.</div><div className="research-line"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><span className="paper-foot">CORPORATE ACTIONS × EQUITY RETURNS</span></div>
  return <div className="education-art"><img src="/images/audience.jpg" alt="Audience at an educational event" loading="lazy" /><div className="education-overlay"><span>AI IN MARKETING SYSTEMS</span><strong>Ideas are better<br />when shared.</strong><span>ICFAI BUSINESS SCHOOL / 2025</span></div></div>
}

function ProjectDialog({ project, onClose }: { project: (typeof projects)[number] | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (project) { dialog?.showModal(); document.body.style.overflow = 'hidden' }
    else { dialog?.close(); document.body.style.overflow = '' }
    return () => { document.body.style.overflow = '' }
  }, [project])
  return <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
    {project ? <><button className="dialog-close" aria-label="Close project" onClick={onClose}><X size={22} /></button><span className="eyebrow">{project.type} / {project.year}</span><h2 id="project-dialog-title">{project.name}</h2><p>{project.detail}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={18} /></a></> : null}
  </dialog>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState('All work')
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  const [copied, setCopied] = useState(false)
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (copyTimer.current) clearTimeout(copyTimer.current) }, [])
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      if (copyTimer.current) clearTimeout(copyTimer.current)
      copyTimer.current = setTimeout(() => setCopied(false), 2200)
    } catch { window.location.href = `mailto:${profile.email}` }
  }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header shell">
      <a className="logo" href="#home" aria-label="Vinay Jain home">vinay<span>®</span></a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#work">Selected work</a><a href="#about">About</a><a href="#experience">Experience</a></nav>
      <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={16} /></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    {menuOpen ? <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{[['Selected work', '#work'], ['About', '#about'], ['Experience', '#experience'], ['Let’s talk', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={20} /></a>)}</nav> : null}
    <main id="main">
      <section id="home" className="hero shell">
        <div className="hero-topline"><span className="eyebrow"><i className="status-dot" /> FINANCE × STRATEGY × AI</span><span className="eyebrow location">BASED IN HYDERABAD, INDIA <span>↗</span></span></div>
        <div className="hero-main"><div className="hero-copy"><h1>From complexity<br />to <span className="clarity">clarity<svg viewBox="0 0 400 19" preserveAspectRatio="none" aria-hidden="true"><path d="M3 12C95 1 252 1 396 8M35 17C152 7 268 7 372 12" /></svg></span><span className="period">.</span></h1><div className="hero-intro"><span className="intro-marker">↳</span><p>I’m Vinay Jain. I connect financial thinking<br className="desktop-break" /> with intelligent systems to turn ambitious<br className="desktop-break" /> ideas into practical outcomes.</p></div><a className="primary-button" href="#work">Explore my work <ArrowDownRight size={20} /></a></div>
          <div className="portrait-composition"><div className="portrait-label eyebrow"><span>THE PERSON BEHIND THE THINKING</span><Plus size={14} /></div><div className="portrait-frame"><img src="/images/portrait.jpg" alt="Vinay Jain, in a suit" fetchPriority="high" /><span className="portrait-coordinate">17.3850° N / 78.4867° E</span><span className="portrait-corner corner-tl" /><span className="portrait-corner corner-br" /></div><div className="portrait-bottom"><span>CURIOUS BY NATURE.<br />INTENTIONAL BY CHOICE.</span><span className="portrait-signature">V. Jain</span></div><div className="floating-note"><span>↗</span> A little finance.<br />A lot of possibility.</div></div>
        </div>
        <div className="hero-bottom"><span className="eyebrow">A MIND FOR NUMBERS. AN INSTINCT TO BUILD.</span><a href="#highlights" className="scroll-cue">SCROLL TO DISCOVER <ArrowDown size={14} /></a></div>
      </section>
      <section id="highlights" className="proof-band"><div className="shell proof-grid"><div><strong>9.51<span>/10</span></strong><p>Academic CGPA</p></div><div><strong>National<span> champion</span></strong><p>IRM Game of Enterprise Risk · 2025</p></div><div><strong>Top 5<span>% globally</span></strong><p>Bloomberg Trading Challenge · 2024 & 2025</p></div></div></section>
      <section id="work" className="work-section shell section-space"><div className="section-kicker"><span className="eyebrow">01 / SELECTED WORK</span><span className="eyebrow dim">THINKING, MADE TANGIBLE</span></div><div className="section-heading"><h2>Different disciplines.<br /><span>One curious mind.</span></h2><p>A selection of projects at the intersection<br className="desktop-break" /> of business, data, and what’s next.</p></div><div className="filters" role="group" aria-label="Filter selected work">{categories.map(item => <button key={item} aria-pressed={category === item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}{item === 'All work' ? <span>04</span> : null}</button>)}</div>
        <div className="projects-grid" aria-live="polite">{projects.filter(project => category === 'All work' || project.category === category).map(project => <button className="project-card" key={project.id} onClick={() => setSelectedProject(project)} aria-label={`View project: ${project.name}`}><div className={`project-art ${project.visual}`}><ProjectVisual kind={project.visual} /><span className="project-open"><ArrowUpRight size={23} /></span></div><div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.summary}</p></button>)}</div>
        <a className="text-link" href="https://itsvinay.me/home/">Explore the complete project archive <ArrowUpRight size={18} /></a>
      </section>
      <section id="about" className="about-section section-space"><div className="shell"><div className="section-kicker"><span className="eyebrow">02 / A LITTLE ABOUT ME</span><span className="eyebrow dim">MORE THAN A SINGLE DISCIPLINE</span></div><div className="about-grid"><div className="about-heading"><h2>Analytical mind.<br />Builder’s instinct.<br /><span>Human first.</span></h2><div className="about-image"><img src="/images/award.jpg" alt="Vinay Jain at the IRM Game of Enterprise Risk award ceremony" loading="lazy" /><span>AN IDEA IS ONLY AS GOOD AS ITS IMPACT. ↗</span></div></div><div className="about-copy"><p className="lead">I like the space where a good question becomes a useful answer.</p><p>My background in Economics & Finance at Mahindra University shaped how I think: understand the fundamentals, question the assumptions, and connect the dots.</p><p>That curiosity takes me beyond spreadsheets. Through VinAI Technologies, teaching, and hands-on consulting, I explore how intelligent automation can make businesses work better.</p><p>Whether I’m studying a company, building a workflow, or sharing an idea on stage, the goal stays the same: make something complex feel clear.</p><div className="about-details"><div><span>FOUNDATION</span><strong>Economics & Finance</strong></div><div><span>EDUCATION</span><strong>Mahindra University</strong></div><div><span>PERSPECTIVE</span><strong>Enterprise risk & actuarial science</strong></div></div><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">More about my journey <ArrowUpRight size={18} /></a></div></div></div></section>
      <section id="experience" className="experience-section shell section-space"><div className="section-kicker"><span className="eyebrow">03 / ALONG THE WAY</span><span className="eyebrow dim">LEARN. APPLY. REPEAT.</span></div><div className="experience-grid"><div><h2>Experience<br />that adds <span>up.</span></h2><p className="section-description">Different rooms. New perspectives.<br />A growing toolkit for meaningful work.</p><a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link">View LinkedIn <ArrowUpRight size={18} /></a></div><div className="experience-list">{experience.map((item, index) => <details key={item.company} className="experience-item" open={index === 0}><summary><div><span className="experience-company">{item.company}</span><h3>{item.role}</h3><span className="experience-period">{item.period}</span></div><Plus className="experience-plus" size={18} /></summary><div className="experience-content"><p>{item.text}</p><span>{item.tags}</span></div></details>)}</div></div></section>
      <section className="speaking-section shell"><div className="speaking-photo"><img src="/images/speaking.jpg" alt="Vinay Jain sharing ideas at an actuarial event" loading="lazy" /></div><div className="speaking-copy"><span className="eyebrow">BEYOND THE DESK</span><h2>Good ideas<br />deserve a <span>voice.</span></h2><p>From classrooms to conference stages, I enjoy making finance, technology, and possibility feel a little more accessible.</p><a href={profile.youtube} target="_blank" rel="noreferrer" className="text-link">Watch me in action <ArrowUpRight size={18} /></a></div></section>
      <section id="contact" className="contact-section shell section-space"><div className="section-kicker"><span className="eyebrow">04 / WHAT’S NEXT?</span><span className="eyebrow dim">IT STARTS WITH A CONVERSATION</span></div><div className="contact-heading"><h2>Something in mind?<br /><span>Let’s connect.</span></h2><a className="contact-arrow" href={`mailto:${profile.email}`} aria-label="Email Vinay Jain"><ArrowUpRight strokeWidth={1} /></a></div><div className="contact-bottom"><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><button className="copy-email" onClick={copyEmail} aria-label="Copy email address">{copied ? <Check size={16} /> : <Copy size={16} />}<span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span></button><a className="contact-social" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={16} /></a></div></section>
    </main>
    <HalftoneWordmarkFooter wordmark="vinay." label="Vinay Jain" meta="© 2026 · Made with intention." palette={{ background: '#101310', ink: '#c1d6ae', warm: '#edbc82' }} columns={[{ title: 'Explore', links: [{ label: 'Selected work', href: '#work' }, { label: 'About me', href: '#about' }, { label: 'Experience', href: '#experience' }] }, { title: 'Elsewhere', links: [{ label: 'LinkedIn ↗', href: profile.linkedin }, { label: 'YouTube ↗', href: profile.youtube }] }, { title: 'Say hello', links: [{ label: profile.email, href: `mailto:${profile.email}` }, { label: profile.location, href: '#contact' }] }]} height="clamp(400px, 45vw, 650px)" fontFamily="'Manrope Variable', sans-serif" fontWeight={800} dotGap={6} crop={0.12} grain={0.28} className="site-footer" />
    <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
  </>
}
