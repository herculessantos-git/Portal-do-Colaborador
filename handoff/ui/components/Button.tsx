import type { ButtonHTMLAttributes, ReactNode } from "react"
import { Button as UiButton } from "@/components/ui/button"

type Variant = "primary" | "secondary" | "danger" | "ghost"
type Size = "default" | "sm"

// Mapeia o vocabulário de domínio (usado nas telas de produto) para as
// variantes padrão shadcn em `ui/button.tsx`. Novas telas podem importar
// `Button` de `ui/button.tsx` diretamente e usar variant="outline" etc.
const VARIANT_MAP: Record<Variant, "default" | "outline" | "destructive" | "ghost"> = {
  primary: "default",
  secondary: "outline",
  danger: "destructive",
  ghost: "ghost",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  iconPosition?: "left" | "right"
}

export function Button({
  variant = "primary",
  size = "default",
  icon,
  iconPosition = "left",
  children,
  ...rest
}: ButtonProps) {
  return (
    <UiButton variant={VARIANT_MAP[variant]} size={size} {...rest}>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </UiButton>
  )
}
