import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalculatorArbiProWrapper } from "./CalculatorArbiProWrapper";
import { CalculatorFreeProWrapper } from "./CalculatorFreeProWrapper";
import { CalculatorMultiLayWrapper } from "./CalculatorMultiLayWrapper";
import { Calculator, TrendingUp, Layers } from "lucide-react";

interface CalculatorSectionProps {
  activeCalculator: string;
  setActiveCalculator: (id: string) => void;
}

export const CalculatorSection = ({ activeCalculator, setActiveCalculator }: CalculatorSectionProps) => {
  // Detectar qual calculadora abrir baseado nos parâmetros da URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    const freeproParams = ['mode', 'ho', 'hc', 'qs', 'fv', 'er', 'co', 'cc', 'cs', 'cr', 'entries', 'numEntries'];
    const arbiproParams = ['n', 'h', 'sc', 'si'];
    const multilayParams = ['ml', 'mlt', 'mle', 'mlf', 'mlo', 'mln', 'mlb'];
    
    const hasFreePro = freeproParams.some(param => params.has(param));
    const hasArbiPro = arbiproParams.some(param => params.has(param));
    const hasMultiLay = multilayParams.some(param => params.has(param));
    
    if (hasFreePro && !hasArbiPro && !hasMultiLay) {
      setActiveCalculator("freepro");
    } else if (hasMultiLay && !hasArbiPro && !hasFreePro) {
      setActiveCalculator("multilay");
    }
  }, [setActiveCalculator]);

  return (
    <section id="calculadoras" className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
            Nossas <span className="text-gradient">Calculadoras</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ferramentas profissionais para maximizar seus lucros
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeCalculator} onValueChange={setActiveCalculator} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8 h-12 p-1 bg-card border border-border">
            <TabsTrigger 
              value="arbipro" 
              className="text-sm font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              <Calculator className="w-4 h-4 mr-2" />
              ArbiPro
            </TabsTrigger>
            <TabsTrigger 
              value="freepro" 
              className="text-sm font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              FreePro
            </TabsTrigger>
            <TabsTrigger 
              value="multilay" 
              className="text-sm font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              <Layers className="w-4 h-4 mr-2" />
              MultiLay
            </TabsTrigger>
          </TabsList>

          <TabsContent value="arbipro" className="mt-0">
            <CalculatorArbiProWrapper />
          </TabsContent>

          <TabsContent value="freepro" className="mt-0">
            <CalculatorFreeProWrapper />
          </TabsContent>

          <TabsContent value="multilay" className="mt-0">
            <CalculatorMultiLayWrapper />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
