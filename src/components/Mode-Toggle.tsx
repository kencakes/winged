import {Moon, Sun} from "lucide-react"

import {useTheme} from "@/components/Theme-Provider"
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {ComponentProps} from "react"

export function ModeToggle({buttonProps, contentProps}: {
    buttonProps?: ComponentProps<typeof Button>,
    contentProps?: ComponentProps<typeof DropdownMenuContent>
}) {
    const {setTheme} = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-full">
                <Button variant="ghost" className="justify-start" {...buttonProps}>
                    <Sun
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mr-2"/>
                    <Moon
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 mr-2"/>
                    Toggle Theme
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" {...contentProps}>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
