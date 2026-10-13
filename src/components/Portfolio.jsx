import { useEffect, useState } from 'react';
import { education } from '../data/education.js';
import { projects } from '../data/projects.js';
import { site } from '../data/site.js';
import { skillGroups } from '../data/skills.js';
import { usePortfolioEffects } from '../hooks/usePortfolioEffects.js';

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['education', 'Education'],
  ['contact', 'Contact'],
];

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5M12 15V3" /></>,
    code: <><path d="m16 18 6-6-6-6M8 6l-6 6 6 6M14 4l-4 16" /></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.8A5.3 5.3 0 0 0 19 5a4.9 4.9 0 0 0-.1-3S17.7 1.7 15 3.5a13.5 13.5 0 0 0-7 0C5.3 1.7 4.1 2 4.1 2A4.9 4.9 0 0 0 4 5a5.3 5.3 0 0 0-1.3 3.6c0 5.3 3.2 6.5 6.2 6.8A3.4 3.4 0 0 0 8 18v4" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m18 6-12 12M6 6l12 12" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section__head reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section__title">{title}</h2>
      <p className="section__subtitle">{subtitle}</p>
    </div>
  );
}

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`nav${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#home" aria-label={`${site.name}, home`}>
          SABARI<span className="nav__brand-suffix">.DEV</span>
        </a>
        <button className="nav__toggle" type="button" aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
        <nav className={`nav__links${isOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <ul>
            {navItems.map(([id, label]) => (
              <li key={id}>
                <a className={`nav__link${activeSection === id ? ' is-active' : ''}`} href={`#${id}`} onClick={() => setIsOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__role hero-in" style={{ '--n': 0 }}>Hello, I’m</p>
          <h1 className="hero__name hero-in" style={{ '--n': 1 }}>{site.name}</h1>
          <p className="hero__headline hero-in" style={{ '--n': 2 }}>{site.headline}</p>
          <p className="hero__text hero-in" style={{ '--n': 3 }}>{site.intro}</p>
          <div className="hero__actions hero-in" style={{ '--n': 4 }}>
            <a className="btn btn--primary" href="#projects">Explore my work <Icon name="arrow" size={18} /></a>
            <a className="btn btn--ghost" href="#contact"><Icon name="mail" size={18} /> Get in touch</a>
          </div>
          <SocialLinks />
        </div>
        <div className="hero__visual hero-in" style={{ '--n': 2 }} aria-label="A code illustration">
          <div className="hero__orb" />
          <span className="chip chip--1">React</span>
          <span className="chip chip--2">JavaScript</span>
          <span className="chip chip--3">CSS</span>
          <span className="chip chip--4">Creative</span>
          <span className="chip chip--5">Accessible</span>
          <div className="code glass">
            <div className="code__bar"><span className="code__dot code__dot--a" /><span className="code__dot code__dot--b" /><span className="code__dot code__dot--c" /><span className="code__file">developer.js</span></div>
            <div className="code__body" aria-label="Code sample">
              <div className="code__line" style={{ '--i': 0 }}><span className="tok-kw">const</span> <span className="tok-var">developer</span> = {'{'}</div>
              <div className="code__line code__line--indent" style={{ '--i': 1 }}><span className="tok-key">name</span>: <span className="tok-str">'{site.shortName}'</span>,</div>
              <div className="code__line code__line--indent" style={{ '--i': 2 }}><span className="tok-key">craft</span>: <span className="tok-str">'for the web'</span>,</div>
              <div className="code__line code__line--indent" style={{ '--i': 3 }}><span className="tok-key">focus</span>: [<span className="tok-str">'detail'</span>, <span className="tok-str">'people'</span>],</div>
              <div className="code__line">{'}'};</div>
              <div className="code__line" style={{ '--i': 4 }}><span className="tok-kw">while</span> (curious) {'{'}</div>
              <div className="code__line code__line--indent" style={{ '--i': 5 }}><span className="tok-var">build</span>(<span className="tok-str">'something meaningful'</span>);</div>
              <div className="code__line">{'}'}<span className="code__caret" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLinks() {
  return (
    <div className="social" aria-label="Social links">
      <SocialLink href={site.github} label="GitHub" icon="github" />
      <SocialLink href={site.linkedin} label="LinkedIn" icon="linkedin" />
    </div>
  );
}

function SocialLink({ href, label, icon }) {
  return href
    ? <a className="social__link" href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon name={icon} /></a>
    : <span className="social__link is-disabled" aria-label={`${label} link not added`} title={`${label} link not added`}><Icon name={icon} /></span>;
}

function About() {
  const cards = [
    { icon: 'code', title: 'Thoughtful development', text: 'Clean, responsive interfaces built with care for the details.' },
    { icon: 'spark', title: 'Always learning', text: 'Curious by nature and excited to keep growing with every build.' },
  ];
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading eyebrow="A little about me" title="Making the web feel a little better." subtitle="Good digital experiences should feel effortless to use and delightful to explore." />
        <div className="about">
          <div className="about__text reveal">
            <p>I’m {site.name}, a {site.role.toLowerCase()} who enjoys bringing ideas to life on the web. I care about the small decisions that make a page feel intuitive: clear content, considered visual design, and interactions that work for everyone.</p>
            <p style={{ marginTop: '1rem' }}>I’m always learning, experimenting, and looking for the next interesting problem to solve. Have something in mind? I’d love to hear about it.</p>
          </div>
          <div className="about__cards">
            {cards.map((card, index) => <article className="about-card glass reveal" style={{ '--reveal-delay': `${index * 100}ms` }} key={card.title}><span className="about-card__icon"><Icon name={card.icon} /></span><div><h3 className="about-card__title">{card.title}</h3><p className="about-card__text">{card.text}</p></div></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading eyebrow="What I work with" title="Skills & tools" subtitle="A growing toolkit for building polished, dependable experiences." />
        <ul className="legend"><li><span className="tag tag--comfortable">Comfortable</span> Used with confidence</li><li><span className="tag tag--learning">Learning</span> Exploring and growing</li></ul>
        <div className="skills__grid">
          {skillGroups.map((group, index) => <article className="panel glass reveal" style={{ '--reveal-delay': `${index * 100}ms` }} key={group.title}><h3 className="panel__title">{group.title}</h3><ul className="skill-list">{group.skills.map((skill) => <li className="skill" key={skill.name}><span className="skill__tile"><span className="skill__mono">{skill.mark}</span></span><span className="skill__name">{skill.name}</span><span className={`tag tag--${skill.status}`}>{skill.status === 'comfortable' ? 'Comfortable' : 'Learning'}</span></li>)}</ul></article>)}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Projects" subtitle="A few things I’ve been working on. Project details and links are ready for you to add." />
        <div className="projects__grid">
          {projects.map((project, index) => <article className="project glass reveal" style={{ '--reveal-delay': `${index * 100}ms` }} key={project.title}>
            <div className="project__media"><div className="project__placeholder" style={{ '--tilt': `${index * 22}deg` }} aria-hidden="true"><span className="project__bar" /><span className="project__bar project__bar--short" /><span className="project__block" /></div><span className="project__status">{project.status}</span></div>
            <div className="project__body"><h3 className="project__title">{project.title}</h3><p className="project__text">{project.description}</p><div className="project__tags">{project.technologies.map((technology) => <span className="tag tag--tech" key={technology}>{technology}</span>)}</div><div className="project__actions">{project.demo ? <a className="btn btn--ghost btn--small" href={project.demo} target="_blank" rel="noreferrer">Live demo <Icon name="arrow" size={16} /></a> : <span className="btn btn--ghost btn--small is-disabled">Demo coming soon</span>}{project.source ? <a className="btn btn--quiet btn--small" href={project.source} target="_blank" rel="noreferrer">Source <Icon name="github" size={16} /></a> : <span className="btn btn--quiet btn--small is-disabled">Source coming soon</span>}</div></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading eyebrow="The learning journey" title="Education" subtitle="The experiences and studies that continue to shape my path." />
        <div className="timeline">{education.map((item, index) => <article className="timeline__item reveal" style={{ '--reveal-delay': `${index * 100}ms` }} key={`${item.institution}-${index}`}><span className="timeline__node"><Icon name="book" size={18} /></span><div className="timeline__card glass"><h3 className="timeline__degree">{item.degree}</h3><p className="timeline__field">{item.field}</p><p className="timeline__meta">{item.institution} <span aria-hidden="true">·</span> {item.duration}</p><p className="timeline__text">{item.description}</p></div></article>)}</div>
      </div>
    </section>
  );
}

function Contact() {
  const [feedback, setFeedback] = useState({ text: '', type: 'info' });

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();
    const emailInput = event.currentTarget.elements.namedItem('email');

    if (form.get('_gotcha')) return;
    if (!name || !email || !message || !emailInput.checkValidity()) {
      setFeedback({ text: 'Please complete all fields with a valid email address.', type: 'error' });
      return;
    }
    if (site.formEndpoint) {
      event.currentTarget.action = site.formEndpoint;
      event.currentTarget.method = 'POST';
      event.currentTarget.submit();
      return;
    }
    if (site.email) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setFeedback({ text: 'Your email app should open with the message ready to send.', type: 'info' });
      return;
    }
    setFeedback({ text: 'Contact is not connected yet. Add an email address or form endpoint to enable messages.', type: 'info' });
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading eyebrow="Let’s talk" title="Have a project in mind?" subtitle="Have a question, an idea, or just want to say hello? Send a note and let’s start a conversation." />
        <div className="contact">
          <div className="reveal">
            <div className="contact__list">
              <div className="contact__row"><span className="contact__icon"><Icon name="mail" /></span><div className="contact__body"><span className="contact__label">Email</span>{site.email ? <a className="contact__value" href={`mailto:${site.email}`}>{site.email}</a> : <span className="contact__value is-placeholder">Add your email in src/data/site.js</span>}</div></div>
              <div className="contact__row"><span className="contact__icon"><Icon name="globe" /></span><div className="contact__body"><span className="contact__label">Based online</span><span className="contact__value">Open to good ideas, wherever you are.</span></div></div>
            </div>
            <SocialLinks />
          </div>
          <form className="form glass reveal" onSubmit={handleSubmit} noValidate>
            <div className="form__row">
              <label className="field"><span className="field__label">Your name</span><input className="field__input" name="name" autoComplete="name" required placeholder="Jane Smith" /></label>
              <label className="field"><span className="field__label">Email address</span><input className="field__input" name="email" type="email" autoComplete="email" required placeholder="jane@example.com" /></label>
            </div>
            <label className="field"><span className="field__label">Message</span><textarea className="field__input" name="message" required placeholder="Tell me a little about what you have in mind..." /></label>
            <div className="form__trap" aria-hidden="true"><label>Leave this field empty<input name="_gotcha" tabIndex="-1" autoComplete="off" /></label></div>
            <div className="form__footer"><button className="btn btn--primary" type="submit">Send message <Icon name="arrow" size={18} /></button><div className="form__feedback" aria-live="polite">{feedback.text && <p className={`form__message form__message--${feedback.type}`}>{feedback.text}</p>}</div></div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div><p className="footer__name">{site.name}</p><p className="footer__tagline">Thoughtful experiences, one line at a time.</p></div>
          <nav className="footer__links" aria-label="Footer navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
          <a className="to-top" href="#home">Back to top <Icon name="arrow" size={16} /></a>
        </div>
        <div className="footer__bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>Designed & built with care.</span></div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  const activeSection = usePortfolioEffects();
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="bg" aria-hidden="true"><span className="bg__glow bg__glow--violet" /><span className="bg__glow bg__glow--cyan" /><span className="bg__grid" /></div>
      <Navbar activeSection={activeSection} />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
