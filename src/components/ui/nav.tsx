import { Link as RouterLink, useLocation } from 'react-router-dom';
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TooltipProvider } from '@radix-ui/react-tooltip';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface NavProps {
  isCollapsed: boolean
  links: {
    title: string
    label?: string
    icon: LucideIcon
    variant: "default" | "ghost"
    to: string
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  }[]
}

export function Nav({ links, isCollapsed }: NavProps) {
  const location = useLocation();

  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2  data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 ">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <RouterLink
                    to={link.to}
                    onClick={link.onClick}
                    className={cn(
                      buttonVariants({ variant: link.to === location.pathname ? "default" : "ghost", size: "icon" }),
                      "h-9 w-9",
                      link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <link.icon size={20} />
                    <span className="sr-only">{link.title}</span>
                  </RouterLink>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <RouterLink
                key={index}
                to={link.to}
                onClick={link.onClick}
                className={cn(
                  buttonVariants({ variant: link.to === location.pathname ? "default" : "ghost", size: "sm" }),
                  link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                  "justify-start"
                )}
              >
                <link.icon className="mr-3" size={20} />
                {link.title}
                {link.label && (
                  <span
                    className={cn(
                      "ml-auto",
                      link.variant === "default" &&
                      "text-background dark:text-white"
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </RouterLink>
            )
          )}
        </nav>
      </div>
    </TooltipProvider>
  )
}
