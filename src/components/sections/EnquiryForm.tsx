"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Field from "@/components/ui/Field";
import { classes, countryCodes, DEMO_OTP, states } from "@/data/enquiry";

interface FormValues {
  name: string;
  code: string;
  phone: string;
  otp: string;
  grade: string;
  state: string;
  consent: boolean;
}

type Errors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "", code: "+91", phone: "", otp: "", grade: "", state: "", consent: false,
};

const control =
  "w-full rounded-lg border border-brand-navy/30 bg-white px-4 py-3 text-brand-navy focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-yellow";

function validate(v: FormValues, verified: boolean): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter the student or parent name.";
  if (!/^\d{10}$/.test(v.phone)) errors.phone = "Enter a valid 10-digit phone number.";
  else if (!verified) errors.otp = "Please verify your phone number with the OTP.";
  if (!v.grade) errors.grade = "Select the class you are enquiring for.";
  if (!v.state) errors.state = "Select your state.";
  if (!v.consent) errors.consent = "Please agree to be contacted.";
  return errors;
}

export default function EnquiryForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const sendOtp = () => {
    if (!/^\d{10}$/.test(values.phone)) {
      setErrors((prev) => ({ ...prev, phone: "Enter a valid 10-digit phone number." }));
      return;
    }
    setOtpSent(true);
  };

  const verifyOtp = () => {
    if (values.otp === DEMO_OTP) {
      setVerified(true);
      setErrors((prev) => ({ ...prev, otp: undefined }));
    } else {
      setErrors((prev) => ({ ...prev, otp: "Incorrect OTP. Please try again." }));
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values, verified);
    setErrors(found);
    if (Object.keys(found).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div role="status" className="rounded-2xl bg-white p-8 text-center shadow-lg">
        <h3 className="font-display text-2xl font-bold text-brand-navy">Thank you!</h3>
        <p className="mt-2 text-brand-navy/80">
          Our admissions team will get in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name" type="text" autoComplete="name" className={control}
          value={values.name} onChange={(e) => set("name", e.target.value)}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
        />
      </Field>

      <Field id="phone" label="Phone number" error={errors.phone}>
        <div className="flex gap-2">
          <select
            aria-label="Country code" className={`${control} w-28`}
            value={values.code} onChange={(e) => set("code", e.target.value)}
          >
            {countryCodes.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <input
            id="phone" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={10}
            className={control} value={values.phone}
            onChange={(e) => set("phone", e.target.value.replace(/\D/g, ""))}
            aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          <button
            type="button" onClick={sendOtp} disabled={verified}
            className="shrink-0 rounded-lg bg-brand-navy px-4 text-sm font-semibold text-white disabled:opacity-50"
          >
            {otpSent ? "Resend" : "Send OTP"}
          </button>
        </div>
      </Field>

      {otpSent && (
        <Field id="otp" label="Enter OTP" error={errors.otp}>
          <div className="flex gap-2">
            <input
              id="otp" type="text" inputMode="numeric" maxLength={6} className={control}
              value={values.otp} onChange={(e) => set("otp", e.target.value.replace(/\D/g, ""))}
              disabled={verified}
              aria-invalid={!!errors.otp} aria-describedby={errors.otp ? "otp-error" : "otp-hint"}
            />
            <button
              type="button" onClick={verifyOtp} disabled={verified}
              className="shrink-0 rounded-lg bg-brand-yellow px-4 text-sm font-semibold text-brand-navy disabled:opacity-60"
            >
              {verified ? "Verified" : "Verify"}
            </button>
          </div>
          <p id="otp-hint" className="mt-1 text-xs text-brand-navy/70">
            Demo mode: no SMS is sent. Use {DEMO_OTP}.
          </p>
        </Field>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="grade" label="Class" error={errors.grade}>
          <select
            id="grade" className={control} value={values.grade}
            onChange={(e) => set("grade", e.target.value)}
            aria-invalid={!!errors.grade} aria-describedby={errors.grade ? "grade-error" : undefined}
          >
            <option value="">Select Class</option>
            {classes.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
        <Field id="state" label="State" error={errors.state}>
          <select
            id="state" className={control} value={values.state}
            onChange={(e) => set("state", e.target.value)}
            aria-invalid={!!errors.state} aria-describedby={errors.state ? "state-error" : undefined}
          >
            <option value="">Select State</option>
            {states.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-brand-navy/90">
          <input
            type="checkbox" checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-1 h-5 w-5 shrink-0 accent-brand-navy"
            aria-invalid={!!errors.consent}
          />
          I agree to receive information regarding my submitted application by signing up on
          Tulas International School, Dehradun
        </label>
        {errors.consent && <p role="alert" className="mt-1 text-sm text-red-700">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-brand-yellow px-8 py-3 font-semibold text-brand-navy transition-transform hover:scale-[1.02]"
      >
        Enquire Now
      </button>
    </form>
  );
}