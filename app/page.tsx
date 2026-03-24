"use client";

import { useState, useEffect } from "react";

const content = {
  pt: {
    nav: {
      services: "Serviços",
      about: "Sobre",
      contact: "Contato",
    },
    hero: {
      badge: "Soluções Tecnológicas",
      title: "FRZ",
      titleHighlight: "System",
      tagline: "Tecnologia sob medida para negócios que evoluem",
      description:
        "Transformamos sua operação com ERP, automações inteligentes, análise de dados e produtos SaaS desenvolvidos para o seu negócio crescer.",
      cta: "Fale Conosco",
      ctaSecondary: "Ver Serviços",
    },
    services: {
      title: "Nossos Serviços",
      subtitle: "Soluções completas para cada etapa do seu negócio",
      items: [
        {
          icon: "🖥️",
          title: "ERP",
          description:
            "Integração e gestão completa dos processos da sua empresa com sistemas ERP modernos e escaláveis, conectando finanças, estoque, vendas e muito mais.",
        },
        {
          icon: "⚡",
          title: "Automações",
          description:
            "Eliminamos tarefas repetitivas e otimizamos seus fluxos de trabalho com automações inteligentes que economizam tempo e reduzem erros.",
        },
        {
          icon: "📊",
          title: "Análise de Dados",
          description:
            "Transformamos dados em insights estratégicos com dashboards, relatórios e análises que apoiam decisões mais rápidas e assertivas.",
        },
        {
          icon: "🚀",
          title: "Criação de SaaS",
          description:
            "Desenvolvemos produtos digitais completos, do conceito ao lançamento, criando plataformas SaaS robustas e prontas para escalar.",
        },
      ],
    },
    about: {
      title: "Sobre a FRZ System",
      subtitle: "Tecnologia com propósito",
      description1:
        "A FRZ System nasceu com o objetivo de democratizar o acesso a soluções tecnológicas de alto nível para empresas de todos os tamanhos. Acreditamos que tecnologia bem aplicada é o maior diferencial competitivo de qualquer negócio.",
      description2:
        "Com experiência em diferentes segmentos, entregamos projetos que unem eficiência técnica com impacto real nos resultados dos nossos clientes.",
      stats: [
        { value: "100%", label: "Foco no cliente" },
        { value: "24/7", label: "Suporte dedicado" },
        { value: "∞", label: "Escalabilidade" },
      ],
    },
    contact: {
      title: "Vamos conversar?",
      subtitle: "Entre em contato e descubra como podemos transformar o seu negócio",
      email: "E-mail",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      cta: "Enviar mensagem pelo WhatsApp",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Technology Solutions",
      title: "FRZ",
      titleHighlight: "System",
      tagline: "Custom technology for evolving businesses",
      description:
        "We transform your operation with ERP, smart automations, data analytics and SaaS products built for your business to grow.",
      cta: "Get in Touch",
      ctaSecondary: "Our Services",
    },
    services: {
      title: "Our Services",
      subtitle: "Complete solutions for every stage of your business",
      items: [
        {
          icon: "🖥️",
          title: "ERP",
          description:
            "Full integration and management of your company's processes with modern and scalable ERP systems, connecting finance, inventory, sales and more.",
        },
        {
          icon: "⚡",
          title: "Automations",
          description:
            "We eliminate repetitive tasks and optimize your workflows with smart automations that save time and reduce errors.",
        },
        {
          icon: "📊",
          title: "Data Analytics",
          description:
            "We turn data into strategic insights with dashboards, reports and analyses that support faster and more accurate decisions.",
        },
        {
          icon: "🚀",
          title: "SaaS Development",
          description:
            "We develop complete digital products from concept to launch, building robust and scalable SaaS platforms.",
        },
      ],
    },
    about: {
      title: "About FRZ System",
      subtitle: "Technology with purpose",
      description1:
        "FRZ System was created to democratize access to high-level technology solutions for businesses of all sizes. We believe that well-applied technology is the greatest competitive advantage of any business.",
      description2:
        "With experience in different segments, we deliver projects that combine technical efficiency with real impact on our clients' results.",
      stats: [
        { value: "100%", label: "Client focused" },
        { value: "24/7", label: "Dedicated support" },
        { value: "∞", label: "Scalability" },
      ],
    },
    contact: {
      title: "Let's talk?",
      subtitle: "Get in touch and discover how we can transform your business",
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      cta: "Send a WhatsApp message",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

type Lang = "pt" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappLink = `https://wa.me/5511973732567?text=${encodeURIComponent(
    lang === "pt"
      ? "Olá! Gostaria de saber mais sobre os serviços da FRZ System."
      : "Hello! I'd like to know more about FRZ System services."
  )}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-3" : "py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-xs">FRZ</span>
            </div>
            <span className="font-bold text-lg text-white">
              FRZ <span className="text-green-400">System</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="nav-link text-gray-600 hover:text-green-500 text-sm font-medium">
              {t.nav.services}
            </a>
            <a href="#about" className="nav-link text-gray-600 hover:text-green-500 text-sm font-medium">
              {t.nav.about}
            </a>
            <a href="#contact" className="nav-link text-gray-600 hover:text-green-500 text-sm font-medium">
              {t.nav.contact}
            </a>

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-green-500/30 text-green-400 text-xs font-semibold hover:bg-green-500/10 transition-all"
            >
              <span>{lang === "pt" ? "🇧🇷" : "🇺🇸"}</span>
              <span>{lang === "pt" ? "PT" : "EN"}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 hover:text-green-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-green-500 font-medium">{t.nav.services}</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-green-500 font-medium">{t.nav.about}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-green-500 font-medium">{t.nav.contact}</a>
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="w-fit flex items-center gap-1 px-3 py-1.5 rounded-full border border-green-500/30 text-green-400 text-xs font-semibold"
            >
              <span>{lang === "pt" ? "🇧🇷 PT" : "🇺🇸 EN"}</span>
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-400/5 rounded-full blur-3xl pointer-events-none" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">{t.hero.badge}</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in-up leading-none tracking-tight" style={{ animationDelay: "0.1s" }}>
            <span className="text-gray-900">{t.hero.title} </span>
            <span className="gradient-text">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-xl md:text-2xl text-green-600 font-medium mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t.hero.tagline}
          </p>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pulse px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 text-base"
            >
              {t.hero.cta}
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-green-500/40 text-green-400 hover:bg-green-500/10 font-semibold rounded-full transition-all duration-300 text-base"
            >
              {t.hero.ctaSecondary} →
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float opacity-50">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              {t.services.title}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t.services.subtitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.services.items.map((service, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 card-hover"
              >
                <div className="text-4xl mb-5">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                <div className="mt-6 w-12 h-0.5 bg-green-500/40 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-green-500/[0.02] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
                {t.about.title}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.about.subtitle}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5 text-lg">
                {t.about.description1}
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t.about.description2}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center card-hover">
                  <div className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}

              {/* Visual decoration */}
              <div className="col-span-3 bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-800 font-semibold text-sm">
                    {lang === "pt" ? "Soluções entregues com qualidade" : "Solutions delivered with quality"}
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    {lang === "pt" ? "Do planejamento ao resultado final" : "From planning to final result"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            {t.contact.title}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.subtitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 mb-10">
            {/* Email */}
            <a
              href="mailto:felipecrezende@outlook.com.br"
              className="bg-gray-50 border border-gray-100 rounded-2xl p-7 card-hover flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-green-500/15 rounded-xl flex items-center justify-center group-hover:bg-green-500/25 transition-colors">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-500 font-medium text-sm">{t.contact.email}</span>
              <span className="text-green-400 text-sm font-semibold break-all">felipecrezende@outlook.com.br</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 border border-gray-100 rounded-2xl p-7 card-hover flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-green-500/15 rounded-xl flex items-center justify-center group-hover:bg-green-500/25 transition-colors">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a7.947 7.947 0 01-3.794-.964l-4.213 1.104 1.126-4.111A7.942 7.942 0 014.05 11.03c0-4.399 3.577-7.977 7.979-7.977a7.98 7.98 0 017.978 7.978c0 4.4-3.578 7.849-7.978 7.849z" />
                </svg>
              </div>
              <span className="text-gray-500 font-medium text-sm">{t.contact.whatsapp}</span>
              <span className="text-green-400 text-sm font-semibold">(11) 97373-2567</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/felipe-r-373a6b131/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 border border-gray-100 rounded-2xl p-7 card-hover flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-green-500/15 rounded-xl flex items-center justify-center group-hover:bg-green-500/25 transition-colors">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span className="text-gray-500 font-medium text-sm">{t.contact.linkedin}</span>
              <span className="text-green-400 text-sm font-semibold">Felipe Rezende</span>
            </a>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 text-base btn-pulse"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a7.947 7.947 0 01-3.794-.964l-4.213 1.104 1.126-4.111A7.942 7.942 0 014.05 11.03c0-4.399 3.577-7.977 7.979-7.977a7.98 7.98 0 017.978 7.978c0 4.4-3.578 7.849-7.978 7.849z" />
            </svg>
            {t.contact.cta}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center">
              <span className="text-black font-black text-xs">FZ</span>
            </div>
            <span className="text-gray-500 text-sm font-medium">FRZ System</span>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FRZ System. {t.footer.rights}
          </p>
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span>{lang === "pt" ? "Online" : "Online"}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
