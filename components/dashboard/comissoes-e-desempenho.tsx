"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CalendarRange, Wallet } from "lucide-react";

export type MensalidadeComissao = {
  id: number;
  dt_recebimento: string | null;
  no_cliente: string | null;
  nu_cgc: string | null;
  vr_areceber: number | string | null;
};

function toNumber(value: number | string | null | undefined) {
  if (value === null || value === undefined) return 0;
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function comissaoDe(valorMensalidade: number) {
  return Math.round(valorMensalidade * 10) / 100;
}

function formatBRL(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatDateBR(value: string | null) {
  if (!value) return "-";
  const [ano, mes, dia] = value.split("-");
  if (!ano || !mes || !dia) return value;
  return `${dia}/${mes}/${ano}`;
}

function formatCnpj(value: string | null) {
  if (!value) return "-";
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 14) return value;
  return digits.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

function mesAtualLabel() {
  const label = new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function ComissoesEDesempenho({
  basePath,
  mensalidades,
}: {
  basePath: string;
  mensalidades: MensalidadeComissao[];
}) {
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [erroFiltro, setErroFiltro] = useState<string | null>(null);

  const anoMesAtual = useMemo(() => {
    const hoje = new Date();
    return `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}`;
  }, []);

  const totalMesAtual = useMemo(
    () =>
      mensalidades
        .filter((item) => (item.dt_recebimento ?? "").startsWith(anoMesAtual))
        .reduce((acc, item) => acc + comissaoDe(toNumber(item.vr_areceber)), 0),
    [mensalidades, anoMesAtual],
  );

  const totalGeral = useMemo(
    () => mensalidades.reduce((acc, item) => acc + comissaoDe(toNumber(item.vr_areceber)), 0),
    [mensalidades],
  );

  const listaExibida = useMemo(() => {
    if (!filtroAtivo) return mensalidades;
    return mensalidades.filter((item) => {
      const data = item.dt_recebimento ?? "";
      return data >= dataInicio && data <= dataFim;
    });
  }, [mensalidades, filtroAtivo, dataInicio, dataFim]);

  const totalPeriodo = useMemo(
    () => listaExibida.reduce((acc, item) => acc + comissaoDe(toNumber(item.vr_areceber)), 0),
    [listaExibida],
  );

  function handleFiltrar() {
    if (!dataInicio || !dataFim) {
      setErroFiltro("Informe as duas datas para filtrar o período.");
      return;
    }
    if (dataInicio > dataFim) {
      setErroFiltro("A data inicial não pode ser depois da data final.");
      return;
    }
    setErroFiltro(null);
    setFiltroAtivo(true);
  }

  function handleVoltarExtratoCompleto() {
    setFiltroAtivo(false);
    setErroFiltro(null);
  }

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text-muted">
          Programa de Parceiros Catedral
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-text">Comissões e Desempenho</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Acompanhe as comissões geradas a partir das mensalidades já recebidas pela Catedral dos
          clientes que você indicou. Cada comissão corresponde a{" "}
          <strong className="font-semibold text-brand-text">10% do valor da mensalidade paga</strong>.
        </p>
        <div className="mt-4">
          <Link
            href={`${basePath}/comissoes/como-funcionam`}
            className="text-sm font-semibold text-brand-text underline underline-offset-2 hover:text-brand-primary"
          >
            Como funcionam as comissões
          </Link>
        </div>
      </div>

      {/* Resumo */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
              <Wallet className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
              Comissão de {mesAtualLabel()}
            </p>
          </div>
          <p className="mt-4 text-3xl font-bold text-brand-text">{formatBRL(totalMesAtual)}</p>
        </div>

        <div className="rounded-3xl border border-brand-primary/30 bg-brand-primary/10 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-brand-dark">
              <Wallet className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
              Comissão total (geral)
            </p>
          </div>
          <p className="mt-4 text-3xl font-bold text-brand-text">{formatBRL(totalGeral)}</p>
        </div>
      </div>

      {/* Filtro por período */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <CalendarRange className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold text-brand-text">Filtrar por período</h2>
        </div>

        <div className="mt-5 flex flex-wrap items-end gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
              Data inicial
            </label>
            <input
              type="date"
              value={dataInicio}
              onChange={(e) => setDataInicio(e.target.value)}
              className="mt-1 rounded-lg border border-brand-border bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
              Data final
            </label>
            <input
              type="date"
              value={dataFim}
              onChange={(e) => setDataFim(e.target.value)}
              className="mt-1 rounded-lg border border-brand-border bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
          <button
            type="button"
            onClick={handleFiltrar}
            className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-4 py-2 text-sm font-semibold text-brand-dark shadow-sm transition hover:bg-brand-primary-hover"
          >
            Filtrar
          </button>
          {filtroAtivo ? (
            <button
              type="button"
              onClick={handleVoltarExtratoCompleto}
              className="inline-flex items-center justify-center rounded-xl border border-brand-border px-4 py-2 text-sm font-semibold text-brand-text-muted transition hover:bg-brand-background"
            >
              Ver extrato completo
            </button>
          ) : null}
        </div>

        {erroFiltro ? <p className="mt-3 text-sm text-red-600">{erroFiltro}</p> : null}

        {filtroAtivo ? (
          <div className="mt-5 rounded-2xl border border-brand-border bg-brand-background/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
              Comissão no período selecionado
            </p>
            <p className="mt-1 text-2xl font-bold text-brand-text">{formatBRL(totalPeriodo)}</p>
          </div>
        ) : null}
      </div>

      {/* Extrato */}
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-brand-text">
          {filtroAtivo ? "Extrato do período selecionado" : "Extrato financeiro completo"}
        </h2>

        {listaExibida.length === 0 ? (
          <p className="mt-4 text-sm text-brand-text-muted">
            {mensalidades.length === 0
              ? "Você ainda não possui comissões registradas."
              : "Nenhuma mensalidade recebida no período selecionado."}
          </p>
        ) : (
          <div className="mt-5 overflow-x-auto rounded-2xl border border-brand-border">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-brand-background text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
                <tr>
                  <th className="px-4 py-3">Recebimento</th>
                  <th className="px-4 py-3">Cliente</th>
                  <th className="px-4 py-3">CNPJ</th>
                  <th className="px-4 py-3 text-right">Mensalidade</th>
                  <th className="px-4 py-3 text-right">Sua comissão (10%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {listaExibida.map((item) => {
                  const valorMensalidade = toNumber(item.vr_areceber);
                  return (
                    <tr key={item.id}>
                      <td className="px-4 py-3 text-brand-text-muted">{formatDateBR(item.dt_recebimento)}</td>
                      <td className="px-4 py-3 text-brand-text-muted">{item.no_cliente || "-"}</td>
                      <td className="px-4 py-3 text-brand-text-muted">{formatCnpj(item.nu_cgc)}</td>
                      <td className="px-4 py-3 text-right text-brand-text-muted">{formatBRL(valorMensalidade)}</td>
                      <td className="px-4 py-3 text-right font-semibold text-brand-text">
                        {formatBRL(comissaoDe(valorMensalidade))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="border-t border-brand-border bg-brand-background font-semibold text-brand-text">
                  <td className="px-4 py-3" colSpan={3}>
                    Total {filtroAtivo ? "do período" : "geral"}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {formatBRL(listaExibida.reduce((acc, item) => acc + toNumber(item.vr_areceber), 0))}
                  </td>
                  <td className="px-4 py-3 text-right">{formatBRL(totalPeriodo)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
