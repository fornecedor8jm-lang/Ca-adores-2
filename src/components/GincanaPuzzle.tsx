/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Puzzle, Clock, Calendar, Shield, Award, Info, AlertCircle, CheckCircle2, Trophy, Flame } from 'lucide-react';

export default function GincanaPuzzle() {
  const jigsawUrl = 'https://www.jigsawplanet.com/?rc=play&pid=27bd2dcad1fb';
  const jigsawName = 'JARED – Quebra-Cabeça';
  
  // Target deadline: Sunday, July 26th, 2026 at 23:59:59
  const targetDate = new Date('2026-07-26T23:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    // Run immediately
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden" id="gincana-quebracabeca">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Rules & General Info */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-sm mb-1">
              <Puzzle className="w-4 h-4" />
              <span>Gincana de Caçadores</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 font-sans tracking-tight mb-2">
              Quebra-Cabeça Ativo: {jigsawName}
            </h2>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
              O novo desafio já está oficialmente liberado! Monte as peças com paciência, salve sua tela final e mostre que sua mente está tão afiada quanto uma lâmina de anjo.
            </p>

            {/* Opportunity alert badge */}
            <div className="bg-amber-500/5 border border-amber-500/20 p-3.5 rounded-xl mb-5 flex items-start gap-2.5">
              <Flame className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 animate-pulse" />
              <p className="text-xs text-amber-400 leading-relaxed">
                <strong>Oportunidade de Ouro:</strong> Esta é uma excelente chance para quem não conseguiu pontuar no quebra-cabeça anterior se recuperar e acumular muitos pontos na gincana!
              </p>
            </div>

            {/* Notebook Paper Styling for Rules */}
            <div className="bg-amber-950/10 border-l-4 border-amber-500 p-5 rounded-r-xl rounded-l bg-gradient-to-r from-amber-950/20 to-transparent">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-3 flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                <span>Regulamento da Rodada</span>
              </h3>
              
              <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-mono mt-0.5">•</span>
                  <span><strong>Prazo Limite:</strong> O quebra-cabeça atual ficará disponível apenas até este <strong>domingo (26 de julho de 2026)</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-mono mt-0.5">•</span>
                  <span><strong>Validação:</strong> Ao terminar de montar, tire um print screen completo contendo o tempo e envie o resultado imediatamente no privado da <strong>Christiane</strong> para validação dos seus pontos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-mono mt-0.5">•</span>
                  <span><strong>Participação Livre:</strong> Qualquer caçador(a) pode ingressar na gincana a qualquer instante. Se você é novo(a) por aqui, comece a pontuar agora mesmo!</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Call to Play (Hides the raw link, just displays button) */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-zinc-500 font-mono">LINK DO DESAFIO:</p>
              <p className="text-zinc-200 text-xs sm:text-sm font-semibold">Jared Padalecki – Quebra-Cabeça Temático</p>
            </div>
            <a 
              href={jigsawUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold rounded-xl text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/20 cursor-pointer flex items-center gap-2 hover:scale-102 transition"
              id="btn-play-puzzle"
            >
              <Puzzle className="w-4 h-4 fill-current" />
              <span>Jogar Quebra-Cabeça</span>
            </a>
          </div>
        </div>

        {/* Right Side: Podiums, Counter & Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Real-time Countdown Box */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-inner">
            <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-xs mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Tempo Restante</span>
            </div>
            
            {timeLeft.isExpired ? (
              <div className="text-center py-4 bg-zinc-950 rounded-lg border border-red-950/40">
                <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest">
                  ⚠️ Desafio Encerrado!
                </span>
                <p className="text-[10px] text-zinc-500 mt-1">Aguarde a validação e o próximo lançamento.</p>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800">
                  <div className="text-xl sm:text-2xl font-black text-amber-500 font-mono leading-none">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Dias</div>
                </div>
                <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800">
                  <div className="text-xl sm:text-2xl font-black text-amber-500 font-mono leading-none">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Horas</div>
                </div>
                <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800">
                  <div className="text-xl sm:text-2xl font-black text-amber-500 font-mono leading-none">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Min</div>
                </div>
                <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800">
                  <div className="text-xl sm:text-2xl font-black text-amber-500 font-mono leading-none">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Seg</div>
                </div>
              </div>
            )}
            
            <p className="text-[10px] text-zinc-500 text-center font-mono mt-3">
              Encerra domingo às 23:59:59 (Horário do Servidor)
            </p>
          </div>

          {/* Bonus Podium Section */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 shadow-inner">
            <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-xs mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Bônus de Velocidade</span>
            </div>
            <h3 className="text-sm font-bold text-zinc-100 font-sans mb-3">
              Pontuação Extra para os 5 Primeiros
            </h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 bg-zinc-950/70 border border-zinc-900 rounded-lg">
                <span className="flex items-center gap-2 text-xs text-zinc-300 font-semibold">
                  <span className="text-base">🥇</span>
                  <span>1º Lugar</span>
                </span>
                <span className="text-xs font-mono font-bold text-amber-500">+50 pontos</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-zinc-950/70 border border-zinc-900 rounded-lg">
                <span className="flex items-center gap-2 text-xs text-zinc-300 font-semibold">
                  <span className="text-base">🥈</span>
                  <span>2º Lugar</span>
                </span>
                <span className="text-xs font-mono font-bold text-zinc-300">+40 pontos</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-zinc-950/70 border border-zinc-900 rounded-lg">
                <span className="flex items-center gap-2 text-xs text-zinc-300 font-semibold">
                  <span className="text-base">🥉</span>
                  <span>3º Lugar</span>
                </span>
                <span className="text-xs font-mono font-bold text-amber-600">+30 pontos</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-zinc-950/70 border border-zinc-900 rounded-lg">
                <span className="flex items-center gap-2 text-xs text-zinc-300 font-semibold">
                  <span className="text-base">🏅</span>
                  <span>4º Lugar</span>
                </span>
                <span className="text-xs font-mono font-bold text-zinc-400">+20 pontos</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-zinc-950/70 border border-zinc-900 rounded-lg">
                <span className="flex items-center gap-2 text-xs text-zinc-300 font-semibold">
                  <span className="text-base">🎖️</span>
                  <span>5º Lugar</span>
                </span>
                <span className="text-xs font-mono font-bold text-zinc-400">+10 pontos</span>
              </div>
            </div>
          </div>

          {/* Quick validation note */}
          <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-lg flex items-start gap-2 text-[10px] text-zinc-500">
            <Info className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
            <span>
              Certifique-se de que seu print screen inclui o cronômetro do site Jigsaw Planet e o número total de peças montadas para agilizar a conferência.
            </span>
          </div>

        </div>
        
      </div>
    </section>
  );
}
