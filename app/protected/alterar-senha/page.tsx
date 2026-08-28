import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

import { AlterarSenha } from "@/components/dashboard/alterar-senha";

export default async function Page() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  const email = data?.user?.email;

  if (error || !email) {
    redirect("/auth/login");
  }

  return <AlterarSenha email={email} />;
}
