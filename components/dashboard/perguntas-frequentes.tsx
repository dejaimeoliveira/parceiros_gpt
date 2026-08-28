"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

import { cn } from "@/lib/utils";

export type Pergunta = {
  id: number;
  pergunta: string;
  resposta: string;
  categoria: string | null;
};

const OUTRAS_PERGUNTAS = "Outras Perguntas";

function groupByCategoria(perguntas: Pergunta[]) {
  const groups = new Map<string, Pergunta[]>();

  for (const item of perguntas) {
    const categoria = item.categoria?.trim() || OUTRAS_PERGUNTAS;
    const bucket = groups.get(categoria);
    if (bucket) {
      bucket.push(item);
    } else {
      groups.set(categoria, [item]);
    }
  }

  return Array.from(groups.entries());
}

function AccordionItem({ item, isOpen, onToggle }: { item: Pergunta; isOpen: boolean; onToggle: () => void }) {
  const questionId = `faq-question-${item.id}`;
  const answerId = `faq-answer-${item.id}`;

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/60">
      <h3>
        <button
          type="button"
          id={questionId}
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-sm font-semibold text-slate-900 outline-none transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <span>{item.pergunta}</span>
          <ChevronDown
            className={cn("h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200", isOpen && "rotate-180")}
          />
        </button>
      </h3>
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="whitespace-pre-line px-5 pb-4 text-sm leading-relaxed text-slate-600">{item.resposta}</p>
        </div>
      </div>
    </div>
  );
}

export function PerguntasFrequentes({ perguntas }: { perguntas: Pergunta[] }) {
  const [search, setSearch] = useState("");
  const [openIds, setOpenIds] = useState<Set<number>>(new Set());

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return perguntas;

    return perguntas.filter((item) => {
      const categoria = item.categoria?.toLowerCase() ?? "";
      return (
        item.pergunta.toLowerCase().includes(term) ||
        item.resposta.toLowerCase().includes(term) ||
        categoria.includes(term)
      );
    });
  }, [perguntas, search]);

  const groups = useMemo(() => groupByCategoria(filtered), [filtered]);

  const toggleItem = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Central do Parceiro
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          Perguntas Frequentes
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
          Encontre respostas rápidas para as dúvidas mais comuns sobre o Programa de Parceiros
          Catedral.
        </p>

        <div className="relative mt-6 max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquisar pergunta..."
            className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 py-3 pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {perguntas.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-lg font-semibold text-slate-900">
            Nenhuma pergunta disponível no momento
          </p>
          <p className="mt-2 text-sm text-slate-600">Novas respostas serão adicionadas em breve.</p>
        </div>
      ) : groups.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-sm text-slate-600">Nenhuma pergunta encontrada.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {groups.map(([categoria, items]) => (
            <div key={categoria} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">{categoria}</h2>
              <div className="mt-4 space-y-3">
                {items.map((item) => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openIds.has(item.id)}
                    onToggle={() => toggleItem(item.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
