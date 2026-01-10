import { useState, lazy, Suspense } from "react";
import { AppSidebar } from "./AppSidebar";
import { MobileHeader } from "./MobileHeader";
import { DashboardHero } from "./DashboardHero";
import { Skeleton } from "@/components/ui/skeleton";
const CalculatorSection = lazy(() => import("./CalculatorSection").then(m => ({
  default: m.CalculatorSection
})));
const About = lazy(() => import("./About").then(m => ({
  default: m.About
})));
const Contact = lazy(() => import("./Contact").then(m => ({
  default: m.Contact
})));
const LoadingSection = () => <div className="py-12 px-4">
    <div className="space-y-4">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-64 w-full" />
    </div>
  </div>;
export const DashboardLayout = () => {
  const [activeCalculator, setActiveCalculator] = useState("arbipro");
  return <div className="min-h-screen bg-background">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <AppSidebar activeCalculator={activeCalculator} setActiveCalculator={setActiveCalculator} />
      </div>

      {/* Mobile Header */}
      <MobileHeader />

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        {/* Hero Section */}
        <DashboardHero />

        {/* Calculadoras */}
        <Suspense fallback={<LoadingSection />}>
          <CalculatorSection activeCalculator={activeCalculator} setActiveCalculator={setActiveCalculator} />
        </Suspense>

        {/* Sobre */}
        <Suspense fallback={<LoadingSection />}>
          <About />
        </Suspense>

        {/* Contato */}
        <Suspense fallback={<LoadingSection />}>
          <Contact />
        </Suspense>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border bg-card/50">
          <div className="max-w-7xl mx-auto text-center">
            <div className="premium-divider mb-6" />
            <p className="text-muted-foreground text-sm">
              © 2025 <span className="text-gradient font-semibold">Hunter Green  </span> - Ferramentas Profissionais
            </p>
          </div>
        </footer>
      </main>
    </div>;
};