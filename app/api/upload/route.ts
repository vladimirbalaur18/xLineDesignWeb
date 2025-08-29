import { NextRequest, NextResponse } from "next/server";
import { put, del } from "@vercel/blob";
import { requireAdminAuth } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  // Only allow authenticated admins to upload
  try {
    await requireAdminAuth(request);
  } catch (error) {
    if (error instanceof Response) {
      return error as any;
    }
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const dir = (formData.get("dir") as string | null) || "properties";

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const timestamp = Date.now();
    const key = `${dir}/${timestamp}-${safeName}`;

    const blob = await put(key, file, { access: "public" });

    return NextResponse.json({ url: blob.url });
  } catch (err) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await requireAdminAuth(request);
  } catch (error) {
    if (error instanceof Response) {
      return error as any;
    }
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json().catch(() => ({}));
    const urls: string[] = Array.isArray(body?.urls)
      ? body.urls
      : body?.url
      ? [body.url]
      : [];

    if (!urls.length) {
      return NextResponse.json(
        { error: "No url(s) provided" },
        { status: 400 }
      );
    }

    await del(urls);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
