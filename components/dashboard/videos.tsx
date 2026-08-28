const videos = [
  { id: "HjNBfKYRaJA", titulo: "V1 Risco" },
  { id: "taCF-bLcf68", titulo: "V2 Controle" },
  { id: "oTWnkpigGjQ", titulo: "V3 Viabilidade" },
  { id: "1t4hgHqJlrc", titulo: "V4 Gestão" },
  { id: "5k5VnaIjVIQ", titulo: "V5 Decisão" },
];

export function Videos() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Material de Vendas
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Vídeos</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Conteúdos para ajudar você a conhecer melhor o Sistema Catedral e se preparar para
          conversar com seus clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {videos.map((video) => (
          <div key={video.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="aspect-video w-full bg-slate-100">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h2 className="text-base font-semibold text-slate-900">{video.titulo}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
