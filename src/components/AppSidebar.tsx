import { useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
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
  Home,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

interface SidebarItem {
  id: string;
  title: string;
  icon: React.ElementType;
  section?: string;
  path?: string;
}

const calculatorItems: SidebarItem[] = [
  { id: "arbipro", title: "ArbiPro", icon: Calculator, section: "calculadoras" },
  { id: "freepro", title: "FreePro", icon: TrendingUp, section: "calculadoras" },
  { id: "multilay", title: "MultiLay", icon: Layers, section: "calculadoras" },
];

const toolItems: SidebarItem[] = [
  { id: "handicap-asiatico", title: "HA Asiático", icon: Target, path: "/ferramentas/handicap-asiatico" },
  { id: "handicap-europeu", title: "HA Europeu", icon: Globe, path: "/ferramentas/handicap-europeu" },
  { id: "protection", title: "Proteção", icon: ShieldCheck, path: "/ferramentas/protecao" },
  { id: "casas", title: "Casas Reg.", icon: Shield, path: "/ferramentas/casas-regulamentadas" },
  { id: "info-casas", title: "Info Casas", icon: Database, path: "/ferramentas/info-casas" },
];

const generalItems: SidebarItem[] = [
  { id: "sobre", title: "Sobre", icon: Info },
  { id: "contato", title: "Contato", icon: MessageCircle },
];

interface AppSidebarProps {
  activeCalculator?: string;
  setActiveCalculator?: (id: string) => void;
}

export const AppSidebar = ({
  activeCalculator,
  setActiveCalculator,
}: AppSidebarProps = {}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const isOnMainPage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCalculatorClick = (item: SidebarItem) => {
    if (setActiveCalculator) {
      setActiveCalculator(item.id);
    }
    if (item.section && isOnMainPage) {
      scrollToSection(item.section);
    }
  };

  const handleGeneralClick = (item: SidebarItem) => {
    if (isOnMainPage) {
      scrollToSection(item.id);
    }
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
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif font-bold text-lg text-gradient">Hunter</span>
          </Link>
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
        {/* Home Link (when not on main page) */}
        {!isOnMainPage && (
          <div className="mb-6">
            <Link
              to="/"
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Home className={cn("w-5 h-5 flex-shrink-0", isCollapsed && "mx-auto")} />
              {!isCollapsed && <span className="font-medium">Início</span>}
            </Link>
          </div>
        )}

        {/* Calculadoras */}
        <div className="mb-6">
          {!isCollapsed && (
            <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Calculadoras
            </h3>
          )}
          <div className="space-y-1">
            {calculatorItems.map((item) => (
              isOnMainPage ? (
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
              ) : (
                <Link
                  key={item.id}
                  to="/"
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 flex-shrink-0", isCollapsed && "mx-auto")} />
                  {!isCollapsed && <span className="font-medium">{item.title}</span>}
                </Link>
              )
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
              <NavLink
                key={item.id}
                to={item.path!}
                className={({ isActive }) =>
                  cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )
                }
              >
                <item.icon className={cn("w-5 h-5 flex-shrink-0", isCollapsed && "mx-auto")} />
                {!isCollapsed && <span className="font-medium">{item.title}</span>}
              </NavLink>
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
              isOnMainPage ? (
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
              ) : (
                <Link
                  key={item.id}
                  to="/"
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 flex-shrink-0", isCollapsed && "mx-auto")} />
                  {!isCollapsed && <span className="font-medium">{item.title}</span>}
                </Link>
              )
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
