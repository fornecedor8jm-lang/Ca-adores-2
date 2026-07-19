/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, ExternalLink, Info, Search, Sparkles, Flame, Film, Tv, Compass, ShieldAlert, BookOpen, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface Season {
  name: string;
  url: string;
}

interface RecommendedShow {
  id: string;
  title: string;
  synopsis: string;
  year: string;
  genre: string;
  status?: string;
  adendum?: string;
  posterUrl: string;
  seasons: Season[];
  rating: string;
  creator?: string;
  category: 'terror' | 'action' | 'dorama' | 'classicos' | 'comedy';
  curiosities?: string[];
}

const CHRIS_SHOWS: RecommendedShow[] = [
  {
    id: 'the-boys',
    title: 'The Boys',
    synopsis: 'Um grupo de vigilantes busca derrubar super-heróis corruptos que abusam de seus superpoderes e da fama, gerenciados por uma corporação gananciosa que esconde segredos obscuros.',
    year: '2019 - Presente',
    genre: 'Ação / Sátira / Super-Heróis',
    status: 'Série de sucesso absoluto com todas as temporadas disponíveis.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/VOmwkwAZSUPSpHmb.jpg',
    seasons: [
      { name: 'Temporada 1', url: 'https://drive.google.com/drive/folders/10srwgb-q2GnIHTAm4nzt6hw5G-lJvsTm' },
      { name: 'Temporada 2', url: 'https://drive.google.com/drive/folders/10zC5lwD-GX6aB8CfrHLMRz25JLw4lkZX' },
      { name: 'Temporada 3', url: 'https://drive.google.com/drive/folders/1-3hru5GZYwWmuOX6Hj1o4j_ZZsx2baYX' },
      { name: 'Temporada 4', url: 'https://drive.google.com/drive/folders/11Bm6aM5GJERqq_ucV8yeRuk4WTuHtYdy' },
      { name: 'Temporada 5 (Drive)', url: 'https://drive.google.com/drive/folders/1J8MrqEOPDP3rpgIYkG4fhdYOB-eMwa4A' }
    ],
    rating: '8.7/10 (IMDb)',
    category: 'action',
    curiosities: [
      "O parceiro canino de Billy Bruto, 'Terror', é recorrente nas HQs, mas na série só ganha destaque inicialmente em um episódio de flashback.",
      "Devido ao teor extremamente explícito de violência e consumo de substâncias nas HQs originais, diversas cenas e arcos dramáticos precisaram ser atenuados ou completamente cortados na adaptação para a TV.",
      "O herói Translúcido, integrante d'Os Sete na 1ª temporada, não existe nos quadrinhos originais. Ele foi criado exclusivamente para a TV para substituir Jack de Júpiter, cujo conceito de alienígena destoava do tom realista pretendido."
    ]
  },
  {
    id: 'handmaids-tale',
    title: "The Handmaid's Tale",
    synopsis: 'Em um futuro distópico, uma facção religiosa totalitária assume o poder nos EUA, criando a República de Gilead, onde as poucas mulheres férteis restantes são escravizadas como "Aias" para fins de procriação.',
    year: '2017 - Presente',
    genre: 'Distopia / Drama / Suspense',
    status: 'Disponível completo em áudio dublado.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/cuwIAkdwxukbBujH.jpg',
    seasons: [
      { name: 'Pastas Dubladas (5 Temps)', url: 'https://drive.google.com/drive/folders/1_scMY_gg0lnH89CznyVFrq_eUmQSmVcO' }
    ],
    rating: '8.4/10 (IMDb)',
    category: 'action',
    curiosities: [
      "Elisabeth Moss gravou quase todas as suas cenas na série sem nenhuma maquiagem para conferir um tom cru, realista e vulnerável à sua personagem.",
      "A autora Margaret Atwood revelou que se inspirou diretamente no clássico romance distópico '1984' de George Orwell para construir as bases políticas de Gilead.",
      "Os marcantes vestidos vermelhos das Aias possuem um simbolismo bíblico atrelado à figura histórica de Maria Madalena, contrastando com o azul das Esposas (referência à Virgem Maria).",
      "No romance original de 1985, a protagonista nunca recebe um nome real, sendo chamada apenas de Offred. A decisão de batizá-la de June partiu inteiramente dos roteiristas da série.",
      "Fez história ao ser a primeiríssima produção de uma plataforma de streaming a vencer o prestigiado prêmio Emmy de Melhor Série Dramática."
    ]
  },
  {
    id: 'the-sandman',
    title: 'The Sandman',
    synopsis: 'Após anos de aprisionamento por um mago mortal, Morpheus, o Rei dos Sonhos, embarca em uma jornada por diferentes mundos para recuperar suas ferramentas e restaurar seu poder sobre o Sonhar.',
    year: '2022 - Presente',
    genre: 'Fantasia Sombria / Sobrenatural',
    status: 'Baseado na aclamada obra em quadrinhos de Neil Gaiman.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/bKJtpnUuiqjXJkZT.jpg',
    seasons: [
      { name: 'Temporadas 1 e 2', url: 'https://drive.google.com/drive/folders/1XsiXMTy59xFUMLroCXrQCXocPzZ4sJ3i' }
    ],
    rating: '7.7/10 (IMDb)',
    category: 'terror',
    curiosities: [
      "Por conta dos direitos do detetive John Constantine estarem vinculados a outros projetos na época, a produção escalou a excelente Jenna Coleman para dar vida à sua ancestral, Johanna Constantine.",
      "A fiel bibliotecária do Sonhar, Lucienne, era originalmente desenhada como um homem branco (Lucien) nas páginas das HQs de Neil Gaiman.",
      "O autor Neil Gaiman recusou dezenas de propostas ruins para adaptar a obra ao cinema ao longo de três décadas, preferindo esperar o surgimento do streaming de alta qualidade para fazer a transição perfeita."
    ]
  },
  {
    id: 'vincenzo',
    title: 'Vincenzo',
    synopsis: 'Ao visitar sua terra natal, um advogado de máfia coreano-italiano dá a uma corporação gananciosa incomparável um gosto de sua própria medicina, misturando drama com altas doses de comédia sombria.',
    year: '2021',
    genre: 'Dorama / Ação / Comédia Sombria',
    status: 'Dorama de enorme sucesso com episódios dublados.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/yrDfKMlTjtBaDtbM.jpg',
    seasons: [
      { name: 'Temporada 1 Dublada', url: 'https://drive.google.com/drive/folders/1Kt5NPNGtTleBA7EAtK47a2FZJLFEIM4U' }
    ],
    rating: '8.4/10 (IMDb)',
    category: 'dorama',
    curiosities: [
      "Devido ao pico da pandemia de COVID-19 em 2020, as filmagens na Itália tornaram-se inviáveis. Praticamente todas as cenas ambientadas na Europa foram gravadas em estúdio com tela verde e computação gráfica de ponta na Coreia.",
      "O actor principal Song Joong-ki passou por um treinamento super intensivo para aprender a falar italiano com a pronúncia e o sotaque corretos para viver o advogado da máfia."
    ]
  },
  {
    id: 'se-desejos-matassem',
    title: 'Se Desejos Matassem',
    synopsis: 'Um aplicativo misterioso promete realizar desejos, mas faz uma contagem para a morte. Um grupo de jovens se envolve com esse ritual macabro e precisa quebrar este ciclo fatal para sobreviver.',
    year: '2026',
    genre: 'Dorama / Terror / Suspense',
    status: 'Novidade misteriosa no catálogo de doramas de suspense.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/GxrjxKjuqjyRMRAK.jpg',
    seasons: [
      { name: 'Temporada 1', url: 'https://drive.google.com/drive/folders/14iC5TeLyLMQQRuqK1uXY45tWaZbbpYsE' }
    ],
    rating: 'Novo (2026)',
    category: 'dorama',
    curiosities: [
      "É uma das primeiras produções de terror coreanas de suspense jovem adulto com foco em tecnologia, misturando maldições clássicas com críticas pesadas ao uso obsessivo de redes sociais.",
      "O enigmático aplicativo maldito 'Girigo' opera sob as mesmas bases de terror tecnológico de clássicos como 'O Chamado' (mídia amaldiçoada com prazo) e 'Death Note' (poder com preço inevitável).",
      "Diferente de produções tradicionais, foca muito mais na paranoia entre amigos, na culpa pelos desejos realizados e na tensão psicológica do que em sustos fáceis ou violência visual exagerada.",
      "Funciona como uma grande metáfora social para a pressão por popularidade, meritocracia, aparência física e ansiedade juvenil na Coreia do Sul contemporânea.",
      "Apresenta um formato de minissérie fechada em 1 temporada, mas a mecânica de propagação da maldição deixa ganchos inteligentes para futuras expansões antológicas."
    ]
  },
  {
    id: 'constantine',
    title: 'Constantine',
    synopsis: 'Acompanhe as aventuras de John Constantine, um caçador de demônios experiente que trava uma batalha constante contra as forças infernais e seus próprios erros do passado.',
    year: '2014',
    genre: 'Terror / Sobrenatural / DC Comics',
    status: 'Série clássica baseada nas HQs de Hellblazer.',
    adendum: 'O personagem continua vivo no "Arrowverse" com o mesmo ator, Matt Ryan. Ele faz sua primeira aparição na Temporada 3, Episódio 9 ("Beebo the God of War") de Legends of Tomorrow e tornou-se parte do elenco principal regular a partir da Temporada 4 até a Temporada 6.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/AuHyBknUGbxdyNKv.jpg',
    seasons: [
      { name: 'Temporada Única', url: 'https://drive.google.com/drive/folders/10WW3MIWFkGkwum0Q-gmvnJH5C8chHkbi?usp=drive_link' }
    ],
    rating: '8.1/10 (IMDb)',
    category: 'terror',
    curiosities: [
      "O filme de 2005 estrelado por Keanu Reeves originalmente se chamaria 'Hellblazer', mas o estúdio mudou o título para evitar confusão com 'Hellboy', lançado no mesmo ano.",
      "A aparência clássica do detetive John Constantine nos quadrinhos (criado por Alan Moore) foi diretamente inspirada no icônico cantor Sting, vocalista do The Police.",
      "No filme, como um detalhe de má sorte planejado pela produção, o personagem de Reeves fuma exatamente 13 cigarros de uma marca fictícia criada especificamente para o longa."
    ]
  },
  {
    id: 'millennium',
    title: 'Millennium',
    synopsis: 'Frank Black é um ex-agente do FBI capaz de visualizar a mente dos assassinos. Ele integra o misterioso Grupo Millennium que investiga crimes no crepúsculo do século XX.',
    year: '1996 - 1999',
    genre: 'Investigação / Terror Psicológico',
    creator: 'Chris Carter',
    status: 'Do aclamado criador de Arquivo X.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/awzCTJYfPNBjDaDW.jpg',
    seasons: [
      { name: 'Temporada 1', url: 'https://drive.google.com/drive/folders/1tL3DQlxphFtrq3LUr1VmtIb50-uVA7AF?usp=drive_link' },
      { name: 'Temporada 2', url: 'https://drive.google.com/drive/folders/1GPow5pCxaS30NzduDMBaiqrL4tmtpgI0?usp=drive_link' },
      { name: 'Temporada 3', url: 'https://drive.google.com/drive/folders/1F_dzi3rkXbGhDH83VXjW6dUizpzuG1xR?usp=drive_link' }
    ],
    rating: '8.0/10 (IMDb)',
    category: 'terror',
    curiosities: [
      "Lançada em 1996 pelo criador de 'Arquivo X', Chris Carter, a série buscou capturar os temores reais e a atmosfera sombria, conspiratória e apocalíptica da virada de milênio.",
      "O protagonista Frank Black, interpretado majestosamente por Lance Henriksen, é tido pela crítica como um dos investigadores mais atormentados e profundos já criados para a TV.",
      "A série promoveu um antológico crossover oficial direto com 'Arquivo X' no episódio 'Millennium' da 7ª temporada da série mãe, selando de vez o universo compartilhado dos dois shows."
    ]
  },
  {
    id: 'penny-dreadful',
    title: 'Penny Dreadful',
    synopsis: 'Personagens icônicos da literatura clássica de horror, como o monstro de Frankenstein, Dorian Gray e vampiros, habitam os becos sombrios da Londres vitoriana.',
    year: '2014 - 2016',
    genre: 'Terror Gótico / Fantasia Sombria',
    status: 'Série gótica premiada e com excelente elenco liderado por Eva Green.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/TJuapfvfFQFEGpZR.jpg',
    seasons: [
      { name: 'Temporada 1', url: 'https://drive.google.com/drive/folders/1hLYxAu5bz3kJjSr9ZUO8QnwLAh0yDqTz?usp=drive_link' },
      { name: 'Temporada 2', url: 'https://drive.google.com/drive/folders/1FIxTxPi-NK5Rh0ms6SQ9ysWmrYF8Rj_e?usp=drive_link' },
      { name: 'Temporada 3', url: 'https://drive.google.com/drive/folders/1brL4CDqZ9RB2QWQjk-vSF-yZnu9N2d7Q?usp=drive_link' }
    ],
    rating: '8.2/10 (IMDb)',
    category: 'terror',
    curiosities: [
      "A série tem conexões diretas com o universo de James Bond: o produtor Sam Mendes dirigiu 'Skyfall' e 'Spectre', enquanto o ator Timothy Dalton interpretou o icônico agente 007 nos anos 80.",
      "O título é uma homenagem direta aos fascículos de ficção e terror baratos vendidos por um penique ('penny dreadfuls') no século XIX na Inglaterra vitoriana.",
      "Para recriar os cenários áridos e desérticos do Velho Oeste americano vistos na 3ª temporada, a produção se deslocou para a clássica região cinematográfica de Almería, no sul da Espanha."
    ]
  },
  {
    id: 'helix',
    title: 'Helix',
    synopsis: 'Investigando um surto viral desconhecido em uma instalação isolada de pesquisa no Ártico, virologistas do CDC se deparam com segredos que ameaçam a raça humana.',
    year: '2014 - 2015',
    genre: 'Ficção Científica / Terror / Epidemia',
    status: 'Terror e ficção científica claustrofóbicos.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/xYDWrnaagYFKZqUe.jpg',
    seasons: [
      { name: 'Temporada 1', url: 'https://drive.google.com/drive/folders/11II_djSaEChhQ1rmgcuGuYoNqGXsH5wz?usp=drive_link' },
      { name: 'Temporada 2', url: 'https://drive.google.com/drive/folders/11pK7-JE1HUpBRSbsMRKPochaLvDlz3TT?usp=drive_link' }
    ],
    rating: '6.8/10 (IMDb)',
    category: 'terror',
    curiosities: [
      "A série de terror biológico usa com maestria o contraste estético: o ambiente ártico limpo, excessivamente branco e estéril amplifica o impacto visual das infecções escuras, viscosas e viscerais.",
      "A direção do show fez escolhas ousadas, tocando trilhas musicais extremamente alegres e descontraídas em meio a cenas de extrema tensão e violência biológica, intensificando a angústia psicológica do espectador."
    ]
  },
  {
    id: 'into-the-dark',
    title: 'Into the Dark',
    synopsis: 'Cada episódio de longa-metragem desta antologia de terror é temático sobre algum feriado ou data comemorativa do mês do lançamento, trazendo enredos surpreendentes.',
    year: '2018 - 2021',
    genre: 'Antologia / Terror Slasher / Sobrenatural',
    status: 'Produção original da Blumhouse Television.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/lzzPAABFBwabEaKZ.jpg',
    seasons: [
      { name: 'Temporada 1', url: 'https://drive.google.com/drive/folders/1pZOqC0tiJxwXyhAtHdUR2RMb3of7m-xT?usp=drive_link' },
      { name: 'Temporada 2', url: 'https://drive.google.com/drive/folders/1Th9LbLl9t2M2oSvF275SS5DuoEEi9BZ3?usp=drive_link' }
    ],
    rating: '6.9/10 (IMDb)',
    category: 'terror',
    curiosities: [
      "Cada um dos longa-metragens dessa antologia produzida pela Blumhouse foi inspirado diretamente em um feriado ou data comemorativa do mês correspondente ao seu lançamento.",
      "Devido ao formato atípico de episódios longos de 90 minutos lançados mensalmente, o público e a crítica tratam cada parcela como um filme independente e autônomo."
    ]
  },
  {
    id: 'the-strain',
    title: 'The Strain',
    synopsis: 'Um vírus vampírico infecta passageiros de um avião que pousa em Nova York, iniciando uma epidemia antiga que ameaça consumir toda a cidade e transformar a civilização.',
    year: '2014 - 2017',
    genre: 'Terror / Suspense / Vampiros',
    status: 'Criada pelo diretor vencedor do Oscar Guillermo del Toro.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/OkoNWoDlEdIuZDnd.jpg',
    seasons: [
      { name: 'Disponibilização em Breve', url: 'https://chat.whatsapp.com/Jy23MdpHIqR2nZ0ObVuAzZ' }
    ],
    rating: '7.3/10 (IMDb)',
    category: 'terror',
    curiosities: [
      "Guillermo del Toro inicialmente tentou vender a ideia diretamente como uma série de TV, mas sem emissoras interessadas, adaptou a história para uma bem-sucedida trilogia literária antes de finalmente levá-la à tela.",
      "O ator Corey Stoll (Ephraim Goodweather) usou uma peruca controversa na 1ª temporada apenas para afastar comparações visuais diretas com o seu marcante papel anterior na série 'House of Cards'.",
      "O design dos vampiros ('strigoi') quebra o clichê romântico: eles não possuem caninos, mas sim um longo e assustador apêndice retrátil que dispara de suas gargantas para sugar sangue e injetar parasitas."
    ]
  },
  {
    id: 'the-witcher-nightmare-of-the-wolf',
    title: 'The Witcher: Nightmare of the Wolf',
    synopsis: 'Anos antes de treinar Geralt, o bruxo Vesemir vive uma jornada de aventuras e ganância. Mas uma nova e monstruosa ameaça exige que ele encare suas piores lembranças.',
    year: '2021',
    genre: 'Animação / Fantasia Sombria / Ação',
    status: 'Filme anime oficial expandindo o universo de The Witcher.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/MhKmqDIqHmauRFtM.jpg',
    seasons: [
      { name: 'Filme/Anime Completo', url: 'https://drive.google.com/file/d/13aBHu8EF26OiMPYIgCo7pvfyhF3oAtOb/view' }
    ],
    rating: '7.2/10 (IMDb)',
    category: 'terror',
    curiosities: [
      "O filme em estilo anime foca no passado do bruxo Vesemir e serve como base narrativa importante sobre a dinâmica de mentoria e paternidade explorada na 2ª temporada do show live-action.",
      "Durante o violento cerco final a Kaer Morhen, a produção revela sutilmente que o jovem órfão Geralt de Rivia estava entre os sobreviventes resgatados, interligando perfeitamente a linha do tempo."
    ]
  },
  {
    id: 'o-tunel-do-tempo',
    title: 'O Túnel do Tempo',
    synopsis: 'Dois cientistas ficam perdidos nos labirintos da história após testarem um projeto secreto do governo americano, viajando por épocas importantes da humanidade.',
    year: '1966 - 1967',
    genre: 'Ficção Científica Clássica / Aventura',
    status: 'Série clássica de ficção científica dos anos 60.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/EZvFeaLXOKQLcJGV.jpg',
    seasons: [
      { name: 'Episódios 1-10', url: 'https://drive.google.com/drive/folders/18wFuU2JPkGOo1HCe7KX4rC7wPLC5kNX_' }
    ],
    rating: '7.1/10 (IMDb)',
    category: 'classicos',
    curiosities: [
      "A lendária produção de ficção científica criada por Irwin Allen durou apenas uma temporada de 30 episódios, sendo cancelada de surpresa sem que os cientistas voltassem ao presente.",
      "A icônica trilha sonora instrumental que dita o ritmo das aventuras foi composta por um jovem John Williams, décadas antes de alcançar o estrelato com 'Star Wars'.",
      "Para manter os custos baixos, a produção frequentemente reciclava figurinos e trechos de batalhas históricas de grandes produções cinematográficas do acervo da 20th Century Fox."
    ]
  },
  {
    id: 'spider-man-toei',
    title: 'Spider-Man (Toei 1978)',
    synopsis: 'A antológica série Tokusatsu japonesa onde o motoqueiro Takuya Yamashiro ganha poderes de aranha de um alienígena para defender a Terra, pilotando o icônico robô Leopardon.',
    year: '1978',
    genre: 'Tokusatsu / Ação / Clássico Retro',
    status: 'Série cult lendária com episódios completos divididos em pastas.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/fiwYDknWWnQGQdVx.jpg',
    seasons: [
      { name: 'Temporada 1', url: 'https://drive.google.com/drive/folders/1-crp67j9QGavyYqwmPBfna9iT5kYzHzj' },
      { name: 'Temporada 2', url: 'https://drive.google.com/drive/folders/18invt56cv6dDq6tuZHm71mXSZd1VDmr0' }
    ],
    rating: '7.0/10 (IMDb)',
    category: 'classicos',
    curiosities: [
      "Nessa mítica versão Tokusatsu da Toei Company, o Aranha não é Peter Parker, mas o jovem motoqueiro Takuya Yamashiro, que herda os poderes do guerreiro alienígena Garia do Planeta Spider.",
      "O seriado introduziu o robô gigante 'Leopardon', um conceito tão popular que mudou para sempre o gênero Tokusatsu e inspirou a Marvel a adotar mecânicas semelhantes mais tarde nas franquias Super Sentai.",
      "Apesar das mudanças brutais em relação aos quadrinhos, Stan Lee elogiou publicamente os efeitos práticos, a agilidade do dublê do Aranha japonês e a direção da série."
    ]
  },
  {
    id: 'tapas-e-beijos',
    title: 'Tapas & Beijos',
    synopsis: 'As confusões, romances e trapalhadas de Sueli e Fátima, duas grandes amigas de Copacabana que trabalham em uma loja de vestidos de noiva enquanto buscam sua própria felicidade amorosa.',
    year: '2011 - 2015',
    genre: 'Comédia Brasileira / Clássico nacional',
    status: 'A comédia de maior sucesso das noites brasileiras completa com todas as temporadas.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663627993849/XCeXltwkSPazItHU.jpg',
    seasons: [
      { name: 'Temporada 1', url: 'https://drive.google.com/drive/folders/1-Wibm6HLYwryTBqrZRAap_HxUChxvlyW' },
      { name: 'Temporada 2', url: 'https://drive.google.com/drive/folders/1-B3fP2EB-rTCA8kR-16AI5qGI0-c_JqW' },
      { name: 'Temporada 3', url: 'https://drive.google.com/drive/folders/1-HZZH3yfxDD5GaqMM7XUbIghEqw1Sfxt' },
      { name: 'Temporada 4', url: 'https://drive.google.com/drive/folders/11FjddUt-vI6kTgnxS1jV45Pjvx-Zw5jy' },
      { name: 'Temporada 5', url: 'https://drive.google.com/drive/folders/1-H4XG1U4sWgc_UcOA9sOzClGcaNn4tgx' }
    ],
    rating: '8.1/10 (IMDb)',
    category: 'comedy',
    curiosities: [
      "Antes de estrearem como Fátima e Sueli, Fernanda Torres e Andréa Beltrão protagonizaram o brilhante 'Programa Piloto' de fim de ano, cuja ótima química fez a Globo encomendar a série semanal.",
      "O inconfundível tema de abertura interpretado originalmente pela Banda Calypso nas primeiras temporadas foi refeito a partir da 4ª temporada sob a voz do lendário cantor Sidney Magal.",
      "A consagrada atriz internacional Sônia Braga fez uma participação super especial na série como Helô, a mãe distante e charmosa da personagem Fátima."
    ]
  },
  {
    id: '50-states-of-fright',
    title: '50 States of Fright',
    synopsis: 'Série antológica que explora lendas urbanas de diferentes estados dos EUA, mergulhando nos horrores que se escondem sob a superfície de cada localidade.',
    year: '2020',
    genre: 'Antologia / Lendas Urbanas / Terror',
    creator: 'Sam Raimi',
    status: 'Criada pelo aclamado diretor de Evil Dead.',
    posterUrl: 'https://static.tvmaze.com/uploads/images/medium_portrait/379/947766.jpg',
    seasons: [
      { name: 'Temporada 1', url: 'https://drive.google.com/drive/folders/1cZ0SybV1TFmaguOnEL8HrhPiM_OkJMh4?usp=drive_link' },
      { name: 'Temporada 2', url: 'https://drive.google.com/drive/folders/11IAPiVkqw_0cvIoqrYzNWGbEFBqRc0Xw?usp=drive_link' }
    ],
    rating: '6.3/10 (IMDb)',
    category: 'terror',
    curiosities: [
      "Produzida pelo aclamado diretor Sam Raimi ('Evil Dead' e 'Spider-Man'), a série foca no folclore regional e em lendas urbanas assustadoras de diferentes estados norte-americanos.",
      "A antologia foi originalmente desenvolvida para a extinta plataforma de streaming Quibi, sendo formatada em episódios curtos de 8 a 10 minutos para consumo rápido no celular.",
      "A série conta com um elenco de estrelas notáveis, incluindo Rachel Brosnahan (The Marvelous Mrs. Maisel), Taissa Farmiga (American Horror Story) e Asa Butterfield (Sex Education)."
    ]
  }
];

export default function ChrisRecommends() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'terror' | 'action' | 'dorama' | 'classicos' | 'comedy' | 'breve'>('all');
  const [selectedShow, setSelectedShow] = useState<RecommendedShow | null>(null);
  
  const [expandedSynopsis, setExpandedSynopsis] = useState<Record<string, boolean>>({});
  const [expandedCuriosities, setExpandedCuriosities] = useState<Record<string, boolean>>({});

  const toggleSynopsis = (id: string) => {
    setExpandedSynopsis(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCuriosities = (id: string) => {
    setExpandedCuriosities(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredShows = CHRIS_SHOWS.filter(show => {
    const matchesSearch = show.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          show.synopsis.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          show.genre.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    
    if (activeCategory === 'all') return true;
    return show.category === activeCategory;
  });

  return (
    <section className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden" id="chris-recomenda">
      {/* Spooky Red & Amber Background Orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-red-950/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-950/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Curated Intro Card */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-zinc-900">
        <div>
          <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-sm mb-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Séries Recomendadas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            𝐀𝐫𝐪𝐮𝐢𝐯𝐨𝐬 𝐒𝐞𝐜𝐫𝐞𝐭... — Indicações Multigêneros
          </h2>
          <p className="text-zinc-400 text-sm mt-1 max-w-3xl">
            Procurando produções cabulosas? A Chris separou as melhores séries de terror, doramas de mistério, clássicos retrô e grandes sucessos com links diretos do Google Drive!
          </p>
        </div>
        
        <span className="self-start md:self-center px-3 py-1.5 bg-red-950/40 text-red-400 text-xs uppercase font-mono font-bold tracking-wider rounded-lg border border-red-900/30">
          Segunda Grande Atualização: Novas Categorias
        </span>
      </div>

      {/* Chris's Persona Welcome Bubble */}
      <div className="bg-gradient-to-r from-zinc-900/90 to-zinc-900/40 border border-zinc-800/80 p-5 rounded-2xl flex flex-col md:flex-row gap-5 items-start md:items-center mb-8 relative">
        <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 text-amber-500 shrink-0 self-start md:self-center">
          <Flame className="w-6 h-6 animate-pulse" />
        </div>
        <div className="space-y-1.5">
          <p className="text-zinc-200 text-sm font-semibold font-serif flex items-center gap-2">
            <span>Dica da Chris:</span>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono">Caçadora Experiente</span>
          </p>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed italic">
            "Faaaaala Caçadores! Preparem a pipoca, porque esta segunda grande atualização traz muito mais do que terror! Além dos pôsteres oficiais 100% corrigidos com hospedagem de alta qualidade, adicionei sucessos de ação como The Boys, clássicos lendários da ficção científica, doramas espetaculares de mistério e até comédia brasileira. Tudo organizado em pastas diretas!"
          </p>
        </div>
      </div>

      {/* Toolbar (Search & Tabs) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        {/* Navigation Tabs inside Chris recommends */}
        <div className="flex flex-wrap gap-1 bg-zinc-900/40 p-1 rounded-xl border border-zinc-900/80 self-start">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-zinc-950 shadow'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
            }`}
          >
            Todos ({CHRIS_SHOWS.length})
          </button>
          <button
            onClick={() => setActiveCategory('terror')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeCategory === 'terror'
                ? 'bg-amber-500 text-zinc-950 shadow'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
            }`}
          >
            Terror & Fantasia ({CHRIS_SHOWS.filter(s => s.category === 'terror').length})
          </button>
          <button
            onClick={() => setActiveCategory('action')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeCategory === 'action'
                ? 'bg-amber-500 text-zinc-950 shadow'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
            }`}
          >
            Ação & Suspense ({CHRIS_SHOWS.filter(s => s.category === 'action').length})
          </button>
          <button
            onClick={() => setActiveCategory('dorama')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeCategory === 'dorama'
                ? 'bg-amber-500 text-zinc-950 shadow'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
            }`}
          >
            Doramas ({CHRIS_SHOWS.filter(s => s.category === 'dorama').length})
          </button>
          <button
            onClick={() => setActiveCategory('classicos')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeCategory === 'classicos'
                ? 'bg-amber-500 text-zinc-950 shadow'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
            }`}
          >
            Clássicos & Sci-Fi ({CHRIS_SHOWS.filter(s => s.category === 'classicos').length})
          </button>
          <button
            onClick={() => setActiveCategory('comedy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeCategory === 'comedy'
                ? 'bg-amber-500 text-zinc-950 shadow'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
            }`}
          >
            Comédia ({CHRIS_SHOWS.filter(s => s.category === 'comedy').length})
          </button>
          <button
            onClick={() => setActiveCategory('breve')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeCategory === 'breve'
                ? 'bg-red-950/40 text-red-400 border border-red-900/30'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
            }`}
          >
            Em Breve ⌛
          </button>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Pesquisar série recomendada..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-900/60 text-zinc-100 placeholder-zinc-500 text-xs px-3 py-2 pl-9 rounded-xl border border-zinc-800 focus:outline-none focus:border-amber-500 transition"
          />
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Under Construction / Soon Block */}
      {activeCategory === 'breve' ? (
        <div className="border border-dashed border-red-900/40 bg-red-950/5 rounded-2xl p-8 text-center space-y-4">
          <div className="w-12 h-12 bg-red-500/10 text-red-500 border border-red-500/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Compass className="w-6 h-6" />
          </div>
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-zinc-200 font-bold text-lg">Novas Outras Séries & Gêneros em Breve!</h3>
            <p className="text-zinc-400 text-xs sm:text-sm">
              A Chris já está analisando novos arquivos de outros gêneros como **Ficção Científica complexa, Suspense Policial, Thriller de Mistério e Clássicos de Monstros**! Fique ligado que novas atualizações chegarão em breve.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-amber-500 text-xs font-mono">
            <span>● Status: Sintonizando novas transmissões...</span>
          </div>
        </div>
      ) : (
        <>
          {filteredShows.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-zinc-800 rounded-2xl">
              <p className="text-zinc-400 text-sm">Nenhuma recomendação da Chris encontrada com esses filtros.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredShows.map((show) => (
                <div 
                  key={show.id} 
                  className="bg-zinc-900/40 border border-zinc-900 hover:border-amber-500/30 transition-all duration-300 rounded-2xl p-5 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Poster and Basic Info */}
                    <div className="flex gap-4">
                      {/* Show Poster Image with No Referrer constraint */}
                      <div className="w-24 h-36 rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden shrink-0 relative shadow-md">
                        <img 
                          src={show.posterUrl} 
                          alt={`Pôster de ${show.title}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            // fallback if image blocks
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=300&auto=format&fit=cover';
                          }}
                        />
                      </div>

                      {/* Right top labels */}
                      <div className="space-y-1.5 flex flex-col justify-start">
                        <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
                          {show.year}
                        </span>
                        <h3 className="text-zinc-100 font-bold font-sans text-base group-hover:text-amber-400 transition leading-snug">
                          {show.title}
                        </h3>
                        <div className="text-[10px] text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 self-start">
                          {show.rating}
                        </div>
                        {show.creator && (
                          <div className="text-[10px] text-zinc-400">
                            Criador: <strong className="text-zinc-300">{show.creator}</strong>
                          </div>
                        )}
                        <div className="text-[10px] text-zinc-500 italic mt-1 line-clamp-1">
                          {show.genre}
                        </div>
                      </div>
                    </div>

                    {/* Synopsis with "Ler mais" toggle to fix truncation/UX */}
                    <div className="bg-zinc-950/20 p-3 rounded-xl border border-zinc-950 space-y-2">
                      <p className={`text-xs text-zinc-400 leading-relaxed ${expandedSynopsis[show.id] ? '' : 'line-clamp-3'}`}>
                        {show.synopsis}
                      </p>
                      {show.synopsis.length > 80 && (
                        <button
                          onClick={() => toggleSynopsis(show.id)}
                          className="text-[10px] text-amber-500 hover:text-amber-400 font-bold uppercase tracking-wider transition cursor-pointer inline-flex items-center gap-1"
                        >
                          <span>{expandedSynopsis[show.id] ? 'Ver Menos' : 'Ler Sinopse Completa'}</span>
                        </button>
                      )}
                    </div>

                    {/* Curiosities / Bastidores Expandable Section */}
                    {show.curiosities && show.curiosities.length > 0 && (
                      <div className="bg-zinc-950/10 border border-zinc-900 rounded-xl p-3 space-y-2">
                        <button
                          onClick={() => toggleCuriosities(show.id)}
                          className="flex items-center justify-between w-full text-left text-[11px] font-semibold text-amber-500/90 hover:text-amber-400 transition cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            <span>Dossiê: Curiosidades</span>
                          </span>
                          <span className="text-[9px] uppercase font-mono tracking-wider text-zinc-500">
                            {expandedCuriosities[show.id] ? 'Recolher' : `Ver (${show.curiosities.length})`}
                          </span>
                        </button>
                        
                        {expandedCuriosities[show.id] && (
                          <motion.ul 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="space-y-2 text-[11px] text-zinc-400 leading-relaxed bg-zinc-950/40 p-2.5 rounded-lg border border-zinc-950/60"
                          >
                            {show.curiosities.map((item, idx) => (
                              <li key={idx} className="flex gap-2 items-start">
                                <span className="text-amber-500 shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </div>
                    )}

                    {/* Constantine's special adendum or warnings */}
                    {show.adendum && (
                      <div className="bg-red-950/15 border border-red-900/20 p-3 rounded-xl space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] text-red-400 font-bold uppercase tracking-wider">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          <span>Adendo de Caçador (Arrowverse)</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 leading-relaxed">
                          {show.adendum}
                        </p>
                      </div>
                    )}

                    {/* Status notes */}
                    {show.status && !show.adendum && (
                      <div className="bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/40 text-[11px] text-zinc-400 flex items-center gap-1.5">
                        <Info className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{show.status}</span>
                      </div>
                    )}
                  </div>

                  {/* Season list and Drive button */}
                  <div className="mt-5 pt-4 border-t border-zinc-950 space-y-2">
                    <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mb-2">
                      Acessar Pastas no Google Drive:
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {show.seasons.map((season, index) => (
                        <a
                          key={index}
                          href={season.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between text-xs font-semibold bg-zinc-950 hover:bg-amber-500 hover:text-zinc-950 px-3.5 py-2 rounded-xl border border-zinc-800 hover:border-amber-500 transition-all text-zinc-300 cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <Tv className="w-3.5 h-3.5" />
                            <span>{season.name}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="text-[9px] uppercase font-mono tracking-wider opacity-85">Assistir</span>
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Coming Soon Teaser Bar */}
      <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span>Foco inicial: Séries de Terror selecionadas. Novas atualizações em breve!</span>
        </div>
        <div className="font-mono text-amber-500/80 animate-pulse">
          ⚡ Próxima parada: Suspense Psicológico & Sci-Fi
        </div>
      </div>
    </section>
  );
}
