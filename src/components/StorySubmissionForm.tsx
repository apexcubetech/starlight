"use client";

import { useState } from "react";
import { CaptchaField } from "@/components/CaptchaField";
import { storySubmissionContent } from "@/content/story-submission";
import { trackEvent } from "@/components/GoogleAnalytics";
import { useLanguage } from "@/components/LanguageProvider";
import { pickLocalized } from "@/lib/i18n";
import { uiStrings } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

export function StorySubmissionForm() {
  const { language } = useLanguage();
  const f = storySubmissionContent.form;
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
      setErrorMessage(uiStrings.captchaRequired[language]);
      return;
    }

    try {
      const response = await fetch("/api/story-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          genre: formData.get("genre"),
          workExperience: formData.get("workExperience"),
          consultReason: formData.get("consultReason"),
          referralSource: formData.get("referralSource"),
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
      <div className="card-static p-8 text-center">
        <p className="text-3xl font-bold text-gold-text">✓</p>
        <p className="text-body mt-4">{f.success[language]}</p>
        <button
          type="button"
          onClick={() => setFormState("idle")}
          className="link-gold mt-6 text-sm"
        >
          {language === "ta" ? "மீண்டும் சமர்ப்பிக்க" : "Submit again"}
        </button>
      </div>
    );
  }

  const consent = pickLocalized(
    storySubmissionContent.consentText,
    storySubmissionContent.consentTextTamil,
    language,
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <p className="text-sm font-medium text-muted">
        {uiStrings.requiredFieldsNote[language]}
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={f.name[language]} htmlFor="name" required>
          <input
            id="name"
            name="name"
            required
            aria-required="true"
            maxLength={120}
            onFocus={handleStart}
            className={inputClass}
          />
        </Field>
        <Field label={f.email[language]} htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            maxLength={254}
            onFocus={handleStart}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label={f.phone[language]} htmlFor="phone" required>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          aria-required="true"
          maxLength={20}
          className={inputClass}
        />
      </Field>

      <Field label={f.genre[language]} htmlFor="genre" required>
        <input
          id="genre"
          name="genre"
          required
          aria-required="true"
          maxLength={300}
          placeholder={f.genre.hint[language]}
          className={inputClass}
        />
      </Field>

      <Field label={f.workExperience[language]} htmlFor="workExperience" required>
        <textarea
          id="workExperience"
          name="workExperience"
          required
          aria-required="true"
          rows={5}
          maxLength={5000}
          placeholder={f.workExperience.hint[language]}
          className={inputClass}
        />
      </Field>

      <Field label={f.consultReason[language]} htmlFor="consultReason" required>
        <textarea
          id="consultReason"
          name="consultReason"
          required
          aria-required="true"
          rows={5}
          maxLength={5000}
          className={inputClass}
        />
      </Field>

      <fieldset>
        <legend className="mb-3 block text-sm font-bold text-foreground/80">
          {f.referral[language]}
          <span className="text-gold-text" aria-hidden="true">
            {" "}
            *
          </span>
        </legend>
        <div className="space-y-2">
          {storySubmissionContent.referralOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 text-sm text-muted"
            >
              <input
                type="radio"
                name="referralSource"
                value={option.value}
                required
                aria-required="true"
                className="accent-[var(--gold)]"
              />
              <span>
                {pickLocalized(option.label, option.labelTamil, language)}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field label={f.additionalInfo[language]} htmlFor="additionalInfo">
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows={4}
          maxLength={5000}
          className={inputClass}
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          name="consent"
          required
          aria-required="true"
          className="mt-1 accent-[var(--gold)]"
        />
        <span>{consent}</span>
      </label>

      <Field label={uiStrings.captchaLabel[language]} htmlFor="captcha" required>
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
        {formState === "submitting" ? f.submitting[language] : f.submit[language]}
      </button>
    </form>
  );
}

const inputClass =
  "input-ui w-full resize-none border border-border-strong bg-background/80 px-4 py-3.5 font-medium text-foreground placeholder:text-muted/40 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30";

function Field({
  label,
  htmlFor,
  children,
  required,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-bold text-foreground/80"
      >
        {label}
        {required ? (
          <span className="text-gold-text" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      {children}
    </div>
  );
}
