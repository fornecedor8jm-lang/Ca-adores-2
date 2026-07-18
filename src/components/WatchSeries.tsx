/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, ExternalLink, Film, Tv, Info, AlertCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface SeasonLink {
  number: number;
  url: string;
  posterUrl: string;
  synopsis: string;
}

const SEASONS_DATA: SeasonLink[] = [
  {
    number: 1,
    url: 'https://photos.app.goo.gl/2vGytkk5hVmmvFPZ9',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/DtQYmHyoYDsoITxF.jpg',
    synopsis: 'Sam e Dean Winchester partem em busca de seu pai desaparecido, John, enquanto caçam criaturas sobrenaturais e buscam o demônio de olhos amarelos responsável pela morte de sua mãe.'
  },
  {
    number: 2,
    url: 'https://photos.app.goo.gl/2C9yJuAbSWv1dexR7',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/NqIeMycykGkVmyLO.jpg',
    synopsis: 'Após a morte de John, os irmãos continuam a caçada por Azazel. Sam descobre que faz parte de um plano sinistro envolvendo crianças "especiais", resultando em sua morte e no pacto de Dean para trazê-lo de volta.'
  },
  {
    number: 3,
    url: 'https://photos.app.goo.gl/WZsuNzVUaY6EtzRLA',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/kiQTnVzHqEbBxBkI.jpg',
    synopsis: 'Sam tenta encontrar uma maneira de salvar Dean de seu contrato com o demônio da encruzilhada, enquanto enfrentam a poderosa Lilith. A temporada termina com a alma de Dean sendo levada para o Inferno.'
  },
  {
    number: 4,
    url: 'https://photos.app.goo.gl/YxCmXwU1JJGNK82H8',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/NFCTcFNvJPsmGoac.jpg',
    synopsis: 'O anjo Castiel resgata Dean do Inferno. Os irmãos tentam impedir a quebra dos 66 selos que libertarão Lúcifer, mas acabam falhando quando Sam mata Lilith, o selo final.'
  },
  {
    number: 5,
    url: 'https://photos.app.goo.gl/BmQRYsD2ZQQzz2NY9',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/ZThWezioxqdkeUEr.jpg',
    synopsis: 'Sam e Dean lutam para impedir o Apocalipse. Eles resistem ao destino de serem os receptáculos de Lúcifer e Miguel, culminando no sacrifício de Sam para prender Lúcifer novamente na jaula.'
  },
  {
    number: 6,
    url: 'https://photos.app.goo.gl/CBk6FSJeRrrFPbjGA',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/abGTDPCpcutPZtTC.jpg',
    synopsis: 'Sam retorna do Inferno sem sua alma, e Dean tenta conciliar sua vida normal com o retorno à caça. Eles enfrentam os "Alfas" e a ameaça de Castiel se tornando uma entidade divina instável.'
  },
  {
    number: 7,
    url: 'https://photos.app.goo.gl/GXsVe8GbCJTPFKRN7',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/ZWwlMgZzMEzuGBFw.jpg',
    synopsis: 'Os Winchesters enfrentam os Leviatãs, criaturas primordiais famintas que se infiltraram na sociedade humana. A temporada é marcada por perdas pessoais profundas, incluindo a morte de Bobby Singer.'
  },
  {
    number: 8,
    url: 'https://photos.app.goo.gl/XhY8afzR3fmEaKPz8',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/afhyVTFHysRfVcaR.jpg',
    synopsis: 'Dean escapa do Purgatório com a ajuda de um vampiro chamado Benny. Os irmãos tentam fechar os portões do Inferno para sempre realizando três testes sagrados, enquanto enfrentam o escriba de Deus, Metatron.'
  },
  {
    number: 9,
    url: 'https://photos.app.goo.gl/Wh3ubVqXEuWB69Jf6',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/lntGoKPfFmdtpGUA.jpg',
    synopsis: 'Após a queda dos anjos na Terra, os irmãos lidam com o caos celestial. Dean aceita a Marca de Caim para derrotar Abaddon, o que começa a corromper sua alma.'
  },
  {
    number: 10,
    url: 'https://photos.app.goo.gl/VquD3MSSpK99VTdv7',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/RAoqKrvBeoswlSwe.jpg',
    synopsis: 'Dean ressuscita como um demônio após ser morto por Metatron. Sam trabalha desesperadamente para curar seu irmão e remover a Marca de Caim, o que acaba libertando a Escuridão.'
  },
  {
    number: 11,
    url: 'https://photos.app.goo.gl/zaKHfNNeJJRWeoBU7',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/cmNvErkdiwumCCKE.jpg',
    synopsis: 'A Escuridão (Amara), irmã de Deus, é libertada e busca vingança. Sam e Dean precisam se aliar a Lúcifer e ao próprio Deus (Chuck) para salvar a existência da aniquilação total.'
  },
  {
    number: 12,
    url: 'https://photos.app.goo.gl/hzgLqJwiwq5iVKZd6',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/dEoRBDAPxPBZaKQe.jpg',
    synopsis: 'Mary Winchester retorna à vida. Os irmãos enfrentam os Homens das Letras Britânicos e tentam conter Lúcifer, que está prestes a ter um filho, o Nephilim Jack.'
  },
  {
    number: 13,
    url: 'https://photos.app.goo.gl/odGMBHfK8aDcS6C5A',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/EMhrLtovSxlmMlCs.jpg',
    synopsis: 'Jack nasce e os irmãos tentam guiá-lo enquanto buscam uma forma de resgatar Mary de um mundo apocalíptico alternativo onde a guerra entre anjos e humanos nunca terminou.'
  },
  {
    number: 14,
    url: 'https://photos.app.goo.gl/6RgbEwkLyjK5QcMa6',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/MYxZFSvnlebjEVYG.jpg',
    synopsis: 'O Arcanjo Miguel do mundo alternativo possui o corpo de Dean. Os irmãos lutam para expulsá-lo enquanto Jack lida com a perda e recuperação de seus poderes, levando a um confronto final com Chuck.'
  },
  {
    number: 15,
    url: 'https://photos.app.goo.gl/GLeaeaoadd2ewrXD8',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663712506592/kZGsNjzqvhpYXqKP.jpg',
    synopsis: 'Na conclusão épica da série, Sam e Dean enfrentam o próprio Deus, que decidiu encerrar sua "história" favorita. Eles lutam pela verdadeira liberdade e pelo controle de seus próprios destinos.'
  }
];

export default function WatchSeries() {
  const [viewingSynopsisId, setViewingSynopsisId] = useState<number | null>(null);

  return (
    <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden" id="watch-supernatural">
      {/* Background radial decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-900">
        <div>
          <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-sm mb-1.5">
            <Tv className="w-4 h-4" />
            <span>Assista de Graça</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 font-sans tracking-tight">
            𝐒𝐮𝐩𝐞𝐫𝐧𝐚𝐭𝐮𝐫𝐚𝐥 — Episódios Completos
          </h2>
          <p className="text-zinc-400 text-sm mt-1 max-w-3xl">
            Acesse o acervo completo da série hospedado via Google Drive e Google Photos de forma gratuita com áudio em Português!
          </p>
        </div>
        
        <span className="self-start md:self-center px-3 py-1 bg-amber-500/10 text-amber-400 text-xs uppercase font-mono font-bold tracking-wider rounded-lg border border-amber-500/20">
          15 Temporadas Disponíveis
        </span>
      </div>

      {/* Show Info Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        
        {/* Banner/Info Left */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-2.5 py-1 bg-red-600/20 text-red-400 font-mono font-bold text-xs rounded border border-red-500/20">
                Aviso: +16
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-300 font-mono text-sm font-semibold">2005 - 2020</span>
              <span className="text-zinc-500">•</span>
              <span className="px-2.5 py-0.5 bg-zinc-800 text-zinc-300 text-xs rounded-full font-medium">
                Drama
              </span>
              <span className="px-2.5 py-0.5 bg-zinc-800 text-zinc-300 text-xs rounded-full font-medium">
                Terror
              </span>
            </div>

            <p className="text-zinc-200 text-sm sm:text-base leading-relaxed mb-4">
              "Supernatural" é uma série de televisão americana que estreou em 2005 e se estendeu por 15 temporadas, concluindo em 2020. A trama gira em torno dos irmãos Winchester, Sam (Jared Padalecki) e Dean (Jensen Ackles), que dedicam suas vidas a caçar criaturas sobrenaturais, incluindo demônios, fantasmas e monstros de lendas urbanas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-800 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Idioma: Português Brasileiro (Dublado)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Contém todos os episódios completos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Help Card Right */}
        <div className="lg:col-span-4">
          <div className="bg-amber-950/10 border border-amber-500/20 rounded-2xl p-5 sm:p-6 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>Como Assistir</span>
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Cada botão de temporada abaixo abre diretamente uma pasta compartilhada segura no Google Photos / Google Drive contendo todos os episódios daquela respectiva temporada.
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Você pode assistir por streaming ou fazer o download para assistir offline quando e onde desejar.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/60 mt-4 text-[10px] text-zinc-500 font-mono">
              *Hospedagem comunitária segura livre de anúncios
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Season Cards */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
          <span>Selecione a Temporada</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {SEASONS_DATA.map((season) => (
            <div 
              key={season.number}
              className="group bg-zinc-900/30 border border-zinc-800 hover:border-amber-500/40 rounded-xl p-4 transition-all duration-200 flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                {/* Poster container */}
                <div className="w-full aspect-[2/3] rounded-lg overflow-hidden border border-zinc-800 relative bg-zinc-950">
                  <img 
                    src={season.posterUrl} 
                    alt={`${season.number}ª Temporada`} 
                    className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 p-1.5 bg-zinc-950/80 border border-zinc-800 rounded-lg text-zinc-400 group-hover:text-amber-500 transition">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-zinc-200 group-hover:text-amber-500 transition">
                    {season.number}ª Temporada
                  </h4>
                  <p className="text-[10px] text-zinc-500 mt-1 font-mono uppercase tracking-wide">
                    Google Drive / Photos
                  </p>
                </div>
              </div>

              {/* Expandable synopsis and direct play link */}
              <div className="space-y-2">
                <button
                  onClick={() => setViewingSynopsisId(viewingSynopsisId === season.number ? null : season.number)}
                  className="w-full py-1.5 text-center text-[11px] border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 rounded-lg transition font-medium cursor-pointer"
                >
                  {viewingSynopsisId === season.number ? 'Fechar Sinopse' : 'Ver Sinopse'}
                </button>

                {viewingSynopsisId === season.number && (
                  <p className="text-[11px] text-zinc-400 bg-zinc-950/80 p-2.5 rounded border border-zinc-900 leading-relaxed">
                    {season.synopsis}
                  </p>
                )}

                <a 
                  href={season.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-lg text-xs tracking-wide transition cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Assistir</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
