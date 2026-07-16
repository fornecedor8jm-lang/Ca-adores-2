/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Trophy, Lock, Shield, Clock } from 'lucide-react';

export default function Leaderboard() {
  return (
    <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 shadow-xl" id="leaderboard-ranking">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-900">
        <div>
          <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-sm mb-1">
            <Trophy className="w-4 h-4" />
            <span>Painel da Comunidade</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 font-sans">
            Tabela de Pontuação da Gincana
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Classificação oficial dos caçadores participantes do fã-clube nas atividades e na Gincana do Quebra-Cabeça.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-amber-500 bg-amber-500/5 p-2.5 rounded-xl border border-amber-500/10 self-start sm:self-center font-mono">
          <Clock className="w-4 h-4 text-amber-500 animate-pulse" />
          <span>Aguardando Apuração</span>
        </div>
      </div>

      {/* Locked State Teaser Block */}
      <div className="py-12 px-4 sm:px-6 bg-gradient-to-b from-zinc-900/40 to-zinc-950/80 border border-zinc-900 rounded-2xl text-center space-y-6 relative overflow-hidden">
        {/* Decorative subtle background aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-amber-500 shadow-xl shadow-black/40">
          <Lock className="w-8 h-8 animate-pulse" />
        </div>

        <div className="max-w-md mx-auto space-y-2.5">
          <h3 className="text-lg font-bold text-zinc-100 font-sans uppercase tracking-wider">
            Classificação Temporariamente Indisponível
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            A tabela foi retirada para atualização e será reaberta assim que o resultado oficial desta rodada for divulgado pela coordenadora <strong>Cristiane Spadafora</strong>!
          </p>
        </div>

        <div className="max-w-lg mx-auto p-4 bg-zinc-950 rounded-xl border border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <p className="text-xs font-bold text-zinc-300 flex items-center gap-1.5 uppercase font-mono tracking-wider">
              <Shield className="w-3.5 h-3.5 text-amber-500" />
              <span>Validação em Andamento</span>
            </p>
            <p className="text-xs text-zinc-400">
              Lembre-se de enviar o print completo da resolução no privado da administradora <strong>Cristiane Spadafora</strong> dentro do prazo de 5 dias úteis!
            </p>
          </div>
          <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-[10px] uppercase font-mono font-bold tracking-wider rounded border border-amber-500/20 shrink-0">
            Aguardando Resultados
          </span>
        </div>
      </div>
    </section>
  );
}
