import { PROJECTS } from '@/lib/projects';
import { ProjectCard } from '@/components/project-card';

export function ProjectsSection() {
  return (
    <section id="projetos" className="relative z-10 mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-[#D4AF37]">Projetos</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
