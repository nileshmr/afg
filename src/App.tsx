import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Edit3,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from 'lucide-react';
import { portfolio } from '@/portfolio.config';

function App() {
  const content = portfolio;
  const [editOpen, setEditOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const skillCount = useMemo(
    () => content.skills.reduce((sum, skill) => sum + skill.items.split(',').length, 0),
    [content.skills],
  );

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top"><span className="brand-mark">AA</span><span>{content.name}</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><Menu size={20} /></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          {/* <button className="nav-edit" onClick={() => setEditOpen(true)}><Edit3 size={15} /> Edit profile</button> */}
          <a
  
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Open to data opportunities</div>
            <h1>Turning data into <em>decisions.</em></h1>
            <p className="hero-lede">I’m {content.name}, a {content.role.toLowerCase()} who finds the signal in complex data and turns it into clear, useful action.</p>
            <div className="hero-actions"><a className="button button-dark" href={`mailto:${content.email}`}>Let’s work together <ArrowUpRight size={17} /></a><a className="text-link" href="#projects">See my work <ChevronRight size={16} /></a></div>
            <div className="hero-meta"><span><MapPin size={15} /> {content.location}</span><span><Sparkles size={15} /> Curious by nature</span></div>
          </div>
          <div className="hero-visual">
            <div className="image-frame"><img src={content.photo} alt={`${content.name} portrait`} /><div className="image-caption"><span>Based in India</span><span className="caption-line" /></div></div>
            <div className="floating-card card-top"><span className="card-icon"><BarChart3 size={18} /></span><span><strong>{skillCount}+</strong><small>tools & skills</small></span></div>
            <div className="floating-card card-bottom"><span className="mini-bars"><i /><i /><i /><i /></span><span><strong>1+ year</strong><small>hands-on experience</small></span></div>
          </div>
        </section>

        <section className="about-band" id="about"><div className="section-wrap about-grid"><div className="section-label"><span>01</span><h2>Profile<br />summary</h2></div><div className="about-content"><p>{content.summary}</p><div className="contact-row"><a href={`mailto:${content.email}`}><Mail size={17} /> {content.email}</a><a href={content.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></a><a href={content.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={13} /></a></div></div></div></section>

        <section className="section-wrap content-section" id="experience"><div className="section-heading"><div className="section-label"><span>02</span><h2>Experience</h2></div><span className="heading-rule" /></div><div className="experience-card"><div><div className="role-kicker">Most recent role</div><h3>{content.experience.title}</h3><p className="muted">{content.experience.period} · Remote</p></div><ul>{content.experience.bullets.map((bullet) => <li key={bullet}><Check size={16} />{bullet}</li>)}</ul></div></section>

        <section className="projects-section" id="projects"><div className="section-wrap"><div className="section-heading"><div className="section-label"><span>03</span><h2>Selected projects</h2></div><p className="heading-note">A few things I’ve built<br />with data and curiosity.</p></div><div className="project-grid">{content.projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-number">0{index + 1}</div><div className="project-topline"><span className="project-tag">{index === 0 ? 'Computer vision' : 'Machine learning'}</span><a href={project.link} target="_blank="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={19} /></a></div><h3>{project.title}</h3><p>{project.description}</p><ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><a className="project-link" href={project.link} target="_blank" rel="noreferrer">View project <ArrowUpRight size={15} /></a></article>)}</div></div></section>

        <section className="section-wrap content-section skills-section" id="skills"><div className="section-heading"><div className="section-label"><span>04</span><h2>Skills & tools</h2></div><p className="heading-note">The toolkit behind<br />the work.</p></div><div className="skills-grid">{content.skills.map((skill, index) => <div className="skill-item" key={skill.label}><span className="skill-index">0{index + 1}</span><div><h3>{skill.label}</h3><p>{skill.items}</p></div></div>)}</div></section>

        <section className="education-section"><div className="section-wrap education-grid"><div className="section-label"><span>05</span><h2>Education &<br />certifications</h2></div><div className="education-content"><div className="education-main"><GraduationCap size={24} /><div><h3>{content.education.school}</h3><p>{content.education.degree} · {content.education.period}</p><strong>{content.education.grade}</strong></div></div><div className="cert-list"><div className="role-kicker">Training & certifications</div>{content.certifications.map((cert) => <div className="cert" key={cert}><Check size={14} />{cert}</div>)}</div></div></div></section>

        <section className="cta-section"><div className="section-wrap cta-inner"><div><div className="eyebrow">Have a question or an idea?</div><h2>Let’s make something<br /><em>meaningful.</em></h2></div><a className="button button-light" href={`mailto:${content.email}`}>Start a conversation <MessageCircle size={17} /></a></div></section>
      </main>
      <footer className="footer"><div className="section-wrap"><span>© {new Date().getFullYear()} {content.name}</span><span>Built with intention.</span><a href="#top">Back to top ↑</a></div></footer>
      {editOpen && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setEditOpen(false); }}>
          <div className="edit-modal">
            <div className="modal-head">
              <div>
                <div className="role-kicker">Portfolio editor</div>
                <h2>How to edit your profile</h2>
              </div>
              <button type="button" className="icon-button" onClick={() => setEditOpen(false)} aria-label="Close"><X size={20} /></button>
            </div>
            <div className="editor-body">
              <p>All your portfolio content lives in a single file called <code>src/portfolio.config.ts</code>. Open that file and you’ll see every detail — your name, role, photo, summary, experience, projects, skills, and certifications — clearly labeled and easy to change.</p>
              <p>Update any text, swap your photo by changing the path, add or remove skills, and save the file. Your website updates automatically. No database, no login — just edit and save.</p>
              <div className="editor-tips">
                <div><Check size={15} /> <span><strong>Photo:</strong> change the <code>photo</code> line to point at a new image</span></div>
                <div><Check size={15} /> <span><strong>Skills:</strong> edit the comma-separated lists under <code>skills</code></span></div>
                <div><Check size={15} /> <span><strong>Projects:</strong> add or edit entries in the <code>projects</code> array</span></div>
              </div>
            </div>
            <div className="modal-actions">
              <button className="button button-dark" onClick={() => setEditOpen(false)}>Got it</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
