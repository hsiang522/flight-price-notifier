import { useEffect } from "react";
import { PlaneTakeoff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Dashboard() {
  usePageMeta(
    "Dashboard — Flight Price Notifier",
    "你的航線追蹤儀表板 — Flight Price Notifier app shell.",
  );

  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate("/signin");
  }, [loading, user, navigate]);

  if (loading || !user) {
    return (
      <div className="grid min-h-screen place-items-center bg-background">
        <p className="text-sm text-muted-foreground">載入中…</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-primary shadow-glow">
              <PlaneTakeoff className="size-4 text-primary-foreground" />
            </span>
            Flight Price Notifier
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={async () => {
              await signOut();
              navigate("/");
            }}
          >
            Sign out / 登出
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-16">
        <h1 className="animate-fade-up text-3xl font-semibold tracking-tight">Hi {user.email}</h1>
        <div className="mt-8 animate-fade-up rounded-2xl border border-border bg-card p-8">
          <p className="text-base">
            你的航線追蹤儀表板即將上線 — 下一個里程碑會加上訂閱航線的功能。
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Your dashboard is coming soon. Route-subscription will be added in the next milestone.
          </p>
        </div>
      </main>
    </div>
  );
}
