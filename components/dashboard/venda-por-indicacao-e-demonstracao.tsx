import Link from "next/link";
import {
  AlertCircle,
  Ban,
  Brain,
  BookOpen,
  CalendarCheck,
  ClipboardCheck,
  Clock,
  Compass,
  Ear,
  Eye,
  Filter,
  Gauge,
  HelpCircle,
  Lightbulb,
  ListOrdered,
  MessageCircle,
  MessageSquare,
  Presentation,
  Repeat,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Users,
  Wallet,
  Workflow,
  XCircle,
} from "lucide-react";

const qualificacao = [
  { title: "Necessidade", body: "Existe um problema ou oportunidade real na operação da empresa?" },
  { title: "Capacidade", body: "A empresa possui estrutura e condições para adotar uma solução?" },
  { title: "Momento", body: "Existe alguma razão para analisar uma mudança agora ou em futuro próximo?" },
];

const fontesProspeccao = [
  "Clientes e fornecedores conhecidos",
  "Amigos empresários",
  "Vizinhança comercial",
  "Associações comerciais",
  "Networking e eventos",
  "Redes sociais e LinkedIn",
  "Google Maps",
  "Grupos profissionais",
  "Empresas que você frequenta",
  "Indicações de outras pessoas",
];

const sinaisDeProblema = [
  "Filas e demora no atendimento",
  "Retrabalho",
  "Anotações em papel",
  "Planilhas paralelas",
  "Informações duplicadas",
  "Dificuldade para encontrar dados",
  "Estoque desorganizado",
  "Clientes reclamando",
  "Processo dependente de uma única pessoa",
  "Decisões tomadas sem informação",
];

const perguntasAbertas = [
  "Como vocês fazem isso atualmente?",
  "O que costuma dar mais problema?",
  "Quanto tempo isso consome?",
  "O que acontece quando alguma coisa dá errado?",
  "Quem normalmente precisa resolver?",
  "O que você gostaria que funcionasse melhor?",
  "Já tentou resolver isso antes?",
  "O que impediu a solução?",
];

const spin = [
  { letra: "S", titulo: "Situação", body: "Entenda o cenário.", exemplo: "Como vocês fazem isso hoje?" },
  { letra: "P", titulo: "Problema", body: "Descubra dificuldades.", exemplo: "Qual é a parte mais difícil?" },
  { letra: "I", titulo: "Implicação", body: "Ajude o cliente a refletir sobre consequências.", exemplo: "Quando isso acontece, o que muda na operação?" },
  { letra: "N", titulo: "Necessidade", body: "Faça o cliente imaginar uma situação melhor.", exemplo: "Se isso fosse resolvido, o que melhoraria para vocês?" },
];

const escutaPraticas = [
  "Não interromper",
  "Prestar atenção",
  "Confirmar entendimento",
  "Fazer perguntas de continuidade",
  "Resumir o que ouviu",
  "Evitar preparar a resposta enquanto o cliente ainda fala",
];

const neurociencia = [
  { icon: Eye, title: "Atenção é limitada", body: "O cérebro recebe mais estímulos do que consegue processar. Mensagens simples vencem apresentações confusas." },
  { icon: Gauge, title: "Carga cognitiva", body: "Quanto mais esforço uma apresentação exige, maior a chance de o cliente adiar a decisão. Clareza vende melhor que complexidade." },
  { icon: Sparkles, title: "Emoção e razão juntas", body: "Uma decisão empresarial envolve análise racional, mas também confiança, segurança e expectativa de melhoria." },
  { icon: Scale, title: "Aversão à perda", body: "As pessoas tendem a valorizar mais evitar uma perda do que obter um ganho equivalente. Mostre custos reais, sem exagerar riscos." },
  { icon: Users, title: "Familiaridade e confiança", body: "Linguagem clara, exemplos próximos e coerência entre discurso e comportamento constroem confiança — sem pressão." },
];

const persuasao = [
  { title: "Reciprocidade", body: "Quando alguém recebe ajuda genuína ou uma boa orientação, tende a manter o relacionamento. Ajude primeiro; a confiança vem como consequência." },
  { title: "Autoridade", body: "Conhecimento, dados verificáveis e a capacidade de dizer 'não sei' geram mais credibilidade do que improvisar." },
  { title: "Compromisso e consistência", body: "Vendas complexas avançam por pequenos 'sins': aceitar conversar, explicar o problema, receber informação, avaliar uma demonstração." },
];

const objecaoPassos = ["Ouça", "Confirme", "Investigue", "Responda", "Confirme novamente"];

const errosComuns = [
  { title: "Falar demais", body: "O cliente não consegue explicar sua realidade." },
  { title: "Apresentar cedo demais", body: "A solução aparece antes do problema." },
  { title: "Usar jargão", body: "A conversa fica difícil de compreender." },
  { title: "Discutir com objeções", body: "O cliente entra em posição defensiva." },
  { title: "Inventar respostas", body: "Destrói credibilidade." },
  { title: "Falar mal do concorrente", body: "Transmite insegurança e falta de profissionalismo." },
  { title: "Pressionar", body: "Pode gerar reação contrária." },
  { title: "Não fazer follow-up", body: "Oportunidades são abandonadas cedo demais." },
  { title: "Fazer follow-up demais", body: "Insistência pode destruir o relacionamento." },
];

const persuasaoEtica = [
  "Apresenta informação",
  "Esclarece",
  "Demonstra valor",
  "Ajuda a comparar",
  "Respeita a liberdade de decisão",
];

const manipulacao = [
  "Esconde informação importante",
  "Inventa urgência",
  "Cria medo falso",
  "Mente",
  "Promete o que não pode entregar",
];

const checklistIndicacao = [
  "Eu entendi minimamente o negócio?",
  "Existe uma necessidade?",
  "Fiz perguntas suficientes?",
  "Ouvi o potencial cliente?",
  "Existe interesse em conhecer uma solução?",
  "Tenho autorização para encaminhar o contato?",
  "Estou registrando informações corretas?",
  "Evitei prometer o que não posso garantir?",
];

const fluxoCatedral = [
  "Você observa",
  "Você conversa",
  "Você descobre uma necessidade",
  "Você gera interesse",
  "Você registra a indicação",
  "A Catedral agenda e conduz a demonstração",
];

const estruturaConversa = [
  "Preparação",
  "Abertura",
  "Perguntas",
  "Escuta",
  "Identificação do problema",
  "Impacto",
  "Apresentação de valor",
  "Objeções",
  "Próximo passo",
  "Follow-up",
];

const seuPapelDemonstracao = [
  "Garantir que o contato e as informações da indicação estejam corretos",
  "Avisar o cliente de que um consultor da Catedral vai entrar em contato",
  "Reforçar, em poucas palavras, a necessidade que motivou a indicação",
  "Fazer follow-up depois, perguntando como foi a conversa",
];

const papelCatedralDemonstracao = [
  "Agendar e conduzir a demonstração técnica do sistema",
  "Adaptar a apresentação ao segmento e à necessidade do cliente",
  "Esclarecer dúvidas técnicas e comerciais",
  "Negociar preço, prazo e condições de contratação",
];

export function VendaPorIndicacaoEDemonstracao({ basePath }: { basePath: string }) {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text-muted">
          Programa de Parceiros Catedral
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-text">
          Venda por Indicação e Demonstração
        </h1>
        <p className="mt-2 max-w-2xl text-base font-medium text-brand-text-muted">
          Prospecção, relacionamento, técnicas de vendas e princípios de comportamento humano para
          transformar contatos em oportunidades — e o que acontece depois, quando a Catedral assume
          a demonstração comercial.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Vender por indicação não significa pressionar amigos, conhecidos ou empresários para
          comprar alguma coisa. Significa aprender a identificar oportunidades, iniciar boas
          conversas e conectar pessoas que possuem uma necessidade a uma solução capaz de ajudá-las.
        </p>
        <div className="mt-6 rounded-2xl border border-brand-border bg-brand-dark p-6 text-center text-white">
          <p className="text-xl font-bold sm:text-2xl">Boas vendas começam com boas perguntas.</p>
          <p className="mt-1 text-sm text-white/70">
            Quem entende o cliente antes de apresentar a solução vende melhor.
          </p>
        </div>
      </div>

      {/* O que é vender */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Compass className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Venda é um processo de decisão</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Uma venda acontece quando uma pessoa percebe que o benefício esperado de uma solução é
          maior que o custo, o esforço e o risco envolvidos.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {["Necessidade", "Percepção do problema", "Busca por solução", "Avaliação", "Confiança", "Decisão"].map((etapa, index, arr) => (
            <div key={etapa} className="flex items-center gap-2">
              <span className="rounded-full border border-brand-border bg-brand-background px-3 py-1.5 text-xs font-semibold text-brand-text-muted">
                {etapa}
              </span>
              {index < arr.length - 1 ? <span className="text-brand-text-muted/40">→</span> : null}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm font-semibold text-brand-text">
          O objetivo não é pressionar a decisão. É facilitar uma decisão bem informada.
        </p>
      </div>

      {/* Indicação */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">Por que uma indicação é poderosa?</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Quando alguém apresenta uma empresa, profissional ou solução a outra pessoa, parte da
          credibilidade já existente na relação facilita o primeiro contato. Uma indicação começa
          com uma vantagem importante: <span className="font-semibold text-brand-text">confiança transferida</span>.
        </p>
        <div className="mt-6 flex flex-col items-center gap-2">
          {["Parceiro", "Confiança", "Potencial cliente", "Apresentação", "Oportunidade"].map((etapa, index, arr) => (
            <div key={etapa} className="flex flex-col items-center gap-2">
              <span className="rounded-full border border-brand-border bg-brand-background px-4 py-1.5 text-xs font-semibold text-brand-text-muted">
                {etapa}
              </span>
              {index < arr.length - 1 ? <span className="text-brand-text-muted/40">↓</span> : null}
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
          Uma indicação abre a porta. Ela não garante a venda — a solução ainda precisa fazer
          sentido para o cliente.
        </div>
      </div>

      {/* Qualificação */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Filter className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Nem todo mundo é seu cliente</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Quanto mais tempo é gasto tentando convencer alguém que não possui necessidade,
          capacidade ou interesse, menos tempo sobra para conversar com quem realmente pode
          comprar. Procure três sinais antes de investir tempo em uma oportunidade:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {qualificacao.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <h3 className="text-base font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm font-semibold text-brand-text">
          Uma boa prospecção procura compatibilidade, não quantidade a qualquer custo.
        </p>
      </div>

      {/* Prospecção */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Search className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Onde encontrar oportunidades?</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Prospecção é o processo de localizar pessoas ou empresas que potencialmente possuem um
          problema que uma determinada solução resolve.
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {fontesProspeccao.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm font-semibold text-brand-text">
          Um bom prospector desenvolve o hábito de observar negócios.
        </p>
      </div>

      {/* Aprenda a observar */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Eye className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Oportunidades aparecem em problemas visíveis</h2>
        </div>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {sinaisDeProblema.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-brand-text-muted">
          O vendedor treinado não olha apenas para empresas. Ele procura sinais de problemas que
          possam justificar uma conversa.
        </p>
      </div>

      {/* Primeira abordagem */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <MessageCircle className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">A primeira meta não é vender</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          A primeira meta é <span className="font-semibold text-brand-text">conseguir permissão para continuar a conversa</span>.
          Perguntas diminuem a resistência porque colocam o potencial cliente dentro da conversa.
        </p>
        <div className="mt-5 space-y-2">
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            <span className="font-semibold">Evite: </span>
            &ldquo;Tenho um sistema excelente e gostaria de apresentar para você.&rdquo;
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            <span className="font-semibold">Prefira perguntar: </span>
            &ldquo;Posso fazer uma pergunta? Como vocês controlam hoje essa parte da operação?&rdquo;
          </div>
        </div>
      </div>

      {/* Sequência de interesse */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Lightbulb className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Desperte interesse antes de explicar</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Quando o vendedor apresenta informações demais antes de entender o cliente, corre o risco
          de falar sobre coisas irrelevantes.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {["Pergunte", "Ouça", "Entenda", "Relacione", "Apresente"].map((etapa, index, arr) => (
            <div key={etapa} className="flex items-center gap-2">
              <span className="rounded-full bg-brand-dark px-3 py-1.5 text-xs font-semibold text-white">
                {etapa}
              </span>
              {index < arr.length - 1 ? <span className="text-brand-text-muted/40">→</span> : null}
            </div>
          ))}
        </div>
      </div>

      {/* Perguntas abertas */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <HelpCircle className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Perguntas fazem o cliente pensar</h2>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            <span className="font-semibold">Pergunta fechada: </span>
            &ldquo;Você está satisfeito com seu processo atual?&rdquo;
            <p className="mt-1 text-xs text-rose-900/70">Resposta provável: sim ou não.</p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            <span className="font-semibold">Pergunta aberta: </span>
            &ldquo;O que mais dá trabalho nesse processo hoje?&rdquo;
            <p className="mt-1 text-xs text-emerald-900/70">Isso gera informação.</p>
          </div>
        </div>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {perguntasAbertas.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
              <HelpCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-text-muted" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* SPIN */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Target className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Técnica SPIN, em versão simplificada</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {spin.map((item) => (
            <div key={item.letra} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-dark text-sm font-bold text-white">
                {item.letra}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-brand-text">{item.titulo}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{item.body}</p>
              <p className="mt-2 text-xs italic text-brand-text-muted">&ldquo;{item.exemplo}&rdquo;</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm font-semibold text-brand-text">
          Perguntas de implicação devem ajudar a compreender consequências reais, não criar medo
          artificial.
        </p>
      </div>

      {/* Escuta ativa */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Ear className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Quem fala menos pode descobrir mais</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Muitos vendedores estão tão preocupados em apresentar argumentos que deixam de ouvir
          informações que poderiam indicar exatamente o que o cliente valoriza.
        </p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {escutaPraticas.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-xl border border-brand-border bg-brand-background px-4 py-3 text-sm text-brand-text-muted">
          &ldquo;Então, pelo que entendi, o maior problema não é registrar a informação, mas
          conseguir consultá-la depois. É isso?&rdquo;
        </div>
      </div>

      {/* Característica x benefício */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Scale className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">O cliente compra o efeito, não a especificação</h2>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Característica</p>
            <p className="mt-1 text-sm text-brand-text">Backup automático.</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Benefício</p>
            <p className="mt-1 text-sm text-brand-text">Menor risco de perder informações importantes.</p>
          </div>
          <div className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Característica</p>
            <p className="mt-1 text-sm text-brand-text">Relatório em tempo real.</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Benefício</p>
            <p className="mt-1 text-sm text-brand-text">Tomar decisões sem esperar alguém preparar uma planilha.</p>
          </div>
        </div>
        <p className="mt-5 text-sm font-semibold text-brand-text">
          Sempre pergunte: &ldquo;E por que isso seria importante para este cliente?&rdquo;
        </p>
      </div>

      {/* Valor percebido */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Gauge className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Valor percebido</h2>
        </div>
        <div className="mt-5 rounded-2xl border border-brand-border bg-brand-background px-6 py-5 text-center">
          <p className="text-sm font-semibold text-brand-text">Benefícios percebidos</p>
          <div className="mx-auto my-2 h-px w-40 bg-brand-border" />
          <p className="text-sm font-semibold text-brand-text">Custo + Risco + Esforço</p>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Não é uma fórmula matemática literal. O cliente avalia mentalmente o que ganha, quanto
          custa, quanto trabalho dará, quais riscos existem e se confia no fornecedor. Por isso,
          vender também pode significar <span className="font-semibold text-brand-text">reduzir a percepção de risco e esforço</span>,
          não apenas aumentar benefícios.
        </p>
      </div>

      {/* Neurociência */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Brain className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Como o cérebro participa das decisões</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          A neurociência não oferece um &ldquo;botão de compra&rdquo; e não permite controlar a
          mente do consumidor. Ela ajuda a compreender alguns mecanismos gerais de atenção,
          memória, emoção e decisão.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {neurociencia.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <item.icon className="h-5 w-5 text-brand-text-muted" />
              <h3 className="mt-3 text-sm font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prova social */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Users className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Saber que outros já fizeram reduz incerteza</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Número de clientes, depoimentos, cases e experiências semelhantes ajudam o potencial
          cliente a se sentir mais seguro. Mas existe uma regra sem exceção:
        </p>
        <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-900">
          Nunca inventar cliente, depoimento, resultado ou case. Uma prova social falsa destrói
          justamente o ativo que deveria construir: confiança.
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-brand-border bg-brand-background px-4 py-3 text-sm text-brand-text-muted">
            <span className="font-semibold text-brand-text">Vago: </span>
            &ldquo;Isso melhora muito a empresa.&rdquo;
          </div>
          <div className="rounded-xl border border-brand-border bg-brand-background px-4 py-3 text-sm text-brand-text-muted">
            <span className="font-semibold text-brand-text">Específico: </span>
            &ldquo;Isso elimina a necessidade de digitar a mesma informação em dois lugares.&rdquo;
          </div>
        </div>
      </div>

      {/* Histórias */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <BookOpen className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Histórias tornam problemas concretos</h2>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {["Cliente", "Problema", "Mudança", "Resultado"].map((etapa, index, arr) => (
            <div key={etapa} className="flex items-center gap-2">
              <span className="rounded-full border border-brand-border bg-brand-background px-3 py-1.5 text-xs font-semibold text-brand-text-muted">
                {etapa}
              </span>
              {index < arr.length - 1 ? <span className="text-brand-text-muted/40">→</span> : null}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-brand-text-muted">
          Uma boa história comercial deve ser verdadeira, curta, relevante, fácil de entender e
          relacionada ao problema discutido. Evite histórias longas e exageradas.
        </p>
      </div>

      {/* Princípios de persuasão ética */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Princípios que constroem relacionamento</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {persuasao.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <h3 className="text-sm font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Objeções */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <AlertCircle className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Objeção não significa necessariamente rejeição</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Uma objeção pode representar dúvida, falta de informação, percepção de risco, falta de
          urgência ou necessidade de consultar outra pessoa.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {objecaoPassos.map((etapa, index, arr) => (
            <div key={etapa} className="flex items-center gap-2">
              <span className="rounded-full border border-brand-border bg-brand-background px-3 py-1.5 text-xs font-semibold text-brand-text-muted">
                {etapa}
              </span>
              {index < arr.length - 1 ? <span className="text-brand-text-muted/40">→</span> : null}
            </div>
          ))}
        </div>
        <div className="mt-5 space-y-2">
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            <span className="font-semibold">Cliente: </span>&ldquo;Está caro.&rdquo;
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            <span className="font-semibold">Em vez de oferecer desconto, pergunte: </span>
            &ldquo;Quando você diz caro, está comparando com outra solução ou com o orçamento
            disponível hoje?&rdquo;
          </div>
        </div>
      </div>

      {/* Preço x valor */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Wallet className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Preço sem contexto vira comparação</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Antes de discutir preço, o cliente precisa compreender o problema, o impacto, a solução,
          o benefício, o risco e o valor envolvidos. Não esconda o preço quando ele deve ser
          apresentado, mas evite transformar toda a conversa em preço antes que exista contexto.
        </p>
        <p className="mt-4 text-sm font-semibold text-brand-text">
          Preço é o que se paga. Valor é o que o cliente acredita receber em troca.
        </p>
      </div>

      {/* Urgência */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Clock className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Urgência sem pressão</h2>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            <span className="font-semibold">Evite: </span>
            &ldquo;só hoje&rdquo; ou &ldquo;últimas vagas&rdquo; quando não é verdade, ameaças e
            medo artificial.
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            <span className="font-semibold">Urgência legítima: </span>
            prazo real, condição real, problema que já gera impacto, oportunidade concreta.
          </div>
        </div>
      </div>

      {/* Follow-up */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Repeat className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Muitas vendas não acontecem na primeira conversa</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Follow-up não é insistência automática. É continuidade com propósito: enviar informação
          prometida, confirmar se conseguiu avaliar, esclarecer uma dúvida ou verificar se o
          momento mudou.
        </p>
        <div className="mt-5 space-y-2">
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            <span className="font-semibold">Evite: </span>&ldquo;E aí, decidiu?&rdquo;
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            <span className="font-semibold">Prefira: </span>
            &ldquo;Na nossa conversa você comentou sobre o problema X. Encontrei uma informação que
            pode ajudar a avaliar essa questão.&rdquo;
          </div>
        </div>
      </div>

      {/* Quando parar */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Ban className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Reconheça quando não existe oportunidade</h2>
        </div>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            "Cliente pediu explicitamente para não ser contatado",
            "Não existe necessidade",
            "A solução não é adequada",
            "Momento claramente inadequado",
            "Contato repetidamente recusado",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-semibold text-brand-text">
          Respeitar um &ldquo;não&rdquo; protege a reputação e mantém portas abertas.
        </p>
      </div>

      {/* Venda consultiva */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Stethoscope className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Seja um diagnosticador, não um apresentador</h2>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-brand-border bg-brand-background px-4 py-3 text-sm text-brand-text-muted">
            <span className="font-semibold text-brand-text">Vendedor tradicional: </span>
            &ldquo;Deixe-me mostrar tudo o que tenho.&rdquo;
          </div>
          <div className="rounded-xl border border-brand-border bg-brand-background px-4 py-3 text-sm text-brand-text-muted">
            <span className="font-semibold text-brand-text">Vendedor consultivo: </span>
            &ldquo;Deixe-me entender o que você precisa.&rdquo;
          </div>
        </div>
        <p className="mt-4 text-sm text-brand-text-muted">
          A segunda abordagem permite selecionar apenas os argumentos relevantes para aquele
          cliente.
        </p>
      </div>

      {/* Habilidades de conversa */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <MessageSquare className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Preparação, rapport e silêncio</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
            <h3 className="text-sm font-semibold text-brand-text">Preparação</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">
              Descubra o segmento, conheça minimamente o negócio e prepare três perguntas. Nunca
              chegue sabendo a resposta antes de ouvir o cliente.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
            <h3 className="text-sm font-semibold text-brand-text">Rapport</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">
              Construa uma interação confortável e respeitosa: chame a pessoa pelo nome, demonstre
              interesse real e respeite o ritmo da conversa.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
            <h3 className="text-sm font-semibold text-brand-text">Silêncio</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">
              Depois de uma pergunta importante, aguarde. Não responda à própria pergunta por
              desconforto com a pausa.
            </p>
          </div>
          <div className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
            <h3 className="text-sm font-semibold text-brand-text">Resumo</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">
              Antes de apresentar uma solução: &ldquo;Pelo que entendi, hoje vocês enfrentam X,
              isso provoca Y e o objetivo seria Z. Está correto?&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Estrutura da conversa */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <ListOrdered className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Estrutura simples de uma boa conversa comercial</h2>
        </div>
        <ol className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {estruturaConversa.map((etapa, index) => (
            <li
              key={etapa}
              className="rounded-xl border border-brand-border bg-brand-background/60 px-3 py-2 text-xs font-semibold text-brand-text-muted"
            >
              {index + 1}. {etapa}
            </li>
          ))}
        </ol>
      </div>

      {/* Erros comuns */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <XCircle className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Os erros mais comuns</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {errosComuns.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <h3 className="text-sm font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ética */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Persuasão não é manipulação</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="text-sm font-semibold text-emerald-900">Persuasão ética</h3>
            <ul className="mt-3 space-y-1.5">
              {persuasaoEtica.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-emerald-900">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <h3 className="text-sm font-semibold text-rose-900">Manipulação</h3>
            <ul className="mt-3 space-y-1.5">
              {manipulacao.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-rose-900">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-5 text-sm font-semibold text-brand-text">
          Uma venda ruim pode gerar receita hoje e destruir confiança amanhã.
        </p>
      </div>

      {/* Checklist */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <ClipboardCheck className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Checklist antes de indicar uma oportunidade</h2>
        </div>
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {checklistIndicacao.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Aplicando ao Programa de Parceiros */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Workflow className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Aplicando ao Programa de Parceiros Catedral</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          O parceiro Catedral não precisa fechar a venda. Seu papel principal é identificar uma
          empresa que possa ter uma necessidade, iniciar a conversa e gerar uma oportunidade
          qualificada.
        </p>
        <div className="mt-6 flex flex-col items-center gap-2">
          {fluxoCatedral.map((etapa, index, arr) => (
            <div key={etapa} className="flex flex-col items-center gap-2">
              <span className="rounded-full border border-brand-border bg-brand-background px-4 py-1.5 text-xs font-semibold text-brand-text-muted">
                {etapa}
              </span>
              {index < arr.length - 1 ? <span className="text-brand-text-muted/40">↓</span> : null}
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-brand-primary/30 bg-brand-primary/10 p-5 text-center">
          <p className="text-base font-semibold text-brand-text">
            Você indica. A Catedral vende. Você acompanha. Você ganha.
          </p>
        </div>
      </div>

      {/* Demonstração comercial */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Presentation className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">A demonstração comercial é o próximo passo</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Depois que você registra a indicação, a equipe da Catedral agenda e conduz uma
          demonstração comercial com o potencial cliente — mostrando, na prática, como o Sistema
          Catedral resolve a necessidade que você identificou na conversa.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
            <div className="flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-brand-text-muted" />
              <h3 className="text-sm font-semibold text-brand-text">O que você faz</h3>
            </div>
            <ul className="mt-3 space-y-1.5">
              {seuPapelDemonstracao.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
            <div className="flex items-center gap-2">
              <Presentation className="h-4 w-4 text-brand-text-muted" />
              <h3 className="text-sm font-semibold text-brand-text">O que é papel da Catedral</h3>
            </div>
            <ul className="mt-3 space-y-1.5">
              {papelCatedralDemonstracao.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
          Você não precisa conduzir nem participar da demonstração técnica. Seu papel é garantir
          que ela aconteça com um cliente bem preparado e interessado.
        </div>
      </div>

      {/* CTA final */}
      <div className="rounded-3xl border border-brand-border bg-brand-dark p-6 text-center shadow-sm sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Comece observando</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
          Pense nas empresas que você conhece. Em vez de perguntar &ldquo;para quem posso
          vender?&rdquo;, experimente perguntar: &ldquo;qual dessas empresas pode estar enfrentando
          um problema que vale a pena investigar?&rdquo;
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`${basePath}/indicacoes/indicar-cliente`}
            className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-brand-dark shadow-sm transition hover:bg-brand-primary-hover"
          >
            Indicar um cliente
          </Link>
          <Link
            href={`${basePath}/treinamentos/conhecendo-o-sistema-catedral`}
            className="inline-flex items-center justify-center rounded-xl border border-brand-primary/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark/90"
          >
            Conhecendo o Sistema Catedral
          </Link>
          <Link
            href={`${basePath}/material-de-vendas/argumentos-de-venda`}
            className="inline-flex items-center justify-center rounded-xl border border-brand-primary/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark/90"
          >
            Ver Argumentos de Venda
          </Link>
        </div>
      </div>
    </div>
  );
}
