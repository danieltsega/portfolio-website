import Bio from "@/components/bio";
import Contact from "@/components/contact-section";
import Edu from "@/components/edu-section";
import Footer from "@/components/footer";
import MyWork from "@/components/myWork-section";
import Navbar from "@/components/navbar";
import Projects from "@/components/project-section";
import SkillSection from "@/components/skill-section";
import SocialLinks from "@/components/social-card";
import { Separator } from "@/components/ui/separator";
import Work from "@/components/work-section";

export default function Home() {
  return (
    <div className="md:max-w-3xl mx-auto md:mt-8">
      {/*Nav-Bar Section*/}
      <Navbar></Navbar>
      {/*Hero Section*/}
      <Bio />

      <SocialLinks />
      <Separator />
      {/*Skill Section*/}
      <SkillSection />
      {/*My Works Section*/}
      <MyWork />
      {/*Project Section*/}
      <section id="projects">
        <Projects />
      </section>
      {/*Work Section*/}
      <section id="work">
        <Work />
      </section>
      {/*Edu Section*/}
      <section id="edu">
        <Edu />
      </section>
      {/*Contact Section*/}
      <section id="contact">
        <Contact />
      </section>
      {/*Footer Section*/}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
