"use client";

import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "5561999980021";
const WHATSAPP_DISPLAY = "(61) 99998-0021";
const DEFAULT_MESSAGE =
  "Olá! Sou parceiro da Catedral e gostaria de falar sobre o Programa de Parceiros.";

export function FalarComACatedral() {
  const [mensagem, setMensagem] = useState(DEFAULT_MESSAGE);

  const handleEnviar = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Central do Parceiro
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Falar com a Catedral</h1>
        <p className="mt-2 text-base text-slate-600">Precisa de ajuda?</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
          Para dúvidas sobre indicações, comissões, pagamentos, materiais ou qualquer outro assunto
          relacionado ao Programa de Parceiros Catedral, fale diretamente com o Dejaime, responsável pelas
          parcerias.
        </p>

        <div className="mt-6 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">WhatsApp</p>
            <p className="text-lg font-semibold text-slate-900">{WHATSAPP_DISPLAY}</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
            <MessageCircle className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Mensagem</h2>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          Você pode editar a mensagem abaixo antes de enviar pelo WhatsApp.
        </p>

        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          rows={5}
          className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <div className="mt-5">
          <button
            type="button"
            onClick={handleEnviar}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            <MessageCircle className="h-4 w-4" />
            Enviar mensagem pelo WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
