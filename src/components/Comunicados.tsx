/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MessageCircle, 
  Film, 
  Puzzle, 
  Tv, 
  Gamepad2, 
  Sparkles, 
  BookOpen, 
  Compass, 
  Users 
} from 'lucide-react';

export default function Comunicados() {
  return (
    <div className="space-y-8" id="comunicados-tab-view">
      
      {/* 🔮 Welcome & Portal Introduction Section */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl" id="welcome-portal-section">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-3 pb-4 border-b border-zinc-900 mb-6">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-100 uppercase tracking-wider font-sans">
              Bem-vindo, Caçador!
            </h2>
            <p className="text-xs text-zinc-400">
              Explore o quartel-general digital do nosso fã-clube oficial de Supernatural.
            </p>
          </div>
        </div>

        <p className="text-zinc-300 text-sm leading-relaxed mb-8 max-w-4xl">
          Este portal foi projetado exclusivamente para reunir a comunidade <strong>Caçadores Winchesters</strong> em um ambiente unificado e profissional. Aqui você encontra tudo o que precisa para vivenciar o universo sobrenatural ao lado de outros fãs: assista aos episódios, participe das dinâmicas semanais, jogue a aventura oficial RPG e compartilhe teorias!
        </p>

        {/* Portal Features Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-xl space-y-2.5 transition">
            <div className="flex items-center gap-2 text-amber-500">
              <Film className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider">🍿 Cineclube Semanal</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Toda semana elegemos filmes especiais por votação popular. O cronograma abre na quarta-feira e vai até o sábado, culminando na maratona de domingo.
            </p>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-xl space-y-2.5 transition">
            <div className="flex items-center gap-2 text-amber-500">
              <Puzzle className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider">🧩 Gincana Anual</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Dispute o topo do ranking resolvendo os quebra-cabeças propostos por <strong>Cristiane Spadafora</strong> e <strong>Analu</strong> no JigsawPlanet.
            </p>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-xl space-y-2.5 transition">
            <div className="flex items-center gap-2 text-amber-500">
              <Tv className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider">📺 Maratona Completa</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Acesso seguro e gratuito a todas as 15 temporadas dubladas de Supernatural, além de atualizações sobre a série prequela <em>The Winchesters</em>.
            </p>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-xl space-y-2.5 transition">
            <div className="flex items-center gap-2 text-amber-500">
              <Gamepad2 className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider">🎮 Supernatural RPG</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Faça o download de "Supernatural: O Jogo" (Itales) para Android e controle o destino de suas investigações neste incrível RPG de texto oficial.
            </p>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-xl space-y-2.5 transition">
            <div className="flex items-center gap-2 text-amber-500">
              <Sparkles className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider">✨ Séries Recomendadas</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Encontre o que assistir a seguir com uma curadoria refinada de séries de suspense, terror e fantasia sobrenatural recomendadas por <strong>Chris</strong>.
            </p>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-xl space-y-2.5 transition">
            <div className="flex items-center gap-2 text-amber-500">
              <Users className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider">👥 Clã Integrado</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Ideias, sugestões de conteúdo e dinâmicas são geridas em conjunto com o clã de caçadores veteranos diretamente nas salas oficiais.
            </p>
          </div>

        </div>
      </section>

      {/* 💬 Grupo de WhatsApp Section */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl" id="grupo-whatsapp-section">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider text-xs sm:text-sm">
              <MessageCircle className="w-4 h-4 fill-current animate-pulse" />
              <span>Comunidade Oficial no WhatsApp</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 font-sans">
              Entrar pelo WhatsApp
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Fique por dentro de todos os avisos em primeira mão! No nosso grupo oficial você participa das votações semanais de episódios para o Cineclube, debate teorias de Supernatural, envia ideias e interage com outros caçadores.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Votações & Debates Ativos</span>
              </span>
              <span>•</span>
              <span>Livre de Spams e Anúncios</span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <a
              href="https://chat.whatsapp.com/Jy23MdpHIqR2nZ0ObVuAzZ"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 w-full lg:w-auto bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition duration-200 shadow-lg shadow-emerald-950/25 active:scale-98 cursor-pointer"
              id="btn-whatsapp-comunicados"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Entrar no Grupo Oficial</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
