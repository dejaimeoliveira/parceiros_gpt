import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

import { ComissoesEDesempenho, type MensalidadeComissao } from "@/components/dashboard/comissoes-e-desempenho";

async function fetchComissoes() {
  const supabase = await createClient();
  const { data: claimsData } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;

  if (!userId) {
    redirect("/auth/login");
  }

  const { data: parceiro, error: parceiroError } = await supabase
    .from("wp_parceiros")
    .select("id")
    .eq("uid", userId)
    .maybeSingle();

  if (parceiroError || !parceiro) {
    return { parceiro: null, mensalidades: [] as MensalidadeComissao[], error: parceiroError };
  }

  const { data, error } = await supabase
    .from("wp_mensalidadesrecebidas")
    .select("id, dt_recebimento, no_cliente, nu_cgc, vr_areceber")
    .eq("parceiro_id", parceiro.id)
    .not("dt_recebimento", "is", null)
    .order("dt_recebimento", { ascending: false });

  return { parceiro, mensalidades: (data as MensalidadeComissao[]) ?? [], error };
}

export default async function Page() {
  const { parceiro, mensalidades, error } = await fetchComissoes();

  if (!parceiro) {
    return (
      <div className="rounded-3xl border border-brand-border bg-white p-6 text-center shadow-sm sm:p-8">
        <p className="text-lg font-semibold text-brand-text">Cadastro não encontrado</p>
        <p className="mt-2 text-sm text-brand-text-muted">
          Não foi possível localizar seu cadastro de parceiro. Entre em contato com a Catedral.
        </p>
      </div>
    );
  }

  if (error) {
    console.error("Erro ao buscar wp_mensalidadesrecebidas:", error);

    return (
      <div className="rounded-3xl border border-brand-border bg-white p-6 text-center shadow-sm sm:p-8">
        <p className="text-lg font-semibold text-brand-text">Não foi possível carregar suas comissões</p>
        <p className="mt-2 text-sm text-brand-text-muted">Tente novamente mais tarde.</p>
      </div>
    );
  }

  return <ComissoesEDesempenho basePath="/portal" mensalidades={mensalidades} />;
}
