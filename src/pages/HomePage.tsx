import {Button} from "@/components/ui/button"
import {LogOut} from "lucide-react";
import {supabaseClient} from "../config/supabase-client";

const HomePage = () => {
    const handleLogout = async () => {
        const {error} = await supabaseClient.auth.signOut();
        if (error) throw error;
    };

    return <div>
        <Button onClick={handleLogout}>Logout</Button>
    </div>
}

export default HomePage;
