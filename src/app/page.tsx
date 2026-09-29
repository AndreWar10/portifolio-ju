import { Hero } from "@/components/Hero";
import { SobreSection } from "@/components/sections/SobreSection";
import { AudiovisualSection } from "@/components/sections/AudiovisualSection";
import { CampanhasSection } from "@/components/sections/CampanhasSection";
import { FotografiaSection } from "@/components/sections/FotografiaSection";
import { RadioSection } from "@/components/sections/RadioSection";
import { TccSection } from "@/components/sections/TccSection";
import { PessoaisSection } from "@/components/sections/PessoaisSection";
import { DestaquesSection } from "@/components/sections/DestaquesSection";
import { ProcessoSection } from "@/components/sections/ProcessoSection";
import { ContatoSection } from "@/components/sections/ContatoSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SobreSection />
      <DestaquesSection />
      <AudiovisualSection />
      <CampanhasSection />
      <FotografiaSection />
      <RadioSection />
      <TccSection />
      <PessoaisSection />
      <ProcessoSection />
      <ContatoSection />
    </>
  );
}
