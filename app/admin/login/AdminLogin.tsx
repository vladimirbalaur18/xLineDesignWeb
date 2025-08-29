"use client";

import { useState, useEffect } from "react";
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
import { useRouter } from "next/navigation";
import { useRegister, useLogin } from "@/hooks/use-react-auth";

export default function AdminLoginPage() {
  const [step, setStep] = useState<"request" | "verify">("request");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [otpCode, setOtpCode] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const router = useRouter();
  const verifyOTP = useLogin();
  const sendOTP = useRegister();

  const handleSendOTP = async () => {
    sendOTP.mutate(
      {},
      {
        onSuccess: (user, variables, context) => {
          if (user && user.sessionId) {
            setSessionId(user.sessionId);
            setStep("verify");
            setSuccess(
              "Codul OTP a fost trimis pe Telegram! Vă rugăm să verificați chatul."
            );
          } else {
            setError("Failed to send OTP code");
          }
        },
      }
    );
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

    if (!sessionId) {
      setError("Nu a putut fi creată sesiunea");
      return;
    }

    verifyOTP.mutate(
      { otpCode, sessionId },
      {
        onSuccess: (user, variables, context) => {
          if (user) {
            setSuccess("Authentication successful!");
            router.refresh();
          } else {
            setError("Invalid OTP code");
          }
        },
      }
    );
  };

  const handleBack = () => {
    setStep("request");
    setOtpCode("");
    setError("");
    setSuccess("");
    setSessionId(null);
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
              <MessageCircle className="h-4 w-4 text-green-800" />
              <AlertDescription className="text-green-800">
                {success}
              </AlertDescription>
            </Alert>
          )}

          {step === "request" ? (
            <div className="space-y-4">
              <div className="text-sm space-y-2">
                <p>
                  • Un cod OTP de 6 cifre va fi trimis în chatul dvs. Telegram
                </p>
                <p>• Codul expiră în 5 minute</p>
                <p>
                  • Asigurați-vă că botul dvs. Telegram este configurat corect
                </p>
              </div>

              <Button
                onClick={handleSendOTP}
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {step === "request" && sendOTP.isPending && (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Trimitere OTP...
                  </>
                )}
                {step === "request" && !sendOTP.isPending && (
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
                  {verifyOTP.isPending && step === "verify" && (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verificare...
                    </>
                  )}
                  {step === "verify" &&
                    !verifyOTP.isPending &&
                    "Verifică & Autentifică-te"}
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
