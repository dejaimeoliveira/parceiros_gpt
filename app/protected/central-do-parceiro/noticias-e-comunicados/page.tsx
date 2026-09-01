import { createClient } from "@/lib/supabase/server";
import { Sparkles } from "lucide-react";

type Comunicado = {
  id: number;
  titulo: string;
  conteudo: string;
  imagem_url: string | null;
  destaque: boolean;
  data_publicacao: string;
};

async function fetchComunicados() {
  const supabase = await createClient();
  const nowIso = new Date().toISOString();

  const { data, error } = await supabase
    .from("wp_comunicados")
    .select("id, titulo, conteudo, imagem_url, destaque, data_publicacao")
    .eq("ativo", true)
    .lte("data_publicacao", nowIso)
    .or(`data_expiracao.is.null,data_expiracao.gt.${nowIso}`)
    .order("destaque", { ascending: false })
    .order("data_publicacao", { ascending: false });

  return { data: data as Comunicado[] | null, error };
}

function formatDataPublicacao(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  });
}

export default async function Page() {
  const { data, error } = await fetchComunicados();

  if (error) {
    console.error("Erro ao buscar wp_comunicados:", error);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text-muted">
          Central do Parceiro
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-text">
          Notícias e Comunicados
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Acompanhe novidades, informações e comunicados importantes do Programa de Parceiros
          Catedral.
        </p>
      </div>

      {error ? (
        <div className="rounded-3xl border border-brand-border bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-sm text-brand-text-muted">
            Não foi possível carregar os comunicados neste momento. Tente novamente mais tarde.
          </p>
        </div>
      ) : !data || data.length === 0 ? (
        <div className="rounded-3xl border border-brand-border bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-lg font-semibold text-brand-text">Nenhum comunicado no momento</p>
          <p className="mt-2 text-sm text-brand-text-muted">
            Quando houver novidades do Programa de Parceiros Catedral, elas aparecerão aqui.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {data.map((comunicado) => (
            <article
              key={comunicado.id}
              className="overflow-hidden rounded-3xl border border-brand-border bg-white shadow-sm"
            >
              {comunicado.imagem_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={comunicado.imagem_url}
                  alt={comunicado.titulo}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
              ) : null}

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  {comunicado.destaque ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                      <Sparkles className="h-3.5 w-3.5" />
                      Destaque
                    </span>
                  ) : null}
                  <span className="text-xs font-medium uppercase tracking-wide text-brand-text-muted">
                    {formatDataPublicacao(comunicado.data_publicacao)}
                  </span>
                </div>

                <h2 className="mt-3 text-xl font-bold text-brand-text">{comunicado.titulo}</h2>
                <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-brand-text-muted">
                  {comunicado.conteudo}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
