export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 text-center py-16 px-6 rounded-lg mx-auto max-w-5xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-4 leading-tight">
        Transforme seu treino com inteligência
      </h2>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        IA + Realidade Aumentada para treinos personalizados e resultados
        surpreendentes.
      </p>
      <a
        href="/cadastro"
        className="inline-block bg-blue-900 text-yellow-400 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-800 transition-colors duration-300"
      >
        Comece Agora
      </a>
    </section>
  );
}
