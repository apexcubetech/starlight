"use client";

import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { uiStrings } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onReadyChange?: (ready: boolean) => void;
  resetKey?: number;
  inputClassName?: string;
};

export function CaptchaField({
  value,
  onChange,
  onReadyChange,
  resetKey = 0,
  inputClassName,
}: Props) {
  const { language } = useLanguage();
  const [svg, setSvg] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCaptcha = useCallback(async () => {
    setLoading(true);
    setError("");
    onChange("");

    try {
      const response = await fetch("/api/captcha", { cache: "no-store" });
      const data = (await response.json()) as {
        svg?: string;
        message?: string;
      };

      if (!response.ok || !data.svg) {
        throw new Error(data.message || "Unable to load CAPTCHA.");
      }

      setSvg(data.svg);
      onReadyChange?.(true);
    } catch (err) {
      setSvg("");
      onReadyChange?.(false);
      setError(err instanceof Error ? err.message : "Unable to load CAPTCHA.");
    } finally {
      setLoading(false);
    }
  }, [onChange, onReadyChange]);

  useEffect(() => {
    loadCaptcha();
  }, [loadCaptcha, resetKey]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <div
          className="input-ui flex min-h-[50px] min-w-[150px] items-center justify-center overflow-hidden border border-gold/35 bg-surface px-2 py-1"
          aria-hidden={loading || !svg}
        >
          {loading ? (
            <span className="text-xs font-semibold text-muted">
              {uiStrings.captchaLoading[language]}
            </span>
          ) : svg ? (
            <div
              className="[&_svg]:h-[50px] [&_svg]:w-auto"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          ) : null}
        </div>
        <button
          type="button"
          onClick={loadCaptcha}
          disabled={loading}
          className="text-sm font-semibold text-gold-text transition-colors hover:text-gold-bright disabled:opacity-50"
        >
          {uiStrings.captchaRefresh[language]}
        </button>
      </div>

      <input
        id="captcha"
        name="captcha"
        type="text"
        inputMode="text"
        autoComplete="off"
        autoCapitalize="characters"
        spellCheck={false}
        required
        maxLength={10}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={uiStrings.captchaPlaceholder[language]}
        className={cn(inputClassName, "input-ui tracking-widest")}
        aria-label={uiStrings.captchaLabel[language]}
      />

      {error && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
