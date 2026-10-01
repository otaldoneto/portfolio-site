import { PROJECTS } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative z-10 mx-auto max-w-5xl px-6 py-24"
    >
      {" "}
      <h2 className="mb-12 text-center text-3xl font-bold text-[#D4AF37]">
        Projetos
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-[#D4AF37]/20 bg-black/70 p-6 backdrop-blur-sm transition-colors hover:border-[#D4AF37]/60"
          >
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-gray-400">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#D4AF37]/30 px-2 py-0.5 text-xs text-[#D4AF37]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline"
              >
                GitHub
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline"
                >
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
