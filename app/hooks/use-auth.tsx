"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import type { AdminUser } from "@/lib/auth";

interface AuthContextType {
  user: AdminUser | null;
  token: string | null;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Provides authentication state and actions to its descendant components via AuthContext.
 *
 * On mount it validates the current session (via "/api/auth/status"). If the session is authenticated
 * the provider exposes the user object and sets `token` to the sentinel value `"authenticated"` (the real
 * token is expected to be stored in an HTTP-only cookie). The provider exposes `login(token)`,
 * `logout()`, and `checkAuth()`:
 *
 * - `login(newToken)` stores the given token locally as an authentication indicator and triggers a fresh
 *   auth check to populate the user.
 * - `logout()` attempts a POST to "/api/auth/logout" (credentials included) and clears local auth state.
 * - `checkAuth()` revalidates authentication and updates `user`, `token`, and `isLoading`.
 *
 * Use this component to wrap parts of the app that need access to authentication via the `useAuth` hook.
 */
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/status", {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        if (data.authenticated && data.user) {
          setUser(data.user);
          // Token is in HTTP-only cookie, so we don't store it in state
          setToken("authenticated");
        } else {
          setUser(null);
          setToken(null);
        }
      } else {
        setUser(null);
        setToken(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = (newToken: string) => {
    setToken(newToken);
    // User data will be set by checkAuth
    checkAuth();
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout request failed:", error);
    }

    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    login,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Accesses the authentication context created by AuthProvider.
 *
 * Returns the current AuthContext value (user, token, isLoading, and auth actions).
 *
 * @returns The AuthContextType provided by the nearest AuthProvider.
 * @throws Error if called outside of an AuthProvider.
 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
