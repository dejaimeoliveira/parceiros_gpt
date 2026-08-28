"use client";

import { useState } from "react";
import { KeyRound, MailCheck } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

function maskEmail(email: string) {
  const [local, domain] = email.split("@");
  if (!domain) return email;
  const visible = local.slice(0, Math.min(2, local.length));
  return `${visible}***@${domain}`;
}

export function AlterarSenha({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleEnviar = async () => {
    if (status === "sending") return;
    setStatus("sending");

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      });
      if (error) throw error;
      setStatus("sent");
    } catch (err) {
      console.error("Erro ao solicitar link de redefinição de senha:", err);
      setStatus("error");
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Portal</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Alterar Senha</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
          Para sua segurança, enviaremos um link de redefinição para o e-mail cadastrado na sua
          conta. O link terá validade de 30 minutos.
        </p>

        {status === "sent" ? (
          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <MailCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900">Verifique seu e-mail</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                Enviamos um link para alteração da senha. O link é válido por 30 minutos. Verifique
                também a pasta de spam ou lixo eletrônico.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                <KeyRound className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  E-mail cadastrado
                </p>
                <p className="text-lg font-semibold text-slate-900">{maskEmail(email)}</p>
              </div>
            </div>

            {status === "error" ? (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                <p className="font-semibold">Não foi possível enviar o link</p>
                <p className="mt-1">Tente novamente em alguns instantes.</p>
              </div>
            ) : null}

            <div className="mt-6">
              <button
                type="button"
                onClick={handleEnviar}
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Enviar link para alterar senha"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
