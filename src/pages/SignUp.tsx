import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthShell } from "@/components/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { usePageMeta } from "@/hooks/usePageMeta";
import { supabase } from "@/integrations/supabase/client";

export default function SignUp() {
  usePageMeta(
    "Sign up — Flight Price Notifier",
    "註冊 Flight Price Notifier，設定目標票價並接收降價 email 通知。",
  );

  const navigate = useNavigate();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (user) navigate("/app");
  }, [user, navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/app` },
    });
    setBusy(false);
    if (signUpError) {
      setError(signUpError.message);
      return;
    }
    navigate("/app");
  };

  return (
    <AuthShell title="建立帳號 / Create account" subtitle="設定航線與目標價，降價立刻通知你。">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">密碼 / Password</Label>
          <Input
            id="password"
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" className="w-full" disabled={busy}>
          {busy ? "註冊中…" : "Sign up / 註冊"}
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        已經有帳號？{" "}
        <Link to="/signin" className="text-primary-glow hover:underline">
          登入 / Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
