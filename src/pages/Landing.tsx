import { BellRing, PlaneTakeoff, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";

const features = [
  {
    icon: PlaneTakeoff,
    title: "盯緊熱門航線",
    subtitle: "Always-on route watching",
    body: "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。",
  },
  {
    icon: BellRing,
    title: "達標自動通知",
    subtitle: "Target-price email alerts",
    body: "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。",
  },
  {
    icon: XCircle,
    title: "隨時取消",
    subtitle: "Cancel anytime",
    body: "月訂閱制，不想用隨時停，沒有綁約。",
  },
];

export default function Landing() {
  usePageMeta(
    "Flight Price Notifier — 機票降價通知",
    "Set a route from Taipei and a target price — we email you the moment the cheapest fare drops to your budget.",
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <span className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-primary shadow-glow">
              <PlaneTakeoff className="size-4 text-primary-foreground" />
            </span>
            Flight Price Notifier
          </span>
          <Button asChild size="sm">
            <Link to="/signin">Sign in / 登入</Link>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-hero-glow">
          <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:py-32">
            <Reveal>
              <span className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                台北出發 · 東京 / 首爾
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
                <span className="text-gradient">Flight Price Notifier</span>
              </h1>
              <p className="mt-6 text-xl font-medium sm:text-2xl">
                設定航線與目標價，機票降價就通知你
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                Set a route and a target price — we email you when the fare drops.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <Link to="/signup">免費開始 / Get started</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/signin">Sign in / 登入</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 120}>
                <article className="h-full rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent">
                    <feature.icon className="size-5 text-primary-glow" />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold">{feature.title}</h2>
                  <p className="text-sm text-primary-glow">{feature.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-8 text-center text-sm text-muted-foreground">
          © 2026 Flight Price Notifier
        </div>
      </footer>
    </div>
  );
}
