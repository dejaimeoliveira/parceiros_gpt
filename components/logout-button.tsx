"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton(props: ButtonProps) {
  const router = useRouter();

  const logout = async () => {
    try {
      await fetch("/api/auth/signout", { method: "POST" });
    } catch {
      // ignore network errors and still route to login
    }

    // Clear browser caches, storage and unregister service workers so
    // pressing Back doesn't return to an authenticated/cached view.
    try {
      if (typeof window !== "undefined") {
        try {
          if (window.caches && typeof window.caches.keys === "function") {
            const keys = await caches.keys();
            await Promise.all(keys.map((k) => caches.delete(k)));
          }
        } catch {}

        try {
          localStorage.clear();
        } catch {}

        try {
          sessionStorage.clear();
        } catch {}

        try {
          if (navigator.serviceWorker && navigator.serviceWorker.getRegistrations) {
            const regs = await navigator.serviceWorker.getRegistrations();
            await Promise.all(regs.map((r) => r.unregister()));
          }
        } catch {}
      }
    } catch {}

    // Replace history entry so Back doesn't return to protected page
    try {
      router.replace("/auth/login");
    } catch {
      // fallback
      window.location.replace("/auth/login");
    }
  };

  return <Button onClick={logout} {...props}>Sair</Button>;
}

