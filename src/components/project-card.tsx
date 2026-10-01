'use client';

import { useState } from 'react';
import { Project } from '@/lib/projects';

export function ProjectCard({ project }: { project: Project }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <article className="overflow-hidden rounded-lg border border-[#D4AF37]/20 bg-black/70 backdrop-blur-sm transition-colors hover:border-[#D4AF37]/60">
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="block w-full cursor-zoom-in"
          aria-label={`Ampliar imagem de ${project.title}`}
        >
          <img src={project.image} alt={project.imageAlt} className="h-44 w-full object-cover" />
        </button>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-gray-400">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-[#D4AF37]/30 px-2 py-0.5 text-xs text-[#D4AF37]">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-4 text-sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
              GitHub
            </a>
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                Live demo
              </a>
            )}
          </div>
        </div>
      </article>

      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-30 flex cursor-zoom-out items-center justify-center bg-black/90 p-6"
        >
          <img src={project.image} alt={project.imageAlt} className="max-h-full max-w-full rounded-lg" />
        </div>
      )}
    </>
  );
}
