import Bio from "@/components/bio";
import Navbar from "@/components/navbar";
import Projects from "@/components/project-section";
import SkillSection from "@/components/skill-section";
import { Separator } from "@/components/ui/separator";
import Work from "@/components/work-section";

export default function Home() {
  return (
    <div className="md:max-w-3xl mx-auto md:mt-8">
      <Navbar></Navbar>
      <Bio />
      <Separator />
      <SkillSection />
      <section id="projects">
        <Projects />
      </section>
      <section id="work">
        <Work />
      </section>
    </div>
  );
}
