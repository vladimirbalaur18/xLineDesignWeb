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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { SendOtpResponse, VerifyOtpResponse } from "@shared/api/auth";
import {
  getErrorMessage,
  isRateLimitError,
  isAuthError,
} from "@/lib/api-errors";

const otpFormSchema = z.object({
  otpCode: z
    .string()
    .min(6, "Codul OTP trebuie să aibă 6 cifre")
    .max(6, "Codul OTP trebuie să aibă 6 cifre"),
});

export default function AdminLoginPage() {
  const [step, setStep] = useState<"request" | "verify">("request");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const router = useRouter();
  const sendOTP = useMutation({
    mutationFn: () => apiRequest<SendOtpResponse>("POST", "/api/auth/send-otp"),
    onSuccess: (data) => {
      if (!data.success) {
        throw new Error(data.message);
      }
      setSessionId(data.sessionId);
      setStep("verify");
      setSuccess(
        "Codul OTP a fost trimis pe Telegram! Vă rugăm să verificați chatul."
      );
      setError("");
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(error);

      if (isRateLimitError(error)) {
        setError(
          "Prea multe încercări de trimitere. Vă rugăm să așteptați înainte de a încerca din nou."
        );
      } else setError(errorMessage);
      setSuccess("");
    },
  });
  const verifyOTP = useMutation({
    mutationFn: (values: { otpCode: string; sessionId: string }) =>
      apiRequest<VerifyOtpResponse>("POST", "/api/auth/verify-otp", {
        code: values.otpCode,
        sessionId: values.sessionId,
      }),
    onSuccess: (data) => {
      setSuccess("Authentication successful!");
      setError("");
      queryClient.invalidateQueries({
        queryKey: ["auth-status"],
      });
      router.replace("/admin");
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(error);
      setSuccess("");

      if (isAuthError(error)) {
        setError("Codul OTP este invalid.");
        return;
      }

      // If it's a rate limit error, show a more specific message
      if (isRateLimitError(error)) {
        setError(
          "Prea multe încercări de verificare. Vă rugăm să așteptați înainte de a încerca din nou."
        );
        return;
      }

      setError(errorMessage);
    },
  });

  const otpForm = useForm<z.infer<typeof otpFormSchema>>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {
      otpCode: "",
    },
  });

  const handleSendOTP = () => {
    sendOTP.mutate();
  };

  const onVerifyOtpSubmit = (values: z.infer<typeof otpFormSchema>) => {
    verifyOTP.mutate({ otpCode: values.otpCode, sessionId: sessionId! });
  };

  const handleBack = () => {
    setStep("request");
    otpForm.reset();
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
                disabled={sendOTP.isPending}
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
            <Form {...otpForm}>
              <form
                onSubmit={otpForm.handleSubmit(onVerifyOtpSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={otpForm.control}
                  name="otpCode"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="otp">Introduceți Codul OTP</Label>
                      <FormControl>
                        <Input
                          id="otp"
                          type="text"
                          placeholder="123456"
                          {...field}
                          onChange={(e) => {
                            field.onChange(
                              e.target.value.replace(/\D/g, "").slice(0, 6)
                            );
                          }}
                          className="text-center text-lg tracking-widest"
                          maxLength={6}
                          autoComplete="off"
                          autoFocus
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <p className="text-xs text-gray-500 text-center">
                  ID Sesiune: {sessionId}
                </p>

                <div className="space-y-2">
                  <Button
                    type="submit"
                    disabled={verifyOTP.isPending || !otpForm.formState.isValid}
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
                    disabled={verifyOTP.isPending}
                  >
                    Înapoi
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
