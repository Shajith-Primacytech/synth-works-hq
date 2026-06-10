import { useEffect, useState, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/shajithautomate/30min";
const BOOKED_EVENT = "worqflo:calendly-booked";

function loadCalendly(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  const w = window as unknown as { Calendly?: { initPopupWidget: (o: { url: string }) => void } };
  if (w.Calendly) return Promise.resolve();

  // CSS
  if (!document.querySelector('link[data-calendly]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.setAttribute("data-calendly", "true");
    document.head.appendChild(link);
  }

  // JS
  return new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-calendly]');
    if (existing) {
      if (w.Calendly) resolve();
      else existing.addEventListener("load", () => resolve(), { once: true });
      return;
    }
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.setAttribute("data-calendly", "true");
    s.onload = () => resolve();
    document.body.appendChild(s);
  });
}

// Global listener — install once
let listenerInstalled = false;
function installGlobalListener() {
  if (listenerInstalled || typeof window === "undefined") return;
  listenerInstalled = true;
  window.addEventListener("message", (e: MessageEvent) => {
    const data = e.data as { event?: string } | null;
    if (data && typeof data === "object" && data.event === "calendly.event_scheduled") {
      try {
        sessionStorage.setItem(BOOKED_EVENT, "1");
      } catch {
        /* ignore */
      }
      window.dispatchEvent(new Event(BOOKED_EVENT));
    }
  });
}

export function BookCallButton({
  className,
  children,
  variant = "primary",
}: {
  className?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
}) {
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    installGlobalListener();
    try {
      if (sessionStorage.getItem(BOOKED_EVENT) === "1") setBooked(true);
    } catch {
      /* ignore */
    }
    const onBooked = () => setBooked(true);
    window.addEventListener(BOOKED_EVENT, onBooked);
    return () => window.removeEventListener(BOOKED_EVENT, onBooked);
  }, []);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await loadCalendly();
    const w = window as unknown as { Calendly?: { initPopupWidget: (o: { url: string }) => void } };
    if (w.Calendly) {
      w.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  };

  if (booked) {
    return (
      <span
        className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary/10 border border-primary/40 text-primary font-semibold animate-in fade-in zoom-in-95 duration-500 ${className ?? ""}`}
        role="status"
      >
        <CheckCircle2 className="w-4 h-4" />
        🎉 Thank you! Talk soon.
      </span>
    );
  }

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      data-variant={variant}
    >
      {children}
    </a>
  );
}
