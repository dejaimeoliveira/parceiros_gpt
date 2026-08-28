import Link from "next/link";
import {
  CalendarClock,
  ClipboardList,
  MessageSquareText,
  Percent,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    title: "1. Converse com um possível cliente",
    body: (
      <>
        <p>
          Identifique uma empresa que possa se beneficiar do Sistema Catedral e converse com o
          responsável.
        </p>
        <p className="mt-2">
          Explique brevemente sobre o sistema e informe que{" "}
          <strong className="font-semibold text-slate-900">
            um consultor da Catedral entrará em contato
          </strong>{" "}
          para apresentar a solução, esclarecer dúvidas e dar continuidade ao atendimento
          comercial.
        </p>
        <p className="mt-2">A partir daí, a equipe da Catedral cuida da negociação.</p>
      </>
    ),
  },
  {
    icon: ClipboardList,
    title: "2. Registre sua indicação",
    body: (
      <>
        <p>
          No Portal do Parceiro, acesse <strong className="font-semibold text-slate-900">Indicar Cliente</strong> e informe:
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {["Nome do cliente", "E-mail", "CNPJ", "Telefone", "Nome da empresa", "Observação, se houver"].map(
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
          Nome da Empresa, CNPJ e Telefone.
        </div>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "3. O sistema verifica sua indicação",
    body: (
      <>
        <p>Antes de aceitar a indicação, o sistema verificará automaticamente o CNPJ informado.</p>
        <div className="mt-3 space-y-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">O CNPJ já é cliente da Catedral? </span>
            Se a empresa já fizer parte da base de clientes da Catedral Automação, não será possível
            registrar uma nova indicação.
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">O CNPJ já foi indicado por outro parceiro? </span>
            Se houver uma indicação válida para o mesmo CNPJ, a nova indicação não será aceita
            enquanto estiver vigente o prazo da indicação anterior.
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          Isso garante que cada oportunidade seja atribuída corretamente ao parceiro que realizou a
          indicação.
        </p>
      </>
    ),
  },
  {
    icon: CalendarClock,
    title: "4. Sua indicação fica protegida por 90 dias",
    body: (
      <>
        <p>
          Depois que a indicação for aceita, a equipe da Catedral terá{" "}
          <strong className="font-semibold text-slate-900">90 (noventa) dias</strong> para concluir a
          contratação.
        </p>
        <p className="mt-2">Durante esse período, o CNPJ ficará vinculado à sua indicação.</p>
        <p className="mt-2">
          Se não houver contratação dentro dos 90 dias, o período de proteção termina e o CNPJ
          poderá ser indicado novamente por outro parceiro.
        </p>
      </>
    ),
  },
];

const paymentExample = [
  { cliente: "Cliente A", mensalidade: "R$ 300,00", comissao: "R$ 30,00" },
  { cliente: "Cliente B", mensalidade: "R$ 450,00", comissao: "R$ 45,00" },
  { cliente: "Cliente C", mensalidade: "R$ 250,00", comissao: "R$ 25,00" },
];

export function ComoFuncionamComissoes({ basePath }: { basePath: string }) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Programa de Parceiros Catedral
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          Como funcionam as comissões
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Como parceiro da Catedral, você pode indicar empresas interessadas em utilizar o Sistema
          Catedral. Quando uma empresa indicada por você se torna cliente e começa a pagar suas
          mensalidades,{" "}
          <strong className="font-semibold text-slate-900">
            você recebe 10% do valor de cada mensalidade paga
          </strong>{" "}
          enquanto ela permanecer cliente do Sistema Catedral.
        </p>
        <div className="mt-6">
          <Link
            href={`${basePath}/indicacoes/nova`}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            + Indicar novo cliente
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Do primeiro contato ao pagamento</h2>
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
            <Percent className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Você recebe 10% de comissão recorrente</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700">
          Não se trata apenas de uma comissão pela venda inicial — a comissão é{" "}
          <strong className="font-semibold text-slate-900">recorrente</strong>. Enquanto o cliente
          indicado por você permanecer utilizando o Sistema Catedral e pagando suas mensalidades,
          você continuará recebendo 10% sobre cada mensalidade paga.
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
          No mês seguinte, se o cliente pagar novamente R$ 300,00, você receberá mais R$ 30,00 — e
          assim sucessivamente enquanto ele permanecer como cliente pagante.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Wallet className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">5. Quando você recebe</h2>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
          As comissões são pagas no mês subsequente ao pagamento realizado pelo cliente indicado.
          Todos os valores de comissão a que você tiver direito no período serão somados e
          transferidos de uma só vez, até o dia 10 de cada mês.
        </p>

        <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Cliente</th>
                <th className="px-4 py-3 text-right">Mensalidade paga</th>
                <th className="px-4 py-3 text-right">Sua comissão</th>
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
                <td className="px-4 py-3">Total a receber</td>
                <td className="px-4 py-3 text-right">R$ 1.000,00</td>
                <td className="px-4 py-3 text-right text-emerald-600">R$ 100,00</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          Nesse exemplo, você receberá <strong className="font-semibold text-slate-900">R$ 100,00 no mês subsequente</strong>.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-center shadow-sm sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Quanto mais clientes ativos, maior sua recorrência
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          O grande diferencial do Programa de Parceiros Catedral é que uma indicação pode continuar
          gerando comissão por muito tempo. Você indica uma vez e pode receber todos os meses.
          Quanto mais clientes indicados permanecerem ativos e pagando suas mensalidades, maior
          poderá ser o valor mensal das suas comissões.
        </p>
        <p className="mt-6 text-lg font-semibold text-white">
          Indique. A Catedral vende. O cliente permanece. Você continua recebendo.
        </p>
      </div>
    </div>
  );
}
