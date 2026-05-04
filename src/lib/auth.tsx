import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type User = { email: string; username: string; trialStart: number };
type AuthCtx = {
  user: User | null;
  signup: (u: User) => void;
  logout: () => void;
  trialDaysLeft: number;
  trialExpired: boolean;
  subscribed: boolean;
  subscribe: () => void;
  expireTrialDemo: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);
const KEY = "tp_user";
const SUB_KEY = "tp_subscribed";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem(KEY);
    if (raw) setUser(JSON.parse(raw));
    setSubscribed(localStorage.getItem(SUB_KEY) === "1");
  }, []);

  const signup = (u: User) => {
    localStorage.setItem(KEY, JSON.stringify(u));
    setUser(u);
  };
  const logout = () => {
    localStorage.removeItem(KEY);
    setUser(null);
  };
  const subscribe = () => {
    localStorage.setItem(SUB_KEY, "1");
    setSubscribed(true);
  };
  const expireTrialDemo = () => {
    if (!user) return;
    const u = { ...user, trialStart: Date.now() - 1000 * 60 * 60 * 24 * 65 };
    localStorage.setItem(KEY, JSON.stringify(u));
    setUser(u);
  };

  const TRIAL_DAYS = 60;
  const elapsed = user ? (Date.now() - user.trialStart) / (1000 * 60 * 60 * 24) : 0;
  const trialDaysLeft = Math.max(0, Math.ceil(TRIAL_DAYS - elapsed));
  const trialExpired = !!user && trialDaysLeft <= 0 && !subscribed;

  return (
    <Ctx.Provider value={{ user, signup, logout, trialDaysLeft, trialExpired, subscribed, subscribe, expireTrialDemo }}>
      {children}
    </Ctx.Provider>
  );
}

export const useAuth = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth outside provider");
  return c;
};
