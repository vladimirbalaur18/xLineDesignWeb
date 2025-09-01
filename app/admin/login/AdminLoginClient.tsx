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
import { getErrorMessage } from "@/lib/api-errors";
import { useOTPAuth } from "@/hooks/use-otp-auth";

const otpFormSchema = z.object({
  otpCode: z
    .string()
    .min(6, "Codul OTP trebuie să aibă 6 cifre")
    .max(6, "Codul OTP trebuie să aibă 6 cifre"),
});

type FormMessageType = { message: string; type: "error" | "success" };
type FormStepsType = "request" | "verify";
export default function AdminLoginPage() {
  const [step, setStep] = useState<FormStepsType>("request");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [formMessage, setFormMessage] = useState<FormMessageType>({
    message: "",
    type: "error",
  });
  const router = useRouter();
  const { sendOTP, verifyOTP, isLoading } = useOTPAuth();
  const otpForm = useForm<z.infer<typeof otpFormSchema>>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {
      otpCode: "",
    },
  });

  const handleSendOTP = async () => {
    try {
      const data = await sendOTP();
      if (!data.success) {
        throw new Error(data.message);
      }
      setSessionId(data.sessionId);
      setStep("verify");
      setFormMessage({
        message: data.message,
        type: "success",
      });
    } catch (error) {
      setFormMessage({
        message: getErrorMessage(error),
        type: "error",
      });
    }
  };

  const onVerifyOtpSubmit = async (values: z.infer<typeof otpFormSchema>) => {
    try {
      const data = await verifyOTP(sessionId!, values.otpCode);
      if (!data.success) {
        throw new Error(data.message);
      }
      setFormMessage({
        message: data.message,
        type: "success",
      });
      router.push("/admin");
    } catch (error) {
      setFormMessage({
        message: getErrorMessage(error),
        type: "error",
      });
    }
  };

  const handleBack = () => {
    setStep("request");
    otpForm.reset();
    setFormMessage({
      message: "",
      type: "error",
    });
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
          {formMessage.message.length > 0 && formMessage.type === "error" && (
            <Alert variant="destructive">
              <AlertDescription>{formMessage.message}</AlertDescription>
            </Alert>
          )}

          {formMessage.message.length > 0 && formMessage.type === "success" && (
            <Alert className="border-green-200 bg-green-50">
              <MessageCircle className="h-4 w-4 text-green-800" />
              <AlertDescription className="text-green-800">
                {formMessage.message}
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
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                {step === "request" && isLoading && (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Trimitere OTP...
                  </>
                )}
                {step === "request" && !isLoading && (
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
                    disabled={isLoading || !otpForm.formState.isValid}
                    className="w-full"
                    size="lg"
                  >
                    {isLoading && step === "verify" && (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verificare...
                      </>
                    )}
                    {step === "verify" &&
                      !isLoading &&
                      "Verifică & Autentifică-te"}
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleBack}
                    className="w-full"
                    disabled={isLoading}
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
