/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  Bug, 
  Lightbulb, 
  Sparkles, 
  Clock, 
  Globe, 
  MessageCircle, 
  ExternalLink, 
  Tv, 
  Lock, 
  Shield, 
  Megaphone,
  Bell
} from 'lucide-react';

const WEEKDAYS_PT = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
];

export default function Comunicados() {
  const [nowBrt, setNowBrt] = useState<Date | null>(null);
  const [nowLisbon, setNowLisbon] = useState<Date | null>(null);

  // Helper to get time zone aware Dates
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

  const getLisbonTime = (): Date => {
    const d = new Date();
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Lisbon',
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

  useEffect(() => {
    // Initial fetch
    setNowBrt(getBrasiliaTime());
    setNowLisbon(getLisbonTime());

    const timer = setInterval(() => {
      setNowBrt(getBrasiliaTime());
      setNowLisbon(getLisbonTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!nowBrt || !nowLisbon) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500" />
      </div>
    );
  }

  // Format times beautifully
  const pad = (num: number) => String(num).padStart(2, '0');

  const brtHours = pad(nowBrt.getHours());
  const brtMinutes = pad(nowBrt.getMinutes());
  const brtSeconds = pad(nowBrt.getSeconds());
  const brtDay = pad(nowBrt.getDate());
  const brtMonth = pad(nowBrt.getMonth() + 1);
  const brtYear = nowBrt.getFullYear();
  const brtDayOfWeek = nowBrt.getDay();

  const lisbonHours = pad(nowLisbon.getHours());
  const lisbonMinutes = pad(nowLisbon.getMinutes());
  const lisbonSeconds = pad(nowLisbon.getSeconds());
  const lisbonDay = pad(nowLisbon.getDate());
  const lisbonMonth = pad(nowLisbon.getMonth() + 1);
  const lisbonYear = nowLisbon.getFullYear();

  // Check if voting is currently active (Wednesday 00:00 to Saturday 23:59:59 Brasília time)
  // brtDayOfWeek: 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
  const isVotingActive = brtDayOfWeek >= 3 && brtDayOfWeek <= 6;

  // Calculate deadline (Saturday 23:59:59 BRT)
  const deadlineBrt = new Date(nowBrt);
  deadlineBrt.setHours(23, 59, 59, 999);
  const daysToSaturday = 6 - brtDayOfWeek;
  deadlineBrt.setDate(deadlineBrt.getDate() + daysToSaturday);

  const diffMs = deadlineBrt.getTime() - nowBrt.getTime();
  const diffSecs = Math.max(0, Math.floor(diffMs / 1000));
  
  const daysLeft = Math.floor(diffSecs / (3600 * 24));
  const hoursLeft = Math.floor((diffSecs % (3600 * 24)) / 3600);
  const minsLeft = Math.floor((diffSecs % 3600) / 60);
  const secsLeft = diffSecs % 60;

  // Calculate corresponding Portugal deadline time
  const deadlineLisbon = new Date(nowLisbon.getTime() + (isVotingActive ? diffMs : 0));
  const lisbonDeadlineDay = pad(deadlineLisbon.getDate());
  const lisbonDeadlineMonth = pad(deadlineLisbon.getMonth() + 1);
  const lisbonDeadlineHours = pad(deadlineLisbon.getHours());
  const lisbonDeadlineMinutes = pad(deadlineLisbon.getMinutes());
  const lisbonDeadlineDayOfWeek = WEEKDAYS_PT[deadlineLisbon.getDay()];

  return (
    <div className="space-y-8" id="comunicados-tab-view">
      
      {/* 🕒 Horário Oficial do Portal & Cronograma Section */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-900 mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-xs sm:text-sm">
              <Clock className="w-4 h-4" />
              <span>Sincronização do Portal</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 font-sans">
              Horário Oficial do Portal
            </h2>
            <p className="text-zinc-400 text-sm max-w-2xl">
              Exibição em tempo real sincronizada em ambos os fusos horários oficiais de nossa comunidade internacional.
            </p>
          </div>
          <div className="px-3.5 py-1.5 bg-amber-500/10 text-amber-400 text-xs font-mono rounded-xl border border-amber-500/20 flex items-center gap-2 self-start md:self-center">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span>BRT & WEST Live</span>
          </div>
        </div>

        {/* Live Clocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Brazil Clock */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block">Fuso Oficial</span>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">🇧🇷</span>
                <span className="font-bold text-zinc-100 text-sm">Brasília (BRT)</span>
              </div>
              <p className="text-xs text-zinc-400">{WEEKDAYS_PT[brtDayOfWeek]}, {brtDay}/{brtMonth}/{brtYear}</p>
            </div>
            <div className="text-right">
              <span className="text-xl sm:text-2xl font-mono font-bold text-amber-500 tracking-wider">
                {brtHours}:{brtMinutes}:{brtSeconds}
              </span>
            </div>
          </div>

          {/* Portugal Clock */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block">Fuso Europeu</span>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">🇵🇹</span>
                <span className="font-bold text-zinc-100 text-sm">Portugal (Lisboa)</span>
              </div>
              <p className="text-xs text-zinc-400">{WEEKDAYS_PT[nowLisbon.getDay()]}, {lisbonDay}/{lisbonMonth}/{lisbonYear}</p>
            </div>
            <div className="text-right">
              <span className="text-xl sm:text-2xl font-mono font-bold text-zinc-300 tracking-wider">
                {lisbonHours}:{lisbonMinutes}:{lisbonSeconds}
              </span>
            </div>
          </div>
        </div>

        {/* Voting Schedule Banner & Countdown */}
        <div className="p-6 bg-gradient-to-r from-amber-950/20 via-zinc-900/50 to-amber-950/10 border border-amber-500/10 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-500/10 text-amber-400 text-[10px] uppercase font-mono font-bold tracking-wider rounded-md border border-amber-500/20">
                📅 Cronograma da Votação
              </div>
              <h3 className="text-lg font-bold text-zinc-100">
                {isVotingActive ? 'A Votação da Semana está Ativa!' : 'A Votação está Encerrada'}
              </h3>
              
              <div className="space-y-1.5 text-xs text-zinc-300 leading-relaxed">
                <p>
                  • <strong>Início:</strong> Toda quarta-feira às <span className="text-amber-400">00h00 (Brasília)</span> / <span className="text-zinc-400">{pad((0 + 4) % 24)}h00 (Portugal)</span>.
                </p>
                <p>
                  • <strong>Encerramento:</strong> Sábado às <span className="text-amber-400">23h59 (Brasília)</span> / Domingo às <span className="text-zinc-400">03h59 (Portugal)</span>.
                </p>
                <p>
                  • <strong>Domingo:</strong> Dia reservado para a divulgação do resultado oficial e início da nova programação semanal!
                </p>
              </div>
            </div>

            {/* Countdown / Status block */}
            <div className="bg-zinc-950/80 border border-zinc-900 p-5 rounded-xl w-full lg:w-80 text-center space-y-3.5 shadow-lg shrink-0">
              {isVotingActive ? (
                <>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-mono">
                    ⏳ Tempo Restante
                  </p>
                  <div className="text-sm font-bold text-amber-500 bg-amber-500/5 py-2 px-3 rounded-lg border border-amber-500/10 font-mono">
                    Faltam {daysLeft > 0 ? `${daysLeft}d ` : ''}{hoursLeft}h {minsLeft}m {secsLeft}s
                  </div>
                  <div className="text-[10px] text-zinc-500 leading-relaxed font-mono">
                    Encerramento em:<br/>
                    🇧🇷 Sábado, 23:59 BRT<br/>
                    🇵🇹 {lisbonDeadlineDayOfWeek}, {lisbonDeadlineHours}:{lisbonDeadlineMinutes} Lisboa
                  </div>
                </>
              ) : (
                <>
                  <div className="inline-flex p-2.5 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                    <Shield className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
                    Votação Finalizada
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    O resultado oficial já está disponível no painel do Cineclube e em debate no WhatsApp!
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ⚠️ Aviso Importante (Experimental Phase) Section */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden" id="aviso-experimental">
        {/* Subtle red/amber decorative light */}
        <div className="absolute -left-12 -top-12 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-100 uppercase tracking-wider font-sans">
                ⚠️ Aviso Importante
              </h3>
              <p className="text-xs text-zinc-400 mt-1 max-w-2xl">
                Este site está em fase experimental. Durante esse período, é possível que ocorram erros, bugs ou instabilidades temporárias.
              </p>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-mono px-3 py-1 bg-amber-500/5 text-amber-400 border border-amber-500/10 rounded-full">
            Fase Experimental
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Developer */}
          <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-2">
                <Bug className="w-4 h-4 text-amber-500" />
                <span>Encontrou algum problema?</span>
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Entre em contato com <strong>Eduardo Frasão</strong>, idealizador do site, para relatar erros, bugs ou enviar sugestões de melhorias.
              </p>
            </div>
            <a 
              href="https://wa.me/5596991821516" 
              target="_blank" 
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs rounded-lg transition active:scale-98 cursor-pointer shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Eduardo</span>
            </a>
          </div>

          {/* Suggestions */}
          <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>💡 Sugestões de conteúdo</span>
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Você pode enviar sugestões de novos conteúdos pelo grupo oficial de WhatsApp ou diretamente no privado de <strong>Eduardo Frasão</strong>.
            </p>
          </div>

          {/* Dynamics */}
          <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>🎉 Dinâmicas</span>
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              As dinâmicas de engajamento do site são organizadas exclusivamente por <strong>Cristiane Spadafora</strong> e <strong>Analu</strong>.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-900/80 text-xs text-zinc-500 italic">
          Toda sugestão é bem-vinda e contribui para a melhoria do projeto. Obrigado por fazer parte da comunidade!
        </div>
      </section>

      {/* 📺 Sobre a série The Winchesters Section */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden" id="sobre-the-winchesters">
        {/* Subtle background blur */}
        <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2.5 text-amber-500">
              <Tv className="w-5 h-5" />
              <h3 className="text-lg font-bold text-zinc-100 uppercase tracking-wider font-sans">
                Sobre a série The Winchesters
              </h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              A série prequela <strong className="text-amber-500 font-semibold">The Winchesters</strong> será disponibilizada no site assim que possível. Enquanto isso, todas as 15 temporadas originais de Supernatural estão inteiramente disponíveis de graça na aba "Assistir de Graça"!
            </p>
            <div className="p-4 bg-zinc-900/30 rounded-xl border border-zinc-800/60 text-xs text-zinc-400 leading-relaxed space-y-2">
              <p>
                🤝 <strong className="text-zinc-200">Como você pode colaborar:</strong> Se algum membro da comunidade possuir os arquivos ou links da série <em>The Winchesters</em> e puder compartilhá-los conosco para disponibilizarmos no site, ajudará muito todo o fã-clube!
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <a
              href="https://chat.whatsapp.com/Jy23MdpHIqR2nZ0ObVuAzZ"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 px-5 py-3 w-full lg:w-auto bg-zinc-900 hover:bg-zinc-850 text-amber-400 hover:text-amber-300 font-bold text-xs uppercase tracking-widest rounded-xl border border-zinc-800 transition shadow-md active:scale-98 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contatar no Grupo</span>
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
