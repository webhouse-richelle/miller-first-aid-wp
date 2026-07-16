"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { buttonVariants } from "@/components/ui/button"
import { FloatingInput } from "@/components/ui/floating-input"
import { FloatingTextarea } from "@/components/ui/floating-textarea"
import { clearStoredEnquiryReferrer, getEnquiryAttributionForSubmit } from "@/lib/attribution"
import { cn } from "@/lib/utils"

type EnquiryFormValues = {
  fullName: string
  email: string
  phone: string
  message: string
}

type EnquiryFormProps = {
  fieldPrefix?: string
  textareaClassName?: string
  buttonClassName?: string
  redirectPath?: string
}

export function EnquiryForm({
  fieldPrefix = "enquiry",
  textareaClassName = "min-h-28",
  buttonClassName = "h-12 w-full text-base font-semibold md:h-13 lg:text-lg",
  redirectPath = "/thank-you",
}: EnquiryFormProps) {
  const router = useRouter()
  const [submitError, setSubmitError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>()

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null)
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        message: values.message,
        fieldPrefix,
        attribution: getEnquiryAttributionForSubmit(
          typeof window !== "undefined" ? window.location.search : ""
        ),
      }),
    })

    const payload = (await res.json().catch(() => ({}))) as { error?: string }

    if (!res.ok) {
      setSubmitError(payload.error ?? "Something went wrong. Please try again.")
      return
    }

    clearStoredEnquiryReferrer()
    router.push(redirectPath)
  })

  return (
    <form className="grid gap-3" onSubmit={onSubmit} noValidate>
      <div className="grid gap-1">
        <FloatingInput
          id={`${fieldPrefix}-fullName`}
          label="Full Name *"
          aria-invalid={!!errors.fullName}
          {...register("fullName", { required: "Full name is required" })}
        />
        {errors.fullName ? (
          <p className="text-xs text-destructive">{errors.fullName.message}</p>
        ) : null}
      </div>

      <div className="grid gap-1">
        <FloatingInput
          id={`${fieldPrefix}-email`}
          type="email"
          label="Email Address *"
          aria-invalid={!!errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email ? (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="grid gap-1">
        <FloatingInput
          id={`${fieldPrefix}-phone`}
          type="tel"
          label="Phone Number *"
          aria-invalid={!!errors.phone}
          {...register("phone", { required: "Phone number is required" })}
        />
        {errors.phone ? (
          <p className="text-xs text-destructive">{errors.phone.message}</p>
        ) : null}
      </div>

      <div className="grid gap-1">
        <FloatingTextarea
          id={`${fieldPrefix}-message`}
          label="How can we help? *"
          aria-invalid={!!errors.message}
          className={textareaClassName}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      {submitError ? (
        <p className="text-sm text-destructive" role="alert">
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          buttonClassName
        )}
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  )
}
