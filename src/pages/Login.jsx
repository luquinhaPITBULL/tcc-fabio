import Header from "../components/Header";
import FormularioLogin from "../components/FormularioLogin";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] bg-gray-50 py-10">
        <FormularioLogin />
      </main>
      <Footer />
    </>
  );
}
