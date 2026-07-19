/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Download, Smartphone, Info, ShieldCheck, Gamepad2, ArrowRight, HelpCircle } from 'lucide-react';

export default function SupernaturalGame() {
  const gameDownloadUrl = 'https://itales-ru-supernatural.br.uptodown.com/android/download';

  const installSteps = [
    {
      step: '01',
      title: 'Baixe o Arquivo APK',
      desc: 'Clique no botão de download acima para ser redirecionado ao Uptodown de forma segura e baixar o instalador oficial (.apk).',
    },
    {
      step: '02',
      title: 'Habilite Fontes Desconhecidas',
      desc: 'No seu dispositivo Android, acesse Configurações > Segurança (ou Privacidade) e ative a permissão para "Instalar apps de fontes desconhecidas" para o seu navegador ou gerenciador de arquivos.',
    },
    {
      step: '03',
      title: 'Realize a Instalação',
      desc: 'Abra o seu gerenciador de arquivos, vá até a pasta "Downloads", toque no arquivo APK baixado e selecione "Instalar".',
    },
    {
      step: '04',
      title: 'Inicie a Caçada!',
      desc: 'Pronto! Toque no ícone do jogo no seu menu de aplicativos e comece a sua jornada investigativa ao lado dos Winchesters.',
    }
  ];

  return (
    <div className="space-y-8" id="supernatural-jogo-view">
      
      {/* Hero Banner Section */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        {/* Amber glowing background orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-red-950/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-zinc-900 mb-8">
          <div className="space-y-3 max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-xs sm:text-sm justify-center lg:justify-start">
              <Gamepad2 className="w-4 h-4 animate-bounce" />
              <span>Aventura Oficial Mobile</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight font-sans">
              Supernatural: O Jogo (Itales)
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Vista a jaqueta de couro, prepare a escopeta de sal e venha desvendar casos assustadores! Um jogo de escolhas interativas em formato RPG de texto ambientado no universo clássico das primeiras temporadas de Supernatural.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-zinc-400 justify-center lg:justify-start font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Seguro</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-amber-500" />
                <span>Exclusivo Android</span>
              </span>
            </div>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex flex-col items-center gap-2">
            <a
              href={gameDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 w-full lg:w-72 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold rounded-xl transition duration-200 shadow-lg shadow-amber-500/10 active:scale-98 cursor-pointer"
              id="btn-download-game-apk"
            >
              <Download className="w-5 h-5 shrink-0" />
              <div className="text-left leading-tight">
                <div className="text-xs uppercase tracking-wider font-extrabold opacity-75">Download Direto</div>
                <div className="text-sm">Baixar APK do Jogo</div>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto lg:ml-2" />
            </a>
            <span className="text-[10px] text-zinc-500 font-mono">
              Hospedado no portal parceiro Uptodown
            </span>
          </div>
        </div>

        {/* Game Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500">
              ⚡ Escolhas Importantes
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Cada decisão tomada dita o rumo da investigação. Um único passo em falso pode levar à morte do caçador ou da vítima!
            </p>
          </div>
          <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500">
              📚 Diário dos Homens de Letras
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Use o diário de caça do John Winchester para consultar fraquezas de demônios, metamorfos, fantasmas e outras lendas urbanas.
            </p>
          </div>
          <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500">
              🎭 Personagens Icônicos
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Encontre Sam, Dean, Bobby e outros caçadores veteranos pelo caminho em diálogos ricos e cheios de humor negro característico.
            </p>
          </div>
        </div>
      </section>

      {/* Guia de Instalação Section */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2.5 pb-4 border-b border-zinc-900">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-100 uppercase tracking-wider">
              Guia Passo a Passo de Instalação
            </h3>
            <p className="text-xs text-zinc-400">
              Siga estas instruções simples para rodar o jogo no seu celular Android sem qualquer complicação.
            </p>
          </div>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {installSteps.map((item, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-800 rounded-xl p-5 relative overflow-hidden transition duration-200"
            >
              {/* Massive back number */}
              <span className="absolute -top-4 -right-2 text-7xl font-extrabold text-zinc-900/15 select-none font-mono">
                {item.step}
              </span>
              
              <div className="space-y-2 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 font-mono">
                  Passo {item.step}
                </span>
                <h4 className="text-sm font-bold text-zinc-200">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Security Alert Badge */}
        <div className="bg-amber-500/5 border border-amber-500/10 p-4 rounded-xl flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className="text-xs font-bold text-zinc-200">Por que é necessário ativar "fontes desconhecidas"?</h5>
            <p className="text-xs text-zinc-400 leading-relaxed">
              O Android categoriza qualquer aplicativo instalado fora da Google Play Store oficial como "fonte desconhecida". O instalador Uptodown é um dos repositórios mobile mais confiáveis do mundo, garantindo um arquivo limpo, seguro e verificado contra ameaças.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
