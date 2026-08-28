"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

function calcularDataLimite(dataIndicacao: Date) {
  const dataLimite = new Date(dataIndicacao);
  dataLimite.setDate(dataLimite.getDate() + 90);
  return dataLimite.toISOString().slice(0, 10);
}

export default function Page() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!nome.trim()) {
      setError("Preencha o nome do cliente.");
      return;
    }
    if (!cnpj.trim()) {
      setError("Preencha o CNPJ do cliente.");
      return;
    }

    setLoading(true);
    try {
      const supabase = createClient();
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData?.user?.id ?? null;

      if (!userId) {
        throw new Error("Sessão expirada. Faça login novamente.");
      }

      const { data: parceiro } = await supabase
        .from("wp_parceiros")
        .select("email")
        .eq("uid", userId)
        .maybeSingle();

      const payload: any = {
        nome_contato: nome || null,
        email: email || null,
        telefone: telefone || null,
        empresa: empresa || null,
        cnpj: cnpj,
        observacao: descricao || null,
        uid_parceiro: userId,
        email_parceiro: parceiro?.email ?? null,
        data_limite: calcularDataLimite(new Date()),
      };

      const { error: insertError } = await supabase.from("wp_indicacoes").insert(payload as any);
      if (insertError) throw insertError;

      router.push("/protected/indicacoes/minhas-indicacoes");
    } catch (err: any) {
      setError(err?.message || "Erro ao enviar indicação.");
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold">Indicar Cliente</h1>

      <form onSubmit={handleSubmit} className="mt-6 max-w-3xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700">Nome do cliente</label>
            <input
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">E-mail</label>
            <input
              placeholder="exemplo@cliente.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">CNPJ *</label>
            <input
              placeholder="00.000.000/0000-00"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Telefone</label>
            <input
              placeholder="(00) 00000-0000"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Empresa</label>
            <input
              placeholder="Razão social"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-slate-700">Observações</label>
          <textarea
            placeholder="Informações adicionais"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            rows={5}
          />
        </div>

        {error ? <div className="mt-3 text-sm text-red-600">{error}</div> : null}

        <div className="mt-6 flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 px-4 py-2 text-sm font-semibold text-white"
          >
            {loading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : null}
            {loading ? "Enviando..." : "Enviar indicação"}
          </button>

          <button type="button" onClick={() => router.push("/protected")} className="text-sm text-slate-600 hover:underline">
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}
