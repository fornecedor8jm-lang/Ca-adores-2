/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Movie, QuizQuestion, LeaderboardEntry } from './types';

export const INITIAL_MOVIES: Movie[] = [
  {
    id: 'moana',
    title: 'Moana',
    votes: 19,
    synopsis: 'Moana Waialiki é uma jovem corajosa e a filha única do chefe de uma tribo na Oceania, vinda de uma longa linhagem de navegadores. Quando os pescadores de sua ilha não conseguem pescar nenhum peixe e as colheitas falham, ela descobre que o semideus Maui causou a praga ao roubar o coração da deusa Te Fiti. Entusiasta das viagens marítimas, Moana decide se aventurar pelo oceano para encontrar Maui e devolver o coração de Te Fiti, restaurando a prosperidade de sua ilha. Mesmo com a resistência de sua família, que quer protegê-la a qualquer custo, Moana embarca em uma jornada épica de autodescoberta e bravura.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663045162143/gWLqqGvQuSfhxFgA.jpeg',
    referenceUrl: 'https://www.adorocinema.com/filmes/filme-314942/',
    referenceLabel: 'AdoroCinema'
  },
  {
    id: 'colonie',
    title: 'Colonie',
    votes: 0,
    synopsis: 'A trama se passa durante uma conferência de biotecnologia em um grande edifício. Quando um vírus misterioso e de rápida mutação é liberado, transformando os infectados, as autoridades são forçadas a isolar o prédio.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663045162143/UtpiyyacnNQgyHCP.jpg',
    referenceUrl: 'https://www.instagram.com/reel/DWrv2bPhtGQ/?hl=en',
    referenceLabel: 'Instagram'
  },
  {
    id: 'eternals',
    title: 'Eternals',
    votes: 4,
    synopsis: 'Após os eventos de Vingadores: Ultimato (2019), uma tragédia inesperada força os Eternos, antigos alienígenas que vivem na Terra em segredo há milhares de anos, a se reunir contra o inimigo mais antigo da humanidade, os Deviantes.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663045162143/ojQmGAtKUBouGgSL.jpg',
    referenceUrl: 'https://www.imdb.com/pt/title/tt9032400/',
    referenceLabel: 'IMDb'
  },
  {
    id: '96minutos',
    title: '96 Minutos',
    votes: 3,
    synopsis: 'A bordo de um trem de alta velocidade carregado de explosivos, um homem corre contra o tempo para desativar as bombas e salvar a vida dos passageiros.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663045162143/ycRsiRKAlVxeKTvz.jpg',
    referenceUrl: 'https://www.netflix.com/br/title/82162575',
    referenceLabel: 'Netflix'
  },
  {
    id: 'gotcha',
    title: 'Gotcha',
    votes: 0,
    synopsis: "O estudante universitário Jonathan Moore joga 'Gotcha', um jogo de espionagem, durante uma viagem a Paris. Ele se apaixona por uma mulher misteriosa que o leva a Berlim Oriental, onde ele se envolve em uma trama de espionagem real.",
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663045162143/fzHVLiKobDAJIiNW.jpg',
    referenceUrl: 'https://www.adorocinema.com/filmes/filme-116393/',
    referenceLabel: 'AdoroCinema'
  },
  {
    id: 'pinoquio',
    title: 'Pinóquio',
    votes: 1,
    synopsis: 'Gepeto (Tom Hanks), um carpinteiro que constrói um boneco de madeira, vê seu desejo de ter um filho se tornar realidade quando a Fada Azul dá vida a Pinóquio. O boneco, com a ajuda do Grilo Falante como sua consciência, embarca em uma aventura para se tornar um menino de verdade.',
    posterUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663045162143/sowiPOxDuOnRGaqF.jpg',
    referenceUrl: 'https://www.adorocinema.com/filmes/filme-236852/',
    referenceLabel: 'AdoroCinema'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual das seguintes alternativas justifica a substituição do planeado Ford Mustang de 1965 pelo Chevrolet Impala de 1967 como o veículo icônico dos protagonistas na fase de desenvolvimento do conceito de Eric Kripke?',
    options: [
      'A) O modelo Impala apresentava maior economia de combustível em deslocações de longa distância pelo território americano.',
      'B) O Mustang sofria de problemas crónicos de suspensão que impediam as filmagens de manobras de risco em Vancouver.',
      'C) Um vizinho do criador argumentou que o Impala possuía um porta-malas espaçoso para esconder corpos e projetava uma imagem intimidadora que levava outros condutores a trancar as portas nos semáforos.',
      'D) A Warner Bros. possuía um contrato de exclusividade de colocação de produto com a fabricante Chevrolet na altura do lançamento.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Um vizinho sugeriu o Chevrolet Impala porque o porta-malas era gigante, ideal para ocultar corpos e armas, e parecia intimidador o suficiente para fazer outros motoristas trancarem as portas nos semáforos.'
  },
  {
    id: 2,
    question: 'A quem se deve o tributo original que determinou a escolha dos nomes próprios dos protagonistas Sam e Dean Winchester?',
    options: [
      'A) Aos agentes federais pioneiros da primeira divisão de patrulhamento de autoestradas do Kansas.',
      'B) Às personagens "Sal" e "Dean" da obra clássica de viagem On the Road, do escritor Jack Kerouac.',
      'C) Aos irmãos fundadores do sanatório psiquiátrico de Lawrence, Kansas.',
      'D) A uma homenagem direta aos astros do cinema clássico Dean Martin e Sammy Davis Jr.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Os nomes dos protagonistas constituem uma homenagem direta aos personagens Sal e Dean da obra clássica "On the Road" de Jack Kerouac. O nome "Sal" foi posteriormente alterado para "Sam".'
  },
  {
    id: 3,
    question: 'Que restrição jurídica forçou a produção a abandonar o apelido planeado "Harrison" para os protagonistas Sam e Dean?',
    options: [
      'A) A contestação dos advogados de Harrison Ford, que temiam a associação de imagem com o herói Han Solo.',
      'B) A existência real de um indivíduo chamado Dean Harrison no estado do Kansas, obrigando à escolha de "Winchester" com base na famosa Winchester Mystery House.',
      'C) A existência de uma marca de brinquedos de terror homónima registada no Canadá.',
      'D) Uma disputa de propriedade intelectual com a rede de televisão concorrente Fox.'
    ],
    correctAnswerIndex: 1,
    explanation: 'A existência jurídica de um residente real chamado Dean Harrison no Kansas inviabilizou a marca planejada, forçando a escolha do apelido "Winchester", inspirado na histórica atração Winchester Mystery House.'
  },
  {
    id: 4,
    question: 'Qual foi o planeamento de contratação inicial reservado à personagem Bobby Singer (interpretada por Jim Beaver) pela equipa técnica de Eric Kripke?',
    options: [
      'A) O ator assinou um contrato inicial de exclusividade para um período mínimo de cinco temporadas regulares.',
      'B) Foi originalmente contratado para participar numa única cena do episódio piloto.',
      'C) Foi contratado para uma única aparição no último episódio da primeira temporada ("Devil\'s Trap"), sem qualquer perspetiva de retorno à série.',
      'D) Foi idealizado como o vilão secreto da segunda temporada, sob a influência da demônio Ruby.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Bobby Singer foi originalmente planejado para uma única participação especial no encerramento da 1ª temporada ("Devil\'s Trap"). A excelente recepção do público transformou-o em pilar fixo da série.'
  },
  {
    id: 5,
    question: 'Qual a razão principal que determinou a contração da terceira temporada para apenas 16 episódios, quebrando o padrão normal de mais de 20 episódios anuais?',
    options: [
      'A) A destruição física dos cenários principais da produtora devido a tempestades na Colúmbia Britânica.',
      'B) A paragem forçada da produção provocada pela greve dos argumentistas americanos da Writers Guild of America (WGA) em 2007-2008.',
      'C) A indisponibilidade de Jensen Ackles devido às filmagens adicionais do seu papel em Smallville.',
      'D) Uma decisão orçamental extraordinária da Warner Bros. para cobrir despesas de computação gráfica de anjos.'
    ],
    correctAnswerIndex: 1,
    explanation: 'A greve histórica do sindicato de roteiristas WGA paralisou a indústria televisiva americana em 2007-2008, encurtando a temporada de Supernatural para 16 episódios.'
  },
  {
    id: 6,
    question: 'De qual figura de produção executiva adveio a icônica atmosfera gótica, sombria e cinematográfica que caracterizou os primeiros anos da série?',
    options: [
      'A) De McG, através do recurso a planos de câmara dinâmicos e montagem acelerada.',
      'B) De Kim Manners, cujos métodos de filmagem e suspense haviam sido consagrados no clássico de ficção científica The X-Files.',
      'C) De Robert Singer, mediante a utilização prioritária de iluminação natural de estúdio.',
      'D) De David Nutter, que se focou estritamente na composição estética de cidades rurais canadianas.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Kim Manners, renomado diretor de The X-Files, trouxe sua assinatura de direção de suspense e atmosfera densa de terror, estabelecendo a assinatura estética gótica dos anos iniciais.'
  },
  {
    id: 7,
    question: 'A disparidade de idade na vida real entre a atriz Samantha Smith (Mary Winchester) e o ator Jensen Ackles (Dean) é de:',
    options: [
      'A) Exatamente 15 anos de diferença.',
      'B) Apenas 9 anos de diferença, evidenciando o uso estratégico de iluminação e flashbacks para as cenas do passado.',
      'C) 25 anos, permitindo uma representação realista de mãe e filho sem recursos cénicos de envelhecimento.',
      'D) Ambas as partes possuem a mesma idade biológica na vida real.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Samantha Smith nasceu em 1969 e Jensen Ackles em 1978. A anomalia de casting de apenas 9 anos exigia técnicas especiais de iluminação e saltos temporais para retratar mãe e filho.'
  },
  {
    id: 8,
    question: 'Quais as três únicas formas conhecidas e documentadas para abrandar ou conter temporariamente as criaturas primordiais conhecidas como Leviatãs?',
    options: [
      'A) Água benta, facas de prata pura e fogo brando.',
      'B) Decapitação física, aplicação sistemática de Borax e intervenção direta de feitiçaria.',
      'C) Disparos de sal grosso, contacto com ferro fundido e barreiras de cinza de montanha.',
      'D) Exorcismos tradicionais em latim, radiação ultravioleta e armas com ligas de bronze.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Conforme documentado no canone, a decapitação prolongada, aplicação intensiva de Borax e bruxarias avançadas são os únicos meios de contensão temporária contra os colossais Leviatãs.'
  },
  {
    id: 9,
    question: 'A utilização de codinomes pelas entidades conhecidas como "Sereias" (Sirens) baseia-se em qual referência cultural?',
    options: [
      'A) Em nomes próprios das principais divindades femininas da mitologia nórdica clássica.',
      'B) Em alcunhas de princesas consagradas de produções de animação clássica da Disney, como Belle, Ariel, Aurora e Jasmine.',
      'C) Em pseudónimos de estrelas do cinema mudo americano da década de 1920.',
      'D) Em denominações científicas de espécies raras de lepidópteros.'
    ],
    correctAnswerIndex: 1,
    explanation: 'As Sereias manipulavam o subconsciente das vítimas utilizando apelidos baseados em princesas clássicas da Disney, como Belle, Ariel, Aurora e Jasmine.'
  },
  {
    id: 10,
    question: 'Que coincidência de cariz familiar determinou a data de aniversário da personagem Sam Winchester (2 de maio) no desenvolvimento do guião?',
    options: [
      'A) Corresponde ao aniversário de casamento dos pais de Eric Kripke.',
      'B) É o dia exato do nascimento do filho de Eric Kripke na vida real.',
      'C) Coincide com o falecimento do avô do criador, cujas histórias militares inspiraram a criação de John Winchester.',
      'D) É o aniversário da esposa de Jensen Ackles, Danneel Ackles.'
    ],
    correctAnswerIndex: 1,
    explanation: 'O dia do nascimento de Sam (2 de maio) foi cunhado por Eric Kripke como homenagem ao dia exato de nascimento do seu próprio filho na vida real.'
  },
  {
    id: 11,
    question: 'O papel da influente demônio Ruby foi originalmente escrito a pensar em que famosa atriz de televisão norte-americana?',
    options: [
      'A) Sarah Michelle Gellar, para capitalizar a audiência do género de caça a vampiros.',
      'B) Kristen Bell, que acabou por rejeitar o papel para se focar noutros compromissos artísticos.',
      'C) Megan Fox, visando elevar o apelo estético juvenil da promoção televisiva.',
      'D) Genevieve Cortese, que acabou por assumir o papel apenas na quarta temporada.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Eric Kripke escreveu a complexa demônio Ruby com foco em Kristen Bell, mas com sua recusa, o papel passou por reestruturações de elenco.'
  },
  {
    id: 12,
    question: 'Qual destes elementos de cena é considerado o maior e mais recorrente "easter egg" visual, surgindo em múltiplos cenários de pensões e escritórios ao longo de 15 temporadas?',
    options: [
      'A) Uma estatueta de bronze retratando um falcão maltês.',
      'B) Um relógio de parede no formato clássico de estrela brilhante (Starburst clock).',
      'C) Um quadro a óleo com a representação de um navio mercante holandês do século XVII.',
      'D) Um candeeiro de latão verde de estilo tipicamente parlamentar.'
    ],
    correctAnswerIndex: 1,
    explanation: 'O clássico "Starburst Clock" (relógio em formato de estrela) é o maior e mais consagrado easter egg visual, aparecendo sutilmente nos cenários de hotéis onde os caçadores dormiam.'
  },
  {
    id: 13,
    question: 'Como se justifica, sob a ótica da organização Creation Entertainment, os elevados preços de admissão cobrados nas convenções oficiais de Supernatural?',
    options: [
      'A) Pelo facto de as receitas reverterem integralmente para o financiamento de efeitos visuais de spin-offs da franquia.',
      'B) Pela natureza exclusiva, restrita e intimista dos eventos presenciais, que contam com fortes limites de público pagante e elevados custos de cachet do elenco principal.',
      'C) Pela inclusão de viagens de avião e estadias em hotéis de luxo para todos os detentores de ingressos comuns.',
      'D) Pela necessidade de cobrir perdas orçamentais da Warner Bros. no mercado europeu de mídias físicas.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Os eventos buscam exclusividade através de um público intencionalmente limitado, gerando alta demanda e compensando os custos massivos de cachet com painéis intimistas.'
  },
  {
    id: 14,
    question: 'Que distinção física e comemorativa extraordinária foi entregue à administração do portal independente SuperWiki pela própria Warner Bros. Entertainment ao fim da série?',
    options: [
      'A) Uma compensação financeira vitalícia decorrente dos direitos autorais de imagem da série.',
      'B) Uma placa oficial de agradecimento institucional pela exaustiva cobertura técnica e apoio comunitário contínuo ao longo de 15 anos.',
      'C) O direito exclusivo de voto nos conselhos criativos de spin-offs da produtora.',
      'D) A oferta do Chevrolet Impala de 1967 original utilizado na rodagem do episódio piloto.'
    ],
    correctAnswerIndex: 1,
    explanation: 'A Warner Bros. consagrou o papel insubstituível da SuperWiki oferecendo uma placa oficial comemorativa de agradecimento institucional pela exaustiva cobertura técnica de 15 anos.'
  },
  {
    id: 15,
    question: 'O fracasso comercial do spin-off The Winchesters (2022) é majoritariamente atribuído pela crítica especializada a qual fator?',
    options: [
      'A) À total alteração da palete de cores de época e anacronismos na cenografia dos anos 1970.',
      'B) À total ausência de carisma e à manifesta falta da química relacional insubstituível que caracterizava os irmãos Sam e Dean Winchester na obra original.',
      'C) À recusa sistemática de Jensen Ackles em participar como narrador dos episódios de forma regular.',
      'D) À alteração unilateral da trilha sonora clássica em favor de ritmos de música pop contemporânea.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Estudos de mercado apontam que os spin-offs falharam por não conseguirem reproduzir a indispensável química e o carisma relacional entre Jensen Ackles e Jared Padalecki.'
  }
];

export const INITIAL_LEADERBOARD: LeaderboardEntry[] = [
  { name: 'Analu (Organizadora)', puzzlePoints: 450, quizPoints: 380, totalPoints: 830, rank: 'Lenda Winchester' },
  { name: 'Gabriel S.', puzzlePoints: 400, quizPoints: 350, totalPoints: 750, rank: 'Caçador de Demônios' },
  { name: 'Bobby Singer fan', puzzlePoints: 320, quizPoints: 400, totalPoints: 720, rank: 'Caçador de Demônios' },
  { name: 'Sammy_Girl', puzzlePoints: 360, quizPoints: 320, totalPoints: 680, rank: 'Veterano' },
  { name: 'Dean_Pie_Lover', puzzlePoints: 240, quizPoints: 360, totalPoints: 600, rank: 'Veterano' },
  { name: 'Impala_67_Owner', puzzlePoints: 280, quizPoints: 280, totalPoints: 560, rank: 'Iniciado' }
];
