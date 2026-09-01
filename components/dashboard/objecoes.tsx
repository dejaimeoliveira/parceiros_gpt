import Link from "next/link";
import { Ear, MessageCircleQuestion, ShieldCheck, Wifi, Wallet, Compass } from "lucide-react";

type Objecao = {
  icon: typeof Wifi;
  cliente: string;
  contexto: React.ReactNode;
  resposta: string;
};

const objecoes: Objecao[] = [
  {
    icon: MessageCircleQuestion,
    cliente: "Já tenho um sistema.",
    contexto: (
      <>
        Isso é normal — a maioria dos potenciais clientes já utiliza algum sistema. A intenção não
        é criticar o concorrente, mas descobrir se existe alguma necessidade não atendida.
      </>
    ),
    resposta: "Você está satisfeito com ele e principalmente com o suporte?",
  },
  {
    icon: Wallet,
    cliente: "Meu sistema é mais barato.",
    contexto: (
      <>
        Preço é apenas uma parte da decisão. Estabilidade, suporte, facilidade de utilização e
        capacidade de manter a operação funcionando também têm valor.
      </>
    ),
    resposta: "Vale a pena conhecer a Catedral e comparar. Um consultor pode fazer uma demonstração sem compromisso.",
  },
  {
    icon: Compass,
    cliente: "Não quero trocar de sistema agora.",
    contexto: <>Não há problema.</>,
    resposta:
      "Claro. Posso pedir apenas para um consultor apresentar o sistema. Assim você conhece outra opção caso precise no futuro.",
  },
  {
    icon: ShieldCheck,
    cliente: "Tenho medo de ficar sem suporte.",
    contexto: (
      <>
        Esse é um excelente momento para apresentar um dos principais diferenciais da Catedral:{" "}
        <strong className="font-semibold text-brand-text">suporte humano, especializado e disponível diariamente</strong>.
      </>
    ),
    resposta: "Esse é justamente um dos diferenciais da Catedral. Além do sistema, existe uma equipe de suporte para ajudar quando você precisar.",
  },
  {
    icon: Wifi,
    cliente: "E se a internet cair?",
    contexto: (
      <>
        Explique um dos diferenciais mais importantes: o Sistema Catedral foi projetado para
        continuar operando mesmo sem conexão com a internet.
      </>
    ),
    resposta: "Se a internet cair, você não precisa parar o caixa. O Sistema Catedral continua funcionando.",
  },
];

const principios = [
  { title: "Ouça primeiro.", body: "Entenda a verdadeira preocupação do cliente." },
  { title: "Não critique o sistema atual.", body: "Mostre os diferenciais da Catedral sem desqualificar concorrentes." },
  {
    title: "Convide para conhecer.",
    body: "Você não precisa resolver todas as dúvidas; um consultor da Catedral pode fazer a demonstração e explicar os detalhes.",
  },
];

export function Objecoes({ basePath }: { basePath: string }) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text-muted">
          Material de Vendas
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-text">Objeções</h1>
        <p className="mt-2 text-base text-brand-text-muted">Como responder às dúvidas mais comuns</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Durante uma conversa, é natural que o possível cliente apresente dúvidas ou razões para
          não conhecer outro sistema naquele momento. O objetivo não é discutir ou pressionar.
          Procure entender a preocupação do cliente e, quando houver interesse, ofereça uma{" "}
          <strong className="font-semibold text-brand-text">demonstração sem compromisso com um consultor da Catedral</strong>.
        </p>
      </div>

      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">Se o cliente disser...</h2>
        <div className="mt-6 space-y-6">
          {objecoes.map((obj) => (
            <div key={obj.cliente} className="rounded-2xl border border-brand-border bg-brand-background/60 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
                  <obj.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">O cliente diz</p>
                  <h3 className="mt-0.5 text-base font-semibold text-brand-text">&ldquo;{obj.cliente}&rdquo;</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">{obj.contexto}</p>

                  <div className="mt-3 rounded-xl border-l-4 border-brand-primary bg-brand-primary/10 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-text">Você pode responder</p>
                    <p className="mt-1 text-sm italic text-brand-text">&ldquo;{obj.resposta}&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Ear className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Como lidar com uma objeção</h2>
        </div>
        <p className="mt-3 text-sm text-brand-text-muted">Procure seguir três princípios simples:</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {principios.map((principio, index) => (
            <div key={principio.title} className="rounded-2xl border border-brand-border bg-brand-background p-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-dark text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-3 text-sm font-semibold text-brand-text">{principio.title}</h3>
              <p className="mt-1.5 text-sm text-brand-text-muted">{principio.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-brand-primary/30 bg-brand-primary/10 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-brand-text">
          Seu objetivo não é discutir — é abrir uma oportunidade
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Se o cliente demonstrar algum interesse, você pode encerrar a conversa assim:
        </p>
        <div className="mt-3 rounded-xl border-l-4 border-brand-border bg-white px-4 py-3">
          <p className="text-sm italic text-brand-text-muted">
            &ldquo;Posso pedir para um consultor da Catedral entrar em contato com você e apresentar
            o sistema sem compromisso.&rdquo;
          </p>
        </div>
        <p className="mt-3 text-sm text-brand-text-muted">
          Se ele concordar, registre a empresa em{" "}
          <strong className="font-semibold text-brand-text">Indicar Cliente</strong> no Portal do
          Parceiro.
        </p>
        <div className="mt-5">
          <Link
            href={`${basePath}/indicacoes/nova`}
            className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-brand-dark shadow-sm transition hover:bg-brand-primary-hover"
          >
            + Indicar novo cliente
          </Link>
        </div>
      </div>
    </div>
  );
}
