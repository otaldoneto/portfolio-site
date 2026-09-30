import { MatrixRain } from '@/components/matrix-rain';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <MatrixRain />
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-5xl font-bold text-[#D4AF37]">Ismael Neto</h1>
        <p className="text-xl text-gray-300">
          Desenvolvedor Fullstack — Java/Spring · TypeScript/React · React Native
        </p>
      </section>
    </main>
  );
}
