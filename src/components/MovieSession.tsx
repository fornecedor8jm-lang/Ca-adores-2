/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Film, Calendar, Info, Play, ExternalLink, CheckCircle, Clock, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_MOVIES } from '../data';

export default function MovieSession() {
  const [hoveredMovie, setHoveredMovie] = useState<string | null>(null);
  const [viewingSynopsisId, setViewingSynopsisId] = useState<string | null>(null);
  const [nowBrt, setNowBrt] = useState<Date | null>(null);

  const movies = INITIAL_MOVIES;

  // Find overall winner (Moana has 19 votes)
  const totalVotes = movies.reduce((sum, m) => sum + m.votes, 0) || 1;
  const sortedMoviesByVotes = [...movies].sort((a, b) => b.votes - a.votes);
  const winner = sortedMoviesByVotes[0];

  const getBrasiliaTime = (): Date => {
    const d = new Date();
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      });
      const parts = formatter.formatToParts(d);
      const pv: Record<string, string> = {};
      parts.forEach(p => { pv[p.type] = p.value; });
      
      const year = parseInt(pv.year, 10);
      const month = parseInt(pv.month, 10) - 1;
      const day = parseInt(pv.day, 10);
      const hour = parseInt(pv.hour, 10) % 24;
      const minute = parseInt(pv.minute, 10);
      const second = parseInt(pv.second, 10);
      
      const target = new Date(year, month, day, hour, minute, second);
      if (isNaN(target.getTime())) {
        return new Date();
      }
      return target;
    } catch (e) {
      return new Date();
    }
  };

  React.useEffect(() => {
    setNowBrt(getBrasiliaTime());
    const timer = setInterval(() => {
      setNowBrt(getBrasiliaTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const WEEKDAYS_PT = [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado'
  ];

  const brtDayOfWeek = nowBrt ? nowBrt.getDay() : 4;
  const isVotingActive = brtDayOfWeek >= 3 && brtDayOfWeek <= 6;
  const brtDayName = nowBrt ? WEEKDAYS_PT[brtDayOfWeek] : 'quinta-feira';

  // Calculate deadline (Saturday 23:59:59 BRT)
  const deadlineBrt = nowBrt ? new Date(nowBrt) : new Date();
  if (nowBrt) {
    deadlineBrt.setHours(23, 59, 59, 999);
    const daysToSaturday = 6 - brtDayOfWeek;
    deadlineBrt.setDate(deadlineBrt.getDate() + daysToSaturday);
  }

  const diffMs = nowBrt ? deadlineBrt.getTime() - nowBrt.getTime() : 0;
  const diffSecs = Math.max(0, Math.floor(diffMs / 1000));
  const daysLeft = Math.floor(diffSecs / (3600 * 24));
  const hoursLeft = Math.floor((diffSecs % (3600 * 24)) / 3600);
  const minsLeft = Math.floor((diffSecs % 3600) / 60);
  const secsLeft = diffSecs % 60;

  return (
    <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden" id="cineclube-session">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-900">
        <div>
          <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-sm mb-1">
            <Film className="w-4 h-4" />
            <span>Sessão Especial Cineclube</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 font-sans">
            Resultados da Sessão de Filmes
          </h2>
          <p className="text-zinc-400 text-sm mt-1 max-w-2xl">
            Acompanhe o ranking atualizado das votações semanais. As escolhas e debates acontecem interativamente no WhatsApp!
          </p>
        </div>

        <a 
          href="https://chat.whatsapp.com/Jy23MdpHIqR2nZ0ObVuAzZ"
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer shrink-0 shadow-lg shadow-emerald-950/20"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Votar no WhatsApp</span>
        </a>
      </div>

      {/* Official Status Callout Block */}
      <div className="mb-8 p-6 bg-gradient-to-r from-amber-950/20 via-zinc-900 to-amber-950/10 border border-amber-900/40 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex gap-3">
            <div className="p-2 bg-amber-500/10 text-amber-500 rounded-xl border border-amber-500/20 mt-0.5 sm:mt-0 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-100">Cronograma & Votação da Semana</p>
              <div className="text-xs text-zinc-300 mt-1 leading-relaxed">
                <strong>Hoje é {brtDayName} (Fuso Oficial de Brasília).</strong>
                {isVotingActive ? (
                  <span> A votação está ativa! ⏳ <strong>Faltam {daysLeft > 0 ? `${daysLeft} dias, ` : ''}{hoursLeft} horas, {minsLeft} minutos e {secsLeft} segundos</strong> para o encerramento da rodada.</span>
                ) : (
                  <span> A votação da rodada atual está encerrada. O domingo é reservado para a divulgação dos resultados oficiais e início da nova programação.</span>
                )}
              </div>
            </div>
          </div>
          <span className={`px-3 py-1 text-[10px] uppercase font-mono font-bold tracking-wider rounded-lg border shrink-0 ${
            isVotingActive 
              ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
              : 'bg-zinc-850 text-zinc-400 border-zinc-800'
          }`}>
            {isVotingActive ? 'Rodada em Andamento' : 'Finalizada'}
          </span>
        </div>

        {/* Detailed Voting Rules & Schedule */}
        <div className="pt-4 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-amber-500 font-mono text-[10px] uppercase tracking-wider block">📅 Início das Votações</span>
            <p className="text-zinc-300">Toda quarta-feira às <strong className="text-zinc-100">00h00</strong> (Horário de Brasília).</p>
            <p className="text-[10px] text-zinc-500">Portugal: Quarta às 04h00 (Lisboa)</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-zinc-900 pt-3 md:pt-0 md:pl-4">
            <span className="font-bold text-amber-500 font-mono text-[10px] uppercase tracking-wider block">⌛ Fim das Votações</span>
            <p className="text-zinc-300 font-medium">Sábado às <strong className="text-zinc-100">23h59</strong> (Horário de Brasília).</p>
            <p className="text-[10px] text-zinc-500">Portugal: Domingo às 03h59 (Lisboa)</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-zinc-900 pt-3 md:pt-0 md:pl-4">
            <span className="font-bold text-amber-500 font-mono text-[10px] uppercase tracking-wider block">🍿 Domingo de Cineclube</span>
            <p className="text-zinc-300">Dia reservado para a divulgação do vencedor e maratona conjunta com o fã-clube.</p>
            <p className="text-[10px] text-emerald-500 font-medium">Participe enviando sua sugestão no WhatsApp!</p>
          </div>
        </div>
      </div>

      {/* Hero Highlight: The Winner / Chosen Movie */}
      {winner && (
        <div className="mb-8 bg-zinc-900/40 border border-amber-500/20 rounded-2xl p-4 sm:p-6 flex flex-col lg:flex-row gap-6 relative overflow-hidden">
          {/* Winner Stamp */}
          <div className="absolute top-4 right-4 bg-amber-500 text-zinc-950 font-bold text-[10px] sm:text-xs uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-amber-500/10 z-10">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Líder de Votos</span>
          </div>

          <div className="w-full lg:w-44 h-64 lg:h-64 rounded-xl overflow-hidden relative border border-zinc-800 flex-shrink-0 bg-zinc-950">
            <img 
              src={winner.posterUrl} 
              alt={winner.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="text-xs bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                {winner.votes} Votos
              </span>
            </div>
          </div>

          <div className="flex-grow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>Exibição e Sessão Grupal em debate no WhatsApp</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 font-sans tracking-tight mb-3">
                {winner.title}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                {winner.synopsis}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-900/60 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                Fonte: <a href={winner.referenceUrl} target="_blank" rel="noopener noreferrer" className="text-amber-500/80 hover:underline inline-flex items-center gap-0.5" referrerPolicy="no-referrer">{winner.referenceLabel} <ExternalLink className="w-3 h-3" /></a>
              </span>

              <span className="text-zinc-500 italic text-[11px]">
                Votação restrita ao grupo oficial de WhatsApp
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Voting Dashboard Grid */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
          <span>Quadro Geral de Resultados</span>
          <span className="text-xs text-zinc-600 lowercase font-normal">({totalVotes} votos computados no WhatsApp)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => {
            const isWinner = movie.id === winner?.id;
            const percentage = Math.round((movie.votes / totalVotes) * 100) || 0;

            return (
              <div 
                key={movie.id}
                onMouseEnter={() => setHoveredMovie(movie.id)}
                onMouseLeave={() => setHoveredMovie(null)}
                className={`relative bg-zinc-900/40 hover:bg-zinc-900/70 border rounded-xl p-4 transition duration-200 flex flex-col justify-between ${
                  isWinner ? 'border-amber-500/30' : 'border-zinc-800'
                }`}
              >
                <div>
                  <div className="flex gap-3.5 items-start mb-3">
                    <div className="w-16 h-24 rounded-lg overflow-hidden border border-zinc-800 flex-shrink-0 bg-zinc-950">
                      <img 
                        src={movie.posterUrl} 
                        alt={movie.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-zinc-200 font-semibold text-sm line-clamp-1 flex items-center gap-1.5">
                        {movie.title}
                        {isWinner && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        )}
                      </h4>
                      <p className="text-zinc-500 text-[10px] font-mono mt-0.5">
                        Referência: <a href={movie.referenceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-zinc-400 inline-flex items-center gap-0.5" referrerPolicy="no-referrer">{movie.referenceLabel} <ExternalLink className="w-2.5 h-2.5" /></a>
                      </p>
                      <div className="mt-2.5 flex items-center justify-between text-xs font-semibold text-zinc-300">
                        <span className="font-mono text-amber-500">{movie.votes} {movie.votes === 1 ? 'voto' : 'votos'}</span>
                        <span className="text-zinc-500 font-mono">{percentage}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden mb-3">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        isWinner ? 'bg-amber-500' : 'bg-zinc-700'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => setViewingSynopsisId(viewingSynopsisId === movie.id ? null : movie.id)}
                    className="w-full py-1.5 text-center text-xs border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 rounded-lg transition font-medium cursor-pointer"
                  >
                    {viewingSynopsisId === movie.id ? 'Fechar Sinopse' : 'Ver Sinopse'}
                  </button>
                </div>

                {/* Synopsis Overlay expandable details */}
                <AnimatePresence>
                  {viewingSynopsisId === movie.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-3 pt-3 border-t border-zinc-800/60 text-xs text-zinc-400"
                    >
                      <p className="leading-relaxed bg-zinc-950/80 p-2.5 rounded-lg border border-zinc-900">
                        {movie.synopsis}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
