import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Twitter,
  ExternalLink,
  Download,
  MapPin,
  ArrowUpRight,
  Terminal,
  Shield,
  Cloud,
  Code,
  Network,
  Wrench,
} from "lucide-react";

export default function BaileyWilburnSite() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const bg = dark ? "bg-zinc-950" : "bg-stone-50";
  const text = dark ? "text-zinc-100" : "text-zinc-900";
  const muted = dark ? "text-zinc-400" : "text-zinc-600";
  const border = dark ? "border-zinc-800" : "border-zinc-200";
  const cardBg = dark ? "bg-zinc-900/50" : "bg-white";
  const hoverBg = dark ? "hover:bg-zinc-900" : "hover:bg-zinc-100";
  const accent = dark ? "text-emerald-400" : "text-emerald-600";
  const accentBg = dark ? "bg-emerald-400" : "bg-emerald-600";

  const projects = [
    {
      name: "TekSure.com",
      tag: "Flagship",
      desc: "A beginner-friendly tech guides and support platform. Features guide categories, an App Recommender, Troubleshooter, TekBot AI assistant, and community tools.",
      stack: ["React", "TypeScript", "Tailwind", "Supabase", "Stripe"],
      link: "https://teksure.com",
    },
    {
      name: "AI300 Portfolio",
      tag: "Series",
      desc: "A suite of niche Twitter/X automation accounts following a standardized content-bank, post-calendar, and DM-automation playbook. Live: TriviaAI300, HoroscopeAI300.",
      stack: ["Content Ops", "TweetHunter", "ManyChat"],
      link: null,
    },
    {
      name: "Dead Reckoning",
      tag: "Game",
      desc: "A GeoGuessr-style US city guessing game with clue-based gameplay, canvas map rendering via TopoJSON, and four difficulty modes.",
      stack: ["React", "Canvas", "TopoJSON"],
      link: null,
    },
    {
      name: "Home Lab",
      tag: "Infra",
      desc: "Personal lab environment with VLAN segmentation for hands-on practice in networking, security, and cloud tooling. Used for cert prep and experimentation.",
      stack: ["pfSense", "VLANs", "Proxmox"],
      link: null,
    },
  ];

  const skillGroups = [
    {
      icon: Shield,
      title: "Security",
      items: ["Security+ CE", "Okta / SSO", "Compliance (banking)", "IAM"],
    },
    {
      icon: Cloud,
      title: "Cloud",
      items: ["AWS fundamentals", "Terraform", "IAM policies", "Cloud security"],
    },
    {
      icon: Network,
      title: "Networking",
      items: ["VLANs", "Troubleshooting", "Connectivity", "Home lab"],
    },
    {
      icon: Code,
      title: "Development",
      items: ["React / TypeScript", "Tailwind / shadcn", "Supabase", "Git"],
    },
    {
      icon: Wrench,
      title: "IT Operations",
      items: ["Help desk", "PSA / RMM tools", "Endpoint mgmt", "User support"],
    },
    {
      icon: Terminal,
      title: "Tools",
      items: ["VS Code", "OBS / CapCut", "ElevenLabs", "ManyChat"],
    },
  ];

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`${bg} ${text} min-h-screen font-sans transition-colors duration-300`}
      style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" }}
    >
      {/* Nav */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur-md ${
          dark ? "bg-zinc-950/70" : "bg-stone-50/70"
        } border-b ${border}`}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-mono text-sm tracking-tight hover:opacity-70 transition-opacity"
          >
            <span className={accent}>$</span> bailey.wilburn
            <span
              className={`inline-block w-2 h-4 ml-1 ${accentBg} align-middle animate-pulse`}
            ></span>
          </button>
          <div className="flex items-center gap-1">
            <div className="hidden md:flex items-center gap-1 mr-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    activeSection === item.id ? accent : muted
                  } ${hoverBg}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setDark(!dark)}
              className={`p-2 rounded-md ${hoverBg} transition-colors`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        <div className={`font-mono text-xs ${muted} mb-6 flex items-center gap-2`}>
          <span className={`w-2 h-2 rounded-full ${accentBg}`}></span>
          <span>Available for cloud security &amp; MSP roles</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Bailey Wilburn
        </h1>
        <p className={`text-lg md:text-xl ${muted} mb-8 max-w-2xl leading-relaxed`}>
          IT &amp; cybersecurity professional building practical tools for everyday
          users. Help desk by day, shipping projects at{" "}
          <span className={accent}>TekSure</span> and elsewhere by night.
        </p>
        <div className={`flex items-center gap-2 text-sm ${muted} mb-10 font-mono`}>
          <MapPin className="w-4 h-4" />
          <span>Louisiana</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo("projects")}
            className={`${accentBg} text-white px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2`}
          >
            View projects <ArrowUpRight className="w-4 h-4" />
          </button>
          <a
            href="/resume.pdf"
            className={`border ${border} px-5 py-2.5 rounded-md text-sm font-medium ${hoverBg} transition-colors flex items-center gap-2`}
          >
            <Download className="w-4 h-4" /> Resume
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className={`border ${border} px-5 py-2.5 rounded-md text-sm font-medium ${hoverBg} transition-colors flex items-center gap-2`}
          >
            <Mail className="w-4 h-4" /> Contact
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className={`border-t ${border}`}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className={`font-mono text-xs ${accent} mb-3`}>01 / ABOUT</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            A quick intro.
          </h2>
          <div
            className={`space-y-5 ${muted} text-base md:text-lg leading-relaxed max-w-3xl`}
          >
            <p>
              I work IT help desk at a community bank in Louisiana, where I handle
              troubleshooting, network and connectivity issues, and Okta/SSO
              administration inside a security- and compliance-conscious
              environment. I hold a{" "}
              <span className={text}>CompTIA Security+ CE</span> and have a
              cybersecurity degree.
            </p>
            <p>
              I'm actively pointing my career toward{" "}
              <span className={text}>cloud security engineering</span> and MSP-style
              roles, with a long-term interest in AI security. On the side I run a
              handful of projects: the biggest is{" "}
              <span className={accent}>TekSure</span>, a platform for tech tips and
              how-tos aimed at non-techies, and a series of niche X/Twitter
              automation accounts I call the AI300 portfolio.
            </p>
            <p>When I'm not at a keyboard I'm usually planning the next trip.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`border-t ${border}`}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className={`font-mono text-xs ${accent} mb-3`}>02 / PROJECTS</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            Things I'm building.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <div
                key={p.name}
                className={`${cardBg} border ${border} rounded-lg p-6 transition-all hover:border-emerald-500/50 group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded ${
                      dark ? "bg-zinc-800 text-zinc-400" : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>
                <p className={`text-sm ${muted} leading-relaxed mb-4`}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className={`font-mono text-[11px] px-2 py-0.5 rounded ${
                        dark
                          ? "bg-zinc-800/60 text-zinc-400"
                          : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm ${accent} hover:gap-2 transition-all`}
                  >
                    Visit <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={`border-t ${border}`}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className={`font-mono text-xs ${accent} mb-3`}>03 / SKILLS</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            Stack &amp; certifications.
          </h2>
          <div
            className={`${cardBg} border ${border} rounded-lg p-6 mb-6 flex items-center gap-4`}
          >
            <div
              className={`w-12 h-12 rounded-md ${accentBg} flex items-center justify-center shrink-0`}
            >
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold">CompTIA Security+ CE</div>
              <div className={`text-sm ${muted} font-mono`}>
                Active · Cybersecurity degree
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className={`${cardBg} border ${border} rounded-lg p-5`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-4 h-4 ${accent}`} />
                    <div className="font-semibold text-sm">{g.title}</div>
                  </div>
                  <ul className={`space-y-1.5 text-sm ${muted}`}>
                    {g.items.map((item) => (
                      <li key={item} className="font-mono text-xs">
                        — {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`border-t ${border}`}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className={`font-mono text-xs ${accent} mb-3`}>04 / CONTACT</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Let's talk.
          </h2>
          <p className={`${muted} text-lg mb-10 max-w-2xl leading-relaxed`}>
            Open to cloud security and MSP opportunities, collaborations on TekSure,
            or anything interesting at the intersection of security and building
            things.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "hello@baileywilburn.com",
                href: "mailto:hello@baileywilburn.com",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "@bwilburn6202",
                href: "https://github.com/bwilburn6202",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "in/baileywilburn",
                href: "https://www.linkedin.com/in/baileywilburn",
              },
              {
                icon: Twitter,
                label: "X / Twitter",
                value: "@baileywilburn",
                href: "https://x.com/baileywilburn",
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  className={`${cardBg} border ${border} rounded-lg p-4 ${hoverBg} transition-colors flex items-center gap-3 group`}
                >
                  <div
                    className={`w-9 h-9 rounded-md ${
                      dark ? "bg-zinc-800" : "bg-zinc-100"
                    } flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-xs ${muted} font-mono uppercase tracking-wider`}
                    >
                      {c.label}
                    </div>
                    <div className="text-sm truncate">{c.value}</div>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 ${muted} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${border}`}>
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className={`font-mono text-xs ${muted}`}>
            © 2026 Bailey Wilburn · baileywilburn.com
          </div>
          <a
            href="/resume.pdf"
            className={`font-mono text-xs ${muted} hover:opacity-70 flex items-center gap-1.5 transition-colors`}
          >
            <Download className="w-3 h-3" /> resume.pdf
          </a>
        </div>
      </footer>
    </div>
  );
}
