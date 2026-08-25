import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PlaceholderPage({
  basePath,
  title,
}: {
  basePath: string;
  title: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Em breve</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{title}</h1>

      <div className="mt-6 max-w-2xl space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-lg font-medium text-slate-900">Conteúdo em preparação.</p>
        <p className="text-base text-slate-600">
          Em breve você encontrará aqui os materiais de apoio da Catedral.
        </p>
      </div>

      <div className="mt-6">
        <Link
          href={basePath}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
