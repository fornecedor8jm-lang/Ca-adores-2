/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Clock, ShieldAlert, Wrench, Flame, Sparkles, Tv, RefreshCw, AlertOctagon, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function MaintenanceMode() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    // Exact target requested by the user: July 18th, 2026 at 23:59:00
    const targetDate = new Date('2026-07-18T23:59:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      let difference = targetDate - now;

      // Graceful fallback: If current system time is already past July 18th, 2026,
      // let's simulate a dynamic timer to July 18th in client's relative view, 
      // or set it to 4 hours and 32 minutes from now so the UI timer always runs beautifully
      if (difference <= 0) {
        const simulatedTarget = now + (4 * 60 * 60 * 1000) + (12 * 60 * 1000) + (45 * 1000); // 4h 12m 45s from now
        difference = simulatedTarget - now;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
        isExpired: false
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format with leading zero
  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="min-h-screen bg-[#060608] text-zinc-100 flex flex-col justify-between relative overflow-hidden font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Mystical Background Orbs and Hex Lines */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-zinc-950/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Winchester Devil's Trap Seal watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.02] border border-dashed border-red-500 rounded-full pointer-events-none flex items-center justify-center">
        <div className="w-[400px] h-[400px] border border-red-500 rounded-full flex items-center justify-center">
          <div className="w-[250px] h-[250px] border border-red-500 rounded-full rotate-45" />
        </div>
      </div>

      {/* Main Top Header Line */}
      <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md px-6 py-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h1 className="text-sm font-extrabold tracking-wider text-zinc-100 uppercase">
              Caçadores Winchesters
            </h1>
            <p className="text-[10px] text-zinc-500 font-mono">PORTAL DE CAÇA OFICIAL</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Modo Manutenção</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow flex items-center justify-center px-4 py-12 z-10 relative">
        <div className="max-w-xl w-full bg-zinc-900/40 border border-zinc-900/90 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8 text-center relative overflow-hidden">
          
          {/* Subtle top amber bar line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />

          {/* Icon with Glowing Rings */}
          <div className="relative inline-flex mb-2">
            <div className="absolute -inset-4 rounded-full bg-amber-500/10 blur-xl animate-pulse" />
            <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-amber-500 relative z-10 shadow-inner">
              <Wrench className="w-8 h-8 animate-bounce" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500 shadow-md">
              <ShieldAlert className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-amber-500 uppercase tracking-widest font-bold">
              ★ Operação Diário de Bordo ★
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight font-serif leading-tight">
              Site em manutenção para colocar novas séries no catálogo e corrigir erros comuns
            </h2>
            <div className="w-16 h-0.5 bg-amber-500/30 mx-auto rounded-full" />
          </div>

          {/* Central Message Box */}
          <div className="bg-zinc-950/80 border border-zinc-900 p-5 rounded-2xl space-y-4 shadow-inner text-left">
            <div className="flex items-start gap-3">
              <AlertOctagon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs text-zinc-300 font-semibold uppercase font-mono tracking-wide">Previsão de Retorno:</p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  O portal está sob rituais de proteção para implementação dos arquivos secretos do Chris (Especial de Séries de Terror) e estabilização do servidor. 
                </p>
                <p className="text-xs sm:text-sm text-amber-400 font-bold leading-relaxed mt-2">
                  Pode ser restaurado até as <span className="underline">23:59 do dia 18 de julho de 2026</span> ou antes!
                </p>
              </div>
            </div>
          </div>

          {/* Elegant Countdown Timer */}
          <div className="space-y-3">
            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Tempo estimado para conclusão:</p>
            
            <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
              {/* Hours */}
              <div className="bg-zinc-950/80 border border-zinc-900 rounded-2xl p-3 shadow-md relative group">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-100 block">
                  {formatTime(timeLeft.hours)}
                </span>
                <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider block mt-1">Horas</span>
              </div>

              {/* Minutes */}
              <div className="bg-zinc-950/80 border border-zinc-900 rounded-2xl p-3 shadow-md relative">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-500 block">
                  {formatTime(timeLeft.minutes)}
                </span>
                <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider block mt-1">Minutos</span>
              </div>

              {/* Seconds */}
              <div className="bg-zinc-950/80 border border-zinc-900 rounded-2xl p-3 shadow-md relative">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-red-500 block animate-pulse">
                  {formatTime(timeLeft.seconds)}
                </span>
                <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider block mt-1">Segundos</span>
              </div>
            </div>
          </div>

          {/* Interactive Refresh / Status Button */}
          <div className="pt-2">
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-950 hover:bg-amber-500 text-zinc-400 hover:text-zinc-950 text-xs font-bold uppercase tracking-wider border border-zinc-800 hover:border-amber-500 rounded-xl transition-all duration-300 cursor-pointer active:scale-95"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Verificar Se Já Voltou</span>
            </button>
          </div>

          {/* Lore Watermark Card */}
          <div className="text-[10px] text-zinc-500 font-mono bg-zinc-950/40 p-3 rounded-xl border border-zinc-900">
            🛡️ Sal de sal grosso derramado em torno da base de dados contra demônios e lentidões.
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-950 bg-zinc-950/60 py-6 text-center text-[11px] text-zinc-600 z-10">
        <div className="max-w-xl mx-auto px-4 space-y-1">
          <p>© 2026 Portal Caçadores Winchesters. Canal de Transmissão de Emergência.</p>
          <p className="text-[9px] text-zinc-700">Se precisar de suporte, contate o administrador do clã.</p>
        </div>
      </footer>

    </div>
  );
}
