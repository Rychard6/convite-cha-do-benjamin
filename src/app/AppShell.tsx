"use client";

import { useState } from "react";
import { HeroSection } from "@/components/invitation/HeroSection";
import { LocationSection } from "@/components/location/LocationSection";
import { DiaperPreviewSection } from "@/components/diapers/DiaperPreviewSection";
import { ThankYouSection } from "@/components/thank-you/ThankYouSection";
import { RsvpModal } from "@/components/rsvp/RsvpModal";
import { DiaperModal } from "@/components/diapers/DiaperModal";
import { ScrollProgressNav } from "@/components/ui/ScrollProgressNav";
import { FloatingRsvpButton } from "@/components/ui/FloatingRsvpButton";

const sections = [
  { id: "hero", label: "Início" },
  { id: "location", label: "Como chegar" },
  { id: "diapers", label: "Fraldas" },
  { id: "thank-you", label: "Obrigado" },
];

/**
 * Experiência de página única com scroll-snap (ver globals.css).
 * RSVP e fraldas são ações dedicadas, abertas em overlay (seções 9 e 13).
 */
export function AppShell() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [diaperOpen, setDiaperOpen] = useState(false);

  return (
    <>
      <main>
        <HeroSection onOpenRsvp={() => setRsvpOpen(true)} />
        <LocationSection />
        <DiaperPreviewSection onOpenDiapers={() => setDiaperOpen(true)} />
        <ThankYouSection />
      </main>

      <ScrollProgressNav sections={sections} />
      <FloatingRsvpButton onOpen={() => setRsvpOpen(true)} />

      <RsvpModal open={rsvpOpen} onClose={() => setRsvpOpen(false)} />
      <DiaperModal open={diaperOpen} onClose={() => setDiaperOpen(false)} />
    </>
  );
}

