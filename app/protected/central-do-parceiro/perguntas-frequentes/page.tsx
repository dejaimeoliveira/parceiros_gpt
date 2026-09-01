import { createClient } from "@/lib/supabase/server";
import { PerguntasFrequentes, type Pergunta } from "@/components/dashboard/perguntas-frequentes";

async function fetchPerguntas() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("wp_perguntas_frequentes")
    .select("id, pergunta, resposta, categoria")
    .eq("ativo", true)
    .order("categoria", { ascending: true })
    .order("ordem", { ascending: true })
    .order("id", { ascending: true });

  return { data: data as Pergunta[] | null, error };
}

export default async function Page() {
  const { data, error } = await fetchPerguntas();

  if (error) {
    console.error("Erro ao buscar wp_perguntas_frequentes:", error);

    return (
      <div className="rounded-3xl border border-brand-border bg-white p-6 text-center shadow-sm sm:p-8">
        <p className="text-sm text-brand-text-muted">
          Não foi possível carregar as perguntas frequentes neste momento. Tente novamente mais
          tarde.
        </p>
      </div>
    );
  }

  return <PerguntasFrequentes perguntas={data ?? []} />;
}
