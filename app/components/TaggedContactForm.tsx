"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type TaggedContactFormProps = {
  children: ReactNode;
  className?: string;
  source: string;
};

export default function TaggedContactForm({ children, className, source }: TaggedContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      if (!response.ok) throw new Error("Contact request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
      <div role="status" aria-live="polite">
        {status === "sending" && <p className="text-sm text-slate-600">Sending your message…</p>}
        {status === "success" && <p className="text-sm text-green-700">Thank you! Your message was received.</p>}
        {status === "error" && <p className="text-sm text-red-700">We couldn't send your message. Please email info@quantumenergybeds.com or try again later.</p>}
      </div>
    </form>
  );
}
