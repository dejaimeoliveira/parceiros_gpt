export default function Page() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text-muted">
          Material de Vendas
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-text">Imagens</h1>
      </div>

      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Imagens_gpt_catedral.png"
          alt="Imagens"
          className="w-full rounded-2xl border border-brand-border"
        />
      </div>
    </div>
  );
}
