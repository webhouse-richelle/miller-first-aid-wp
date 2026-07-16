"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface FloatingTextareaProps extends React.ComponentProps<"textarea"> {
  label?: string
}

const FloatingTextarea = React.forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  (
    {
      className,
      label,
      value,
      defaultValue,
      onFocus,
      onBlur,
      onChange,
      placeholder,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const internalRef = React.useRef<HTMLTextAreaElement>(null)

    const mergedRef = React.useMemo(
      () => (node: HTMLTextAreaElement | null) => {
        internalRef.current = node
        if (node && node.value && node.value.length > 0) {
          setHasValue(true)
        }
        if (typeof ref === "function") {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      },
      [ref]
    )

    const textareaValue = value ?? defaultValue ?? ""
    const currentHasValue = React.useMemo(
      () => (typeof textareaValue === "string" ? textareaValue.length > 0 : !!textareaValue),
      [textareaValue]
    )

    const [hasValue, setHasValue] = React.useState(() => currentHasValue)

    React.useEffect(() => {
      setHasValue(currentHasValue)
    }, [currentHasValue])

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false)
      setHasValue(e.target.value.length > 0)
      onBlur?.(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(e.target.value.length > 0)
      onChange?.(e)
    }

    const isFloating = isFocused || hasValue
    const isInvalid = props["aria-invalid"] === true || props["aria-invalid"] === "true"
    const shouldFloat = isFloating || isInvalid || !!placeholder

    return (
      <div className="relative w-full">
        <textarea
          ref={mergedRef}
          data-slot="floating-textarea"
          value={value}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={cn(
            "w-full min-w-0 resize-none rounded-lg border-0 bg-muted px-3 pt-6 pb-2 text-base text-foreground ring-1 ring-[#d4d4d8] hover:ring-black/45 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-black/35 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            !placeholder && !isFocused && "placeholder:opacity-0",
            !placeholder && isFocused && "placeholder:opacity-100",
            placeholder && "placeholder:opacity-100",
            isInvalid && !isFocused && "ring-red-500/50",
            className
          )}
          placeholder={placeholder}
          {...props}
        />
        {label ? (
          <label
            className={cn(
              "pointer-events-none absolute left-3 origin-left whitespace-nowrap transition-all duration-200 ease-in-out",
              shouldFloat
                ? "top-2 text-xs text-foreground/80"
                : "top-4 text-base text-muted-foreground",
              isInvalid && "text-red-400"
            )}
          >
            {label}
          </label>
        ) : null}
      </div>
    )
  }
)

FloatingTextarea.displayName = "FloatingTextarea"

export { FloatingTextarea }
