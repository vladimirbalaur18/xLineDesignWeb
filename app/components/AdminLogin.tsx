"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Shield, MessageCircle } from "lucide-react";

interface AdminLoginProps {
  onLoginSuccess: (token: string) => void;
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [step, setStep] = useState<"request" | "verify">("request");
  const [sessionId, setSessionId] = useState<string>("");
  const [otpCode, setOtpCode] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSendOTP = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setSessionId(data.sessionId);
        setStep("verify");
        setSuccess("Codul OTP a fost trimis pe Telegram! Vă rugăm să verificați chatul.");
      } else {
        setError(data.message || "Trimiterea codului OTP a eșuat");
      }
    } catch (error) {
      console.error("Eroare la trimiterea OTP:", error);
      setError("Eroare de rețea. Vă rugăm să încercați din nou.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otpCode.trim()) {
      setError("Vă rugăm să introduceți codul OTP");
      return;
    }

    if (otpCode.length !== 6) {
      setError("Codul OTP trebuie să aibă 6 cifre");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          code: otpCode,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Autentificare reușită!");
        onLoginSuccess(data.token);
      } else {
        setError(data.message || "Cod OTP invalid");
      }
    } catch (error) {
      console.error("Eroare la verificarea OTP:", error);
      setError("Eroare de rețea. Vă rugăm să încercați din nou.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setStep("request");
    setOtpCode("");
    setError("");
    setSuccess("");
    setSessionId("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold">Acces Admin</CardTitle>
          <CardDescription>
            {step === "request"
              ? "Solicitați codul OTP prin Telegram pentru a accesa panoul de administrare"
              : "Introduceți codul OTP trimis în chatul dvs. Telegram"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-200 bg-green-50">
              <MessageCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-700">
                {success}
              </AlertDescription>
            </Alert>
          )}

          {step === "request" ? (
            <div className="space-y-4">
              <div className="text-sm space-y-2">
                <p>• Un cod OTP de 6 cifre va fi trimis în chatul dvs. Telegram</p>
                <p>• Codul expiră în 5 minute</p>
                <p>• Asigurați-vă că botul dvs. Telegram este configurat corect</p>
              </div>

              <Button
                onClick={handleSendOTP}
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Trimitere OTP...
                  </>
                ) : (
                  <>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Trimite Codul OTP
                  </>
                )}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">Introduceți Codul OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="123456"
                  value={otpCode}
                  onChange={(e) =>
                    setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  className="text-center text-lg tracking-widest"
                  maxLength={6}
                  autoComplete="off"
                  autoFocus
                />
                <p className="text-xs text-gray-500 text-center">
                  ID Sesiune: {sessionId}
                </p>
              </div>

              <div className="space-y-2">
                <Button
                  type="submit"
                  disabled={loading || otpCode.length !== 6}
                  className="w-full"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verificare...
                    </>
                  ) : (
                    "Verifică & Autentifică-te"
                  )}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleBack}
                  className="w-full"
                  disabled={loading}
                >
                  Înapoi
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
