import { MatrixRain } from '@/components/matrix-rain';
import { SiteNav } from '@/components/site-nav';
import { HeroText } from '@/components/hero-text';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { RevealOnScroll } from '@/components/reveal-on-scroll';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <MatrixRain />
      <SiteNav />
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <HeroText />
      </section>
      <RevealOnScroll>
        <AboutSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <SkillsSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ProjectsSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ContactSection />
      </RevealOnScroll>
    </main>
  );
}
