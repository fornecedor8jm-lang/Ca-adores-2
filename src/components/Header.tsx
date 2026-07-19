/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Share2, Shield, Globe, Info } from 'lucide-react';

interface HeaderProps {
}

export default function Header() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="relative border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand/Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Logo container with custom gold aura */}
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full opacity-70 blur-md group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-500/80 bg-zinc-900 shadow-xl">
                <img 
                  src="https://files.catbox.moe/yt3v0x.jpg" 
                  alt="Caçadores Winchesters Logo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  referrerPolicy="no-referrer"
                  id="portal-logo"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-amber-500 text-zinc-950 p-1 rounded-full border border-zinc-950 shadow">
                <Shield className="w-4 h-4 fill-current" />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-sans uppercase">
                  Caçadores <span className="text-amber-500">Winchesters</span>
                </h1>
                <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-full">
                  Fã-Clube Oficial
                </span>
              </div>
              <p className="text-zinc-400 text-sm max-w-lg">
                Portal oficial da comunidade de fãs de Supernatural. Conecte-se com outros caçadores, participe do cineclube, dispute a gincana anual e teste seus conhecimentos!
              </p>
            </div>
          </div>

        </div>

        {/* Quick info bar / Share */}
        <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-wrap justify-between items-center gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-500/80" />
              <span>itales-ru-supernatural.br.uptodown.com</span>
            </span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-amber-500/80" />
              <span>Gincana do Quebra-Cabeça Ativa</span>
            </span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-800 hover:text-zinc-100 transition cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? 'Link Copiado!' : 'Compartilhar Portal'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
