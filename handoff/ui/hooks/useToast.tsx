import { CheckCircle2 } from "lucide-react"
import { useCallback } from "react"
import { toast } from "sonner"

/**
 * Wrapper fino sobre `sonner` (ver `components/ui/sonner.tsx`): mantém a
 * API simples `showToast(message)` usada nas telas de produto, sem exigir
 * que cada chamada monte o ícone/estilo do toast de sucesso.
 */
export function useToast() {
  const showToast = useCallback((message: string) => {
    toast(message, {
      icon: <CheckCircle2 className="text-success" size={18} />,
    })
  }, [])

  return { showToast }
}
