import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load tool pages
const HandicapAsiatico = lazy(() => import("./pages/ferramentas/HandicapAsiatico"));
const HandicapEuropeu = lazy(() => import("./pages/ferramentas/HandicapEuropeu"));
const Protecao = lazy(() => import("./pages/ferramentas/Protecao"));
const CasasRegulamentadas = lazy(() => import("./pages/ferramentas/CasasRegulamentadas"));
const InfoCasas = lazy(() => import("./pages/ferramentas/InfoCasas"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="animate-pulse text-primary text-lg">Carregando...</div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                
                {/* Tool Pages */}
                <Route path="/ferramentas/handicap-asiatico" element={<HandicapAsiatico />} />
                <Route path="/ferramentas/handicap-europeu" element={<HandicapEuropeu />} />
                <Route path="/ferramentas/protecao" element={<Protecao />} />
                <Route path="/ferramentas/casas-regulamentadas" element={<CasasRegulamentadas />} />
                <Route path="/ferramentas/info-casas" element={<InfoCasas />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
