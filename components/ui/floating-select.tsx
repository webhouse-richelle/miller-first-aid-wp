"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowDown01Icon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

export interface FloatingSelectProps
  extends Omit<React.ComponentPropsWithoutRef<"select">, "children" | "size"> {
  label: string
  children: React.ReactNode
  wrapperClassName?: string
  size?: "sm" | "default"
}

const FloatingSelect = React.forwardRef<HTMLSelectElement, FloatingSelectProps>(
  (
    {
      className,
      label,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      children,
      wrapperClassName,
      size = "default",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)

    const selectValue = value ?? defaultValue ?? ""
    const currentHasValue = React.useMemo(
      () => selectValue !== "" && selectValue !== undefined && selectValue !== null,
      [selectValue]
    )

    const [hasValue, setHasValue] = React.useState(currentHasValue)

    React.useEffect(() => {
      setHasValue(currentHasValue)
    }, [currentHasValue])

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(false)
      setHasValue(e.target.value !== "")
      onBlur?.(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setHasValue(e.target.value !== "")
      onChange?.(e)
    }

    const isFloating = isFocused || hasValue
    const isInvalid = props["aria-invalid"] === true || props["aria-invalid"] === "true"
    const shouldFloat = isFloating || isInvalid
    const isSmall = size === "sm"

    return (
      <div className={cn("relative w-full", wrapperClassName)}>
        <select
          ref={ref}
          data-slot="floating-select"
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            "w-full min-w-0 cursor-pointer appearance-none rounded-lg border-0 bg-muted text-foreground ring-1 ring-[#d4d4d8] hover:ring-black/45 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-black/35 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            isSmall
              ? "h-10 px-2.5 pt-3.5 pb-0 pr-8 text-sm"
              : "h-13 min-h-[52px] px-3 pt-6 pb-2 pr-10 text-base",
            !shouldFloat && "text-transparent",
            isInvalid && !isFocused && "ring-red-500/50",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <label
          className={cn(
            "pointer-events-none absolute max-w-[calc(100%-2rem)] origin-left overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground transition-all duration-200 ease-in-out",
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
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          strokeWidth={2}
          className={cn(
            "pointer-events-none absolute top-1/2 -translate-y-1/2 text-muted-foreground",
            isSmall ? "right-2 size-3.5" : "right-3 size-4"
          )}
        />
      </div>
    )
  }
)

FloatingSelect.displayName = "FloatingSelect"

export { FloatingSelect }
