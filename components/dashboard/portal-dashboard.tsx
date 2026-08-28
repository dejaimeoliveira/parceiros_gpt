import Link from "next/link";

import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  accent?: string;
};

function StatCard({ value, label, accent }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={cn("text-3xl font-bold tracking-tight text-slate-900", accent)}>{value}</div>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </div>
  );
}

function QuickActionCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </Link>
  );
}

function NewsCard({ title, status }: { title: string; status: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{status}</p>
    </div>
  );
}

export function PortalDashboard({
  basePath = "/protected",
  userName = "Olá!",
}: {
  basePath?: string;
  userName?: string;
}) {
  const greeting = userName && userName !== "Olá!" ? `Olá, ${userName}!` : "Olá!";

  const quickActions = [
    { title: "Indicar Cliente", description: "Registre uma nova oportunidade.", href: `${basePath}/indicacoes/nova` },
    { title: "Minhas Indicações", description: "Acompanhe suas oportunidades.", href: `${basePath}/indicacoes/minhas-indicacoes` },
    { title: "Material de Vendas", description: "Acesse vídeos, apresentações e materiais.", href: `${basePath}/material-de-vendas/todos-os-materiais` },
    { title: "Treinamentos", description: "Prepare-se para vender melhor.", href: `${basePath}/treinamentos/passo-a-passo` },
    { title: "Falar com a Catedral", description: "Entre em contato com nossa equipe.", href: `${basePath}/central-do-parceiro/falar-com-a-catedral` },
  ];

  const checklist = [
    "Cadastro concluído",
    "Conheça o Sistema Catedral",
    "Entenda como funciona a parceria",
    "Veja como funcionam as comissões",
    "Aprenda a identificar um potencial cliente",
    "Faça sua primeira indicação",
  ];

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Portal dos Parceiros Catedral</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{greeting}</h1>
            <p className="mt-2 text-base text-slate-600">Bem-vindo ao Portal dos Parceiros Catedral.</p>
          </div>

          <Link
            href={`${basePath}/indicacoes/nova`}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            + INDICAR NOVO CLIENTE
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard value="0" label="Em negociação" />
        <StatCard value="0" label="Clientes convertidos" />
        <StatCard value="R$ 0,00" label="A receber" accent="text-emerald-600" />
        <StatCard value="Parceiro" label="Programa Catedral" accent="text-slate-900" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Primeiros passos</h2>
          <p className="mt-2 text-sm text-slate-600">Complete sua preparação para começar a indicar clientes.</p>

          <div className="mt-6 space-y-4">
            {checklist.map((item, index) => {
              const checked = index === 0;
              return (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                  <div
                    className={cn(
                      "flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-bold",
                      checked ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300 bg-white text-slate-400",
                    )}
                  >
                    {checked ? "✓" : ""}
                  </div>
                  <span className={cn("text-sm", checked ? "font-medium text-slate-900" : "text-slate-600")}>{item}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
              <span>Progresso</span>
              <span>1 de 6 concluídos</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-1/6 rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Últimas indicações</h2>
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <p className="text-base font-medium text-slate-700">Você ainda não possui indicações.</p>
            <Link
              href={`${basePath}/indicacoes/nova`}
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Fazer minha primeira indicação
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Acesso rápido</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {quickActions.map((action) => (
            <QuickActionCard key={action.title} title={action.title} description={action.description} href={action.href} />
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Novidades da Catedral</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <NewsCard title="Novos materiais" status="Conteúdo em preparação" />
          <NewsCard title="Treinamentos" status="Conteúdo em preparação" />
          <NewsCard title="Comunicados" status="Conteúdo em preparação" />
        </div>
      </div>
    </div>
  );
}
