import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Calculator, Target, Globe, ShieldCheck, Shield, Database, Info, MessageCircle, Home } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const calculatorItems = [
  { id: "calculadoras", title: "Calculadoras", icon: Calculator },
];

const toolItems = [
  { id: "handicap-asiatico", title: "HA Asiático", icon: Target, path: "/ferramentas/handicap-asiatico" },
  { id: "handicap-europeu", title: "HA Europeu", icon: Globe, path: "/ferramentas/handicap-europeu" },
  { id: "protection", title: "Proteção", icon: ShieldCheck, path: "/ferramentas/protecao" },
  { id: "casas", title: "Casas Reg.", icon: Shield, path: "/ferramentas/casas-regulamentadas" },
  { id: "info-casas", title: "Info Casas", icon: Database, path: "/ferramentas/info-casas" },
];

const generalItems = [
  { id: "sobre", title: "Sobre", icon: Info },
  { id: "contato", title: "Contato", icon: MessageCircle },
];

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-full px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Calculator className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-serif font-bold text-lg text-gradient">Hunter</span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-sidebar border-sidebar-border">
              <div className="py-6">
                <h2 className="text-lg font-serif font-bold text-gradient mb-6">Hunter</h2>
                <nav className="space-y-6">
                  {/* Home */}
                  <div>
                    <Link
                      to="/"
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                    >
                      <Home className="w-5 h-5" />
                      <span className="font-medium">Início</span>
                    </Link>
                  </div>

                  {/* Calculadoras */}
                  <div>
                    <h3 className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Calculadoras
                    </h3>
                    {calculatorItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </button>
                    ))}
                  </div>

                  {/* Ferramentas */}
                  <div>
                    <h3 className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Ferramentas
                    </h3>
                    {toolItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Geral */}
                  <div>
                    <h3 className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Geral
                    </h3>
                    {generalItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
