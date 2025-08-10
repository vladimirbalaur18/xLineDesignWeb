import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Share2, Link as LinkIcon } from "lucide-react";

interface SharePopoverProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  propertyUrl: string;
  shareText: string;
  className?: string;
}

export const SharePopover: React.FC<SharePopoverProps> = ({
  open,
  onOpenChange,
  propertyUrl,
  shareText,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label="Share"
          className={
            "bg-black/50 border-white/20 hover:bg-black/70 text-white backdrop-blur-sm transition-all duration-300 rounded-md border px-3 py-2 flex items-center justify-center " +
            className
          }
        >
          <Share2 className="w-4 h-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="bg-gradient-to-br from-black/95 via-gray-900/90 to-black/80 border-white/10 w-72 max-w-full p-5 rounded-2xl shadow-2xl animate-fade-in-up"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
        >
          <div className="text-white text-center font-bold text-lg mb-1">
            Distribuie acest proiect
          </div>
          <div className="text-white/70 text-center text-sm mb-4">
            Arată-l prietenilor tăi pe rețelele sociale preferate!
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                propertyUrl
              )}&quote=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 focus:outline-none"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 group-hover:bg-[#1877f2] group-hover:shadow-[0_0_0_4px_rgba(24,119,242,0.15)] transition-all duration-200">
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white group-hover:text-white"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </span>
              <span className="text-xs font-medium group-hover:text-[#1877f2] transition-colors">
                Facebook
              </span>
            </a>
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(
                propertyUrl
              )}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 focus:outline-none"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 group-hover:bg-[#0088cc] group-hover:shadow-[0_0_0_4px_rgba(0,136,204,0.15)] transition-all duration-200">
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white group-hover:text-white"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </span>
              <span className="text-xs font-medium group-hover:text-[#0088cc] transition-colors">
                Telegram
              </span>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                propertyUrl
              )}&title=${encodeURIComponent(
                shareText
              )}&summary=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 focus:outline-none"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 group-hover:bg-[#0077b5] group-hover:shadow-[0_0_0_4px_rgba(0,119,181,0.15)] transition-all duration-200">
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white group-hover:text-white"
                >
                  <path d="M22.23 0H1.77C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.77 24h20.459C23.208 24 24 23.229 24 22.271V1.723C24 .771 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.633a2.07 2.07 0 1 1 0-4.139 2.07 2.07 0 0 1 0 4.139zm15.112 12.819h-3.56v-5.569c0-1.328-.027-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667h-3.56V9h3.419v1.561h.049c.477-.899 1.637-1.85 3.37-1.85 3.602 0 4.267 2.369 4.267 5.455v6.286z" />
                </svg>
              </span>
              <span className="text-xs font-medium group-hover:text-[#0077b5] transition-colors">
                LinkedIn
              </span>
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                shareText + " " + propertyUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 focus:outline-none"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 group-hover:bg-[#25d366] group-hover:shadow-[0_0_0_4px_rgba(37,211,102,0.15)] transition-all duration-200">
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white group-hover:text-white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.366.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zM12.004 2.003C6.478 2.003 2 6.481 2 12.007c0 1.989.522 3.951 1.514 5.664L2.05 22.949l5.406-1.436A9.953 9.953 0 0 0 12.004 22c5.526 0 10.004-4.478 10.004-9.993 0-5.526-4.478-10.004-10.004-10.004zm5.807 15.507c-.243.693-1.417 1.317-1.94 1.398-.524.08-1.16.114-1.872-.117-.41-.13-1.025-.334-1.7-.619-2.982-1.166-4.926-4.13-5.077-4.328-.149-.198-1.213-1.612-1.213-3.074 0-1.462.768-2.181 1.04-2.478.272-.298.594-.373.792-.373.199 0 .398.002.571.01.182.01.427-.069.669.51.247.596.841 2.058.916 2.207.075.149.124.323.025.521-.1.199-.149.323-.298.497-.148.173-.312.387-.446.52-.148.148-.303.309-.13.606.173.298.77 1.271 1.653 2.059 1.135 1.012 2.093 1.326 2.39 1.475.297.148.471.123.644-.075.173-.198.742-.867.94-1.164.199-.298.397-.249.67-.15.272.1 1.733.818 2.03.967.273.149.456.223.523.347.075.125.075.719-.173 1.413z" />
                </svg>
              </span>
              <span className="text-xs font-medium group-hover:text-[#25d366] transition-colors">
                WhatsApp
              </span>
            </a>
            {/* Others option */}
            <button
              type="button"
              className="group flex flex-col items-center gap-2 focus:outline-none"
              onClick={async () => {
                if (
                  typeof window !== "undefined" &&
                  typeof navigator.share === "function"
                ) {
                  try {
                    await navigator.share({
                      title: document.title,
                      text: shareText,
                      url: propertyUrl,
                    });
                  } catch (e) {
                    // user cancelled or error
                  }
                } else if (typeof window !== "undefined") {
                  await navigator.clipboard.writeText(propertyUrl);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }
              }}
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 group-hover:bg-primary group-hover:shadow-[0_0_0_4px_rgba(255,255,255,0.10)] transition-all duration-200">
                <LinkIcon className="w-8 h-8 text-white group-hover:text-white" />
              </span>
              <span className="text-xs font-medium group-hover:text-primary transition-colors">
                {typeof window !== "undefined" &&
                typeof navigator.share === "function"
                  ? "Distribuie..."
                  : copied
                  ? "Link copiat!"
                  : "Altele"}
              </span>
            </button>
          </div>
        </motion.div>
      </PopoverContent>
    </Popover>
  );
};
