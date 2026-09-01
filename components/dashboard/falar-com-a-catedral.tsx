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
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text-muted">
          Central do Parceiro
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-text">Falar com a Catedral</h1>
        <p className="mt-2 text-base text-brand-text-muted">Precisa de ajuda?</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
          Para dúvidas sobre indicações, comissões, pagamentos, materiais ou qualquer outro assunto
          relacionado ao Programa de Parceiros Catedral, fale diretamente com o Dejaime, responsável pelas
          parcerias.
        </p>

        <div className="mt-6 flex items-center gap-4 rounded-2xl border border-brand-border bg-brand-background p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">WhatsApp</p>
            <p className="text-lg font-semibold text-brand-text">{WHATSAPP_DISPLAY}</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-brand-dark">
            <MessageCircle className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-brand-text">Mensagem</h2>
        </div>
        <p className="mt-3 text-sm text-brand-text-muted">
          Você pode editar a mensagem abaixo antes de enviar pelo WhatsApp.
        </p>

        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          rows={5}
          className="mt-4 w-full rounded-2xl border border-brand-border bg-brand-background/60 px-4 py-3 text-sm text-brand-text-muted shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />

        <div className="mt-5">
          <button
            type="button"
            onClick={handleEnviar}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-brand-dark shadow-sm transition hover:bg-brand-primary-hover"
          >
            <MessageCircle className="h-4 w-4" />
            Enviar mensagem pelo WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
