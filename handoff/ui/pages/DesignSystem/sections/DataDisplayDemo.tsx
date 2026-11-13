import { Home, Target } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Showcase, SubHeading } from "../Showcase"

export function DataDisplayDemo() {
  return (
    <>
      <SubHeading id="avatars" title="Avatars" />
      <Showcase title="Tamanhos" description="Sempre com iniciais — o protótipo não usa fotos reais.">
        <Avatar className="h-8 w-8 text-xs"><AvatarFallback>HR</AvatarFallback></Avatar>
        <Avatar className="h-10 w-10 text-sm"><AvatarFallback>HR</AvatarFallback></Avatar>
        <Avatar className="h-16 w-16 text-lg"><AvatarFallback>HR</AvatarFallback></Avatar>
      </Showcase>

      <SubHeading id="cards" title="Cards" />
      <Showcase title="Card composável" description="Primitivo padrão shadcn (Header/Content/Footer). As telas de produto usam o wrapper `components/Card.tsx`, que aplica padding direto na raiz por conveniência." stack>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Meta anual da empresa</CardTitle>
            <CardDescription>Crescimento de receita recorrente em 40%</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={73} />
            <p className="mt-2 text-xs text-muted-foreground">73% concluído</p>
          </CardContent>
        </Card>
      </Showcase>

      <SubHeading id="tabs" title="Tabs" />
      <Showcase title="Pílula (filtro de visão)" description="Usada em Metas e Resultados (Individual / Equipe).">
        <Tabs defaultValue="a">
          <TabsList>
            <TabsTrigger value="a">Individual</TabsTrigger>
            <TabsTrigger value="b">Equipe</TabsTrigger>
          </TabsList>
          <TabsContent value="a" className="text-sm text-muted-foreground mt-3">Conteúdo da aba Individual.</TabsContent>
          <TabsContent value="b" className="text-sm text-muted-foreground mt-3">Conteúdo da aba Equipe.</TabsContent>
        </Tabs>
      </Showcase>

      <SubHeading id="tables" title="Tables" />
      <Showcase title="Tabela padrão" description="Ainda não usada nas 5 telas do protótipo (listas usam cards), mas disponível para futuras visões de gestor/admin mencionadas no benchmark." stack>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Colaborador</TableHead>
              <TableHead>Departamento</TableHead>
              <TableHead>Meta individual</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Hércules Roberto</TableCell>
              <TableCell>Produto</TableCell>
              <TableCell>90%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fernanda Costa</TableCell>
              <TableCell>Engenharia</TableCell>
              <TableCell>81%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Showcase>

      <SubHeading id="pagination" title="Pagination" />
      <Showcase title="Paginação" stack>
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious /></PaginationItem>
            <PaginationItem><PaginationLink isActive>1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink>3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationNext /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </Showcase>

      <SubHeading id="breadcrumbs" title="Breadcrumbs" />
      <Showcase title="Trilha de navegação" stack>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/"><Home size={14} className="inline -mt-0.5 mr-1" />Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/metas"><Target size={14} className="inline -mt-0.5 mr-1" />Metas e Resultados</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Detalhe da meta</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Showcase>

      <SubHeading id="progress" title="Progress Bars" />
      <Showcase title="Cor condicionada ao status" description="success = no prazo, warning = em risco, destructive = atrasada, primary = concluída." stack>
        <div className="w-full max-w-md flex flex-col gap-3">
          <Progress value={81} indicatorClassName="bg-success" />
          <Progress value={52} indicatorClassName="bg-warning" />
          <Progress value={30} indicatorClassName="bg-destructive" />
          <Progress value={100} indicatorClassName="bg-primary" />
        </div>
      </Showcase>

      <SubHeading id="charts" title="Charts e indicadores" />
      <Showcase title="Recharts" description="Biblioteca de gráficos do produto — linha para séries temporais (histórico trimestral de metas), radar para comparar níveis atual vs. esperado (competências técnicas). Cores sempre lidas dos tokens (--primary, --cyan), nunca hardcoded." stack>
        <p className="text-sm text-muted-foreground">
          Ver exemplos ao vivo em <span className="font-mono text-xs bg-muted px-1 rounded">Metas e Resultados</span> e{" "}
          <span className="font-mono text-xs bg-muted px-1 rounded">Desenvolvimento</span> no produto.
        </p>
      </Showcase>
    </>
  )
}
