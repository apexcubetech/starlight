"use client";

import { useState } from "react";
import { CaptchaField } from "@/components/CaptchaField";
import { storySubmissionContent } from "@/content/story-submission";
import { trackEvent } from "@/components/GoogleAnalytics";
import { TamilText } from "@/components/TamilText";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

export function StorySubmissionForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaReady, setCaptchaReady] = useState(false);
  const [captchaKey, setCaptchaKey] = useState(0);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if (!started) {
      setStarted(true);
      trackEvent("story_submission_started");
    }
  };

  const resetCaptcha = () => {
    setCaptchaAnswer("");
    setCaptchaKey((key) => key + 1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!captchaAnswer.trim()) {
      setFormState("error");
      setErrorMessage("Please enter the CAPTCHA characters.");
      return;
    }

    try {
      const response = await fetch("/api/story-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone") || undefined,
          storyTitle: formData.get("storyTitle"),
          synopsis: formData.get("synopsis"),
          genre: formData.get("genre"),
          additionalInfo: formData.get("additionalInfo") || undefined,
          consent: formData.get("consent") === "on",
          captchaAnswer: captchaAnswer.trim(),
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Submission failed. Please try again.");
      }

      setFormState("success");
      trackEvent("story_submission_completed");
      form.reset();
      resetCaptcha();
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
      resetCaptcha();
    }
  };

  if (formState === "success") {
    return (
      <div className="card-static corner-accent rounded-sm p-8 text-center">
        <p className="text-3xl font-bold text-gold-text">✓</p>
        <h3 className="section-heading mt-4 text-xl">Thank You</h3>
        <p className="text-body mt-3">
          Your story has been submitted successfully. We will review it and be
          in touch if appropriate.
        </p>
        <TamilText className="mt-3 text-sm">
          உங்கள் கதை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது.
        </TamilText>
        <button
          type="button"
          onClick={() => setFormState("idle")}
          className="link-gold mt-6 text-sm"
        >
          Submit another story
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name *" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            maxLength={120}
            onFocus={handleStart}
            className={inputClass}
          />
        </Field>
        <Field label="Email *" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            onFocus={handleStart}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Phone (optional)" htmlFor="phone">
        <input
          id="phone"
          name="phone"
          type="tel"
          maxLength={20}
          className={inputClass}
        />
      </Field>

      <Field label="Story Title *" htmlFor="storyTitle">
        <input
          id="storyTitle"
          name="storyTitle"
          required
          maxLength={200}
          className={inputClass}
        />
      </Field>

      <Field label="Story / Synopsis *" htmlFor="synopsis">
        <textarea
          id="synopsis"
          name="synopsis"
          required
          rows={8}
          maxLength={10000}
          className={cn(inputClass, "resize-y")}
        />
      </Field>

      <Field label="Genre *" htmlFor="genre">
        <select id="genre" name="genre" required className={inputClass}>
          <option value="">Select genre</option>
          {storySubmissionContent.genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Additional Information (optional)" htmlFor="additionalInfo">
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows={4}
          maxLength={5000}
          className={cn(inputClass, "resize-y")}
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 accent-[var(--gold)]"
        />
        <span>{storySubmissionContent.consentText}</span>
      </label>

      <Field label="CAPTCHA *" htmlFor="captcha">
        <CaptchaField
          value={captchaAnswer}
          onChange={setCaptchaAnswer}
          onReadyChange={setCaptchaReady}
          resetKey={captchaKey}
          inputClassName={inputClass}
        />
      </Field>

      {formState === "error" && errorMessage && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={formState === "submitting" || !captchaReady}
        className="cursor-pointer btn-gold w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {formState === "submitting" ? "Submitting..." : "Submit Story"}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-sm border border-border-strong bg-background/80 px-4 py-3.5 font-medium text-foreground placeholder:text-muted/40 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-bold text-foreground/80"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
