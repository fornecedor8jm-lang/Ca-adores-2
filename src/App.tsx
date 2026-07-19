/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Film, Puzzle, Tv, BookOpen, Flame, MessageCircle, AlertTriangle, Lightbulb, Sparkles, Bug, Bell, Ghost, Gamepad2 } from 'lucide-react';
import Header from './components/Header';
import MovieSession from './components/MovieSession';
import GincanaPuzzle from './components/GincanaPuzzle';
import WatchSeries from './components/WatchSeries';
import Comunicados from './components/Comunicados';
import SupernaturalGame from './components/SupernaturalGame';
import ChrisRecommends from './components/ChrisRecommends';
import MaintenanceMode from './components/MaintenanceMode';

export default function App() {
  const [activeTab, setActiveTab] = useState<'comunicados' | 'cineclube' | 'gincana' | 'assistir' | 'jogo' | 'chris'>('comunicados');

  const IS_MAINTENANCE = false;

  if (IS_MAINTENANCE) {
    return <MaintenanceMode />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Immersive portal Header */}
      <Header />

      {/* Main Container */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
        
        {/* Navigation Tabs with Hunter Aura */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-zinc-900/40 p-2 rounded-2xl border border-zinc-900">
          <nav className="flex flex-wrap gap-1.5 w-full sm:w-auto" aria-label="Navegação do Portal">
            <button
              onClick={() => setActiveTab('comunicados')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition duration-200 cursor-pointer relative ${
                activeTab === 'comunicados'
                  ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/10'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
              id="tab-comunicados"
            >
              <Bell className="w-4 h-4 shrink-0" />
              <span>Comunicados</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab('cineclube')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition duration-200 cursor-pointer ${
                activeTab === 'cineclube'
                  ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/10'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
              id="tab-cineclube"
            >
              <Film className="w-4 h-4 shrink-0" />
              <span>Cineclube</span>
            </button>

            <button
              onClick={() => setActiveTab('gincana')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition duration-200 cursor-pointer ${
                activeTab === 'gincana'
                  ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/10'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
              id="tab-gincana"
            >
              <Puzzle className="w-4 h-4 shrink-0" />
              <span>Gincana Quebra-Cabeça</span>
            </button>

            <button
              onClick={() => setActiveTab('assistir')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition duration-200 cursor-pointer ${
                activeTab === 'assistir'
                  ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/10'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
              id="tab-assistir"
            >
              <Ghost className="w-4 h-4 shrink-0" />
              <span>Maratona Supernatural</span>
            </button>

            <button
              onClick={() => setActiveTab('jogo')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition duration-200 cursor-pointer ${
                activeTab === 'jogo'
                  ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/10'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
              id="tab-jogo"
            >
              <Gamepad2 className="w-4 h-4 shrink-0" />
              <span>Supernatural: O Jogo</span>
            </button>

            <button
              onClick={() => setActiveTab('chris')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase transition duration-200 cursor-pointer ${
                activeTab === 'chris'
                  ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/10'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
              id="tab-chris"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Séries Recomendadas</span>
            </button>
          </nav>

          {/* Micro active indicator */}
          <div className="flex items-center gap-3 px-2 text-xs text-zinc-500 font-mono">
            <span className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>Atividades Ativas</span>
            </span>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="transition-all duration-300">
          {activeTab === 'comunicados' && (
            <Comunicados />
          )}

          {activeTab === 'cineclube' && (
            <MovieSession />
          )}

          {activeTab === 'gincana' && (
            <GincanaPuzzle />
          )}

          {activeTab === 'assistir' && (
            <WatchSeries />
          )}

          {activeTab === 'jogo' && (
            <SupernaturalGame />
          )}

          {activeTab === 'chris' && (
            <ChrisRecommends />
          )}
        </div>

        {/* Supernatural Lore Quote Callout Card */}
        <div className="bg-zinc-900/30 border border-zinc-900/80 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/5 text-amber-500 border border-amber-500/10 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-zinc-200 text-sm font-semibold font-serif">Diário de Caça do Clã Winchester</p>
              <p className="text-zinc-400 text-xs italic mt-0.5">
                "Salvar pessoas, caçar coisas, o negócio da família." — Dean Winchester
              </p>
            </div>
          </div>
          <div className="text-[10px] text-zinc-500 font-mono border border-zinc-800 px-3 py-1.5 rounded-lg bg-zinc-950/40">
            Fidelidade: 100% Supernatural Fandom
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-900 bg-zinc-950 py-8 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <p>
            Desenvolvido para a Comunidade Oficial de Fãs <strong>Caçadores Winchesters</strong>.
          </p>
          <div className="flex justify-center gap-4 text-zinc-600">
            <a href="#supernatural-jogo" onClick={(e) => { e.preventDefault(); setActiveTab('jogo'); }} className="hover:text-amber-500 transition">Supernatural: O Jogo</a>
            <span>•</span>
            <a href="#gincana-quebracabeca" onClick={(e) => { e.preventDefault(); setActiveTab('gincana'); }} className="hover:text-amber-500 transition">Gincana do Quebra-Cabeça</a>
            <span>•</span>
            <a href="#watch-supernatural" onClick={(e) => { e.preventDefault(); setActiveTab('assistir'); }} className="hover:text-amber-500 transition">Maratona Supernatural</a>
          </div>
          <p className="text-[10px] text-zinc-600">
            © 2026 Caçadores Winchesters. Todos os direitos reservados aos respectivos criadores.
          </p>
        </div>
      </footer>
    </div>
  );
}
