"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartBarStacked,
  ChartLine,
  Command,
  FileClock,
  Frame,
  GalleryVerticalEnd,
  Home,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  WalletCards,
} from "lucide-react";

import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import NavUser from "./nav-user";
import { NavSidebar } from "./nav-sidebar";

const data = {
  navSidebar: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Account",
      url: "/account",
      icon: WalletCards,
    },
    {
      title: "Category",
      url: "/category",
      icon: ChartBarStacked,
    },
    {
      title: "History",
      url: "/history",
      icon: FileClock,
    },
    {
      title: "Statistic",
      url: "/statistic",
      icon: ChartLine,
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { user } = useUser();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavSidebar items={data.navSidebar} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
