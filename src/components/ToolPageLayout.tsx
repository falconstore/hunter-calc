import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { MobileHeader } from "./MobileHeader";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ToolPageLayoutProps {
  children: ReactNode;
  title: string;
}

export const ToolPageLayout = ({ children, title }: ToolPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <AppSidebar />
      </div>

      {/* Mobile Header */}
      <MobileHeader />

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        {/* Header with Breadcrumb */}
        <header className="pt-20 lg:pt-8 pb-6 px-6 border-b border-border bg-card/30">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Home className="w-4 h-4" />
                      <span>Dashboard</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="w-4 h-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary font-medium">
                    {title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <h1 className="text-3xl font-serif font-bold text-gradient">
              {title}
            </h1>
          </div>
        </header>

        {/* Content */}
        <div className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border bg-card/50">
          <div className="max-w-7xl mx-auto text-center">
            <div className="premium-divider mb-6" />
            <p className="text-muted-foreground text-sm">
              © 2025 <span className="text-gradient font-semibold">Premium Dashboard</span> - Ferramentas Profissionais
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};
