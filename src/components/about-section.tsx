export function AboutSection() {
  return (
    <section id="sobre" className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="mb-6 text-3xl font-bold text-[#D4AF37]">Sobre mim</h2>
      <p className="text-gray-300">
        Desenvolvedor fullstack júnior, construindo um portfólio de sistemas reais em vez de apenas projetos de
        estudo. No backend, trabalho principalmente com Java e Spring Boot — já implementei autenticação e controle
        de acesso por papéis, mensageria assíncrona com RabbitMQ, cache e rate limiting com Redis, e comunicação em
        tempo real via WebSocket/STOMP. No front-end e mobile, uso TypeScript, construindo aplicações full-stack com
        Next.js e um app real em React Native, rodando em iOS e Android.
      </p>
    </section>
  );
}
