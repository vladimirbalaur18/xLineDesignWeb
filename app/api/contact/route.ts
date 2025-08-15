import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema for contact form data
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Numele nu este valid" }),
  email: z.string().email({ message: "Te rugăm să introduci adresa de email" }),
  phone: z
    .string()
    .min(12, { message: "Numărul de telefon nu este valid" })
    .max(13, { message: "Numărul de telefon nu poate fi mai lung de 8 cifre" }), // Updated for prefix
  message: z.string().min(10, { message: "Mesajul e prea scurt" }),
  createdAt: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Telegram Bot configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendToTelegram(data: ContactFormData) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error("Telegram configuration is missing");
  }

  // Format the message with better structure
  const message = `
🔔 *Nou mesaj de contact*

👤 *Nume:* ${data.name}
📧 *Email:* ${data.email}
📱 *Telefon:* ${data.phone}
📝 *Mesaj:* ${data.message}
⏰ *Data:* ${
    data.createdAt
      ? new Date(data.createdAt).toLocaleString("ro-RO")
      : new Date().toLocaleString("ro-RO")
  }

---
*Trimis de la:* xLineDesign Website
  `.trim();

  const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Telegram API error:", errorData);
      throw new Error(`Telegram API error: ${response.status} - ${errorData}`);
    }

    const result = await response.json();

    if (!result.ok) {
      throw new Error(`Telegram API error: ${result.description}`);
    }

    return result;
  } catch (error) {
    console.error("Failed to send to Telegram:", error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log(process.env.TELEGRAM_BOT_TOKEN);
    console.log(process.env.TELEGRAM_CHAT_ID);
    // Check if Telegram is configured
    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      console.error("Telegram configuration missing");
      return NextResponse.json(
        {
          success: false,
          message:
            "Serviciul de contact nu este configurat momentan. Te rugăm să încerci mai târziu.",
        },
        { status: 503 }
      );
    }

    const body = await request.json();

    // Validate the incoming data
    const validatedData = contactFormSchema.parse(body);

    // Basic spam protection - check message length
    if (validatedData.message.length > 2000) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Mesajul este prea lung. Te rugăm să scrii un mesaj mai scurt.",
        },
        { status: 400 }
      );
    }

    // Send to Telegram
    await sendToTelegram(validatedData);

    return NextResponse.json({
      success: true,
      message: "Mesajul a fost trimis cu succes! Te vom contacta în curând.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Date invalide",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.",
      },
      { status: 500 }
    );
  }
}
