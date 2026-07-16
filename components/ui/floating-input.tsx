"use client"

import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "@/lib/utils"

export interface FloatingInputProps
  extends Omit<React.ComponentProps<"input">, "size"> {
  label?: string
  size?: "sm" | "default"
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  (
    {
      className,
      label,
      value,
      defaultValue,
      onFocus,
      onBlur,
      onChange,
      size = "default",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const internalRef = React.useRef<HTMLInputElement>(null)

    const mergedRef = React.useMemo(
      () => (node: HTMLInputElement | null) => {
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

    const inputValue = value ?? defaultValue ?? ""
    const currentHasValue = React.useMemo(
      () => (typeof inputValue === "string" ? inputValue.length > 0 : !!inputValue),
      [inputValue]
    )

    const [hasValue, setHasValue] = React.useState(() => currentHasValue)

    React.useEffect(() => {
      setHasValue(currentHasValue)
    }, [currentHasValue])

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      setHasValue(e.target.value.length > 0)
      onBlur?.(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0)
      onChange?.(e)
    }

    const isDateInput =
      props.type === "date" || props.type === "time" || props.type === "datetime-local"
    const isFloating = isFocused || hasValue || isDateInput
    const isInvalid = props["aria-invalid"] === true || props["aria-invalid"] === "true"
    const shouldFloat = isFloating || isInvalid
    const isSmall = size === "sm"

    const baseInputClasses =
      "w-full min-w-0 rounded-lg border-0 bg-muted ring-1 ring-[#d4d4d8] hover:ring-black/45 text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-black/35 transition-colors disabled:pointer-events-none disabled:opacity-50 tabular-nums"

    return (
      <div className="relative w-full">
        <InputPrimitive
          ref={mergedRef}
          type={props.type}
          data-slot="floating-input"
          value={value}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={cn(
            baseInputClasses,
            "placeholder:opacity-0",
            isSmall
              ? "h-10 px-2.5 pt-3.5 pb-0 text-sm"
              : "h-13 min-h-[52px] px-3 pt-6 pb-2 text-base",
            isInvalid && !isFocused && "ring-red-500/50",
            className
          )}
          suppressHydrationWarning={!!props.id}
          {...props}
        />
        {label ? (
          <label
            className={cn(
              "pointer-events-none absolute origin-left whitespace-nowrap transition-all duration-200 ease-in-out text-muted-foreground",
              isSmall ? "left-2.5" : "left-3",
              shouldFloat
                ? isSmall
                  ? "top-1 text-[10px] text-foreground/80"
                  : "top-2 text-xs text-foreground/80"
                : isSmall
                  ? "top-1/2 -translate-y-1/2 text-sm"
                  : "top-1/2 -translate-y-1/2 text-base",
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

FloatingInput.displayName = "FloatingInput"

export { FloatingInput }
