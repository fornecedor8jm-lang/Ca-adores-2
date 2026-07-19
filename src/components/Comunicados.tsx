/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MessageCircle, 
  Film, 
  Puzzle, 
  Tv, 
  Gamepad2, 
  Sparkles, 
  BookOpen, 
  Compass, 
  Users,
  Apple,
  Smartphone,
  Star,
  CheckCircle2,
  TrendingUp,
  Tag,
  Heart,
  ChevronRight
} from 'lucide-react';

export default function Comunicados() {
  return (
    <div className="space-y-8" id="comunicados-tab-view">
      
      {/* 🔮 Welcome & Portal Introduction Section */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl" id="welcome-portal-section">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-3 pb-4 border-b border-zinc-900 mb-6">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-100 uppercase tracking-wider font-sans">
              Bem-vindo, Caçador!
            </h2>
            <p className="text-xs text-zinc-400">
              Explore o quartel-general digital do nosso fã-clube oficial de Supernatural.
            </p>
          </div>
        </div>

        <p className="text-zinc-300 text-sm leading-relaxed mb-8 max-w-4xl">
          Este portal foi projetado exclusivamente para reunir a comunidade <strong>Caçadores Winchesters</strong> em um ambiente unificado e profissional. Aqui você encontra tudo o que precisa para vivenciar o universo sobrenatural ao lado de outros fãs: assista aos episódios, participe das dinâmicas semanais, jogue a aventura oficial RPG e compartilhe teorias!
        </p>

        {/* Portal Features Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-xl space-y-2.5 transition">
            <div className="flex items-center gap-2 text-amber-500">
              <Film className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider">🍿 Cineclube Semanal</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Toda semana elegemos filmes especiais por votação popular. O cronograma abre na quarta-feira e vai até o sábado, culminando na maratona de domingo.
            </p>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-xl space-y-2.5 transition">
            <div className="flex items-center gap-2 text-amber-500">
              <Puzzle className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider">🧩 Gincana Anual</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Dispute o topo do ranking resolvendo os quebra-cabeças propostos por <strong>Cristiane Spadafora</strong> e <strong>Analu</strong> no JigsawPlanet.
            </p>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-xl space-y-2.5 transition">
            <div className="flex items-center gap-2 text-amber-500">
              <Tv className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider">📺 Maratona Completa</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Acesso seguro e gratuito a todas as 15 temporadas dubladas de Supernatural, além de atualizações sobre a série prequela <em>The Winchesters</em>.
            </p>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-xl space-y-2.5 transition">
            <div className="flex items-center gap-2 text-amber-500">
              <Gamepad2 className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider">🎮 Supernatural RPG</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Faça o download de "Supernatural: O Jogo" (Itales) para Android e controle o destino de suas investigações neste incrível RPG de texto oficial.
            </p>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-xl space-y-2.5 transition">
            <div className="flex items-center gap-2 text-amber-500">
              <Sparkles className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider">✨ Séries Recomendadas</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Encontre o que assistir a seguir com uma curadoria refinada de séries de suspense, terror e fantasia sobrenatural recomendadas pela <strong>Chris</strong>.
            </p>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-xl space-y-2.5 transition">
            <div className="flex items-center gap-2 text-amber-500">
              <Users className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold uppercase tracking-wider">👥 Clã Integrado</h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Ideias, sugestões de conteúdo e dinâmicas são geridas em conjunto com o clã de caçadores veteranos diretamente nas salas oficiais.
            </p>
          </div>

        </div>
      </section>

      {/* 📱 Play Store Style "O Que Há de Novo" / Changelog Section */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl" id="playstore-news-section">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-zinc-800/5 rounded-full blur-3xl pointer-events-none" />

        {/* Play Store Header Concept */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-zinc-900 mb-6">
          <div className="flex items-center gap-4">
            {/* Custom Squirclish App Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-amber-600 via-amber-850 to-red-950 rounded-2xl sm:rounded-3xl p-0.5 shadow-xl shadow-amber-950/20 shrink-0 flex items-center justify-center relative border border-amber-500/20">
              <div className="absolute inset-0.5 bg-zinc-950 rounded-[14px] sm:rounded-[22px] flex items-center justify-center">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 animate-pulse" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-zinc-100 leading-tight">
                  Portal Caçadores Winchesters
                </h3>
              </div>
              <p className="text-xs text-amber-500 font-semibold uppercase tracking-wider">
                Comunidade de Fãs & Caçadores
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <span>Instalado • v2.5.0-Cazadora</span>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 w-full sm:w-auto bg-zinc-900 text-amber-500 border border-zinc-800 font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-md">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
              <span>Portal Atualizado</span>
            </span>
          </div>
        </div>

        {/* Play Store App Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 px-2 bg-zinc-900/15 border border-zinc-900/80 rounded-2xl mb-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-900">
          <div className="flex flex-col items-center justify-center p-2">
            <span className="text-lg font-black text-zinc-100 flex items-center gap-1">
              <span>4.9</span>
              <Star className="w-4 h-4 fill-amber-500 text-amber-500 shrink-0" />
            </span>
            <span className="text-[10px] text-zinc-500 font-mono mt-0.5 uppercase tracking-wider">157 avaliações</span>
          </div>
          
          <div className="flex flex-col items-center justify-center p-2">
            <span className="text-lg font-black text-zinc-100">10 mil+</span>
            <span className="text-[10px] text-zinc-500 font-mono mt-0.5 uppercase tracking-wider">Caçadores Ativos</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <span className="text-lg font-black text-zinc-100">2.4 MB</span>
            <span className="text-[10px] text-zinc-500 font-mono mt-0.5 uppercase tracking-wider">Super Leve & Rápido</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <span className="text-lg font-black text-zinc-100">Livre</span>
            <span className="text-[10px] text-zinc-500 font-mono mt-0.5 uppercase tracking-wider">Mistérios e Terror</span>
          </div>
        </div>

        {/* Play Store "What's New" Style Content */}
        <div className="space-y-6">
          <div className="space-y-1.5 border-l-2 border-amber-500 pl-4">
            <h4 className="text-base font-extrabold text-zinc-100 tracking-wide font-sans flex items-center gap-2">
              <span>O que há de novo nesta atualização?</span>
              <span className="text-[10px] py-0.5 px-2 bg-amber-500/10 text-amber-400 rounded-full uppercase tracking-wider font-mono">v2.5.0-Cazadora</span>
            </h4>
            <p className="text-xs text-zinc-400 font-medium">
              Lançamento Oficial: 19 de Julho de 2026 • Curadoria de Elite
            </p>
          </div>

          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-4xl italic">
            "Olá, Caçador(a)! Preparamos um pacotaço de novidades sensacional! Explicando de forma bem simples e direta para que qualquer pessoa consiga aproveitar, confira abaixo todas as grandes melhorias que acabaram de chegar ao nosso quartel-general digital:"
          </p>

          {/* Detailed Cards for Laymen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            
            <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-2xl space-y-3 transition flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-wider bg-amber-500/5 px-2.5 py-1 rounded-lg border border-amber-500/10">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>1. Correção Histórica: A Chris é Mulher! 🙋‍♀️</span>
                </div>
                <h5 className="text-sm font-bold text-zinc-200">Justiça e carinho com a nossa curadora</h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong>Para leigos:</strong> Antes, algumas partes do site chamavam por engano a nossa querida curadora e especialista veterana de "o Chris" ou "Caçador Experiente" no masculino. Nós vasculhamos todo o código e corrigimos cada pedacinho! Agora, a Chris é orgulhosamente reconhecida em todo o portal como a nossa <strong>Caçadora Experiente</strong> e curadora oficial das séries misteriosas.
                </p>
              </div>
              <div className="text-[10px] text-zinc-500 font-mono pt-2 border-t border-zinc-900/50">
                Ajuste: Ortografia & Identidade de Gênero
              </div>
            </div>

            <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-2xl space-y-3 transition flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-wider bg-amber-500/5 px-2.5 py-1 rounded-lg border border-amber-500/10">
                  <Apple className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>2. O Jogo de Supernatural no iPhone (iOS)! 🍏</span>
                </div>
                <h5 className="text-sm font-bold text-zinc-200">Agora todos jogam e investigam juntos</h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong>Para leigos:</strong> Antes, o maravilhoso jogo de RPG de texto oficial do Supernatural só estava disponível para celulares Android. Os donos de iPhone ficavam chupando o dedo! Agora, adicionamos o botão de download oficial para **iOS** direto pela App Store. Não precisa fazer nenhuma configuração complicada de segurança ou ativar opções difíceis; basta clicar no botão preto da Apple Store, baixar e começar a caçar monstros na hora!
                </p>
              </div>
              <div className="text-[10px] text-zinc-500 font-mono pt-2 border-t border-zinc-900/50">
                Ajuste: Multiplataforma • Android + iOS ativos
              </div>
            </div>

            <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-2xl space-y-3 transition flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-wider bg-amber-500/5 px-2.5 py-1 rounded-lg border border-amber-500/10">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 animate-pulse" />
                  <span>3. Dossiê de Curiosidades Seletas! 🔮</span>
                </div>
                <h5 className="text-sm font-bold text-zinc-200">Segredos ocultos por trás de cada produção</h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong>Para leigos:</strong> Sabe aquelas séries incríveis recomendadas pela Chris no catálogo? Agora, cada uma delas tem um botão chamado <strong>Dossiê: Curiosidades</strong>. Ao tocar nele, uma caixinha secreta se abre revelando segredos de bastidores divertidos. Você vai descobrir, por exemplo, que a atriz de Handmaid's Tale gravou quase sem nenhuma maquiagem ou que um robô gigante de Spiderman do Japão mudou a história da Marvel!
                </p>
              </div>
              <div className="text-[10px] text-zinc-500 font-mono pt-2 border-t border-zinc-900/50">
                Ajuste: Nova funcionalidade interativa rica
              </div>
            </div>

            <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-2xl space-y-3 transition flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-wider bg-amber-500/5 px-2.5 py-1 rounded-lg border border-amber-500/10">
                  <BookOpen className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>4. Sinopses Dobráveis "Ler Mais" 📖</span>
                </div>
                <h5 className="text-sm font-bold text-zinc-200">Tela limpa e visual muito mais leve</h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong>Para leigos:</strong> Sabe quando você abre um site e tem um texto gigante de 10 parágrafos que empurra todos os outros botões para o final da página e dá cansaço só de olhar? Nós resolvemos isso de forma inteligente! Agora os resumos das séries vêm encolhidos. Se quiser ler a história completa, é só clicar em "Ler Sinopse Completa" para abrir o texto. Clicou de novo, ele fecha! Prático e limpo.
                </p>
              </div>
              <div className="text-[10px] text-zinc-500 font-mono pt-2 border-t border-zinc-900/50">
                Ajuste: Experiência de Uso (UX) & Compactação
              </div>
            </div>

            <div className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-850 p-5 rounded-2xl space-y-3 transition md:col-span-2 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-wider bg-amber-500/5 px-2.5 py-1 rounded-lg border border-amber-500/10">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>5. Motor de Velocidade e Carregamento Turbo! ⚡</span>
                </div>
                <h5 className="text-sm font-bold text-zinc-200">O portal voando baixo em qualquer celular ou computador</h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <strong>Para leigos:</strong> Limpamos toda a poeira e oleamos as engrenagens invisíveis que fazem o portal rodar. Isso significa que as fotos das séries agora aparecem num piscar de olhos, os botões respondem de forma instantânea sem travar seu celular, e o site consome bem menos internet do seu plano de dados móveis 3G/4G/5G. Pode usar à vontade que o celular não vai esquentar!
                </p>
              </div>
              <div className="text-[10px] text-zinc-500 font-mono pt-2 border-t border-zinc-900/50 text-center">
                Ajuste: Desempenho, Compactação de Imagens & Otimização de Código de Alta Performance
              </div>
            </div>

          </div>

          <div className="flex justify-center items-center gap-2 pt-4 text-xs font-mono text-zinc-500">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>para a Irmandade dos Winchesters</span>
          </div>
        </div>
      </section>

      {/* 💬 Grupo de WhatsApp Section */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl" id="grupo-whatsapp-section">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider text-xs sm:text-sm">
              <MessageCircle className="w-4 h-4 fill-current animate-pulse" />
              <span>Comunidade Oficial no WhatsApp</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 font-sans">
              Entrar pelo WhatsApp
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Fique por dentro de todos os avisos em primeira mão! No nosso grupo oficial você participa das votações semanais de episódios para o Cineclube, debate teorias de Supernatural, envia ideias e interage com outros caçadores.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Votações & Debates Ativos</span>
              </span>
              <span>•</span>
              <span>Livre de Spams e Anúncios</span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <a
              href="https://chat.whatsapp.com/Jy23MdpHIqR2nZ0ObVuAzZ"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 w-full lg:w-auto bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition duration-200 shadow-lg shadow-emerald-950/25 active:scale-98 cursor-pointer"
              id="btn-whatsapp-comunicados"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Entrar no Grupo Oficial</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
