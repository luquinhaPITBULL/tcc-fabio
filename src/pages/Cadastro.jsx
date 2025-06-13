import Header from "../components/Header";
import FormularioCadastro from "../components/FormularioCadastro";
import Footer from "../components/Footer";

export default function Cadastro() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] bg-gray-50 py-10">
        <FormularioCadastro />
      </main>
      <Footer />
    </>
  );
}
