/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Download, Share2, Shield, Smartphone, Globe, Info, QrCode, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
}

export default function Header() {
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  const appDownloadUrl = 'https://itales-ru-supernatural.br.uptodown.com/android/download';

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

          {/* User Status Card & App Download */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            {/* Android App Download Callout */}
            <div className="flex flex-col gap-1.5">
              <a 
                href={appDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 active:scale-98 text-zinc-950 font-bold text-sm rounded-xl transition shadow-lg shadow-amber-950/20"
                id="btn-app-download"
              >
                <Smartphone className="w-4 h-4" />
                <span>Baixar App Android</span>
                <Download className="w-4 h-4" />
              </a>
              <div className="flex justify-between items-center px-1 text-xs text-zinc-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  100% Seguro & Grátis
                </span>
                <button 
                  onClick={() => setShowQR(true)}
                  className="text-amber-500/90 hover:text-amber-400 flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  QR Code
                </button>
              </div>
            </div>

            {/* WhatsApp Group Callout */}
            <div className="flex flex-col gap-1.5">
              <a 
                href="https://chat.whatsapp.com/Jy23MdpHIqR2nZ0ObVuAzZ"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 active:scale-98 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-emerald-950/20"
                id="btn-whatsapp-group"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Entrar no WhatsApp</span>
              </a>
              <div className="flex justify-between items-center px-1 text-xs text-zinc-400">
                <span>Votações & Debates</span>
                <span className="text-emerald-500 font-medium">Grupo Oficial</span>
              </div>
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

      {/* QR Code Modal Popup */}
      <AnimatePresence>
        {showQR && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-sm w-full text-center relative shadow-2xl"
            >
              <button 
                onClick={() => setShowQR(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-200 p-1 bg-zinc-800 rounded-full transition"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-lg font-bold text-zinc-100 mb-2 font-sans uppercase">Escaneie para Baixar</h3>
              <p className="text-xs text-zinc-400 mb-4">Aponte a câmera do seu celular Android para instalar o App Oficial da Comunidade.</p>
              
              {/* Simulated QR Code beautifully styled */}
              <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-inner border-2 border-amber-500/30">
                <svg className="w-44 h-44" viewBox="0 0 100 100">
                  <rect width="100" height="100" fill="white" />
                  {/* Position detection patterns */}
                  <rect x="5" y="5" width="25" height="25" fill="black" />
                  <rect x="9" y="9" width="17" height="17" fill="white" />
                  <rect x="13" y="13" width="9" height="9" fill="black" />

                  <rect x="70" y="5" width="25" height="25" fill="black" />
                  <rect x="74" y="9" width="17" height="17" fill="white" />
                  <rect x="78" y="13" width="9" height="9" fill="black" />

                  <rect x="5" y="70" width="25" height="25" fill="black" />
                  <rect x="9" y="74" width="17" height="17" fill="white" />
                  <rect x="13" y="78" width="9" height="9" fill="black" />
                  
                  {/* Random QR code modules */}
                  <rect x="35" y="10" width="5" height="5" fill="black" />
                  <rect x="45" y="5" width="10" height="5" fill="black" />
                  <rect x="60" y="15" width="5" height="10" fill="black" />
                  <rect x="35" y="25" width="15" height="5" fill="black" />
                  
                  <rect x="5" y="35" width="5" height="15" fill="black" />
                  <rect x="15" y="45" width="15" height="5" fill="black" />
                  <rect x="25" y="35" width="5" height="15" fill="black" />
                  <rect x="35" y="40" width="10" height="10" fill="black" />
                  <rect x="50" y="35" width="5" height="5" fill="black" />
                  <rect x="55" y="45" width="10" height="5" fill="black" />
                  
                  <rect x="70" y="35" width="15" height="5" fill="black" />
                  <rect x="85" y="45" width="10" height="10" fill="black" />
                  <rect x="65" y="50" width="5" height="15" fill="black" />
                  
                  <rect x="35" y="55" width="5" height="10" fill="black" />
                  <rect x="45" y="60" width="20" height="5" fill="black" />
                  <rect x="55" y="70" width="5" height="15" fill="black" />
                  <rect x="40" y="80" width="10" height="5" fill="black" />
                  
                  <rect x="70" y="70" width="5" height="10" fill="black" />
                  <rect x="80" y="75" width="15" height="5" fill="black" />
                  <rect x="75" y="85" width="20" height="10" fill="black" />
                  <rect x="10" y="60" width="15" height="5" fill="black" />
                </svg>
              </div>

              <div className="text-xs text-amber-500 font-mono font-medium truncate mb-2">
                {appDownloadUrl}
              </div>

              <a 
                href={appDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-2 bg-amber-500 text-zinc-950 font-bold rounded-xl text-xs hover:bg-amber-400 transition"
              >
                Visitar Link de Download
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
