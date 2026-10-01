const SKILLS = ['Java', 'Spring Boot', 'TypeScript', 'Next.js', 'React Native', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Prisma'];

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="mb-10 text-3xl font-bold text-[#D4AF37]">Tecnologias</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill) => (
          <span key={skill} className="rounded-full border border-[#D4AF37]/40 px-4 py-2 text-sm text-gray-200">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
