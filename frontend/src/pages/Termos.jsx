import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Termos() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] p-10 bg-white max-w-4xl mx-auto rounded-lg shadow-lg mt-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-900 text-center">Termos de Uso e Política de Privacidade</h1>
        <section className="text-gray-700 text-sm leading-relaxed space-y-4">
          <p>
            Bem-vindo ao MuscleMax. Ao acessar nosso site, você concorda com os termos e condições descritos aqui. 
            Protegemos suas informações pessoais e respeitamos sua privacidade conforme nossa política.
          </p>
          <p>
            Todo o conteúdo é protegido por direitos autorais. É proibida a cópia, reprodução ou distribuição sem autorização.
          </p>
          <p>
            Reservamo-nos o direito de modificar os termos a qualquer momento, sendo seu dever revisar periodicamente.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
