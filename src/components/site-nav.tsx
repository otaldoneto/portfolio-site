'use client';

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

export function SiteNav() {
  return (
    <nav className="fixed top-0 z-20 w-full border-b border-[#D4AF37]/20 bg-black/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-semibold text-[#D4AF37]">Ismael Neto</span>
        <div className="flex gap-6 text-sm text-gray-300">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-[#D4AF37]">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
