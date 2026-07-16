/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Puzzle, Clock, Calendar, Shield, Award, Info, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function GincanaPuzzle() {
  const jigsawUrl = 'https://www.jigsawplanet.com/?rc=play&pid=33c3d506effc';

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
              Gincana do Quebra-Cabeça
            </h2>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Atividade temática tradicional em que os caçadores resolvem quebra-cabeças semanais sob a coordenação de <strong>Cristiane Spadafora</strong> para conquistar pontos na tabela anual.
            </p>

            {/* Notebook Paper Styling for Rules */}
            <div className="bg-amber-950/10 border-l-4 border-amber-500 p-5 rounded-r-xl rounded-l bg-gradient-to-r from-amber-950/20 to-transparent">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 mb-3 flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                <span>Regulamento da Gincana</span>
              </h3>
              
              <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-mono mt-0.5">•</span>
                  <span><strong>Cronograma de Desafio:</strong> Os quebra-cabeças são lançados periodicamente. Os membros jogam de forma interativa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-mono mt-0.5">•</span>
                  <span><strong>Janela de Recuperação:</strong> Perdeu a rodada da semana? Você pode iniciar nas rodadas seguintes normalmente e continuar pontuando!</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-mono mt-0.5">•</span>
                  <span><strong>Novos Caçadores:</strong> Qualquer membro da comunidade pode se juntar à gincana a qualquer momento, somando pontos nos novos desafios.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Call to Play (Hides the raw link, just displays button) */}
          <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-zinc-500 font-mono">DESAFIO DA SEMANA:</p>
              <p className="text-zinc-200 text-sm font-semibold">Monte o quebra-cabeça temático ativo e salve seus resultados.</p>
            </div>
            <a 
              href={jigsawUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/20 cursor-pointer flex items-center gap-2 hover:scale-102 transition"
              id="btn-play-puzzle"
            >
              <Puzzle className="w-4 h-4 fill-current" />
              <span>Apertar para Jogar</span>
            </a>
          </div>
        </div>

        {/* Right Side: Validation & Calendar Board (Replaces Admin Internal Tools) */}
        <div className="lg:col-span-5">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-6 shadow-inner space-y-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-xs mb-3">
                <Clock className="w-3.5 h-3.5" />
                <span>Prazos e Validação</span>
              </div>
              <h3 className="text-base font-bold text-zinc-100 font-sans mb-4">
                Regras de Validação & Cronograma
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-zinc-200">Envio do Comprovante</p>
                    <p className="text-zinc-400 mt-1 leading-relaxed">
                      Para validar o seu tempo e pontuar, envie o <strong>print screen</strong> completo do quebra-cabeça concluído no <strong>privado da administradora (Cristiane Spadafora)</strong> em até <strong>5 dias úteis</strong>. Ela computará seus pontos para o ranking oficial!
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 flex gap-3">
                  <Calendar className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-zinc-200">Cronograma da Divulgação</p>
                    <p className="text-zinc-400 mt-1 leading-relaxed">
                      A tabela de pontuação atualizada da semana é divulgada oficialmente pela administração no <strong>6º dia</strong> do ciclo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note stating WhatsApp exclusivity */}
            <div className="p-3 bg-zinc-950/80 border border-zinc-900 rounded-lg flex items-start gap-2 text-[11px] text-zinc-500 mt-4">
              <Info className="w-3.5 h-3.5 text-amber-500/80 flex-shrink-0 mt-0.5" />
              <span>
                As ferramentas de cálculo de tempo e validação de tela são de uso interno da organização e serão gerenciadas diretamente pela administração no grupo de WhatsApp.
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
