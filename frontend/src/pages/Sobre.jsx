import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Sobre() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] p-10 bg-white max-w-5xl mx-auto rounded-lg shadow-lg mt-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-900">Sobre Nós</h1>
        <section className="text-gray-800 text-lg leading-relaxed space-y-4">
          <p>
            O MuscleMax nasceu da paixão por tecnologia e fitness. Nossa missão é
            potencializar seus resultados por meio de IA e realidade aumentada.
          </p>
          <p>
            Nossa equipe é formada por especialistas em tecnologia, design e
            educação física comprometidos em entregar a melhor experiência para você.
          </p>
          <p>
            Acreditamos no poder da inovação para transformar vidas e estamos
            sempre buscando o que há de mais moderno para o seu treino.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
