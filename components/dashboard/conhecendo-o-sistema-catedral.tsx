import Link from "next/link";
import {
  Beef,
  GraduationCap,
  Handshake,
  HelpCircle,
  LayoutDashboard,
  MonitorSmartphone,
  PawPrint,
  Pizza,
  ShieldOff,
  Shirt,
  Table2,
  UtensilsCrossed,
  Wine,
  Workflow,
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

const comparacaoSegmentos = [
  { nome: "Bares e Restaurantes", necessidade: "Mesas, comandas, produção e agilidade" },
  { nome: "Açougues e Mercados", necessidade: "Balanças, produtos e estoque" },
  { nome: "Pizzarias e Deliveries", necessidade: "Picos de pedidos, produção e entrega" },
  { nome: "Lojas de Roupas e Calçados", necessidade: "Produtos, clientes e giro de estoque" },
  { nome: "Pet Shops e Agropecuárias", necessidade: "Produtos, serviços e estoque" },
  { nome: "Oficinas e Serviços", necessidade: "Ordens e acompanhamento de serviços" },
  { nome: "Distribuidoras de Bebidas", necessidade: "Estoque, pedidos e entregas" },
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
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text-muted">
          Programa de Parceiros Catedral
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-text">
          Conhecendo o Sistema Catedral
        </h1>
        <p className="mt-2 max-w-2xl text-base font-medium text-brand-text-muted">
          Entenda o que é o sistema, como ele ajuda na gestão de uma empresa e quais segmentos podem
          utilizá-lo.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          O Sistema Catedral é uma solução de automação comercial que integra vendas, estoque e
          financeiro. Ele ajuda empresas a organizar a operação, reduzir tarefas manuais, controlar
          melhor produtos e movimentações e obter informações para tomar decisões com mais
          segurança.
        </p>

        <div className="mt-6 rounded-2xl border border-brand-border bg-brand-dark p-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Sistema Catedral</p>
          <p className="mt-2 text-xl font-bold sm:text-2xl">Vendas + Estoque + Financeiro</p>
          <p className="mt-1 text-sm text-white/70">Automação comercial para organizar e controlar a operação.</p>
        </div>
      </div>

      {/* O que é */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">O que é o Sistema Catedral?</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Um software de automação comercial e gestão para operações reais de comércio e serviços.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {pilares.map((pilar) => (
            <div key={pilar.title} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <h3 className="text-base font-semibold text-brand-text">{pilar.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{pilar.resumo}</p>
              <ul className="mt-3 space-y-1.5">
                {pilar.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* A força está na integração */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Workflow className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">A força está na integração</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Quando vendas, estoque e financeiro trabalham de forma integrada, a empresa reduz
          controles paralelos e retrabalho e passa a ter informações mais consistentes para
          administrar a operação.
        </p>
        <div className="mt-6 flex flex-col items-center gap-2">
          <span className="rounded-full border border-brand-border bg-brand-background px-4 py-1.5 text-xs font-semibold text-brand-text-muted">
            Venda
          </span>
          <span className="text-brand-text-muted/40">↓</span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-brand-border bg-brand-background px-4 py-1.5 text-xs font-semibold text-brand-text-muted">
              Estoque
            </span>
            <span className="rounded-full border border-brand-border bg-brand-background px-4 py-1.5 text-xs font-semibold text-brand-text-muted">
              Financeiro
            </span>
          </div>
          <span className="text-brand-text-muted/40">↓</span>
          <span className="rounded-full border border-brand-border bg-brand-background px-4 py-1.5 text-xs font-semibold text-brand-text-muted">
            Relatórios
          </span>
          <span className="text-brand-text-muted/40">↓</span>
          <span className="rounded-full bg-brand-dark px-4 py-1.5 text-xs font-semibold text-white">
            Gestão
          </span>
        </div>
      </div>

      {/* Para que serve */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">Para que serve?</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Quando vendas, estoque e financeiro trabalham de forma integrada, o empresário reduz
          retrabalho e passa a ter uma visão mais clara do que está acontecendo no negócio.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {beneficios.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <h3 className="text-sm font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Offline */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <ShieldOff className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">A operação não precisa parar quando a internet cai</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Uma característica importante do Sistema Catedral é continuar operando mesmo quando há
          falha de conexão. Isso é especialmente relevante para empresas que não podem interromper o
          caixa ou o atendimento.
        </p>
        <div className="mt-5 rounded-2xl border border-brand-primary/30 bg-brand-primary/10 p-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text">Offline</p>
          <p className="mt-1 text-base font-semibold text-brand-text">A internet caiu? A operação pode continuar funcionando.</p>
        </div>
      </div>

      {/* Suporte humano */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Handshake className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Tecnologia com suporte humano</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Como o sistema participa da operação diária da empresa, a Catedral mantém suporte humano
          especializado para apoiar seus clientes.
        </p>
      </div>

      {/* Segmentos - intro */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">Cada segmento trabalha de um jeito</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
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
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">Segmentos atendidos</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segmentos.map((segmento) => (
            <div
              key={segmento.nome}
              className="flex flex-col justify-end rounded-2xl bg-gradient-to-br from-brand-dark to-brand-text-muted p-5 text-white shadow-sm"
            >
              <segmento.icon className="h-7 w-7" />
              <h3 className="mt-3 text-sm font-semibold">{segmento.nome}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/80">{segmento.resumo}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {segmentos.map((segmento) => (
            <div key={segmento.nome} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
                  <segmento.icon className="h-4 w-4" />
                </div>
                <h3 className="text-base font-semibold text-brand-text">{segmento.nome}</h3>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Destaques</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {segmento.destaques.map((item) => (
                      <li key={item} className="rounded-full border border-brand-border bg-white px-3 py-1 text-xs text-brand-text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Perguntas para prospecção</p>
                  <ul className="mt-2 space-y-1.5">
                    {segmento.perguntas.map((pergunta) => (
                      <li key={pergunta} className="flex items-start gap-2 text-sm text-brand-text-muted">
                        <HelpCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-text-muted" />
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

      {/* Comparação rápida */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Table2 className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Comparação rápida</h2>
        </div>

        <div className="mt-6 hidden overflow-x-auto sm:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="py-2 pr-4 font-semibold text-brand-text">Segmento</th>
                <th className="py-2 font-semibold text-brand-text">Necessidade em destaque</th>
              </tr>
            </thead>
            <tbody>
              {comparacaoSegmentos.map((item) => (
                <tr key={item.nome} className="border-b border-brand-border/60 last:border-0">
                  <td className="py-2.5 pr-4 font-medium text-brand-text">{item.nome}</td>
                  <td className="py-2.5 text-brand-text-muted">{item.necessidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-3 sm:hidden">
          {comparacaoSegmentos.map((item) => (
            <div key={item.nome} className="rounded-2xl border border-brand-border bg-brand-background/60 p-4">
              <p className="text-sm font-semibold text-brand-text">{item.nome}</p>
              <p className="mt-1 text-sm text-brand-text-muted">{item.necessidade}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Em comum */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">Negócios diferentes, necessidades em comum</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {emComum.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <h3 className="text-sm font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm font-semibold text-brand-text">
          O segmento muda, mas a necessidade de controle permanece.
        </p>
      </div>

      {/* Recursos complementares */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <MonitorSmartphone className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Recursos complementares</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {recursos.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <h3 className="text-sm font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-brand-text-muted">
          Consulte disponibilidade e condições com a equipe Catedral.
        </p>
      </div>

      {/* Como apresentar */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Não comece pelas funcionalidades</h2>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {fluxoApresentacao.map((etapa, index) => (
            <div key={etapa} className="flex items-center gap-2">
              <span className="rounded-full border border-brand-border bg-brand-background px-3 py-1.5 text-xs font-semibold text-brand-text-muted">
                {index + 1}. {etapa}
              </span>
              {index < fluxoApresentacao.length - 1 ? (
                <span className="text-brand-text-muted/40">→</span>
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
          <div className="rounded-xl border border-brand-border bg-brand-background px-4 py-3 text-sm text-brand-text-muted">
            <span className="font-semibold">Depois de identificar a necessidade: </span>
            &ldquo;O Sistema Catedral possui controle integrado de estoque. Posso pedir para um
            consultor mostrar como funciona na prática.&rdquo;
          </div>
        </div>
      </div>

      {/* Argumentos */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">Argumentos que o parceiro deve lembrar</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {argumentos.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <h3 className="text-sm font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* O parceiro não precisa saber tudo */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Você não precisa ser um técnico do Sistema Catedral</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          O parceiro deve identificar oportunidades e despertar interesse. Demonstrações técnicas,
          detalhes de implantação e negociação são responsabilidade da equipe Catedral.
        </p>
        <p className="mt-4 text-sm font-semibold text-brand-text">Sem confirmação da equipe Catedral, evite afirmar:</p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {naoPrometer.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-brand-text-muted">
          Se não souber responder, oriente o potencial cliente a esclarecer a questão diretamente
          com o consultor Catedral durante a demonstração.
        </p>
      </div>

      {/* CTA final */}
      <div className="rounded-3xl border border-brand-border bg-brand-dark p-6 text-center shadow-sm sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Agora ficou mais fácil reconhecer uma oportunidade
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
          Quando encontrar uma empresa que possa se beneficiar do Sistema Catedral, converse com o
          responsável, identifique a necessidade e registre a oportunidade no Portal.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`${basePath}/indicacoes/indicar-cliente`}
            className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-brand-dark shadow-sm transition hover:bg-brand-primary-hover"
          >
            Indicar um cliente
          </Link>
          <Link
            href={`${basePath}/treinamentos/venda-por-indicacao-e-demonstracao`}
            className="inline-flex items-center justify-center rounded-xl border border-brand-primary/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark/90"
          >
            Venda por Indicação e Demonstração
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
