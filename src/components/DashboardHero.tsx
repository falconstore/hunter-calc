import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export const DashboardHero = () => {
  const scrollToCalculators = () => {
    document.getElementById("calculadoras")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-16 lg:py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center pt-16 lg:pt-0">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Plataforma Premium</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
          <span className="text-foreground">Ferramentas</span>
          <br />
          <span className="text-gradient-gold">Profissionais</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Calculadoras avançadas e ferramentas de análise para 
          <span className="text-primary font-semibold"> maximizar seus resultados</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToCalculators}
            className="gradient-glow text-base px-8 py-6 font-bold uppercase tracking-wide"
          >
            Começar Agora
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg mx-auto">
          {[
            { value: "3", label: "Calculadoras" },
            { value: "5+", label: "Ferramentas" },
            { value: "100%", label: "Gratuito" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-gradient">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
