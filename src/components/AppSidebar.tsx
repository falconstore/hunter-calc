import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Calculator,
  TrendingUp,
  Layers,
  Target,
  Globe,
  ShieldCheck,
  Shield,
  Database,
  Info,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

interface SidebarItem {
  id: string;
  title: string;
  icon: React.ElementType;
  section?: string;
}

const calculatorItems: SidebarItem[] = [
  { id: "arbipro", title: "ArbiPro", icon: Calculator, section: "calculadoras" },
  { id: "freepro", title: "FreePro", icon: TrendingUp, section: "calculadoras" },
  { id: "multilay", title: "MultiLay", icon: Layers, section: "calculadoras" },
];

const toolItems: SidebarItem[] = [
  { id: "handicap-asiatico", title: "HA Asiático", icon: Target, section: "handicap-casas" },
  { id: "handicap-europeu", title: "HA Europeu", icon: Globe, section: "handicap-casas" },
  { id: "protection", title: "Proteção", icon: ShieldCheck, section: "handicap-casas" },
  { id: "casas", title: "Casas Reg.", icon: Shield, section: "handicap-casas" },
  { id: "info-casas", title: "Info Casas", icon: Database, section: "handicap-casas" },
];

const generalItems: SidebarItem[] = [
  { id: "sobre", title: "Sobre", icon: Info },
  { id: "contato", title: "Contato", icon: MessageCircle },
];

interface AppSidebarProps {
  activeCalculator: string;
  setActiveCalculator: (id: string) => void;
  activeTool: string;
  setActiveTool: (id: string) => void;
}

export const AppSidebar = ({
  activeCalculator,
  setActiveCalculator,
  activeTool,
  setActiveTool,
}: AppSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const scrollToSection = (id: string, itemId?: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCalculatorClick = (item: SidebarItem) => {
    setActiveCalculator(item.id);
    if (item.section) {
      scrollToSection(item.section);
    }
  };

  const handleToolClick = (item: SidebarItem) => {
    setActiveTool(item.id);
    if (item.section) {
      scrollToSection(item.section);
    }
  };

  const handleGeneralClick = (item: SidebarItem) => {
    scrollToSection(item.id);
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif font-bold text-lg text-gradient">Dashboard</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        {/* Calculadoras */}
        <div className="mb-6">
          {!isCollapsed && (
            <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Calculadoras
            </h3>
          )}
          <div className="space-y-1">
            {calculatorItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleCalculatorClick(item)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                  activeCalculator === item.id
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className={cn("w-5 h-5 flex-shrink-0", isCollapsed && "mx-auto")} />
                {!isCollapsed && <span className="font-medium">{item.title}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Ferramentas */}
        <div className="mb-6">
          {!isCollapsed && (
            <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Ferramentas
            </h3>
          )}
          <div className="space-y-1">
            {toolItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleToolClick(item)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                  activeTool === item.id
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className={cn("w-5 h-5 flex-shrink-0", isCollapsed && "mx-auto")} />
                {!isCollapsed && <span className="font-medium">{item.title}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Geral */}
        <div className="mb-6">
          {!isCollapsed && (
            <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Geral
            </h3>
          )}
          <div className="space-y-1">
            {generalItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleGeneralClick(item)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                  "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className={cn("w-5 h-5 flex-shrink-0", isCollapsed && "mx-auto")} />
                {!isCollapsed && <span className="font-medium">{item.title}</span>}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Theme Toggle & Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className={cn("flex items-center", isCollapsed ? "justify-center" : "justify-between")}>
          {!isCollapsed && (
            <span className="text-xs text-muted-foreground">Tema</span>
          )}
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
};
