import type { ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

/**
 * Wrapper de conveniência sobre `ui/dialog.tsx` (Radix Dialog): mantém a
 * API simples `open/onClose/title` usada nas telas de produto, sem exigir
 * `DialogTrigger`/`DialogClose` explícitos em cada chamada.
 */
export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}) {
  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-4">{children}</div>
      </DialogContent>
    </Dialog>
  )
}
