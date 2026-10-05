"use client";

import { useState } from "react";
import { Button } from "./Button";
import { eventConfig } from "@/config/event";

/**
 * Botão de compartilhamento do convite via Web Share API,
 * com fallback para copiar o link.
 */
export function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const shareData = {
      title: eventConfig.title,
      text: `${eventConfig.invitationMessage} ${eventConfig.date} às ${eventConfig.time}.`,
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // usuário cancelou o compartilhamento, sem necessidade de tratamento
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={handleShare}
      aria-label="Compartilhar convite"
      className="text-sm"
    >
      {copied ? "Link copiado!" : "Compartilhar convite"}
    </Button>
  );
}
