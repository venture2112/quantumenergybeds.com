"use client";

import type { FormEvent, ReactNode } from "react";

type TaggedContactFormProps = {
  children: ReactNode;
  className?: string;
  source: string;
};

export default function TaggedContactForm({
  children,
  className,
  source,
}: TaggedContactFormProps) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 5000);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source }),
        signal: controller.signal,
      });
    } catch (error) {
      console.error("Global Control contact sync failed:", error);
    } finally {
      window.clearTimeout(timeout);
      form.submit();
    }
  }

  return (
    <form
      action="https://formsubmit.co/info@quantumenergybeds.com"
      method="POST"
      className={className}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}
