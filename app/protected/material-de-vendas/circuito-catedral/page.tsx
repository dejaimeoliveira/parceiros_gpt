import { Construction } from "lucide-react";

export default function CircuitoCatedralPage() {
  return (
    <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-background text-brand-text">
          <Construction className="h-6 w-6" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text-muted">
            Novidades
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-brand-text">
            Circuito Catedral
          </h1>
        </div>
      </div>

      <div className="max-w-4xl rounded-3xl border border-brand-border bg-gradient-to-br from-brand-background via-white to-white p-6 sm:p-8">
        <div className="mb-6 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-800">
          Novidades em breve!
        </div>

        <div className="space-y-5 text-base leading-7 text-brand-text-muted">
          <p>
            Estamos preparando o <strong className="font-semibold text-brand-text">Circuito Catedral</strong>,
            um espaço dedicado a apresentar histórias, experiências e novidades de clientes que já utilizam o
            <strong className="font-semibold text-brand-text"> Sistema Catedral</strong> no dia a dia.
          </p>

          <p>
            Aqui você conhecerá empresas que estão aproveitando os recursos e funcionalidades do Sistema Catedral
            para melhorar sua operação, agilizar o atendimento e tornar a gestão do negócio mais eficiente.
          </p>

          <p>
            Em breve, você poderá conhecer esses clientes, descobrir como utilizam o sistema e encontrar exemplos
            reais que poderão ajudar também nas suas apresentações e indicações comerciais.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-brand-border bg-white px-5 py-4">
          <p className="text-lg font-semibold text-brand-text">
            Aguarde. O Circuito Catedral está sendo preparado e em breve teremos novidades por aqui.
          </p>
        </div>
      </div>
    </div>
  );
}
