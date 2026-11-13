import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina classes condicionalmente e resolve conflitos do Tailwind
 * (ex: "px-2 px-4" -> "px-4"). Padrão shadcn/ui.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
