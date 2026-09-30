import { useEffect } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Clock3,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MoveRight,
  Palette,
  Rocket,
  X,
} from "lucide-react";
import { useState } from "react";

const whatsappMessage =
  "Olá, José! Vi seu portfólio e gostaria de conversar sobre uma oportunidade de trabalho.";
const whatsappUrl = `https://wa.me/5571992464096?text=${encodeURIComponent(whatsappMessage)}`;

const skills = [
  {
    number: "01",
    icon: Code2,
    title: "Frontend com React & TypeScript",
    text: "Interfaces responsivas e tipadas, com componentes reutilizáveis e foco na experiência de quem usa.",
  },
  {
    number: "02",
    icon: Database,
    title: "Backend com Node.js & Prisma",
    text: "APIs REST com Express, Prisma e banco de dados relacional, prontas para produção.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Integrações reais",
    text: "WhatsApp, autenticação, fila em tempo real — recursos que resolvem um problema de verdade, não só protótipo.",
  },
  {
    number: "04",
    icon: GitBranch,
    title: "Git, deploy e acompanhamento",
    text: "Versionamento organizado, deploy em produção e ajustes depois que o sistema já está no ar.",
  },
];

const process = [
  ["01", "Entendo o problema", "Antes de programar, entendo o que o sistema precisa resolver e para quem."],
  ["02", "Planejo a estrutura", "Banco de dados, rotas e componentes organizados antes de sair escrevendo código."],
  ["03", "Desenvolvimento", "Transformo o plano em código tipado, testado e pronto para produção."],
  ["04", "Revisão", "Reviso, ajusto e corrijo antes de considerar pronto."],
  ["05", "Entrega e acompanhamento", "Publico, documento e acompanho o sistema depois que está no ar."],
];

const benefits = [
  [Palette, "Atenção aos detalhes", "Cuido da consistência visual e da experiência de quem usa o sistema."],
  [MonitorSmartphone, "Full-stack na prática", "Transito entre frontend, backend e banco de dados sem depender de outra pessoa pra fechar a feature."],
  [MessageCircle, "Comunicação clara", "Explico o que fiz e por quê, sem esconder gargalo atrás de jargão técnico."],
  [Rocket, "Aprendizado rápido", "Pego uma stack nova e em pouco tempo já estou entregando com ela."],
  [MoveRight, "Processo organizado", "Planejo antes de codar e documento o que decido."],
  [Clock3, "Comprometimento", "Cumpro prazo e acompanho o que entrego depois de publicado."],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function WhatsAppButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a className={`button button-primary ${className}`} href={whatsappUrl} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={17} strokeWidth={2.2} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="José Anderson, início">
          <span className="brand-mark">JA</span>
          <span className="brand-text">JOSÉ <strong>ANDERSON</strong></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Navegação principal">
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#servicos" onClick={closeMenu}>Stack</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#processo" onClick={closeMenu}>Processo</a>
          <WhatsAppButton className="header-cta">Vamos conversar <ArrowUpRight size={15} /></WhatsAppButton>
        </nav>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow"><span className="eyebrow-dot" /> DESENVOLVEDOR NODE.JS · TYPESCRIPT · REACT</div>
          <h1>Desenvolvedor full-stack em busca da minha <em>primeira vaga CLT.</em></h1>
          <p className="hero-description">Construo aplicações completas com Node.js, TypeScript, React e Prisma — do banco de dados à interface. Já entreguei sistemas em produção para clientes reais e agora quero colocar essa energia dentro de um time.</p>
          <div className="hero-actions">
            <WhatsAppButton>Quero conversar sobre uma vaga</WhatsAppButton>
            <a className="button button-ghost" href="#projetos">Ver projetos <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-proof"><span><Check size={14} /> Do banco de dados à interface</span><span><Check size={14} /> Disponível para CLT, estágio ou júnior</span></div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="photo-frame">
            <img className="photo-real" src="/jose-anderson.jpg" alt="José Anderson" />
            <div className="frame-corner frame-corner-tl" /><div className="frame-corner frame-corner-br" />
          </div>
          <div className="floating-card card-available"><span className="pulse-dot" /> Disponível para CLT</div>
          <div className="floating-card card-location"><span className="card-number">20</span><span>anos<br /><small>criando com intenção</small></span></div>
          <span className="visual-caption">A ideia certa<br /><strong>merece presença.</strong></span>
        </div>
      </section>

      <section className="intro-strip">
        <div className="section-shell intro-grid">
          <p className="intro-kicker">CÓDIGO QUE JÁ<br /><span>RODA EM PRODUÇÃO</span></p>
          <p className="intro-text">Não é só teoria de curso: já construí sistemas reais usados por clientes de verdade — fila de atendimento em tempo real, pedidos via WhatsApp, painel administrativo. Quero levar esse cuidado para dentro de um time.</p>
          <a className="round-link" href="#sobre" aria-label="Conheça meu trabalho"><ArrowDownRight size={20} /></a>
        </div>
      </section>

      <section className="section-shell about-section" id="sobre">
        <div className="about-aside" data-reveal><SectionLabel>01 / SOBRE</SectionLabel><span className="vertical-note">FEITO COM ATENÇÃO<br />A CADA DETALHE</span></div>
        <div className="about-content" data-reveal>
          <h2>Prazer, eu sou <span>José Anderson.</span></h2>
          <div className="about-columns">
            <p>Curso Técnico em Desenvolvimento de Sistemas no SENAI e pretendo seguir para a faculdade de Análise e Desenvolvimento de Sistemas (ADS). Enquanto isso, construo experiência através de projetos reais e sistemas publicados.</p>
            <div><p>Meu foco agora é simples: entrar em um time de desenvolvimento, aprender com quem já tem mais experiência e crescer junto.</p><p>Cada projeto que construo recebe atenção individual e cuidado nos detalhes — é assim que pretendo trabalhar dentro de uma empresa também.</p></div>
          </div>
          <div className="about-signature"><span className="signature-line" /><span>desenvolvimento com intenção</span></div>
        </div>
      </section>

      <section className="dark-section services-section" id="servicos">
        <div className="section-shell">
          <div className="section-heading" data-reveal><div><SectionLabel>02 / STACK & HABILIDADES</SectionLabel><h2>Tecnologia que eu já<br /><span>uso de verdade.</span></h2></div><p>Da estrutura do banco de dados até a interface — essas são as ferramentas que uso pra transformar uma ideia em sistema rodando em produção.</p></div>
          <div className="services-grid">{skills.map(({ number, icon: Icon, title, text }) => <article className="service-card" key={number} data-reveal><div className="card-top"><span>{number}</span><Icon size={22} strokeWidth={1.6} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={20} /></article>)}</div>
        </div>
      </section>

      <section className="section-shell projects-section" id="projetos">
        <div className="section-heading projects-heading" data-reveal><div><SectionLabel>03 / TRABALHOS</SectionLabel><h2>Projetos<br /><span>selecionados.</span></h2></div><p>Sistemas reais em produção para clientes, além de um projeto próprio para explorar novas tecnologias.</p></div>
        <div className="projects-layout">
          <article className="project-card project-featured" data-reveal><div className="project-art fitness-art"><div className="art-nav"><span>FITNESS<br /><strong>SOLUTION</strong></span><span className="art-pill">PLATAFORMA WEB</span></div><div className="fitness-word">FITNESS<br /><span>SOLUTION</span></div><div className="art-bottom"><span>Treine menos.<br /><strong>Evolua mais.</strong></span><span className="art-circle"><ArrowUpRight size={22} /></span></div></div><div className="project-meta"><div><p className="project-type">PROJETO PRÓPRIO / DEMONSTRATIVO</p><h3>Fitness Solution</h3><p>Plataforma web para experiência fitness, desenvolvida como projeto próprio/demonstrativo.</p></div><a className="project-link" href="https://fitness-solution.onrender.com" target="_blank" rel="noreferrer">Ver projeto <ExternalLink size={15} /></a></div></article>
          <div className="project-side">
            <article className="project-card mini-project" data-reveal><div className="project-art screenshot-art"><img src="/projects/zup.png" alt="Zup, sistema de fila de eventos" loading="lazy" /><span className="demo-tag real-tag">PROJETO REAL — CLIENTE</span></div><div className="mini-meta"><h3>Zup — Fila de Eventos</h3><p>Sistema para o totem fotográfico da Promolog: gera senha, mostra a fila em tempo real e avisa cada participante pelo WhatsApp.</p><div className="project-stack"><span>Node.js</span><span>TypeScript</span><span>React</span><span>Prisma</span><span>PostgreSQL</span></div><a className="project-link" href="https://fila.zuper.cloud" target="_blank" rel="noreferrer">Ver projeto <ExternalLink size={13} /></a></div></article>
            <article className="project-card mini-project" data-reveal><div className="project-art screenshot-art"><img src="/projects/larissa-oliveira.png" alt="Larissa Oliveira, confeitaria artesanal" loading="lazy" /><span className="demo-tag real-tag">PROJETO REAL — CLIENTE</span></div><div className="mini-meta"><h3>Larissa Oliveira Doces</h3><p>Landing page de confeitaria artesanal com cardápio, agenda de feiras e pedidos direto pelo WhatsApp.</p><div className="project-stack"><span>Node.js</span><span>TypeScript</span><span>React</span><span>Tailwind CSS</span></div><a className="project-link" href="https://larissadoces.onrender.com" target="_blank" rel="noreferrer">Ver projeto <ExternalLink size={13} /></a></div></article>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="precos">
        <div className="section-shell">
          <div className="section-heading pricing-heading" data-reveal><div><SectionLabel>04 / DISPONIBILIDADE</SectionLabel><h2>Pronto pra somar em<br /><span>um time de desenvolvimento.</span></h2></div><p>Sem freelance nessa aqui: é uma vaga CLT, estágio ou júnior que eu procuro.</p></div>
          <div className="plans-grid plans-grid-single">
            <article className="plan-card plan-featured" data-reveal><div className="plan-top"><div><p className="plan-label">ABERTO A OPORTUNIDADES</p><p className="plan-desc">O que eu já trago pronto pra somar no time desde o primeiro dia.</p></div></div><div className="price">CLT <small>ou estágio / júnior</small></div><ul>{["Node.js & TypeScript", "React", "Prisma & SQL", "Git & GitHub", "Integração com WhatsApp/API", "Comunicação clara", "Disponibilidade imediata", "Sempre aprendendo"].map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul><WhatsAppButton>Quero conversar sobre uma vaga</WhatsAppButton><p className="plan-note">Técnico em Desenvolvimento de Sistemas (SENAI) — cursando.</p></article>
          </div>
        </div>
      </section>

      <section className="section-shell process-section" id="processo">
        <div className="process-intro" data-reveal><SectionLabel>05 / COMO EU TRABALHO</SectionLabel><h2>Do primeiro “e se…”<br />ao <span>sistema no ar.</span></h2><p>Um processo organizado, do entendimento do problema até o acompanhamento depois da entrega.</p></div>
        <div className="process-list">{process.map(([number, title, text]) => <div className="process-row" key={number} data-reveal><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={19} /></div>)}</div>
      </section>

      <section className="benefits-section"><div className="section-shell"><div className="benefits-heading" data-reveal><SectionLabel>06 / POR QUE ME CONTRATAR</SectionLabel><h2>Mais do que código.<br /><span>Feito pra funcionar em time.</span></h2></div><div className="benefits-grid">{benefits.map(([Icon, title, text]) => <div className="benefit" key={title as string} data-reveal><Icon size={21} /><div><h3>{title as string}</h3><p>{text as string}</p></div></div>)}</div></div></section>

      <section className="final-cta"><div className="cta-noise" /><div className="section-shell final-cta-inner" data-reveal><div><SectionLabel>07 / VAMOS CONVERSAR</SectionLabel><h2>Buscando minha primeira<br /><em>oportunidade CLT.</em></h2><p>Estou disponível para vagas de desenvolvedor júnior, estagiário ou trainee. Se sua empresa está contratando, ou você conhece alguém que está, vamos conversar.</p></div><WhatsAppButton>Falar comigo no WhatsApp</WhatsAppButton></div></section>

      <footer className="site-footer"><div className="section-shell footer-main"><a className="brand" href="#inicio"><span className="brand-mark">JA</span><span className="brand-text">JOSÉ <strong>ANDERSON</strong></span></a><p>Desenvolvedor full-stack em busca de uma vaga CLT.<br />Node.js, TypeScript e React.</p><div className="footer-contact"><span>FALE DIRETO COMIGO</span><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a></div></div><div className="section-shell footer-bottom"><span>© 2026 José Anderson. Todos os direitos reservados.</span><span>Desenvolvido com intenção.</span><div className="footer-socials"><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a><a href="https://instagram.com/andsu00" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a><a href="https://www.linkedin.com/in/jose-andersonn" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:joseandersonneves15@gmail.com" aria-label="E-mail"><Mail size={17} /></a><span title="GitHub será adicionado quando configurado"><Code2 size={17} /></span></div></div></footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com José pelo WhatsApp"><MessageCircle size={22} /></a>
    </main>
  );
}
