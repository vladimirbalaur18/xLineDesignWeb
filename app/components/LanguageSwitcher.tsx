"use client";

import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function LanguageSwitcher() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-black/50 backdrop-blur-sm border-white/20 hover:bg-black/70 h-12 w-12"
          >
            <Globe className="h-6 w-6 text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          side="top"
          sideOffset={8}
          className="bg-black/90 backdrop-blur-sm border-white/20 p-2"
          forceMount
        >
          <DropdownMenuItem className="text-white hover:bg-white/10 focus:bg-white/10 text-lg py-3 px-4">
            Română
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white hover:bg-white/10 focus:bg-white/10 text-lg py-3 px-4">
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
