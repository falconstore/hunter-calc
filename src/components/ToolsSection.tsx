import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HandicapTable } from "./HandicapTable";
import { HandicapEuropeanTable } from "./HandicapEuropeanTable";
import { HandicapProtection } from "./HandicapProtection";
import { CasasRegulamentadasWrapper } from "./CasasRegulamentadasWrapper";
import { CasasArbbetList } from "./CasasArbbetList";
import { Target, Shield, ShieldCheck, Globe, Database } from "lucide-react";

interface ToolsSectionProps {
  activeTool: string;
  setActiveTool: (id: string) => void;
}

export const ToolsSection = ({ activeTool, setActiveTool }: ToolsSectionProps) => {
  return (
    <section id="handicap-casas" className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
            Ferramentas <span className="text-gradient">Extras</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tabelas de referência e informações das casas
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTool} onValueChange={setActiveTool} className="w-full">
          <TabsList className="flex flex-wrap w-full max-w-3xl gap-1 mb-8 h-auto p-1 bg-card border border-border">
            <TabsTrigger 
              value="handicap-asiatico" 
              className="flex-1 min-w-[120px] text-xs md:text-sm font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground transition-all duration-300 py-2"
            >
              <Target className="w-4 h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">HA Asiático</span>
              <span className="sm:hidden">Asia</span>
            </TabsTrigger>
            <TabsTrigger 
              value="handicap-europeu" 
              className="flex-1 min-w-[120px] text-xs md:text-sm font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground transition-all duration-300 py-2"
            >
              <Globe className="w-4 h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">HA Europeu</span>
              <span className="sm:hidden">Euro</span>
            </TabsTrigger>
            <TabsTrigger 
              value="protection" 
              className="flex-1 min-w-[100px] text-xs md:text-sm font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground transition-all duration-300 py-2"
            >
              <ShieldCheck className="w-4 h-4 mr-1 md:mr-2" />
              Proteção
            </TabsTrigger>
            <TabsTrigger 
              value="casas" 
              className="flex-1 min-w-[100px] text-xs md:text-sm font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground transition-all duration-300 py-2"
            >
              <Shield className="w-4 h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Casas Reg.</span>
              <span className="sm:hidden">Casas</span>
            </TabsTrigger>
            <TabsTrigger 
              value="info-casas" 
              className="flex-1 min-w-[80px] text-xs md:text-sm font-bold data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-primary-foreground transition-all duration-300 py-2"
            >
              <Database className="w-4 h-4 mr-1 md:mr-2" />
              Info
            </TabsTrigger>
          </TabsList>

          <TabsContent value="handicap-asiatico" className="mt-0">
            <HandicapTable />
          </TabsContent>

          <TabsContent value="handicap-europeu" className="mt-0">
            <HandicapEuropeanTable />
          </TabsContent>

          <TabsContent value="protection" className="mt-0">
            <HandicapProtection />
          </TabsContent>

          <TabsContent value="casas" className="mt-0">
            <CasasRegulamentadasWrapper />
          </TabsContent>

          <TabsContent value="info-casas" className="mt-0">
            <CasasArbbetList />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
