export default function FormularioCadastro() {
  return (
    <form className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">Cadastrar</h2>
      <input
        type="text"
        placeholder="Nome"
        className="w-full mb-5 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-5 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
      />
      <input
        type="password"
        placeholder="Senha"
        className="w-full mb-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
      />
      <button
        type="submit"
        className="w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-md hover:bg-yellow-300 transition"
      >
        Cadastrar
      </button>
    </form>
  );
}
