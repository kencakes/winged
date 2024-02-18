import React, { useState } from "react";
import { Nav } from "./ui/nav";
import {
  Settings,
  LogOut,
  Home,
  PawPrint,
  Bird,
  Egg,
  Book,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  useWindowHeight,
  useWindowSize,
  useWindowWidth,
} from "@react-hook/window-size";
import { supabaseClient } from "@/config/supabase-client";
import { ModeToggle } from "./Mode-Toggle";

type Props = {};

export default function Sidebar({}: Props) {
  // Sidebar is open by default
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Grab the width of the window
  const onlyWidth = useWindowWidth();
  // Checks if we are currently on mobile
  const mobileWidth = onlyWidth < 768;

  function toggleSiderbar() {
    setIsCollapsed(!isCollapsed);
  }

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
  };

  return (
    <div className="relative pt-20 border-r">
      {/* hides the chevron on mobile screens */}
      {!mobileWidth && (
        <div className="absolute right-[-15px] top-7">
          <Button
            className="rounded-full w-7 h-7 p-1"
            variant="outline"
            size="icon"
            onClick={toggleSiderbar}
          >
            <ChevronRight />
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Home",
            label: "",
            icon: Home,
            variant: "default",
            to: "/",
          },
          {
            title: "Birds",
            label: "",
            icon: PawPrint,
            variant: "ghost",
            to: "/bird",
          },
          {
            title: "Logbook",
            label: "",
            icon: Book,
            variant: "ghost",
            to: "/logbook",
          },
          {
            title: "Settings",
            label: "",
            icon: Settings,
            variant: "ghost",
            to: "/settings",
          },
          {
            title: "Sign out",
            label: "",
            icon: LogOut,
            variant: "ghost",
            // TODO: Add a sign out function
            to: "",
            onClick: handleLogout,
          },
        ]}
      />
    </div>
  );
}
