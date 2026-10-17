import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Linkedin,
  Menu,
  Pause,
  Play,
  Plus,
  X,
} from "lucide-react";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";
import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";
import {
  commercialResults,
  profile,
  projects,
  reelImages,
  type Project,
} from "./content";
const categories = [
  "All work",
  "AI & Systems",
  "Products",
  "Research & Strategy",
];

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (project) {
      ref.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      ref.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {project ? (
        <>
          <button
            className="dialog-close"
            aria-label="Close project"
            onClick={onClose}
          >
            <X size={21} />
          </button>
          <img
            className="dialog-image"
            src={`/images/projects/${project.image}.webp`}
            alt={`${project.name} project presentation`}
          />
          <div className="dialog-copy">
            <span className="eyebrow">{project.type}</span>
            <h2 id="project-title">{project.name}</h2>
            <p>{project.detail}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a
              className="button button-light"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              Explore the project
              <ArrowUpRight size={17} />
            </a>
          </div>
        </>
      ) : null}
    </dialog>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false),
    [category, setCategory] = useState("All work"),
    [showAll, setShowAll] = useState(false),
    [selected, setSelected] = useState<Project | null>(null),
    [reelPaused, setReelPaused] = useState(false),
    [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    [],
  );
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  const filtered = projects.filter(
      (p) => category === "All work" || p.category === category,
    ),
    visible = showAll ? filtered : filtered.slice(0, 6);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header shell">
        <a className="logo" href="#home" aria-label="Vinay Jain home">
          vinay<span>®</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#results">Results</a>
          <a href="#work">Selected work</a>
          <a href="#thesis">The thesis</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="#contact">
          Build with me
          <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      {menuOpen ? (
        <nav
          className="mobile-nav"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {[
            ["Results", "#results"],
            ["Selected work", "#work"],
            ["The thesis", "#thesis"],
            ["About", "#about"],
            ["Build with me", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
              <ArrowUpRight size={19} />
            </a>
          ))}
        </nav>
      ) : null}
      <main id="main">
        <section id="home" className="hero">
          <div className="hero-copy shell">
            <div className="hero-eyebrow eyebrow">
              <span className="status-dot" />
              VINAY JAIN <span className="eyebrow-divider">/</span> FOUNDER,
              VINAI TECHNOLOGIES
            </div>
            <h1>
              Building the AI infrastructure
              <br className="wide-break" /> for the world’s first
              <br className="wide-break" />{" "}
              <span>one-person unicorn.</span>
            </h1>
            <p className="hero-intro">
              That’s the ambition. I build the agents, products, and growth
              systems
              <br className="wide-break" /> that turn one person’s execution
              into a company’s capability.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#work">
                Explore the work
                <ArrowDownRight size={18} />
              </a>
              <a className="button button-quiet" href="#thesis">
                Read the thesis
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
          <TiltedGridHero
            images={reelImages}
            className="portfolio-reel"
            speed={6}
            tileHeight={64}
            aspectRatio={4 / 3}
            gap={9}
            axis={50}
            curve={65}
            fade={15}
            paused={reelPaused}
          />
          <div className="hero-bottom shell">
            <span className="eyebrow">
              PRODUCTS. SYSTEMS. COMMERCIAL THINKING.
            </span>
            <button
              className="reel-control"
              aria-label={
                reelPaused ? "Play project reel" : "Pause project reel"
              }
              aria-pressed={reelPaused}
              onClick={() => setReelPaused(!reelPaused)}
            >
              {reelPaused ? <Play size={12} /> : <Pause size={12} />}
              <span>{reelPaused ? "Play reel" : "Pause reel"}</span>
            </button>
            <a className="scroll-cue" href="#results">
              THE WORK BEHIND THE AMBITION
              <ArrowDown size={12} />
            </a>
          </div>
        </section>
        <section id="results" className="results-section shell">
          <div className="section-kicker">
            <span className="eyebrow">01 / COMMERCIAL IMPACT</span>
            <span className="eyebrow muted">
              SELECTED CLIENT ENGAGEMENTS · JUN–SEP 2026
            </span>
          </div>
          <div className="results-grid">
            {commercialResults.map((r) => (
              <div className="result" key={r.label}>
                <strong>{r.value}</strong>
                <h2>{r.label}</h2>
                <p>{r.detail}</p>
              </div>
            ))}
          </div>
          <p className="results-note">
            Pipeline is the value of qualified sales opportunities.
          </p>
        </section>
        <section className="case-section shell section-space">
          <div className="section-heading">
            <h2>
              Built for the
              <br />
              <span>business outcome.</span>
            </h2>
            <p>
              The test of an AI system is what it helps
              <br className="wide-break" /> the business do. Here are two
              examples.
            </p>
          </div>
          <div className="case-grid">
            <article className="case-card">
              <div
                className="case-art outbound-art"
                aria-label="Outbound workflow: AI agent to 54 calls and 14 emails to qualified pipeline"
              >
                <div className="case-art-top">
                  <span>AGENTIC OUTBOUND / AUG 2026</span>
                  <span>01</span>
                </div>
                <div className="outbound-flow">
                  <div className="system-node">
                    <span className="system-node-icon">✳</span>
                    <span>AI agent</span>
                  </div>
                  <span className="flow-connector" />
                  <div className="channel-nodes">
                    <div>
                      <strong>54</strong>
                      <span>calls</span>
                    </div>
                    <div>
                      <strong>14</strong>
                      <span>emails</span>
                    </div>
                  </div>
                  <span className="flow-connector" />
                  <div className="system-node">
                    <ArrowUpRight size={29} />
                    <span>Pipeline</span>
                  </div>
                </div>
                <span className="art-note">WORKFLOW OVERVIEW</span>
              </div>
              <div className="case-copy">
                <span className="eyebrow">
                  AUTONOMOUS PROSPECTING → QUALIFIED PIPELINE
                </span>
                <h3>
                  $585,000 in pipeline.
                  <br />
                  One day of execution.
                </h3>
                <p>
                  Deployed autonomous outbound agents that made 54 calls and
                  sent 14 personalised emails in a single day, generating
                  qualified sales pipeline during a client engagement.
                </p>
                <div className="case-tags">
                  <span>AI calling agents</span>
                  <span>CRM routing</span>
                  <span>Aug 2026</span>
                </div>
              </div>
            </article>
            <article className="case-card">
              <div className="case-art efficiency-art">
                <div className="case-art-top">
                  <span>ABM AUTOMATION / SEP 2026</span>
                  <span>02</span>
                </div>
                <div className="token-chart">
                  <div className="token-row">
                    <span>BEFORE</span>
                    <div className="token-bar before" />
                    <strong>4M</strong>
                  </div>
                  <div className="token-row">
                    <span>AFTER</span>
                    <div className="token-bar after" />
                    <strong>~200K</strong>
                  </div>
                </div>
                <div className="token-bottom">
                  <strong>
                    95%<span> fewer tokens</span>
                  </strong>
                  <span>3.8M TOKENS SAVED</span>
                </div>
              </div>
              <div className="case-copy">
                <span className="eyebrow">
                  AUTOMATION → BETTER UNIT ECONOMICS
                </span>
                <h3>
                  More execution.
                  <br />
                  Less compute.
                </h3>
                <p>
                  Deployed an ABM automation system with token optimisation that
                  reduced usage from 4 million to approximately 200,000 tokens.
                  The efficiency layer matters as much as the agent.
                </p>
                <div className="case-tags">
                  <span>ABM automation</span>
                  <span>Token optimisation</span>
                  <span>Sep 2026</span>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="work" className="work-section shell section-space">
          <div className="section-kicker">
            <span className="eyebrow">02 / THE PROJECT INDEX</span>
            <span className="eyebrow muted">
              16 PROJECTS / MULTIPLE DISCIPLINES
            </span>
          </div>
          <div className="section-heading">
            <h2>
              Ideas are cheap.
              <br />
              <span>Here’s the work.</span>
            </h2>
            <p>
              Ventures, tools, systems, and research.
              <br className="wide-break" /> Turning thinking into something
              tangible.
            </p>
          </div>
          <div className="filters" role="group" aria-label="Filter projects">
            {categories.map((item) => (
              <button
                key={item}
                aria-pressed={category === item}
                className={category === item ? "active" : ""}
                onClick={() => {
                  setCategory(item);
                  setShowAll(false);
                }}
              >
                {item}
                {item === "All work" ? <span>{projects.length}</span> : null}
              </button>
            ))}
          </div>
          <div className="projects-grid" aria-live="polite">
            {visible.map((p) => (
              <button
                className="project-card"
                key={p.id}
                onClick={() => setSelected(p)}
                aria-label={`View project: ${p.name}`}
              >
                <div className="project-image">
                  <img
                    src={`/images/projects/${p.image}.webp`}
                    alt={`${p.name} project mockup`}
                    loading="lazy"
                    width={1440}
                    height={1080}
                  />
                  <span className="project-open">
                    <ArrowUpRight size={23} />
                  </span>
                </div>
                <div className="project-meta">
                  <span>{p.type}</span>
                  <span>
                    {String(projects.indexOf(p) + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
              </button>
            ))}
          </div>
          {filtered.length > 6 ? (
            <button
              className="button button-outline load-more"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "Show selected projects"
                : `View all ${filtered.length} projects`}
              {showAll ? <ArrowRight size={16} /> : <Plus size={16} />}
            </button>
          ) : null}
          <a className="archive-link" href="https://itsvinay.me/home/">
            Explore the previous project archive
            <ArrowUpRight size={14} />
          </a>
        </section>
        <section id="thesis" className="thesis-section section-space">
          <div className="shell">
            <div className="section-kicker">
              <span className="eyebrow">03 / THE OPERATING THESIS</span>
              <span className="eyebrow muted">
                THE ONE-PERSON COMPANY, REIMAGINED
              </span>
            </div>
            <div className="thesis-heading">
              <span className="thesis-symbol" aria-hidden="true">
                ↗
              </span>
              <h2>
                One founder.
                <br />A company’s worth
                <br />
                of <span>capability.</span>
              </h2>
              <p>
                I believe the next great company can be built by one person with
                extraordinary systems. My focus is the infrastructure that makes
                that possible: a product people want, distribution that
                compounds, and operations that scale.
              </p>
            </div>
            <div className="thesis-pillars">
              <article>
                <span className="eyebrow">01 / PRODUCT</span>
                <h3>
                  Build something
                  <br />
                  worth buying.
                </h3>
                <p>
                  Turn a real problem into a product. Prototype, test, and
                  connect the experience to a workable business model.
                </p>
                <span className="pillar-foot">
                  PRODUCTS · PROTOTYPES · BUSINESS MODELS
                </span>
              </article>
              <article>
                <span className="eyebrow">02 / DISTRIBUTION</span>
                <h3>
                  Build the engine
                  <br />
                  that finds demand.
                </h3>
                <p>
                  Connect research, intent signals, personalised outreach, and
                  CRM workflows so useful products reach the right people.
                </p>
                <span className="pillar-foot">
                  AGENTS · OUTBOUND · REVENUE OPERATIONS
                </span>
              </article>
              <article>
                <span className="eyebrow">03 / OPERATIONS</span>
                <h3>
                  Make execution
                  <br />
                  repeatable.
                </h3>
                <p>
                  Design the workflows, measurement, and compute discipline that
                  keep a lean operation reliable as the work grows.
                </p>
                <span className="pillar-foot">
                  ORCHESTRATION · ANALYTICS · EFFICIENCY
                </span>
              </article>
            </div>
          </div>
        </section>
        <section id="about" className="about-section shell section-space">
          <div className="founder-image">
            <img
              src="/images/portrait.jpg"
              alt="Vinay Jain"
              loading="lazy"
              width={640}
              height={800}
            />
            <span className="eyebrow">VINAY JAIN / HYDERABAD, INDIA</span>
          </div>
          <div className="founder-copy">
            <span className="eyebrow muted">04 / THE PERSON BUILDING IT</span>
            <h2>
              A builder’s instinct.
              <br />
              An operator’s <span>mindset.</span>
            </h2>
            <p>
              I’m Vinay. I work across AI automation, revenue operations, and
              product development. I’m interested in the complete system: how
              something gets built, how it finds customers, and how the
              economics hold up.
            </p>
            <p>
              My work ranges from autonomous outbound and CRM infrastructure to
              interactive tools, business websites, and financial research.
              Finance taught me to respect the numbers. Building taught me to
              make them move.
            </p>
            <p className="founder-statement">
              The one-person unicorn is the ambition.
              <br />
              The infrastructure is what I’m building.
            </p>
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Follow the journey
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
        <section id="contact" className="contact-section shell section-space">
          <div className="section-kicker">
            <span className="eyebrow">05 / BUILD WHAT’S NEXT</span>
            <span className="eyebrow muted">
              GOOD PROBLEMS DESERVE GOOD SYSTEMS
            </span>
          </div>
          <div className="contact-heading">
            <h2>
              Have a business
              <br />
              worth <span>building?</span>
            </h2>
            <a
              className="contact-arrow"
              aria-label="Email Vinay Jain"
              href={`mailto:${profile.email}`}
            >
              <ArrowUpRight strokeWidth={1} />
            </a>
          </div>
          <div className="contact-bottom">
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button
              className="copy-email"
              aria-label="Copy email address"
              onClick={copyEmail}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span aria-live="polite">
                {copied ? "Copied!" : "Copy email"}
              </span>
            </button>
            <a
              className="contact-social"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} />
              LinkedIn
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </main>
      <HalftoneWordmarkFooter
        wordmark="vinay."
        label="Vinay Jain / VinAI Technologies"
        meta="© 2026 · Building for leverage."
        palette={{ background: "#050505", ink: "#dedede", warm: "#ffffff" }}
        columns={[
          {
            title: "Explore",
            links: [
              { label: "Results", href: "#results" },
              { label: "Selected work", href: "#work" },
              { label: "The thesis", href: "#thesis" },
            ],
          },
          {
            title: "Elsewhere",
            links: [
              { label: "LinkedIn ↗", href: profile.linkedin },
              {
                label: "Project archive ↗",
                href: "https://itsvinay.me/home/",
              },
              {
                label: "Previous portfolio ↗",
                href: "https://itsvinay.me/explore/",
              },
            ],
          },
          {
            title: "Build with me",
            links: [
              { label: profile.email, href: `mailto:${profile.email}` },
              { label: profile.location, href: "#contact" },
            ],
          },
        ]}
        height="clamp(400px, 45vw, 650px)"
        fontFamily="'Manrope Variable', sans-serif"
        fontWeight={800}
        dotGap={6}
        crop={0.12}
        grain={0.22}
        className="site-footer"
      />
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
