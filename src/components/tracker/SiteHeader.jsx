import { Separator } from "@/components/ui/separator";
import { BadgeSwissFranc } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { currentUser } from "@clerk/nextjs/server";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";

export async function SiteHeader({ children }) {
  const user = await currentUser();

  return (
    <SidebarProvider>
      {user && <AppSidebar />}
      <SidebarInset>
        <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear top-0 sticky z-10 bg-background">
          <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
            {user && <SidebarTrigger className="-ml-1" />}
            <Separator
              orientation="vertical"
              className="mx-2 data-[orientation=vertical]:h-4"
            />
            <div className="md:hidden">
              <BadgeSwissFranc />
            </div>
            <h1 className="text-base font-medium">Finance Tracker</h1>
          </div>
          <div className="flex items-center gap-1 px-4 lg:gap-2 lg:px-6">
            <ModeToggle />
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
