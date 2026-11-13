import { HardHat } from "lucide-react"
import { Badge } from "./Badge"

// Placeholder genérico pra módulo ainda não implementado — usado pelos itens
// "comingSoon" do sidebar (ver navItems.ts). Mantém a pessoa dentro do
// AppLayout em vez de um 404, com uma mensagem honesta de "ainda não existe".
export function EmConstrucao({ titulo }: { titulo: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan/15 text-cyan mb-5">
        <HardHat size={28} />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-xl text-foreground">{titulo}</h1>
        <Badge tone="neutral">Em breve</Badge>
      </div>
      <p className="text-sm text-muted-foreground max-w-sm">
        Este módulo ainda está em construção e não faz parte do escopo atual do protótipo.
      </p>
    </div>
  )
}
