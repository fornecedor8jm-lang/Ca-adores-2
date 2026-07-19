/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function FooterClocks() {
  const [times, setTimes] = useState<{ brt: string; lisbon: string } | null>(null);

  const getBrasiliaTime = (): string => {
    try {
      return new Date().toLocaleTimeString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
    } catch (e) {
      return '--:--:--';
    }
  };

  const getLisbonTime = (): string => {
    try {
      return new Date().toLocaleTimeString('pt-BR', {
        timeZone: 'Europe/Lisbon',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
    } catch (e) {
      return '--:--:--';
    }
  };

  useEffect(() => {
    setTimes({
      brt: getBrasiliaTime(),
      lisbon: getLisbonTime()
    });

    const timer = setInterval(() => {
      setTimes({
        brt: getBrasiliaTime(),
        lisbon: getLisbonTime()
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!times) return null;

  return (
    <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1.5 text-zinc-500 font-mono text-[11px] bg-zinc-900/10 border border-zinc-900/40 px-4 py-2 rounded-xl inline-flex" id="footer-clocks-indicator">
      <span className="flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5 text-amber-500/80" />
        <span className="text-zinc-400">🇧🇷 Brasília (BRT):</span>
        <span className="text-amber-500 font-bold tracking-wider">{times.brt}</span>
      </span>
      <span className="text-zinc-800 hidden sm:inline">|</span>
      <span className="flex items-center gap-1.5">
        <span className="text-zinc-400">🇵🇹 Lisboa (WEST):</span>
        <span className="text-zinc-300 font-bold tracking-wider">{times.lisbon}</span>
      </span>
    </div>
  );
}
