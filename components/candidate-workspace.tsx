'use client'

import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleCheck,
  Download,
  FileText,
  FolderKanban,
  Globe2,
  Mail,
  Menu,
  MessageSquareText,
  MoreHorizontal,
  Search,
  Send,
  Sparkles,
  UserRound,
  X,
  Zap,
} from 'lucide-react'

type Screen = 'Overview' | 'Experience' | 'Skills' | 'Projects' | 'Resume' | 'Contact'

const navItems: { label: Screen; icon: typeof UserRound }[] = [
  { label: 'Overview', icon: UserRound },
  { label: 'Experience', icon: BriefcaseBusiness },
  { label: 'Skills', icon: Sparkles },
  { label: 'Projects', icon: FolderKanban },
  { label: 'Resume', icon: FileText },
  { label: 'Contact', icon: MessageSquareText },
]

const experience = [
  { role: 'Senior Full-Stack Developer', company: 'Northstar Labs', date: '2022 — Present', copy: 'Leading product engineering for a distributed team building workflow software used by 18,000+ teams.', skills: ['React', 'Node.js', 'PostgreSQL'] },
  { role: 'Full-Stack Developer', company: 'Orbit Commerce', date: '2020 — 2022', copy: 'Shipped the next generation of the checkout platform, improving conversion by 24% and reducing API latency.', skills: ['TypeScript', 'Next.js', 'AWS'] },
  { role: 'Frontend Developer', company: 'Morrow Studio', date: '2018 — 2020', copy: 'Built responsive digital experiences for early-stage startups and global consumer brands.', skills: ['React', 'Design Systems', 'React Native'] },
]

const skills = [
  { title: 'Frontend', detail: 'Interfaces that feel fast, clear, and quietly expressive.', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'] },
  { title: 'Backend', detail: 'Reliable services with thoughtful API design and observability.', items: ['Node.js', 'REST APIs', 'GraphQL', 'Python', 'Serverless'] },
  { title: 'Data & Cloud', detail: 'Pragmatic infrastructure that scales with the product.', items: ['PostgreSQL', 'Redis', 'Prisma', 'AWS', 'Vercel'] },
  { title: 'Product craft', detail: 'A systems mindset from first sketch to shipped detail.', items: ['Design systems', 'Responsive design', 'Prototyping', 'Accessibility', 'Testing'] },
]

const projects = [
  { name: 'Atlas Workspace', type: 'Product platform', year: '2024', description: 'A calm operating system for modern teams to plan, build, and learn together.', tags: ['Next.js', 'TypeScript', 'Postgres'], color: 'blue', metric: '18k teams' },
  { name: 'Morrow Health', type: 'Mobile experience', year: '2023', description: 'A thoughtful patient companion that makes complex care plans easier to follow.', tags: ['React Native', 'Node.js', 'Figma'], color: 'peach', metric: '4.8 app rating' },
  { name: 'Northstar Commerce', type: 'Checkout system', year: '2022', description: 'A composable checkout rebuilt for speed, clarity, and international growth.', tags: ['React', 'GraphQL', 'AWS'], color: 'lavender', metric: '+24% conversion' },
]

function LogoMark() {
  return <div className="logo-mark" aria-hidden="true"><span /><span /><span /></div>
}

function Sidebar({ active, onChange, mobileOpen, onClose }: { active: Screen; onChange: (screen: Screen) => void; mobileOpen: boolean; onClose: () => void }) {
  return (
    <aside className={`workspace-sidebar ${mobileOpen ? 'is-open' : ''}`}>
      <div className="sidebar-topline"><div className="brand"><LogoMark /><span>profile<span className="brand-dot">.</span></span></div><button className="icon-button mobile-close" onClick={onClose} aria-label="Close navigation"><X size={18} /></button></div>
      <div className="profile-mini"><div className="avatar avatar-small">AR</div><div><p className="profile-mini-name">Alex Rivera</p><p className="profile-mini-role">Full-Stack Developer</p></div><span className="online-dot" aria-label="Available" /></div>
      <nav className="sidebar-nav" aria-label="Candidate profile navigation">
        <p className="eyebrow nav-label">Workspace</p>
        {navItems.map(({ label, icon: Icon }) => <button key={label} className={`nav-item ${active === label ? 'is-active' : ''}`} onClick={() => { onChange(label); onClose() }}><Icon size={17} strokeWidth={1.8} /><span>{label}</span>{active === label && <ChevronRight size={15} className="nav-chevron" />}</button>)}
      </nav>
      <div className="sidebar-footer"><div className="availability"><span className="status-ring" /><div><p>Available for work</p><span>Open to select roles</span></div></div><button className="profile-link" onClick={() => onChange('Contact')}><span>Share profile</span><ArrowUpRight size={14} /></button></div>
    </aside>
  )
}

function Topbar({ active, onMenu }: { active: Screen; onMenu: () => void }) {
  return <header className="workspace-topbar"><div className="topbar-left"><button className="icon-button menu-button" onClick={onMenu} aria-label="Open navigation"><Menu size={20} /></button><div><p className="eyebrow">Candidate workspace</p><h1>{active}</h1></div></div><div className="topbar-actions"><div className="topbar-search"><Search size={16} /><span>Search profile</span><kbd>⌘ K</kbd></div><button className="button button-dark" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}><Mail size={15} /> Get in touch</button><div className="avatar avatar-top">AR</div></div></header>
}

function StatCard({ value, label, note }: { value: string; label: string; note: string }) { return <div className="stat-card"><p className="stat-value">{value}</p><p className="stat-label">{label}</p><p className="stat-note">{note}</p></div> }

function Overview({ onChange }: { onChange: (screen: Screen) => void }) {
  return <div className="screen-content overview-screen">
    <section className="hero-panel"><div className="hero-copy"><div className="availability-pill"><span className="status-ring" /> Available for new opportunities</div><h2>Building products<br /><em>people remember.</em></h2><p className="hero-description">I&apos;m Alex Rivera, a full-stack developer focused on creating useful, durable digital experiences from first idea to final detail.</p><div className="hero-actions"><button className="button button-accent" onClick={() => onChange('Contact')}>Start a conversation <ArrowUpRight size={15} /></button><button className="text-button" onClick={() => onChange('Projects')}>Explore my work <ChevronRight size={15} /></button></div></div><div className="hero-visual"><div className="portrait-card"><div className="portrait-initials">AR</div><div className="portrait-caption"><span>Alex Rivera</span><span>SF · Remote</span></div></div><div className="orbit-card"><span className="orbit-dot" /><p>Currently crafting<br /><strong>Northstar Labs</strong></p></div></div></section>
    <section className="stats-grid"><StatCard value="7+" label="Years building" note="Across product & agency" /><StatCard value="42" label="Projects shipped" note="From zero to one" /><StatCard value="18k" label="Teams reached" note="Across all products" /><StatCard value="4.9/5" label="Client rating" note="Based on 26 reviews" /></section>
    <section className="overview-grid"><div className="panel recent-panel"><div className="panel-heading"><div><p className="eyebrow">Selected experience</p><h3>A track record of making things work.</h3></div><button className="text-button" onClick={() => onChange('Experience')}>View all <ArrowUpRight size={14} /></button></div><div className="experience-list">{experience.slice(0, 2).map((item) => <div className="experience-row" key={item.company}><div className="timeline-marker"><span /></div><div className="experience-row-body"><div className="row-title"><h4>{item.role}</h4><span>{item.date}</span></div><p className="muted-copy">{item.company} · {item.copy}</p><div className="tag-row">{item.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div></div></div>)}</div></div><div className="panel availability-panel"><div className="panel-heading"><div><p className="eyebrow">Let&apos;s work together</p><h3>What I&apos;m looking for</h3></div><Sparkles size={18} className="panel-icon" /></div><p className="availability-copy">A small, thoughtful team solving a meaningful problem. I do my best work where product, design, and engineering sit close together.</p><div className="looking-list"><span><Check size={14} /> Senior product teams</span><span><Check size={14} /> Remote-first culture</span><span><Check size={14} /> Long-term impact</span></div><button className="button button-outline full-button" onClick={() => onChange('Contact')}>Tell me about your team <ArrowUpRight size={14} /></button></div></section>
  </div>
}

function ExperienceScreen() { return <div className="screen-content"><div className="page-intro"><div><p className="eyebrow">The path so far</p><h2>Experience</h2><p className="intro-copy">Seven years of turning ambitious ideas into dependable products.</p></div><div className="intro-aside"><span className="status-ring" /> Open to conversations<br /><small>Updated this month</small></div></div><div className="experience-timeline">{experience.map((item, index) => <article className="timeline-entry" key={item.company}><div className="timeline-date">{item.date}<span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-line"><span /></div><div className="timeline-card"><div className="row-title"><div><p className="eyebrow">{item.company}</p><h3>{item.role}</h3></div><button className="icon-button" aria-label={`More about ${item.company}`}><MoreHorizontal size={18} /></button></div><p>{item.copy}</p><div className="tag-row">{item.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div></div></article>)}</div></div> }

function SkillsScreen() { return <div className="screen-content"><div className="page-intro"><div><p className="eyebrow">Tools & thinking</p><h2>Skills</h2><p className="intro-copy">The technical range to move from the first conversation to a polished release.</p></div><div className="skill-score"><span className="score-number">92</span><span>delivery<br />confidence</span></div></div><div className="skills-grid">{skills.map((group, index) => <article className="skill-card" key={group.title}><div className={`skill-index skill-index-${index + 1}`}>{String(index + 1).padStart(2, '0')}</div><h3>{group.title}</h3><p>{group.detail}</p><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div><div className="panel principles-panel"><div><p className="eyebrow">My approach</p><h3>Make it clear. Make it useful. Make it last.</h3></div><p className="muted-copy">Good engineering is invisible when it works well. I care about clear APIs, accessible interfaces, thoughtful defaults, and systems that the next person can understand.</p></div></div> }

function ProjectsScreen() { const [filter, setFilter] = useState('All work'); const filtered = filter === 'All work' ? projects : projects.filter(p => p.tags.some(t => t.includes(filter))); return <div className="screen-content"><div className="page-intro projects-intro"><div><p className="eyebrow">A few things I&apos;ve made</p><h2>Projects</h2><p className="intro-copy">Selected work across platforms, mobile, and commerce.</p></div><div className="filter-tabs">{['All work', 'Product', 'Mobile'].map(item => <button key={item} className={filter === item ? 'is-active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="projects-grid">{filtered.map(project => <article className={`project-card project-${project.color}`} key={project.name}><div className="project-art"><div className="project-art-top"><span>{project.type}</span><span>{project.year}</span></div><div className="project-art-mark">{project.name.split(' ').map(word => word[0]).join('')}</div><div className="project-art-bottom"><span>{project.metric}</span><ArrowUpRight size={15} /></div></div><div className="project-card-body"><div className="row-title"><h3>{project.name}</h3><button className="icon-button" aria-label={`Open ${project.name}`}><ArrowUpRight size={17} /></button></div><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</div></div> }

function ResumeScreen() { return <div className="screen-content"><div className="page-intro resume-intro"><div><p className="eyebrow">A concise view</p><h2>Resume</h2><p className="intro-copy">A one-page snapshot of the work, skills, and thinking behind the profile.</p></div><button className="button button-dark"><Download size={15} /> Download PDF</button></div><div className="resume-sheet"><div className="resume-header"><div><h2>Alex Rivera</h2><p>Senior Full-Stack Developer · San Francisco / Remote</p></div><div className="resume-contact"><span>alex@profile.studio</span><span>profile.studio/alex</span></div></div><div className="resume-rule" /><div className="resume-columns"><div><p className="eyebrow">Profile</p><p className="resume-text">Full-stack developer with 7+ years of experience building product platforms, mobile experiences, and systems that scale with people.</p><p className="eyebrow resume-section-label">Experience</p>{experience.map(item => <div className="resume-item" key={item.company}><div><strong>{item.role}</strong><span>{item.company}</span></div><time>{item.date}</time></div>)}</div><div><p className="eyebrow">Core stack</p><div className="resume-skill-list">{['React + TypeScript', 'Node.js + APIs', 'PostgreSQL + Prisma', 'React Native', 'AWS + Vercel'].map(item => <span key={item}><Check size={13} /> {item}</span>)}</div><p className="eyebrow resume-section-label">Education</p><div className="resume-item"><div><strong>B.S. Computer Science</strong><span>University of California, Davis</span></div><time>2014 — 2018</time></div></div></div></div></div> }

function ContactScreen() { const [sent, setSent] = useState(false); return <div className="screen-content contact-screen" id="contact"><div className="contact-copy"><p className="eyebrow">Have a good one?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2><p className="intro-copy">Whether you&apos;re building a team, have a product question, or just want to say hello, I&apos;d love to hear from you.</p><div className="contact-details"><a href="mailto:alex@profile.studio"><Mail size={16} /> alex@profile.studio</a><a href="#contact"><Globe2 size={16} /> profile.studio/alex</a><div className="social-links"><a href="#contact" aria-label="LinkedIn"><MessageSquareText size={17} /></a><a href="#contact" aria-label="GitHub"><Globe2 size={17} /></a></div></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>{sent ? <div className="sent-state"><div className="sent-icon"><CircleCheck size={23} /></div><h3>Message received.</h3><p>Thanks for reaching out. Alex will be in touch shortly.</p><button type="button" className="text-button" onClick={() => setSent(false)}>Send another message <ArrowUpRight size={14} /></button></div> : <><div className="form-heading"><span>01</span><h3>Start with the basics</h3></div><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label><label>What can I help with?<textarea required placeholder="A little context goes a long way..." rows={4} /></label><button className="button button-accent" type="submit">Send inquiry <Send size={15} /></button></>}</form></div> }

export default function CandidateWorkspace() { const [active, setActive] = useState<Screen>('Overview'); const [mobileOpen, setMobileOpen] = useState(false); const content = useMemo(() => ({ Overview: <Overview onChange={setActive} />, Experience: <ExperienceScreen />, Skills: <SkillsScreen />, Projects: <ProjectsScreen />, Resume: <ResumeScreen />, Contact: <ContactScreen /> }[active]), [active]); return <div className="workspace-shell"><Sidebar active={active} onChange={setActive} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />{mobileOpen && <button className="mobile-backdrop" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}<main className="workspace-main"><Topbar active={active} onMenu={() => setMobileOpen(true)} /><div className="workspace-scroll">{content}</div><footer className="workspace-footer"><span>© 2024 Alex Rivera</span><span>Built with care <Zap size={12} /></span><span>San Francisco · Remote</span></footer></main></div> }
