"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full sticky top-0 z-50 md:pb-10 bg-black/90
                         md:bg-transparent md:bg-linear-to-b from-black to-transparent
                         backdrop-blur-md md:backdrop-blur-none" role="banner">
        <nav aria-label="Menu principal" role="navigation" className="w-full">
          
          {/* Logo central */}
          <div className="hidden link-fx md:flex justify-center py-4 relative z-10">
            <Link
              href="/"
              className="logo focus:outline-none focus:ring-2 focus:ring-offset-2"
              aria-label="Página inicial da Savatto"
            >
              <img
                src="/logo.svg"
                alt="Savatto: design e software"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Menu suspenso */}
          <div className="hidden md:flex justify-center relative z-10">
            <div className="flex items-center justify-center gap-8 px-10 py-3 backdrop-blur-md 
                            shadow-[0_0_20px_rgba(0,0,0,0.5)]
                            bg-[#313131]/80 rounded-full max-w-3xl">
              
              <ul className="flex justify-between items-center gap-15 text-lg" role="menubar">
                <li role="none" className="link-fx">
                  <Link
                    href="#servicos"
                    role="menuitem"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Serviços
                  </Link>
                </li>
                <li role="none" className="link-fx">
                  <Link
                    href="#sobre"
                    role="menuitem"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Sobre
                  </Link>
                </li>

                <li role="none" className="link-fx">
                  <Link
                    href="#contato"
                    role="menuitem"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Contato
                  </Link>
                </li>

                <Link
                  href="https://mws-workspace.notion.site/1df9662ad1928039b8b0e5e6580ef862?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Formulário do Notion de solicitação de novos projetos"
                  className="link-fx -ml-2 px-6 py-2 /*[text-shadow:0_0_02px_rgba(0,0,0,0.6)]*/ font-bold rounded-full bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2"
                  role="menuitem"
                >
                  Novo projeto
                </Link>
              </ul>
            </div>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden relative flex  items-center p-5">
            
            <button
              className="text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2"
              aria-label="Abrir menu mobile"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>

            <Link
              href="/"
              className="logo absolute left-1/2 -translate-x-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2"
              aria-label="Página inicial da Savatto"
            >
              <img
                src="/logo.svg"
                alt="Savatto: design e software"
                className="h-10 w-auto"
              />
            </Link>

          </div>

          {/* Menu mobile */}
          {open && (
            <ul
              id="mobile-menu"
              className={`md:hidden flex flex-col gap-4 ml-4 px-4 pb-4 text-lg`}
              role="menu"
              style={{ maxHeight: open ? '500px' : '0' }}
            >
              <li role="none">
                <Link
                  href="#servicos"
                  role="menuitem"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2"
                  onClick={() => setOpen(false)}
                >
                  Serviços
                </Link>
              </li>
              <li role="none">
                <Link
                  href="#sobre"
                  role="menuitem"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2"
                  onClick={() => setOpen(false)}
                >
                  Sobre
                </Link>
              </li>
              <li role="none">
                <Link
                  href="#contato"
                  role="menuitem"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2"
                  onClick={() => setOpen(false)}
                >
                  Contato
                </Link>
              </li>

              <div className="w-full h-px bg-white/20" />

              <li className="flex justify-center" role="none">
                <Link
                  href="https://mws-workspace.notion.site/1df9662ad1928039b8b0e5e6580ef862?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Formulário do Notion de solicitação de novos projetos"
                  role="menuitem"
                  className="-ml-4 px-4 py-2 rounded-full bg-primary inline-block"
                  onClick={() => setOpen(false)}
                >
                  Novo projeto
                </Link>
              </li>
            </ul>
          )}

        </nav>
      </header>

      <div className="hidden md:flex absolute top-0 left-0 w-full h-[60vh] md:h-screen -z-10">
        <img
          src="/hero.jpg"
          alt="Background Savatto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>

      <main className="items-center mx-4 md:max-w-6xl sm:mx-10 md:mx-auto px-4 scroll-smooth" role="main" aria-label="Conteúdo principal">

        <section id="hero" className="flex justify-center my-20 md:mt-0 md:mb-40 items-center h-[70vh]" aria-label="Seção principal">
          <div className="relative text-center max-w-2xl px-4 mx-auto">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Design e software para impulsionar marcas e produtos digitais
            </h1>

            <p className="mt-4 text-base md:text-lg">
              Soluções completas para marcas que precisam unir identidade forte com engenharia de excelência.
            </p>

            <div className="flex flex-col items-center md:flex-row justify-center md:gap-5">
              <Link
                href="#contato"
                className="max-w-80 md:w-auto w-full link-fx inline-block mt-6 text-sm md:text-lg font-semibold px-10 py-3 rounded-full bg-primary
                          shadow-[0_0_24px_rgba(0,0,0,0.6)]"
                aria-label="Ir para seção de contato"
              >
                Iniciar projeto
              </Link>

              <Link
                href="#"
                className="max-w-80 w-full md:w-auto link-fx inline-block mt-6 text-sm md:text-lg font-semibold px-10 py-3 rounded-full border-2 border-primary
                          shadow-[0_0_24px_rgba(0,0,0,0.6)]"
                aria-label="Ir para seção de contato"
              >
                Ver portfólio
              </Link>
            </div>
          </div>
        </section>

        <section id="servicos" className="pb-20" aria-labelledby="titulo-servicos">
          <h2 id="titulo-servicos" className="text-2xl md:text-3xl font-semibold">Serviços profissionais para sua solução digital</h2>
          <p className="mt-2 max-w-xl text-base">
            A Savatto entrega desde identidade visual até desenvolvimento avançado, garantindo consistência, propósito e performance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 servicos-grid">
            <div className="servico-item p-4 rounded-md border" role="article">
              <h3 className="text-xl font-medium">Branding e Design</h3>
              <p className="mt-2 text-sm">
                Construção de identidades visuais fortes, estratégicas e feitas para destacar sua marca no mercado.
              </p>
            </div>

            <div className="servico-item p-4 rounded-md border" role="article">
              <h3 className="text-xl font-medium">Desenvolvimento Web</h3>
              <p className="mt-2 text-sm">
                Criação de sites e aplicações modernas com foco em velocidade, estabilidade e experiência do usuário.
              </p>
            </div>

            <div className="servico-item p-4 rounded-md border" role="article">
              <h3 className="text-xl font-medium">Consultoria Criativa</h3>
              <p className="mt-2 text-sm">
                Direção e clareza conceitual para projetos que precisam de visão sólida e posicionamento claro.
              </p>
            </div>
          </div>
        </section>

        <section id="sobre" className="pb-20" aria-labelledby="titulo-sobre">
          <h2 id="titulo-sobre" className="text-2xl md:text-3xl font-semibold">Sobre a Savatto</h2>
          <p className="mt-2 max-w-xl text-base">
            A Savatto combina design estratégico com engenharia de software para criar soluções digitais completas e consistentes. Cada projeto é construído para oferecer clareza, estética e eficiência.
          </p>
        </section>

        <section id="contato" className="pb-20" aria-labelledby="titulo-contato">
          <h2 id="titulo-contato" className="text-2xl md:text-3xl font-semibold">Solicitar projeto</h2>
          <p className="mt-2 max-w-lg text-base">
            Abrirá o formulário oficial da Savatto no Notion, onde você poderá detalhar sua demanda.
          </p>

          <Link
            href="https://mws-workspace.notion.site/1df9662ad1928039b8b0e5e6580ef862?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
            className="link-fx inline-block mt-6 text-sm md:text-lg font-semibold px-10 py-3 rounded-full bg-primary
                       shadow-[0_0_24px_rgba(0,0,0,0.1)]"
            aria-label="Formulário do Notion de solicitação de novos projetos"
          >
            Abrir formulário
          </Link>
        </section>
      </main>

      <footer className="py-10 bg-[#000] text-center text-sm" role="contentinfo">
        <p>© {new Date().getFullYear()} Savatto</p>
      </footer>
    </>
  );
}