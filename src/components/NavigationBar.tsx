import React from "react";
import {cn} from "@/lib/utils"
import {useNavigate} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Settings, LogOut, Home, PawPrint, Bird, Egg, Book} from "lucide-react";
import {supabaseClient} from "@/config/supabase-client";
import {ModeToggle} from "@/components/Mode-Toggle";


const NavigationBar = ({className}: any) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const {error} = await supabaseClient.auth.signOut();
        if (error) throw error;
    }

    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Menu
                    </h2>
                    <div className="space-y-1">
                        <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/")}>
                            <Home size={20} className="mr-2"/>
                            Home
                        </Button>
                        <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/bird")}>
                            <PawPrint size={20} className="mr-2"/>
                            Birds
                        </Button>
                        <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/logbook")}>
                            <Book size={20} className="mr-2"/>
                            Logbook
                        </Button>
                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Account
                    </h2>
                    <div className="space-y-1">
                        <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/settings")}>
                            <Settings size={20} className="mr-2"/>
                            Settings
                        </Button>
                        <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
                            <LogOut size={20} className="mr-2"/>
                            Sign out
                        </Button>
                        <ModeToggle/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;
