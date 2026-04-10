"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button, type buttonVariants } from "@/components/ui/button"
import { type VariantProps } from "class-variance-authority"

type ModeToggleProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>

export function ModeToggle({
  variant = "clean",
  size = "icon",
  className,
  ...props
}: ModeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      {...props}
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  )
}
