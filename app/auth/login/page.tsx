import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <main className="min-h-svh bg-slate-100 px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto w-full max-w-[1180px]">
        <header className="mb-8 text-left md:mb-10">
          <h1 className="text-4xl font-black tracking-[-0.06em] text-slate-900 md:text-6xl">
            Portal de Parceiros
          </h1>
          <p className="mt-2 text-xl text-slate-600 md:text-2xl">Catedral Automação</p>
        </header>

        <div className="mx-auto max-w-[540px]">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
