import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-md border px-5 py-4 text-sm [&>svg]:absolute [&>svg]:left-5 [&>svg]:top-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg~*]:pl-8",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-foreground [&>svg]:text-muted-foreground",
        destructive: "border-destructive/30 bg-destructive/5 text-destructive [&>svg]:text-destructive",
        success: "border-success/30 bg-success/5 text-success [&>svg]:text-success",
        warning: "border-warning/30 bg-warning/5 text-warning [&>svg]:text-warning",
        info: "border-info/30 bg-info/5 text-info [&>svg]:text-info",
      },
    },
    defaultVariants: { variant: "default" },
  },
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-semibold leading-none text-foreground", className)} {...props} />
  ),
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  ),
)
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
