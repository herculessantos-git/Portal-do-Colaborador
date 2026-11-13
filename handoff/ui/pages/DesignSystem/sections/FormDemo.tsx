import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Showcase, SubHeading } from "../Showcase"

export function FormDemo() {
  const [switchOn, setSwitchOn] = useState(true)

  return (
    <>
      <SubHeading id="inputs" title="Inputs, Textarea e Select" />
      <Showcase title="Text input" stack>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ds-input-default">Nome completo</Label>
            <Input id="ds-input-default" placeholder="Digite seu nome" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ds-input-disabled">Campo desabilitado</Label>
            <Input id="ds-input-disabled" placeholder="Indisponível" disabled />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ds-input-error">Com erro</Label>
            <Input id="ds-input-error" defaultValue="valor inválido" aria-invalid="true" />
            <p className="text-xs text-destructive">Este campo é obrigatório.</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ds-select">Select</Label>
            <Select defaultValue="rh">
              <SelectTrigger id="ds-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rh">RH</SelectItem>
                <SelectItem value="diretoria">Diretoria</SelectItem>
                <SelectItem value="ti">TI</SelectItem>
                <SelectItem value="geral">Geral</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Showcase>

      <Showcase title="Textarea" stack>
        <div className="w-full max-w-xl flex flex-col gap-1.5">
          <Label htmlFor="ds-textarea">Comentário</Label>
          <Textarea id="ds-textarea" placeholder="Escreva aqui..." />
        </div>
      </Showcase>

      <SubHeading id="selection-controls" title="Checkboxes, Radio Buttons e Switches" />
      <Showcase title="Checkbox">
        <div className="flex items-center gap-2">
          <Checkbox id="ds-cb-1" defaultChecked />
          <Label htmlFor="ds-cb-1">Marcado</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="ds-cb-2" />
          <Label htmlFor="ds-cb-2">Desmarcado</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="ds-cb-3" disabled />
          <Label htmlFor="ds-cb-3" className="opacity-50">Desabilitado</Label>
        </div>
      </Showcase>

      <Showcase title="Radio Group">
        <RadioGroup defaultValue="b" className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <RadioGroupItem id="ds-radio-a" value="a" />
            <Label htmlFor="ds-radio-a">Opção A</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="ds-radio-b" value="b" />
            <Label htmlFor="ds-radio-b">Opção B</Label>
          </div>
        </RadioGroup>
      </Showcase>

      <Showcase title="Switch">
        <div className="flex items-center gap-2">
          <Switch id="ds-switch" checked={switchOn} onCheckedChange={setSwitchOn} />
          <Label htmlFor="ds-switch">{switchOn ? "Ativado" : "Desativado"}</Label>
        </div>
      </Showcase>
    </>
  )
}
