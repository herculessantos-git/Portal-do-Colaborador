import { AlertTriangle, CheckCircle2, ClipboardList, Info } from "lucide-react"
import { toast } from "sonner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { EmptyState } from "../../../components/EmptyState"
import { Spinner } from "../../../components/Spinner"
import { Showcase, SubHeading } from "../Showcase"

export function FeedbackDemo() {
  return (
    <>
      <SubHeading id="alerts" title="Feedback de sucesso, erro e alerta" />
      <Showcase title="Alert" description="Banners de bloco — ex: o aviso de comunicado urgente na Home usa esta mesma linguagem visual." stack>
        <Alert variant="destructive">
          <AlertTriangle />
          <AlertTitle>Comunicado urgente</AlertTitle>
          <AlertDescription>Janela de manutenção nos servidores de produção neste sábado.</AlertDescription>
        </Alert>
        <Alert variant="success">
          <CheckCircle2 />
          <AlertTitle>Tudo certo</AlertTitle>
          <AlertDescription>Sua resposta foi registrada com sucesso.</AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertTriangle />
          <AlertTitle>Atenção</AlertTitle>
          <AlertDescription>Esta meta está em risco de não ser concluída no prazo.</AlertDescription>
        </Alert>
        <Alert variant="info">
          <Info />
          <AlertTitle>Informativo</AlertTitle>
          <AlertDescription>Novo plano de saúde entra em vigor em dezembro.</AlertDescription>
        </Alert>
      </Showcase>

      <SubHeading id="toasts" title="Notifications e Toasts" />
      <Showcase title="Toast (sonner)" description="Confirmações rápidas e não-bloqueantes — 'Leitura confirmada', 'Resposta enviada'. Some sozinho após alguns segundos.">
        <Button variant="outline" onClick={() => toast("Leitura confirmada.")}>
          Disparar toast
        </Button>
      </Showcase>

      <SubHeading id="empty-loading" title="Empty States e Loading States" />
      <Showcase title="Empty State" description="Nunca deixar uma lista vazia em branco — sempre ícone + título + descrição curta." stack>
        <EmptyState
          icon={ClipboardList}
          title="Nenhuma pesquisa nesta aba"
          description="Quando houver, as pesquisas aparecem aqui."
        />
      </Showcase>

      <Showcase title="Skeleton" description="Para blocos de conteúdo carregando (cards, listas). Para ações pontuais, use o Spinner.">
        <div className="flex flex-col gap-2 w-64">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </Showcase>

      <Showcase title="Spinner">
        <Button disabled>
          <Spinner size={16} /> Enviando...
        </Button>
      </Showcase>
    </>
  )
}
