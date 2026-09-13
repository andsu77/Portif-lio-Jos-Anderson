import { useEffect } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Clock3,
  Code2,
  Dumbbell,
  ExternalLink,
  Instagram,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MoveRight,
  Palette,
  Rocket,
  Scale,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import { useState } from "react";

const whatsappUrl =
  "https://wa.me/5571992464096?text=Ol%C3%A1%2C%20Jos%C3%A9!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20uma%20landing%20page%20para%20meu%20neg%C3%B3cio.";

const services = [
  {
    number: "01",
    icon: Sparkles,
    title: "Salões de beleza e estética",
    text: "Uma página que mostra seus serviços e diferenciais de forma profissional, com caminho direto para o WhatsApp.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Dentistas e clínicas",
    text: "Transmita confiança antes da primeira consulta, com informações claras e contato facilitado.",
  },
  {
    number: "03",
    icon: Scale,
    title: "Advogados e consultores autônomos",
    text: "Uma presença séria e objetiva para quem vive de indicação e precisa ser encontrado no Google.",
  },
  {
    number: "04",
    icon: Dumbbell,
    title: "Personal trainers, restaurantes e imobiliárias",
    text: "Uma landing page enxuta para negócios locais que não querem mais perder cliente para o concorrente.",
  },
];

const process = [
  ["01", "Você me explica sua ideia", "Entendo seu negócio, seu público e o que a landing page precisa fazer por você."],
  ["02", "Eu crio a estrutura", "Organizo as informações para que a página seja clara, bonita e fácil de navegar."],
  ["03", "Desenvolvimento", "Transformo a estrutura em uma landing page responsiva, rápida e pronta para receber visitantes."],
  ["04", "Revisão", "Você acompanha, sugere ajustes e aprovamos cada detalhe antes de publicar."],
  ["05", "Publicação", "Coloco sua landing page no ar e entrego tudo funcionando para você divulgar."],
];

const benefits = [
  [Palette, "Design moderno", "Uma identidade visual pensada para o seu negócio."],
  [MonitorSmartphone, "Responsivo", "Uma experiência cuidadosa no celular, tablet e computador."],
  [MessageCircle, "WhatsApp integrado", "Seu cliente encontra um caminho direto para falar com você."],
  [Rocket, "Entrega rápida", "Um processo direto, sem etapas desnecessárias ou complicação."],
  [MoveRight, "Processo simples", "Você entende o que está acontecendo em cada etapa."],
  [Clock3, "Suporte após a entrega", "Acompanhamento para você começar com tranquilidade."],
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
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#processo" onClick={closeMenu}>Processo</a>
          <WhatsAppButton className="header-cta">Vamos conversar <ArrowUpRight size={15} /></WhatsAppButton>
        </nav>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow"><span className="eyebrow-dot" /> LANDING PAGES PARA SALÕES, CLÍNICAS, ADVOGADOS E AUTÔNOMOS</div>
          <h1>Landing pages profissionais que fazem sua empresa <em>parecer grande.</em></h1>
          <p className="hero-description">Eu crio landing pages modernas, rápidas e responsivas para salões de beleza, dentistas, advogados autônomos, personal trainers, restaurantes e imobiliárias que não querem mais perder cliente para o concorrente que aparece primeiro no Google.</p>
          <div className="hero-actions">
            <WhatsAppButton>Quero minha landing page</WhatsAppButton>
            <a className="button button-ghost" href="#projetos">Ver projetos <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-proof"><span><Check size={14} /> Do design à publicação</span><span><Check size={14} /> Sem complicação</span></div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="photo-frame">
            <img className="photo-real" src="/jose-anderson.jpg" alt="José Anderson" />
            <div className="frame-corner frame-corner-tl" /><div className="frame-corner frame-corner-br" />
          </div>
          <div className="floating-card card-available"><span className="pulse-dot" /> Disponível para projetos</div>
          <div className="floating-card card-location"><span className="card-number">20</span><span>anos<br /><small>criando com intenção</small></span></div>
          <span className="visual-caption">A ideia certa<br /><strong>merece presença.</strong></span>
        </div>
      </section>

      <section className="intro-strip">
        <div className="section-shell intro-grid">
          <p className="intro-kicker">UMA PRESENÇA DIGITAL<br /><span>QUE TRABALHA POR VOCÊ</span></p>
          <p className="intro-text">Seu cliente já pesquisa no Google e no Instagram antes de fechar negócio. Se ele não te encontra lá, fecha com o concorrente. A landing page certa resolve isso — com clareza e um caminho direto para o WhatsApp.</p>
          <a className="round-link" href="#sobre" aria-label="Conheça meu trabalho"><ArrowDownRight size={20} /></a>
        </div>
      </section>

      <section className="section-shell about-section" id="sobre">
        <div className="about-aside" data-reveal><SectionLabel>01 / SOBRE</SectionLabel><span className="vertical-note">FEITO COM ATENÇÃO<br />A CADA DETALHE</span></div>
        <div className="about-content" data-reveal>
          <h2>Prazer, eu sou <span>José Anderson.</span></h2>
          <div className="about-columns">
            <p>Sou formado em Técnico em Desenvolvimento de Sistemas e atualmente estou construindo minha experiência profissional através de projetos reais e landing pages publicadas.</p>
            <div><p>Meu foco é simples: transformar uma ideia ou negócio em uma presença digital profissional.</p><p>Cada projeto recebe atenção individual, cuidado nos detalhes e foco em entregar algo que realmente possa ser usado pelo cliente.</p></div>
          </div>
          <div className="about-signature"><span className="signature-line" /><span>desenvolvimento com intenção</span></div>
        </div>
      </section>

      <section className="dark-section services-section" id="servicos">
        <div className="section-shell">
          <div className="section-heading" data-reveal><div><SectionLabel>02 / O QUE EU FAÇO</SectionLabel><h2>Seu negócio, com uma<br /><span>presença à altura.</span></h2></div><p>Do primeiro rascunho até a landing page publicada, construo experiências digitais que parecem — e funcionam — profissionalmente.</p></div>
          <div className="services-grid">{services.map(({ number, icon: Icon, title, text }) => <article className="service-card" key={number} data-reveal><div className="card-top"><span>{number}</span><Icon size={22} strokeWidth={1.6} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={20} /></article>)}</div>
        </div>
      </section>

      <section className="section-shell projects-section" id="projetos">
        <div className="section-heading projects-heading" data-reveal><div><SectionLabel>03 / TRABALHOS</SectionLabel><h2>Projetos<br /><span>selecionados.</span></h2></div><p>Um recorte do que já consigo construir. Sempre com transparência sobre o que é projeto próprio e o que é demonstração.</p></div>
        <div className="projects-layout">
          <article className="project-card project-featured" data-reveal><div className="project-art fitness-art"><div className="art-nav"><span>FITNESS<br /><strong>SOLUTION</strong></span><span className="art-pill">PLATAFORMA WEB</span></div><div className="fitness-word">FITNESS<br /><span>SOLUTION</span></div><div className="art-bottom"><span>Treine menos.<br /><strong>Evolua mais.</strong></span><span className="art-circle"><ArrowUpRight size={22} /></span></div></div><div className="project-meta"><div><p className="project-type">PROJETO PRÓPRIO / DEMONSTRATIVO</p><h3>Fitness Solution</h3><p>Plataforma web para experiência fitness, desenvolvida como projeto próprio/demonstrativo.</p></div><a className="project-link" href="https://fitness-solution.onrender.com" target="_blank" rel="noreferrer">Ver projeto <ExternalLink size={15} /></a></div></article>
          <div className="project-side">
            <article className="project-card mini-project" data-reveal><div className="project-art barber-art"><span className="demo-tag">DEMONSTRAÇÃO — PROJETO FICTÍCIO</span><div className="barber-word">BLACK<br /><span>BARBEARIA</span></div><span className="art-serial">EST. 2024 / STUDIO</span></div><div className="mini-meta"><h3>Barbearia Black</h3><p>Conceito visual para um negócio local com presença marcante.</p></div></article>
            <article className="project-card mini-project" data-reveal><div className="project-art move-art"><span className="demo-tag">DEMONSTRAÇÃO — PROJETO FICTÍCIO</span><div className="move-word">STUDIO<br /><span>MOVE</span></div><div className="move-lines" /></div><div className="mini-meta"><h3>Studio Move</h3><p>Conceito de página para um estúdio de movimento e bem-estar.</p></div></article>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="precos">
        <div className="section-shell">
          <div className="section-heading pricing-heading" data-reveal><div><SectionLabel>04 / INVESTIMENTO</SectionLabel><h2>Seu negócio precisa de uma landing page.<br /><span>Seu primeiro passo pode começar em R$497.</span></h2></div><p>Um plano claro, sem preço riscado falso e sem letras miúdas.</p></div>
          <div className="plans-grid plans-grid-single">
            <article className="plan-card plan-featured" data-reveal><div className="plan-top"><div><p className="plan-label">LANDING PAGE PROFISSIONAL</p><p className="plan-desc">Uma página completa para apresentar seu negócio e converter visitantes.</p></div></div><div className="price">R$497 <small>pagamento único</small></div><ul>{["Design personalizado", "Responsivo para celular", "Até 5 seções", "Botão de WhatsApp", "Formulário de contato", "Links para redes sociais", "SEO básico", "Publicação online", "7 dias de suporte"].map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul><WhatsAppButton>Quero minha landing page por R$497</WhatsAppButton><p className="plan-note">Preço de lançamento por tempo limitado.</p></article>
          </div>
        </div>
      </section>

      <section className="section-shell process-section" id="processo">
        <div className="process-intro" data-reveal><SectionLabel>05 / COMO FUNCIONA</SectionLabel><h2>Do primeiro “e se…”<br />à <span>landing page no ar.</span></h2><p>Um processo simples, próximo e sem linguagem complicada. Você sabe onde está e o que acontece depois.</p></div>
        <div className="process-list">{process.map(([number, title, text]) => <div className="process-row" key={number} data-reveal><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={19} /></div>)}</div>
      </section>

      <section className="benefits-section"><div className="section-shell"><div className="benefits-heading" data-reveal><SectionLabel>06 / POR QUE FAZER</SectionLabel><h2>Mais do que bonito.<br /><span>Feito para funcionar.</span></h2></div><div className="benefits-grid">{benefits.map(([Icon, title, text]) => <div className="benefit" key={title as string} data-reveal><Icon size={21} /><div><h3>{title as string}</h3><p>{text as string}</p></div></div>)}</div></div></section>

      <section className="final-cta"><div className="cta-noise" /><div className="section-shell final-cta-inner" data-reveal><div><SectionLabel>07 / VAMOS CONVERSAR</SectionLabel><h2>Seu negócio merece uma<br /><em>presença profissional.</em></h2><p>Se você já tem uma empresa, trabalha por conta própria ou está começando um negócio, eu posso criar uma landing page para apresentar seu trabalho de forma profissional.</p></div><WhatsAppButton>Falar comigo no WhatsApp</WhatsAppButton></div></section>

      <footer className="site-footer"><div className="section-shell footer-main"><a className="brand" href="#inicio"><span className="brand-mark">JA</span><span className="brand-text">JOSÉ <strong>ANDERSON</strong></span></a><p>Landing pages modernas para negócios que<br />querem ser levados a sério.</p><div className="footer-contact"><span>FALE DIRETO COMIGO</span><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a></div></div><div className="section-shell footer-bottom"><span>© 2026 José Anderson. Todos os direitos reservados.</span><span>Desenvolvido com intenção.</span><div className="footer-socials"><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a><span title="Instagram será adicionado quando configurado"><Instagram size={17} /></span><span title="GitHub será adicionado quando configurado"><Code2 size={17} /></span></div></div></footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com José pelo WhatsApp"><MessageCircle size={22} /></a>
    </main>
  );
}
