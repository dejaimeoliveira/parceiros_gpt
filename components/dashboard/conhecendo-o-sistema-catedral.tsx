import Link from "next/link";
import {
  Beef,
  Handshake,
  HelpCircle,
  LayoutDashboard,
  MonitorSmartphone,
  PawPrint,
  Pizza,
  ShieldOff,
  Shirt,
  UtensilsCrossed,
  Wine,
  Wrench,
} from "lucide-react";

const pilares = [
  {
    title: "Vendas",
    resumo: "Agiliza o atendimento e conecta a venda às demais áreas da operação.",
    itens: ["PDV e registro de vendas", "Emissão fiscal", "Relatórios", "Integração com equipamentos e periféricos quando aplicável"],
  },
  {
    title: "Estoque",
    resumo: "Ajuda a empresa a saber o que entra, o que sai e o que existe em estoque.",
    itens: ["Entradas e saídas", "Inventário", "Acompanhamento de saldos", "Apoio à redução de perdas e rupturas"],
  },
  {
    title: "Financeiro",
    resumo: "Centraliza informações financeiras para melhorar o acompanhamento do negócio.",
    itens: ["Caixa", "Contas a pagar e receber", "Fluxo financeiro", "Relatórios gerenciais"],
  },
];

const beneficios = [
  { title: "Automatizar processos", body: "Reduzir tarefas manuais e repetitivas." },
  { title: "Melhorar o controle", body: "Acompanhar vendas, produtos, estoque e financeiro." },
  { title: "Reduzir erros", body: "Diminuir falhas causadas por controles paralelos e lançamentos manuais." },
  { title: "Apoiar decisões", body: "Usar relatórios e dados da operação." },
  { title: "Ganhar agilidade", body: "Tornar atendimento e rotinas administrativas mais rápidas." },
];

const segmentos = [
  {
    icon: UtensilsCrossed,
    nome: "Bares e Restaurantes",
    resumo: "Pedidos por mesa, comandas, frente de caixa e operação de atendimento integrados.",
    destaques: ["Mesas e comandas", "Frente de caixa", "Encaminhamento de pedidos à produção", "Balança", "Delivery", "Estoque", "Financeiro", "Comissionamento"],
    perguntas: [
      "Como vocês registram os pedidos?",
      "Trabalham com mesa ou comanda?",
      "Os pedidos chegam de forma organizada à produção?",
      "Como controlam estoque?",
      "O que acontece quando a internet cai?",
    ],
  },
  {
    icon: Beef,
    nome: "Açougues e Mercados",
    resumo: "Integração com balanças, PDV rápido e controle de produtos e estoque.",
    destaques: ["Balanças", "PDV", "Estoque", "Cadastro de produtos", "Promoções", "Entrada de produtos por nota", "Financeiro"],
    perguntas: [
      "A balança é integrada?",
      "Como entram as compras no estoque?",
      "Trabalham com promoções por quantidade?",
      "Como fazem inventário?",
      "Há dificuldade em acompanhar perdas?",
    ],
  },
  {
    icon: Pizza,
    nome: "Pizzarias e Deliveries",
    resumo: "Automação voltada para operações com grande concentração de pedidos e necessidade de organização entre atendimento, produção e entrega.",
    destaques: ["Pedidos", "Produção", "Delivery", "Balcão", "Estoque", "Financeiro", "Integrações disponíveis"],
    perguntas: [
      "Como os pedidos chegam à produção?",
      "Há dificuldade nos horários de pico?",
      "Como controlam delivery e balcão?",
      "Utilizam marketplace?",
      "Como controlam insumos?",
    ],
  },
  {
    icon: Shirt,
    nome: "Lojas de Roupas e Calçados",
    resumo: "Controle de estoque, clientes e vendas no varejo.",
    destaques: ["Vendas", "Estoque", "Clientes", "Produtos", "Financeiro", "Relatórios"],
    perguntas: [
      "Como controlam o estoque?",
      "Sabem quais produtos têm maior e menor saída?",
      "Mantêm cadastro de clientes?",
      "Como acompanham vendas?",
      "O financeiro está integrado?",
    ],
  },
  {
    icon: PawPrint,
    nome: "Pet Shops e Agropecuárias",
    resumo: "Gestão de produtos, serviços, clientes e estoque.",
    destaques: ["Produtos e serviços", "Estoque", "Validade por lote", "Cadastro de clientes", "Cadastro/histórico de animais", "Financeiro"],
    perguntas: [
      "Prestam serviços além de vender produtos?",
      "Como controlam validade?",
      "Existe cadastro dos animais e responsáveis?",
      "Como acompanham histórico de serviços?",
      "Como controlam estoque?",
    ],
  },
  {
    icon: Wrench,
    nome: "Oficinas e Serviços",
    resumo: "Orçamentos, acompanhamento dos serviços e financeiro centralizado.",
    destaques: ["Orçamentos", "Etapas/fluxo de trabalho", "Histórico de serviços", "Clientes", "Financeiro"],
    perguntas: [
      "Como fazem os orçamentos?",
      "Conseguem reaproveitar orçamento aprovado?",
      "Como acompanham serviços em andamento?",
      "Existe histórico por cliente?",
      "Como controlam recebimentos?",
    ],
  },
  {
    icon: Wine,
    nome: "Distribuidoras de Bebidas",
    resumo: "Controle de estoque, vendas, pedidos e entregas.",
    destaques: ["Estoque", "Vendas", "Pedidos", "Entregas", "Promoções", "Financeiro", "Atendimento rápido"],
    perguntas: [
      "Como controlam entrada e saída?",
      "Como registram pedidos?",
      "Existe controle das entregas?",
      "Como acompanham promoções e preços?",
      "Como conciliam vendas e financeiro?",
    ],
  },
];

const emComum = [
  { title: "Vender", body: "Registrar operações com agilidade." },
  { title: "Controlar", body: "Acompanhar produtos e estoque." },
  { title: "Administrar", body: "Organizar caixa e financeiro." },
  { title: "Decidir", body: "Utilizar informações e relatórios." },
];

const recursos = [
  { title: "App Dashboard Web", body: "Painel online para acompanhamento e gestão." },
  { title: "Autoatendimento", body: "Totens e fluxo de autoatendimento para agilizar vendas e reduzir filas, quando adequados à operação." },
  { title: "Capital Food — Cardápio Digital", body: "Solução de cardápio digital para operações de alimentação e delivery." },
];

const argumentos = [
  { title: "Sistema integrado", body: "Vendas, estoque e financeiro trabalhando juntos." },
  { title: "Funciona sem internet", body: "A operação pode continuar em falhas de conexão." },
  { title: "Vários segmentos", body: "Abordagem adaptada ao tipo de negócio." },
  { title: "Suporte humano", body: "Atendimento especializado." },
  { title: "Experiência de mercado", body: "Mais de 17 anos de experiência, segundo o site oficial." },
  { title: "Base ativa", body: "Mais de 2.000 clientes ativos, segundo o site oficial." },
];

const naoPrometer = [
  "Preço",
  "Desconto",
  "Prazo de implantação",
  "Integração específica",
  "Compatibilidade de equipamento",
  "Funcionalidade não verificada",
  "Condição comercial",
  "Recurso incluído em determinado plano",
];

const fluxoApresentacao = [
  "Entenda o negócio",
  "Descubra a dificuldade",
  "Relacione a necessidade ao Sistema Catedral",
  "Gere interesse",
  "Registre a indicação",
  "A Catedral faz a demonstração",
];

export function ConhecendoOSistemaCatedral({ basePath }: { basePath: string }) {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Programa de Parceiros Catedral
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          Conhecendo o Sistema Catedral
        </h1>
        <p className="mt-2 max-w-2xl text-base font-medium text-slate-700">
          Entenda o que é o sistema, como ele ajuda na gestão de uma empresa e quais segmentos podem
          utilizá-lo.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
          O Sistema Catedral é uma solução de automação comercial que integra vendas, estoque e
          financeiro. Ele ajuda empresas a organizar a operação, reduzir tarefas manuais, controlar
          melhor produtos e movimentações e obter informações para tomar decisões com mais
          segurança.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Sistema Catedral</p>
          <p className="mt-2 text-xl font-bold sm:text-2xl">Vendas + Estoque + Financeiro</p>
          <p className="mt-1 text-sm text-slate-300">Automação comercial para organizar e controlar a operação.</p>
        </div>
      </div>

      {/* O que é */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">O que é o Sistema Catedral?</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Um software de automação comercial e gestão para operações reais de comércio e serviços.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {pilares.map((pilar) => (
            <div key={pilar.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <h3 className="text-base font-semibold text-slate-900">{pilar.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{pilar.resumo}</p>
              <ul className="mt-3 space-y-1.5">
                {pilar.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Para que serve */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Para que serve?</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Quando vendas, estoque e financeiro trabalham de forma integrada, o empresário reduz
          retrabalho e passa a ter uma visão mais clara do que está acontecendo no negócio.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {beneficios.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Offline */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
            <ShieldOff className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">A operação não precisa parar quando a internet cai</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
          Uma característica importante do Sistema Catedral é continuar operando mesmo quando há
          falha de conexão. Isso é especialmente relevante para empresas que não podem interromper o
          caixa ou o atendimento.
        </p>
        <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Offline</p>
          <p className="mt-1 text-base font-semibold text-slate-900">A internet caiu? A operação pode continuar funcionando.</p>
        </div>
      </div>

      {/* Suporte humano */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Handshake className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Tecnologia com suporte humano</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
          Como o sistema participa da operação diária da empresa, a Catedral mantém suporte humano
          especializado para apoiar seus clientes.
        </p>
      </div>

      {/* Segmentos - intro */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Cada segmento trabalha de um jeito</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Vendas, estoque e financeiro são necessidades comuns a muitas empresas, mas cada segmento
          possui uma rotina própria. Um restaurante não trabalha como uma oficina; uma loja de
          roupas não possui as mesmas necessidades de um açougue. Por isso, o parceiro deve primeiro
          entender como o potencial cliente trabalha.
        </p>
        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
          Não apresente o Sistema Catedral da mesma maneira para todos os clientes.
        </div>
      </div>

      {/* Segmentos - grid */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Segmentos atendidos</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segmentos.map((segmento) => (
            <div
              key={segmento.nome}
              className="flex flex-col justify-end rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-5 text-white shadow-sm"
            >
              <segmento.icon className="h-7 w-7" />
              <h3 className="mt-3 text-sm font-semibold">{segmento.nome}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-200">{segmento.resumo}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {segmentos.map((segmento) => (
            <div key={segmento.nome} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <segmento.icon className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{segmento.nome}</h3>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Destaques</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {segmento.destaques.map((item) => (
                      <li key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Perguntas para prospecção</p>
                  <ul className="mt-2 space-y-1.5">
                    {segmento.perguntas.map((pergunta) => (
                      <li key={pergunta} className="flex items-start gap-2 text-sm text-slate-700">
                        <HelpCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                        {pergunta}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Em comum */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Negócios diferentes, necessidades em comum</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {emComum.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm font-semibold text-slate-900">
          O segmento muda, mas a necessidade de controle permanece.
        </p>
      </div>

      {/* Recursos complementares */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
            <MonitorSmartphone className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Recursos complementares</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {recursos.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Consulte disponibilidade e condições com a equipe Catedral.
        </p>
      </div>

      {/* Como apresentar */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Não comece pelas funcionalidades</h2>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {fluxoApresentacao.map((etapa, index) => (
            <div key={etapa} className="flex items-center gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                {index + 1}. {etapa}
              </span>
              {index < fluxoApresentacao.length - 1 ? (
                <span className="text-slate-300">→</span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-2">
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            <span className="font-semibold">Evite: </span>
            &ldquo;O sistema tem controle de estoque.&rdquo;
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            <span className="font-semibold">Prefira perguntar: </span>
            &ldquo;Hoje vocês conseguem saber com facilidade o que está faltando ou sobrando no
            estoque?&rdquo;
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="font-semibold">Depois de identificar a necessidade: </span>
            &ldquo;O Sistema Catedral possui controle integrado de estoque. Posso pedir para um
            consultor mostrar como funciona na prática.&rdquo;
          </div>
        </div>
      </div>

      {/* Argumentos */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Argumentos que o parceiro deve lembrar</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {argumentos.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* O que não prometer */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-slate-900">O que o parceiro não deve prometer</h2>
        <p className="mt-2 text-sm text-slate-600">Sem confirmação da equipe Catedral, evite afirmar:</p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {naoPrometer.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          Quando surgir uma pergunta técnica ou comercial que você não souber responder, informe que
          um consultor da Catedral poderá esclarecer durante a demonstração.
        </p>
      </div>

      {/* CTA final */}
      <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-center shadow-sm sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Agora ficou mais fácil reconhecer uma oportunidade
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Quando encontrar uma empresa que possa se beneficiar do Sistema Catedral, converse com o
          responsável, identifique a necessidade e registre a oportunidade no Portal.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`${basePath}/indicacoes/nova`}
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            Indicar um cliente
          </Link>
          <Link
            href={`${basePath}/material-de-vendas/argumentos-de-venda`}
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Ver Argumentos de Venda
          </Link>
        </div>
      </div>
    </div>
  );
}
