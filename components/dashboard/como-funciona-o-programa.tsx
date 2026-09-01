import Link from "next/link";
import {
  Building2,
  CalendarClock,
  CircleDollarSign,
  ClipboardList,
  FolderOpen,
  MessageCircle,
  Search,
  UserPlus,
} from "lucide-react";

const visaoGeral = [
  {
    icon: Search,
    title: "1. Você identifica",
    body: "Encontre uma empresa que possa se beneficiar do Sistema Catedral.",
  },
  {
    icon: UserPlus,
    title: "2. Você indica",
    body: "Registre os dados do potencial cliente no Portal de Parceiros.",
  },
  {
    icon: Building2,
    title: "3. A Catedral vende",
    body: "Nossa equipe entra em contato, apresenta o sistema e conduz a negociação.",
  },
  {
    icon: CircleDollarSign,
    title: "4. Você recebe",
    body: "Quando o cliente começa a pagar mensalidade, sua comissão começa a ser gerada.",
  },
];

const segmentos = [
  "Bares e restaurantes",
  "Pizzarias e delivery",
  "Mercados",
  "Açougues",
  "Lojas",
  "Pet shops",
  "Distribuidoras",
  "Oficinas",
  "Prestadores de serviços",
];

const passos = [
  {
    title: "Passo 1 — Identifique uma oportunidade",
    body: (
      <>
        <p>
          Pense em empresas, empresários, amigos, clientes, fornecedores ou contatos
          profissionais que possam precisar de um sistema de gestão comercial.
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-3">
          {segmentos.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-brand-text-muted">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Passo 2 — Faça uma abordagem simples",
    body: (
      <>
        <p>
          Converse de forma natural. O objetivo não é fazer uma apresentação técnica
          completa, mas descobrir se existe interesse ou necessidade.
        </p>
        <div className="mt-3 rounded-xl border border-brand-border bg-brand-background px-4 py-3 text-sm italic text-brand-text-muted">
          &quot;Conheço uma empresa de automação comercial chamada Catedral. Eles trabalham
          com vendas, estoque, financeiro e gestão. Se você quiser, posso pedir para um
          consultor entrar em contato e apresentar o sistema.&quot;
        </div>
      </>
    ),
  },
  {
    title: "Passo 3 — Registre a indicação",
    body: (
      <>
        <p>
          Quando houver abertura para contato, acesse{" "}
          <strong className="font-semibold text-brand-text">Indicar Cliente</strong> no
          Portal e registre a empresa.
        </p>
        <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <span className="font-semibold">Campos obrigatórios: </span>
          Nome da Empresa, CNPJ e Telefone.
        </div>
      </>
    ),
  },
  {
    title: "Passo 4 — A Catedral entra em contato",
    body: (
      <p>
        Depois do registro, a equipe da Catedral entra em contato com o potencial
        cliente, entende sua necessidade e apresenta o Sistema Catedral — incluindo
        demonstração, esclarecimento de dúvidas, negociação comercial e contratação.
      </p>
    ),
  },
  {
    title: "Passo 5 — Você acompanha",
    body: (
      <p>
        Acompanhe suas oportunidades pela área{" "}
        <strong className="font-semibold text-brand-text">Minhas Indicações</strong> do
        Portal.
      </p>
    ),
  },
  {
    title: "Passo 6 — O cliente contrata",
    body: (
      <p>
        Quando a negociação é concluída e o cliente passa a utilizar o Sistema
        Catedral, a indicação entra na etapa de cliente convertido.
      </p>
    ),
  },
  {
    title: "Passo 7 — O cliente paga a mensalidade",
    body: (
      <p>
        A comissão do parceiro é gerada a partir das{" "}
        <strong className="font-semibold text-brand-text">mensalidades efetivamente
        pagas</strong>{" "}
        pelo cliente indicado.
      </p>
    ),
  },
  {
    title: "Passo 8 — Você recebe sua comissão",
    body: (
      <p>
        Você recebe{" "}
        <strong className="font-semibold text-brand-text">10% do valor de cada
        mensalidade paga</strong>{" "}
        pelo cliente indicado, enquanto esse cliente continuar ativo e pagando o
        Sistema Catedral.
      </p>
    ),
  },
];

const responsabilidadesParceiro = [
  "Identificar oportunidades",
  "Conversar com potenciais clientes",
  "Obter abertura para contato",
  "Registrar corretamente a indicação",
  "Fornecer informações verdadeiras",
  "Acompanhar suas indicações no Portal",
  "Utilizar materiais oficiais da Catedral",
  "Preservar a imagem e a marca Catedral",
  "Encaminhar dúvidas técnicas para a equipe Catedral quando necessário",
];

const responsabilidadesCatedral = [
  "Entrar em contato com o cliente indicado",
  "Conhecer a necessidade da empresa",
  "Apresentar o Sistema Catedral",
  "Demonstrar funcionalidades",
  "Responder dúvidas técnicas",
  "Apresentar condições comerciais",
  "Negociar",
  "Conduzir a contratação",
  "Realizar o atendimento comercial relacionado à venda",
];

const naoPrecisaFazer = [
  "Fazer demonstração técnica",
  "Decorar todas as funcionalidades",
  "Responder perguntas que não sabe",
  "Negociar preços",
  "Emitir contrato",
  "Realizar implantação",
  "Prestar suporte técnico",
];

const boasPraticas = [
  {
    title: "Procure empresas com necessidade real",
    body: "Priorize empresas com movimento de vendas, dificuldade de gestão, insatisfação com o sistema atual ou necessidade de organizar processos comerciais e financeiros.",
  },
  {
    title: "Não force a venda",
    body: "Uma boa indicação começa com uma conversa natural. O objetivo é identificar interesse e abrir espaço para a equipe Catedral fazer a apresentação.",
  },
  {
    title: "Não prometa o que você não sabe",
    body: "Evite garantir funcionalidades, preços, condições ou prazos sem confirmação da Catedral.",
  },
  {
    title: "Use materiais oficiais",
    body: "Utilize as apresentações, imagens, vídeos e argumentos de venda disponíveis no Portal.",
  },
];

const perguntasRapidas = [
  {
    pergunta: "Preciso vender o sistema?",
    resposta: "Não. Você identifica a oportunidade e a Catedral conduz a venda.",
  },
  {
    pergunta: "Quanto recebo?",
    resposta: "10% de cada mensalidade paga pelo cliente indicado.",
  },
  {
    pergunta: "É uma comissão única?",
    resposta: "Não. A comissão é recorrente enquanto o cliente permanecer ativo e pagando.",
  },
  {
    pergunta: "Por quanto tempo minha indicação fica protegida?",
    resposta: "90 dias.",
  },
  {
    pergunta: "Onde acompanho minhas indicações?",
    resposta: "Na área Minhas Indicações do Portal.",
  },
  {
    pergunta: "Onde acompanho minhas comissões?",
    resposta: "Na área Comissões.",
  },
];

export function ComoFuncionaOPrograma({ basePath }: { basePath: string }) {
  const acompanharCards = [
    {
      icon: UserPlus,
      title: "Indicar Cliente",
      body: "Cadastre uma nova oportunidade.",
      cta: "Fazer uma indicação",
      href: `${basePath}/indicacoes/nova`,
    },
    {
      icon: ClipboardList,
      title: "Minhas Indicações",
      body: "Acompanhe as empresas que você indicou.",
      cta: "Ver indicações",
      href: `${basePath}/indicacoes/minhas-indicacoes`,
    },
    {
      icon: CircleDollarSign,
      title: "Comissões",
      body: "Acompanhe os valores gerados pelas suas indicações.",
      cta: "Ver comissões",
      href: `${basePath}/comissoes/minhas-comissoes`,
    },
    {
      icon: FolderOpen,
      title: "Material de Vendas",
      body: "Use conteúdos oficiais para apoiar sua prospecção.",
      cta: "Acessar materiais",
      href: `${basePath}/material-de-vendas/videos`,
    },
    {
      icon: MessageCircle,
      title: "Perguntas Frequentes",
      body: "Encontre respostas rápidas sobre o programa.",
      cta: "Ver perguntas",
      href: `${basePath}/central-do-parceiro/perguntas-frequentes`,
    },
    {
      icon: MessageCircle,
      title: "Falar com a Catedral",
      body: "Entre em contato com o responsável pelo Programa de Parceiros.",
      cta: "Falar com a Catedral",
      href: `${basePath}/central-do-parceiro/falar-com-a-catedral`,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text-muted">
          Programa de Parceiros Catedral
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-text">
          Como Funciona o Programa
        </h1>
        <p className="mt-2 max-w-2xl text-base font-medium text-brand-text-muted">
          Entenda como transformar boas indicações em uma fonte recorrente de comissões.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          O Programa de Parceiros Catedral foi criado para pessoas que conhecem empresas,
          empreendedores e gestores que podem se beneficiar do Sistema Catedral. Você
          identifica a oportunidade e registra a indicação. A equipe da Catedral cuida da
          apresentação, negociação e venda. Quando o cliente indicado começa a pagar a
          mensalidade, você passa a receber comissão.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`${basePath}/indicacoes/nova`}
            className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-brand-dark shadow-sm transition hover:bg-brand-primary-hover"
          >
            Indicar um cliente
          </Link>
          <Link
            href={`${basePath}/indicacoes/minhas-indicacoes`}
            className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-white px-5 py-3 text-sm font-semibold text-brand-text-muted shadow-sm transition hover:bg-brand-background"
          >
            Ver minhas indicações
          </Link>
        </div>
      </div>

      {/* Mensagem de destaque */}
      <div className="rounded-3xl border border-brand-primary/30 bg-brand-primary/10 p-6 text-center shadow-sm sm:p-8">
        <p className="text-xl font-bold text-brand-text sm:text-2xl">
          Você indica. A Catedral vende. Você acompanha. Você ganha.
        </p>
      </div>

      {/* Visão geral */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">Um programa simples de indicação</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Você não precisa ser vendedor técnico do Sistema Catedral. Seu papel é
          identificar empresas que possam precisar de uma solução para vendas, estoque,
          financeiro, emissão fiscal e gestão. Depois de registrar a indicação no Portal,
          a equipe comercial da Catedral assume o atendimento e conduz a negociação.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visaoGeral.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-dark text-white">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Passo a passo */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">Do primeiro contato à comissão</h2>
        <div className="mt-6 space-y-4">
          {passos.map((passo) => (
            <div key={passo.title} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <h3 className="text-base font-semibold text-brand-text">{passo.title}</h3>
              <div className="mt-2 text-sm leading-relaxed text-brand-text-muted">{passo.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Regra dos 90 dias */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <CalendarClock className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Sua indicação fica protegida por 90 dias</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          A partir do registro da indicação, o CNPJ fica vinculado ao parceiro pelo prazo
          de 90 dias. Durante esse período, outra indicação para o mesmo CNPJ não
          prevalece. Caso a contratação não seja concluída dentro do prazo, o CNPJ pode
          ficar disponível para uma nova indicação.
        </p>
        <div className="mt-5 flex flex-col items-center gap-2 rounded-2xl border border-brand-border bg-brand-background p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Dia da indicação</p>
          </div>
          <div className="h-2 w-full max-w-xs rounded-full bg-gradient-to-r from-brand-dark to-brand-primary sm:mx-4" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Fim da proteção (90 dias)</p>
          </div>
        </div>
      </div>

      {/* Comissões */}
      <div className="rounded-3xl border border-brand-primary/30 bg-brand-primary/10 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-brand-dark">
            <CircleDollarSign className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Comissão simples e recorrente</h2>
        </div>

        <div className="mt-5 inline-flex flex-col rounded-2xl border border-brand-primary/30 bg-white px-6 py-4">
          <span className="text-3xl font-bold text-brand-text">10%</span>
          <span className="text-sm text-brand-text-muted">de cada mensalidade paga</span>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Quando o cliente indicado começa a pagar as mensalidades do Sistema Catedral, o
          parceiro passa a ter direito a 10% do valor de cada mensalidade efetivamente
          recebida. Essa comissão não acontece apenas uma vez — ela é recorrente enquanto
          o cliente permanecer ativo e pagando mensalidade.
        </p>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          As comissões são pagas no mês subsequente ao pagamento realizado pelo cliente
          indicado. Quando houver comissões de vários clientes, os valores podem ser
          somados para o pagamento.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4 rounded-2xl border border-brand-primary/30 bg-white p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Mensalidade paga</p>
            <p className="text-2xl font-bold text-brand-text">R$ 300,00</p>
          </div>
          <div className="text-2xl text-brand-text-muted/40">→</div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Sua comissão</p>
            <p className="text-2xl font-bold text-brand-text">R$ 30,00</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-brand-text-muted">
          Exemplo apenas ilustrativo. O valor real depende da mensalidade efetivamente
          paga pelo cliente.
        </p>
      </div>

      {/* Responsabilidades */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-brand-text">O seu papel como parceiro</h2>
          <ul className="mt-4 space-y-2">
            {responsabilidadesParceiro.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-brand-text">O que a Catedral faz</h2>
          <ul className="mt-4 space-y-2">
            {responsabilidadesCatedral.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* O que não precisa fazer */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-brand-text">Você não precisa ser especialista no sistema</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          O parceiro não precisa dominar todos os detalhes técnicos nem conduzir sozinho
          uma negociação comercial.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {naoPrecisaFazer.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-brand-text-muted">
          Quando surgir uma dúvida que você não domina, informe ao potencial cliente que
          um consultor da Catedral poderá explicar corretamente.
        </p>
      </div>

      {/* Onde acompanhar no Portal */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">Use o Portal em cada etapa</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {acompanharCards.map((card) => (
            <div key={card.title} className="flex flex-col rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-dark text-white">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-brand-text">{card.title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand-text-muted">{card.body}</p>
              <Link
                href={card.href}
                className="mt-4 inline-flex items-center justify-center rounded-xl border border-brand-border bg-white px-4 py-2 text-sm font-semibold text-brand-text-muted transition hover:bg-brand-background"
              >
                {card.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Boas práticas */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">Como aumentar suas chances de uma boa indicação</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {boasPraticas.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <h3 className="text-sm font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Perguntas rápidas */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">Perguntas rápidas</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {perguntasRapidas.map((item) => (
            <div key={item.pergunta} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <h3 className="text-sm font-semibold text-brand-text">{item.pergunta}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{item.resposta}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-brand-text-muted">
          Ainda tem dúvidas? Consulte{" "}
          <Link href={`${basePath}/central-do-parceiro/perguntas-frequentes`} className="font-semibold text-brand-text underline underline-offset-2">
            Perguntas Frequentes
          </Link>{" "}
          ou{" "}
          <Link href={`${basePath}/central-do-parceiro/falar-com-a-catedral`} className="font-semibold text-brand-text underline underline-offset-2">
            fale com a Catedral
          </Link>
          .
        </p>
      </div>

      {/* CTA final */}
      <div className="rounded-3xl border border-brand-border bg-brand-dark p-6 text-center shadow-sm sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Conhece uma empresa que pode precisar do Sistema Catedral?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
          Registre a oportunidade no Portal e deixe nossa equipe cuidar da apresentação e
          da negociação.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`${basePath}/indicacoes/nova`}
            className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-brand-dark shadow-sm transition hover:bg-brand-primary-hover"
          >
            Indicar um cliente
          </Link>
          <Link
            href={`${basePath}/material-de-vendas/videos`}
            className="inline-flex items-center justify-center rounded-xl border border-brand-primary/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark/90"
          >
            Ver Material de Vendas
          </Link>
        </div>
        <p className="mt-6 text-lg font-semibold text-white">
          Você indica. A Catedral vende. Você acompanha. Você ganha.
        </p>
      </div>
    </div>
  );
}
