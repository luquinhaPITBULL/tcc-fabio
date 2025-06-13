import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contato() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] p-10 bg-white max-w-md mx-auto rounded-lg shadow-lg mt-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-900 text-center">Contato</h1>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Nome"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <textarea
            placeholder="Mensagem"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-md hover:bg-yellow-300 transition"
          >
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
