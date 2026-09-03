import { Link } from "@tanstack/react-router";
import { PlaneTakeoff } from "lucide-react";
import type { ReactNode } from "react";

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-hero-glow">
      <header className="mx-auto flex h-16 w-full max-w-6xl items-center px-5">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-primary shadow-glow">
            <PlaneTakeoff className="size-4 text-primary-foreground" />
          </span>
          Flight Price Notifier
        </Link>
      </header>
      <main className="flex flex-1 items-center justify-center px-5 py-12">
        <div className="w-full max-w-md animate-fade-up rounded-2xl border border-border bg-card p-8">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 mb-7 text-sm text-muted-foreground">{subtitle}</p>
          {children}
        </div>
      </main>
    </div>
  );
}
