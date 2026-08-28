import Link from "next/link";
import {
  Award,
  Headset,
  Layers,
  PackageSearch,
  Store,
  Target,
  Wallet,
  Wifi,
} from "lucide-react";

type Argument = {
  icon: typeof Wifi;
  title: string;
  body: React.ReactNode;
  highlightLabel?: string;
  highlightQuote?: string;
  benefits?: string[];
  note?: React.ReactNode;
};

const arguments_: Argument[] = [
  {
    icon: Wifi,
    title: "1. O sistema continua funcionando mesmo sem internet",
    body: (
      <>
        Esse é um dos grandes diferenciais do Sistema Catedral. Uma falha na internet não precisa
        significar uma parada nas vendas — o sistema foi desenvolvido para continuar operando mesmo
        quando a conexão apresenta problemas.
      </>
    ),
    highlightLabel: "Como explicar ao cliente",
    highlightQuote:
      "Se a internet cair, você não precisa parar o caixa. O Sistema Catedral continua funcionando.",
    note: "Para bares, restaurantes e estabelecimentos com grande movimento, alguns minutos com o caixa parado podem causar filas, atrasos e perda de vendas.",
  },
  {
    icon: Headset,
    title: "2. Suporte humano todos os dias",
    body: (
      <>
        Um sistema de gestão não pode ser avaliado apenas pelas funcionalidades — o suporte também
        é fundamental. A Catedral oferece atendimento humano e especializado todos os dias,
        inclusive para empresas que trabalham em horários nos quais muitos fornecedores de software
        já encerraram o atendimento.
      </>
    ),
    highlightLabel: "Como explicar ao cliente",
    highlightQuote: "Além do sistema, você tem uma equipe de suporte para ajudá-lo quando precisar.",
    note: "Esse é um argumento especialmente importante para bares, restaurantes, pizzarias e outros estabelecimentos que funcionam à noite, nos finais de semana e feriados.",
  },
  {
    icon: Layers,
    title: "3. Vendas, estoque e financeiro integrados",
    body: (
      <>
        O empresário não precisa controlar cada área separadamente. O Sistema Catedral integra
        informações de vendas, estoque e financeiro, reduzindo tarefas repetitivas e facilitando o
        acompanhamento da empresa.
      </>
    ),
    benefits: [
      "menos trabalho manual",
      "redução de erros",
      "informações mais organizadas",
      "melhor controle do negócio",
      "mais agilidade na tomada de decisões",
    ],
  },
  {
    icon: PackageSearch,
    title: "4. Controle de estoque",
    body: (
      <>
        O controle de estoque ajuda o empresário a saber o que tem disponível e acompanhar entradas
        e saídas de produtos, facilitando identificar perdas, planejar compras e evitar falta de
        mercadorias importantes.
      </>
    ),
    highlightLabel: "Pergunta que você pode fazer",
    highlightQuote:
      "Hoje você consegue saber com facilidade o que tem no estoque e quais produtos precisam ser comprados?",
    note: "Se a resposta for não, existe uma boa oportunidade para apresentar o Sistema Catedral.",
  },
  {
    icon: Wallet,
    title: "5. Gestão financeira",
    body: (
      <>
        Vender muito não significa necessariamente administrar bem. O Sistema Catedral ajuda a
        organizar informações financeiras, incluindo caixa e contas a pagar e receber.
      </>
    ),
    highlightLabel: "Pergunta que você pode fazer",
    highlightQuote: "Você consegue acompanhar com facilidade as vendas, o caixa e as contas da empresa?",
  },
  {
    icon: Award,
    title: "6. Experiência e confiança",
    body: (
      <>
        A Catedral possui <strong className="font-semibold text-slate-900">mais de 17 anos de
        experiência</strong> em automação comercial e atende{" "}
        <strong className="font-semibold text-slate-900">mais de 2.000 clientes ativos</strong>. É
        uma solução construída a partir da experiência prática com empresas que utilizam automação
        comercial diariamente.
      </>
    ),
  },
];

const segmentos = [
  "Bares e restaurantes",
  "Pizzarias e delivery",
  "Açougues e mercados",
  "Distribuidoras de bebidas",
  "Lojas de roupas e calçados",
  "Pet shops e agropecuárias",
  "Oficinas e empresas de serviços",
  "Comércio varejista em geral",
];

const perguntas = [
  "Qual sistema você usa atualmente?",
  "Está satisfeito com o suporte?",
  "Seu sistema funciona quando a internet cai?",
  "Você consegue controlar bem o estoque?",
  "Consegue acompanhar vendas e financeiro com facilidade?",
  "Quando precisa de suporte à noite ou no fim de semana, consegue atendimento?",
];

function QuoteBlock({ label, quote }: { label: string; quote: string }) {
  return (
    <div className="mt-3 rounded-xl border-l-4 border-slate-300 bg-slate-50 px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-sm italic text-slate-700">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}

export function ArgumentosDeVenda({ basePath }: { basePath: string }) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Material de Vendas
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Argumentos de Venda</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Você não precisa ser especialista em sistemas para indicar um cliente para a Catedral. Seu
          objetivo é identificar empresas que possam se beneficiar de uma boa solução de automação
          comercial, apresentar brevemente o Sistema Catedral e informar que um consultor da
          Catedral entrará em contato para fazer uma demonstração e explicar todos os detalhes.
        </p>
        <p className="mt-2 max-w-2xl text-sm text-slate-500">
          Nesta página você encontra alguns argumentos que podem ajudá-lo nessa primeira conversa.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">O que é o Sistema Catedral?</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          O Sistema Catedral é uma solução completa de automação comercial que integra as
          principais áreas da empresa:
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            "vendas e frente de caixa",
            "controle de estoque",
            "gestão financeira",
            "emissão fiscal",
            "relatórios gerenciais",
            "integração com equipamentos e periféricos",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          O objetivo é facilitar a operação diária e dar ao empresário mais controle sobre o
          negócio.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Principais argumentos de venda</h2>
        <div className="mt-6 space-y-6">
          {arguments_.map((arg) => (
            <div key={arg.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                <arg.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900">{arg.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{arg.body}</p>

                {arg.benefits ? (
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {arg.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {arg.highlightLabel && arg.highlightQuote ? (
                  <QuoteBlock label={arg.highlightLabel} quote={arg.highlightQuote} />
                ) : null}

                {arg.note ? <p className="mt-3 text-sm text-slate-500">{arg.note}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Store className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Para quais empresas posso oferecer?</h2>
        </div>
        <p className="mt-3 text-sm text-slate-600">O Sistema Catedral atende diversos segmentos, entre eles:</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {segmentos.map((segmento) => (
            <span
              key={segmento}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
            >
              {segmento}
            </span>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
          <h3 className="text-base font-semibold text-slate-900">
            Argumentos específicos para bares e restaurantes
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Se você estiver conversando com um proprietário de bar ou restaurante, pergunte como ele
            controla atualmente: mesas, comandas, pedidos, caixa, estoque e financeiro.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            O Sistema Catedral integra pedidos por mesa, comandas e frente de caixa. Além disso, a
            Catedral possui soluções complementares para o segmento, como atendimento por
            aplicativo, autoatendimento e cardápio digital.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Não tente fazer a venda sozinho</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700">
          O parceiro não precisa conhecer todos os recursos do Sistema Catedral nem responder
          perguntas técnicas. Seu papel é despertar o interesse do possível cliente.
        </p>
        <p className="mt-2 text-sm text-slate-600">Quando perceber uma oportunidade, você pode dizer:</p>
        <QuoteBlock
          label="Sugestão de abordagem"
          quote="Eu conheço uma empresa de automação comercial chamada Catedral. Eles atendem mais de 2.000 clientes e têm uma solução completa para vendas, estoque e financeiro. Se você quiser, posso pedir para um consultor entrar em contato e fazer uma demonstração sem compromisso."
        />
        <p className="mt-3 text-sm text-slate-600">
          Depois, registre a empresa em <strong className="font-semibold text-slate-900">Indicar Cliente</strong>.
          A equipe comercial da Catedral dará continuidade ao atendimento.
        </p>
        <div className="mt-5">
          <Link
            href={`${basePath}/indicacoes/nova`}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            + Indicar novo cliente
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Target className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Perguntas que ajudam a identificar oportunidades</h2>
        </div>
        <ul className="mt-4 space-y-2">
          {perguntas.map((pergunta) => (
            <li key={pergunta} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {pergunta}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-500">
          Você não precisa fazer todas essas perguntas. Uma conversa natural é suficiente para
          descobrir se existe interesse.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">O objetivo é conseguir uma demonstração</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          Você não precisa fechar a venda. Seu principal objetivo é conseguir que o possível cliente
          aceite conversar com um consultor da Catedral. A equipe comercial fará a apresentação
          completa, demonstração do sistema, levantamento das necessidades e negociação.
        </p>
        <p className="mt-2 text-sm text-slate-600">Quando houver interesse, avise:</p>
        <QuoteBlock
          label="Sugestão de encerramento"
          quote="Vou registrar sua empresa e pedir para um consultor da Catedral entrar em contato com você."
        />
        <p className="mt-3 text-sm text-slate-600">
          Depois acesse <strong className="font-semibold text-slate-900">Indicar Cliente</strong> no
          Portal do Parceiro e registre a indicação.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-center shadow-sm sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Lembre-se</h2>
        <div className="mx-auto mt-5 flex max-w-xl flex-col gap-2 text-base font-medium text-slate-200">
          <p>Você identifica a oportunidade.</p>
          <p>A Catedral apresenta a solução.</p>
          <p>A equipe comercial negocia.</p>
          <p>O cliente contrata.</p>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-300">
          E você recebe comissão recorrente enquanto o cliente indicado permanecer ativo e pagando
          suas mensalidades.
        </p>
      </div>
    </div>
  );
}
