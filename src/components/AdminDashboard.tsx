"use client";

import { useCallback, useEffect, useState } from "react";
import {
  SUBMISSION_STATUSES,
  type SubmissionStatus,
} from "@/lib/submission-status";
import { cn } from "@/lib/utils";

type Submission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  genre: string;
  workExperience: string;
  consultReason: string;
  referralSource: string;
  additionalInfo: string;
  consent: boolean;
  status: SubmissionStatus;
  createdAt: string;
};

type ViewState = "loading" | "login" | "dashboard";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function AdminDashboard() {
  const [view, setView] = useState<ViewState>("loading");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const loadSubmissions = useCallback(async () => {
    setLoadError("");
    const response = await fetch("/api/admin/submissions");
    if (response.status === 401) {
      setView("login");
      return;
    }
    const data = (await response.json()) as {
      success: boolean;
      submissions?: Submission[];
      message?: string;
    };
    if (!response.ok || !data.success || !data.submissions) {
      setLoadError(data.message ?? "Unable to load submissions.");
      setView("login");
      return;
    }
    setSubmissions(data.submissions);
    setView("dashboard");
  }, []);

  useEffect(() => {
    void loadSubmissions();
  }, [loadSubmissions]);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = (await response.json()) as {
        success: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        setLoginError(data.message ?? "Invalid credentials.");
        return;
      }

      setPassword("");
      await loadSubmissions();
    } catch {
      setLoginError("Unable to sign in. Please try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setSubmissions([]);
    setView("login");
  };

  const handleStatusChange = async (id: string, status: SubmissionStatus) => {
    setUpdatingId(id);
    try {
      const response = await fetch(`/api/admin/submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = (await response.json()) as {
        success: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        setLoadError(data.message ?? "Unable to update status.");
        return;
      }

      setSubmissions((current) =>
        current.map((submission) =>
          submission.id === id ? { ...submission, status } : submission,
        ),
      );
    } catch {
      setLoadError("Unable to update status.");
    } finally {
      setUpdatingId(null);
    }
  };

  if (view === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <p className="text-sm text-muted">Loading…</p>
      </div>
    );
  }

  if (view === "login") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
        <div className="w-full max-w-md rounded-[var(--radius-ui)] border border-border bg-surface-card p-8 shadow-lg">
          <h1 className="text-xl font-semibold text-gold-text">Admin sign in</h1>
          <p className="mt-2 text-sm text-muted">
            Sign in to review story submissions.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <label className="block space-y-2">
              <span className="text-sm text-muted">Username</span>
              <input
                type="text"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                className="w-full rounded-[var(--radius-ui)] border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus:border-border-strong"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm text-muted">Password</span>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="w-full rounded-[var(--radius-ui)] border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus:border-border-strong"
              />
            </label>

            {loginError ? (
              <p className="text-sm text-red-400">{loginError}</p>
            ) : null}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full rounded-[var(--radius-ui)] border border-border-strong bg-gold-dim px-4 py-2.5 text-sm font-semibold text-gold-text transition hover:border-gold disabled:opacity-60"
            >
              {loginLoading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gold-text">
              Story submissions
            </h1>
            <p className="mt-1 text-sm text-muted">
              {submissions.length} submission
              {submissions.length === 1 ? "" : "s"}
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-[var(--radius-ui)] border border-border px-4 py-2 text-sm text-muted transition hover:border-border-strong hover:text-foreground"
          >
            Sign out
          </button>
        </div>

        {loadError ? (
          <p className="mt-6 rounded-[var(--radius-ui)] border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {loadError}
          </p>
        ) : null}

        {submissions.length === 0 ? (
          <p className="mt-10 text-sm text-muted">No submissions yet.</p>
        ) : (
          <div className="mt-8 space-y-4">
            {submissions.map((submission) => {
              const expanded = expandedId === submission.id;
              return (
                <article
                  key={submission.id}
                  className="rounded-[var(--radius-ui)] border border-border bg-surface-card p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 space-y-1">
                      <h2 className="text-lg font-semibold text-foreground">
                        {submission.name}
                      </h2>
                      <p className="text-sm text-muted">
                        {submission.email} · {submission.phone}
                      </p>
                      <p className="text-xs text-muted">
                        Submitted {formatDate(submission.createdAt)}
                      </p>
                    </div>

                    <label className="flex shrink-0 flex-col gap-1.5">
                      <span className="text-xs uppercase tracking-wide text-muted">
                        Status
                      </span>
                      <select
                        value={submission.status}
                        disabled={updatingId === submission.id}
                        onChange={(event) =>
                          void handleStatusChange(
                            submission.id,
                            event.target.value as SubmissionStatus,
                          )
                        }
                        className={cn(
                          "rounded-[var(--radius-ui)] border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none focus:border-border-strong",
                          updatingId === submission.id && "opacity-60",
                        )}
                      >
                        {SUBMISSION_STATUSES.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-muted">Genre</dt>
                      <dd className="mt-0.5 text-foreground">{submission.genre}</dd>
                    </div>
                    <div>
                      <dt className="text-muted">Referral source</dt>
                      <dd className="mt-0.5 text-foreground">
                        {submission.referralSource}
                      </dd>
                    </div>
                  </dl>

                  <button
                    type="button"
                    onClick={() =>
                      setExpandedId(expanded ? null : submission.id)
                    }
                    className="mt-4 text-sm text-gold-text transition hover:text-gold-bright"
                  >
                    {expanded ? "Hide details" : "View details"}
                  </button>

                  {expanded ? (
                    <div className="mt-4 space-y-4 border-t border-border pt-4 text-sm">
                      <div>
                        <p className="text-muted">Work experience</p>
                        <p className="mt-1 whitespace-pre-wrap text-foreground">
                          {submission.workExperience}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted">Consult reason</p>
                        <p className="mt-1 whitespace-pre-wrap text-foreground">
                          {submission.consultReason}
                        </p>
                      </div>
                      {submission.additionalInfo ? (
                        <div>
                          <p className="text-muted">Additional info</p>
                          <p className="mt-1 whitespace-pre-wrap text-foreground">
                            {submission.additionalInfo}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
