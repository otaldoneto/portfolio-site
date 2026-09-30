export function ContactSection() {
  return (
    <section className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="mb-6 text-3xl font-bold text-[#D4AF37]">Vamos conversar?</h2>
      <p className="mb-10 text-gray-400">
        Currículo completo, ou contato direto — o que for mais fácil pra você.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="/curriculo-ismael-neto.pdf"
          download
          className="rounded-full border border-[#D4AF37] px-6 py-3 text-sm font-medium text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-black"
        >
          Baixar currículo
        </a>
        <a
          href="https://www.linkedin.com/in/ismaelneto22/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#D4AF37]/40 px-6 py-3 text-sm text-gray-200 transition-colors hover:border-[#D4AF37]"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/otaldoneto"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#D4AF37]/40 px-6 py-3 text-sm text-gray-200 transition-colors hover:border-[#D4AF37]"
        >
          GitHub
        </a>
        <a
          href="mailto:ghostfail2016@gmail.com"
          className="rounded-full border border-[#D4AF37]/40 px-6 py-3 text-sm text-gray-200 transition-colors hover:border-[#D4AF37]"
        >
          Email
        </a>
      </div>
    </section>
  );
}
