import { MatrixRain } from '@/components/matrix-rain';
import { ProjectsSection } from '@/components/projects-section';
import { HeroText } from '@/components/hero-text';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <MatrixRain />
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <HeroText />
      </section>
      <ProjectsSection />
    </main>
  );
}
