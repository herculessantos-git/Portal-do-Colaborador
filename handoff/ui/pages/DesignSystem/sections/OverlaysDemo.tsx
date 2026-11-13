import { LogOut, Settings } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Showcase, SubHeading } from "../Showcase"

export function OverlaysDemo() {
  return (
    <>
      <SubHeading id="modals" title="Modals e Drawers" />
      <Showcase
        title="Dialog (modal centralizado)"
        description="Usado para confirmações e conteúdo focado — ex: 'Entender o cálculo da bonificação', detalhe de competência. Fecha com Esc, clique fora ou o X."
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Abrir modal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Exemplo de modal</DialogTitle>
            </DialogHeader>
            <div className="p-6 pt-4">
              <DialogDescription>
                Conteúdo focado, uma decisão por vez. Use para confirmações e detalhes que não
                precisam de uma tela própria.
              </DialogDescription>
            </div>
            <DialogFooter>
              <Button variant="ghost">Cancelar</Button>
              <Button>Confirmar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Showcase>

      <Showcase
        title="Sheet (drawer lateral)"
        description="Para fluxos mais longos sem sair do contexto da tela — ainda não usado no produto, disponível para telas futuras de filtro avançado ou detalhe expandido."
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Abrir drawer</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Exemplo de drawer</SheetTitle>
              <SheetDescription>Desliza da direita, cobre até 384px de largura.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Showcase>

      <SubHeading id="dropdowns-tooltips" title="Dropdowns e Tooltips" />
      <Showcase
        title="Dropdown Menu"
        description="Base do menu de perfil e do sininho de notificações no topbar — navegação por teclado (setas, Esc) incluída de fábrica pelo Radix."
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Avatar className="h-5 w-5">
                <AvatarFallback className="text-[10px]">HR</AvatarFallback>
              </Avatar>
              Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Settings size={16} className="text-muted-foreground" /> Configurações
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOut size={16} /> Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Showcase>

      <Showcase title="Tooltip" description="Para ícone-somente ou um complemento curto de contexto. Nunca repete informação já visível no texto ao lado.">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Ajuda">
              ?
            </Button>
          </TooltipTrigger>
          <TooltipContent>Passe o mouse para ver uma dica</TooltipContent>
        </Tooltip>
      </Showcase>
    </>
  )
}
