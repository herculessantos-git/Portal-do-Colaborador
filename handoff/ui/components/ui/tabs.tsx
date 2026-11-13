import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center gap-1 rounded-sm bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-sm font-medium transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm",
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-4 focus-visible:outline-none", className)}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

/**
 * Variante com sublinhado — usada em listas (Pesquisas) onde cada aba tem
 * um contador ao lado. Visualmente diferente da pílula acima (`TabsList`),
 * ambas compartilham o mesmo primitivo Radix e os mesmos tokens de cor.
 */
const TabsListUnderline = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("flex gap-1 border-b border-border", className)}
    {...props}
  />
))
TabsListUnderline.displayName = "TabsListUnderline"

const TabsTriggerUnderline = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "-mb-px border-b-2 border-transparent px-4 py-3 text-sm font-medium text-muted-foreground transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "data-[state=active]:border-primary data-[state=active]:text-primary",
      className,
    )}
    {...props}
  />
))
TabsTriggerUnderline.displayName = "TabsTriggerUnderline"

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsListUnderline, TabsTriggerUnderline }
