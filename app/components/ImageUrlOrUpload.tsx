"use client";

import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Loader2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export type ImageUrlOrUploadProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  disabled?: boolean;
  inputId?: string;
  dir?: string;
  onUploadingChange?: (uploading: boolean) => void;
  onQueueDeleteUrl?: (url: string) => void;
};

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function isVercelBlobUrl(url: string): boolean {
  if (!isValidUrl(url)) return false;
  try {
    const { host } = new URL(url);
    return host.includes(".public.blob.vercel-storage.com");
  } catch {
    return false;
  }
}

export function ImageUrlOrUpload({
  value,
  onChange,
  placeholder,
  disabled,
  inputId,
  dir,
  onUploadingChange,
  onQueueDeleteUrl,
}: ImageUrlOrUploadProps) {
  const objectUrlRef = useRef<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [tab, setTab] = useState<"url" | "upload">("upload");
  const { toast } = useToast();

  const uploadedToVercel = value ? isVercelBlobUrl(value) : false;
  const isLocalBlob = typeof value === "string" && value.startsWith("blob:");
  const showUrlTab = !uploadedToVercel && !isLocalBlob;
  const isEmpty = !value || value.trim() === "";

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
    };
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // queue deletion of previous remote image if replacing
    if (value && isVercelBlobUrl(value)) {
      onQueueDeleteUrl?.(value);
    }
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    const blobUrl = URL.createObjectURL(file);
    objectUrlRef.current = blobUrl;
    onChange(blobUrl);

    const progressToast = toast({
      title: "Încărcare imagine",
      description: "Se încarcă fișierul...",
    });

    try {
      setIsUploading(true);
      onUploadingChange?.(true);
      const formData = new FormData();
      formData.append("file", file);
      if (dir) formData.append("dir", dir);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error("Upload failed");
      }
      const json = (await res.json()) as { url?: string };
      if (json?.url) {
        onChange(json.url);
        if (objectUrlRef.current) {
          URL.revokeObjectURL(objectUrlRef.current);
          objectUrlRef.current = null;
        }
      } else {
        throw new Error("Invalid upload response");
      }
    } catch (err) {
      toast({
        title: "Eroare la încărcare",
        description: "Nu s-a putut încărca imaginea. Încearcă din nou.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      onUploadingChange?.(false);
      progressToast.dismiss();
    }
  };

  if (isEmpty) {
    return (
      <div className="space-y-2">
        <Tabs value={tab} onValueChange={(v) => setTab(v as "url" | "upload")}>
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="url">URL</TabsTrigger>
            <TabsTrigger value="upload">Încarcă</TabsTrigger>
          </TabsList>
          <TabsContent value="url" className="mt-2">
            <Input
              id={inputId}
              placeholder={placeholder || "https://exemplu.ro/imagine.jpg"}
              value={value || ""}
              disabled={disabled}
              onChange={(e) => onChange(e.target.value)}
            />
          </TabsContent>
          <TabsContent value="upload" className="mt-2">
            <div className="flex items-center gap-2">
              <input
                id={inputId ? `${inputId}-file` : undefined}
                type="file"
                accept="image/*"
                disabled={disabled || isUploading}
                onChange={handleFileChange}
                className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {isUploading && (
                <span className="inline-flex items-center text-sm text-muted-foreground">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Încărcare...
                </span>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {showUrlTab && (
        <div className="mt-2">
          <Input
            id={inputId}
            placeholder={placeholder || "https://exemplu.ro/imagine.jpg"}
            value={value || ""}
            disabled={disabled}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      )}
      <div className="mt-2 flex items-center gap-2">
        <input
          id={inputId ? `${inputId}-file` : undefined}
          type="file"
          accept="image/*"
          disabled={disabled || isUploading}
          onChange={handleFileChange}
          className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
        />
        {isUploading ? (
          <span className="inline-flex items-center text-sm text-muted-foreground">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Încărcare...
          </span>
        ) : value && isVercelBlobUrl(value) ? (
          <span className="inline-flex items-center text-sm text-emerald-600">
            <Check className="mr-1 h-4 w-4" /> Încărcat
          </span>
        ) : null}
        {value && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={isUploading}
            onClick={async () => {
              try {
                if (value.startsWith("blob:")) {
                  if (objectUrlRef.current) {
                    URL.revokeObjectURL(objectUrlRef.current);
                    objectUrlRef.current = null;
                  }
                } else if (isVercelBlobUrl(value)) {
                  onQueueDeleteUrl?.(value);
                }
              } catch (err) {
              } finally {
                onChange("");
              }
            }}
          >
            Șterge
          </Button>
        )}
      </div>
    </div>
  );
}

export default ImageUrlOrUpload;

