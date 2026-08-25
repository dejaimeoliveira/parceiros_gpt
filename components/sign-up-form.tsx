"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function SignUpForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Cadastro desabilitado</CardTitle>
          <CardDescription>O cadastro público foi desativado.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <p>Solicite acesso ao Portal de Parceiros através do administrador.</p>
            <div className="mt-2 text-sm">
              <Link href="/auth/login" className="underline underline-offset-4">
                Voltar ao login
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
