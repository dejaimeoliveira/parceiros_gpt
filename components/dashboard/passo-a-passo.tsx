import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Handshake,
  MessagesSquare,
  ShieldCheck,
  UserPlus,
  Wallet,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "1. Faça seu cadastro no Portal",
    body: (
      <>
        <p>
          O primeiro passo é criar seu cadastro no Portal de Parceiros Catedral. Depois que seu
          acesso estiver disponível, você poderá entrar na área exclusiva do parceiro e utilizar os
          recursos do programa.
        </p>
        <p className="mt-2">
          Mantenha seus dados cadastrais atualizados, especialmente nome, e-mail, telefone e os
          dados necessários para o recebimento das comissões. Acesse{" "}
          <strong className="font-semibold text-slate-900">Meu Cadastro</strong> sempre que precisar
          conferir suas informações.
        </p>
      </>
    ),
  },
  {
    icon: BadgeCheck,
    title: "2. Conheça o Sistema Catedral",
    body: (
      <>
        <p>
          Antes de indicar clientes, procure conhecer os principais benefícios do Sistema Catedral.
          Você não precisa se tornar especialista nem aprender detalhes técnicos — seu papel é
          identificar uma oportunidade e despertar o interesse do possível cliente.
        </p>
        <p className="mt-2">No Portal você encontrará materiais como:</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {[
            "Argumentos de Venda",
            "Objeções",
            "Cases de Clientes",
            "Vídeos",
            "Materiais de vendas",
            "Treinamentos e outros conteúdos",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: MessagesSquare,
    title: "3. Identifique possíveis clientes",
    body: (
      <>
        <p>
          Procure empresários e empresas que possam se beneficiar do Sistema Catedral. Uma conversa
          simples pode revelar uma oportunidade. Você pode perguntar:
        </p>
        <div className="mt-3 space-y-2">
          {[
            "Qual sistema você utiliza atualmente?",
            "Está satisfeito com o suporte?",
            "Seu sistema continua funcionando se a internet cair?",
            "Você consegue acompanhar bem as vendas, o estoque e o financeiro?",
          ].map((question) => (
            <div
              key={question}
              className="rounded-xl border-l-4 border-slate-300 bg-slate-50 px-4 py-3 text-sm italic text-slate-700"
            >
              &ldquo;{question}&rdquo;
            </div>
          ))}
        </div>
        <p className="mt-3">
          Se perceber interesse, explique que você é parceiro da Catedral e que{" "}
          <strong className="font-semibold text-slate-900">
            um consultor entrará em contato para apresentar o sistema e esclarecer as dúvidas
          </strong>
          .
        </p>
      </>
    ),
  },
  {
    icon: ClipboardList,
    title: "4. Registre a indicação no Portal",
    body: (
      <>
        <p>
          Depois de conversar com o possível cliente, entre no Portal e clique em{" "}
          <strong className="font-semibold text-slate-900">Indicar Cliente</strong> ou em{" "}
          <strong className="font-semibold text-slate-900">+ Indicar Novo Cliente</strong>.
        </p>
        <p className="mt-2">Informe:</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {["Nome do Cliente", "E-mail", "CNPJ", "Telefone", "Nome da Empresa", "Observação"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                {item}
              </li>
            ),
          )}
        </ul>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <span className="font-semibold">Campos obrigatórios: </span>
          Nome da Empresa, CNPJ e Telefone. Antes de concluir, confira se os dados estão corretos.
        </div>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "5. O Portal verifica o CNPJ",
    body: (
      <>
        <p>Antes de aceitar a indicação, o sistema verificará se:</p>
        <div className="mt-3 space-y-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            a empresa já faz parte da base de clientes da Catedral; ou
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            o CNPJ já possui uma indicação válida realizada por outro parceiro.
          </div>
        </div>
        <p className="mt-3">Se o CNPJ estiver disponível, a indicação poderá ser registrada.</p>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "6. Sua indicação fica protegida por 90 dias",
    body: (
      <>
        <p>
          Depois que a indicação for aceita, ela ficará vinculada a você por{" "}
          <strong className="font-semibold text-slate-900">90 (noventa) dias</strong>.
        </p>
        <p className="mt-2">
          Durante esse período, a equipe comercial da Catedral poderá entrar em contato com o
          possível cliente, apresentar o sistema, realizar demonstrações, esclarecer dúvidas e
          negociar a contratação.{" "}
          <strong className="font-semibold text-slate-900">
            Você não precisa conduzir a negociação. A Catedral cuida do processo comercial.
          </strong>
        </p>
        <p className="mt-2">
          Se a contratação não for concluída dentro dos 90 dias, o período de proteção termina e o
          CNPJ poderá ficar disponível para uma nova indicação.
        </p>
      </>
    ),
  },
  {
    icon: ClipboardList,
    title: "7. Acompanhe suas indicações",
    body: (
      <>
        <p>
          Utilize <strong className="font-semibold text-slate-900">Minhas Indicações</strong> para
          acompanhar as oportunidades que você registrou. O Portal será seu ponto central para
          consultar o histórico e a evolução das suas indicações.
        </p>
      </>
    ),
  },
  {
    icon: Handshake,
    title: "8. O cliente contratou? Começa uma nova etapa",
    body: (
      <>
        <p>
          Quando uma empresa indicada por você contratar o Sistema Catedral, a indicação passa a
          gerar direito à comissão conforme as regras do Programa de Parceiros.
        </p>
        <p className="mt-2">
          O benefício não está limitado à contratação inicial —{" "}
          <strong className="font-semibold text-slate-900">a comissão é recorrente</strong>.
        </p>
      </>
    ),
  },
];

const cicloParceria = [
  "Você encontra uma oportunidade",
  "Registra a indicação no Portal",
  "A Catedral apresenta e negocia",
  "O cliente contrata",
  "O cliente paga a mensalidade",
  "Você recebe 10%",
  "Cliente continua pagando = comissão recorrente",
];

const paymentExample = [
  { cliente: "Empresa A", mensalidade: "R$ 300,00", comissao: "R$ 30,00" },
  { cliente: "Empresa B", mensalidade: "R$ 400,00", comissao: "R$ 40,00" },
  { cliente: "Empresa C", mensalidade: "R$ 500,00", comissao: "R$ 50,00" },
];

const resumo = [
  "Conheça o Sistema Catedral.",
  "Encontre uma oportunidade.",
  "Converse com o possível cliente.",
  "Registre a indicação no Portal.",
  "A Catedral cuida da apresentação e da negociação.",
  "Acompanhe a indicação pelo Portal.",
  "Quando o cliente contratar e pagar, você recebe 10%.",
  "Enquanto ele permanecer cliente e continuar pagando, sua comissão continua.",
];

export function PassoAPasso({ basePath }: { basePath: string }) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Programa de Parceiros Catedral
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Passo a passo</h1>
        <p className="mt-2 text-base text-slate-600">Da inscrição ao recebimento das suas comissões</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
          Bem-vindo ao Programa de Parceiros Catedral. O Portal de Parceiros foi criado para
          facilitar todo o processo: conhecer melhor o Sistema Catedral, indicar possíveis clientes,
          acompanhar suas indicações e consultar as comissões geradas pelos clientes conquistados.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs font-semibold text-slate-600">
          {cicloParceria.map((etapa, index) => (
            <div key={etapa} className="flex items-center gap-2">
              <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">{etapa}</span>
              {index < cicloParceria.length - 1 ? (
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400" />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Do cadastro à comissão</h2>
        <div className="mt-6 space-y-6">
          {steps.map((step) => (
            <div key={step.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                <step.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <div className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
            <Wallet className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">9. Você recebe 10% das mensalidades pagas</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700">
          Assim que o cliente indicado começar a pagar as mensalidades do Sistema Catedral, você
          terá direito a{" "}
          <strong className="font-semibold text-slate-900">
            10% do valor de cada mensalidade paga
          </strong>
          . Enquanto o cliente permanecer usuário do Sistema Catedral e continuar pagando suas
          mensalidades, você continuará tendo direito à comissão.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4 rounded-2xl border border-emerald-200 bg-white p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Mensalidade paga</p>
            <p className="text-2xl font-bold text-slate-900">R$ 300,00</p>
          </div>
          <div className="text-2xl text-slate-300">→</div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Sua comissão</p>
            <p className="text-2xl font-bold text-emerald-600">R$ 30,00</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          Se ele pagar novamente no mês seguinte, você terá direito a uma nova comissão. Uma única
          indicação pode, portanto, gerar recebimentos recorrentes.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Wallet className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">10. Quando as comissões são pagas?</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
          As comissões são transferidas no mês subsequente ao pagamento da mensalidade pelo cliente.
          Os valores correspondentes às diferentes indicações serão somados para o pagamento.
        </p>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Cliente indicado</th>
                <th className="px-4 py-3 text-right">Mensalidade paga</th>
                <th className="px-4 py-3 text-right">Comissão de 10%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paymentExample.map((row) => (
                <tr key={row.cliente}>
                  <td className="px-4 py-3 text-slate-700">{row.cliente}</td>
                  <td className="px-4 py-3 text-right text-slate-700">{row.mensalidade}</td>
                  <td className="px-4 py-3 text-right text-slate-700">{row.comissao}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-slate-200 bg-slate-50 font-semibold text-slate-900">
                <td className="px-4 py-3">Total</td>
                <td className="px-4 py-3 text-right">R$ 1.200,00</td>
                <td className="px-4 py-3 text-right text-emerald-600">R$ 120,00</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          Nesse exemplo, o parceiro terá{" "}
          <strong className="font-semibold text-slate-900">R$ 120,00 a receber</strong> no mês
          subsequente.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">11. Acompanhe suas comissões e recebimentos</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
          No Portal, utilize a área <strong className="font-semibold text-slate-900">Comissões</strong>{" "}
          para acompanhar os valores gerados pelas suas indicações. Essa área permitirá consultar
          suas comissões e acompanhar os valores relacionados aos seus recebimentos.
        </p>
        <div className="mt-5">
          <Link
            href={`${basePath}/comissoes/minhas-comissoes`}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Ver minhas comissões
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Em resumo</h2>
        <ol className="mt-5 space-y-3">
          {resumo.map((item, index) => (
            <li key={item} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                {index + 1}
              </span>
              <span className="text-sm leading-relaxed text-slate-700">{item}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-center shadow-sm sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Você indica. A Catedral vende. Você acompanha. Você ganha.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          E a comissão vai se repetir todos os meses, enquanto o o contrato estiver ativo e as mensalides em dia.
        </p>
        <div className="mt-6">
          <Link
            href={`${basePath}/indicacoes/nova`}
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            + Indicar novo cliente
          </Link>
        </div>
      </div>
    </div>
  );
}
