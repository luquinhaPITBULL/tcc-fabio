import Header from "../components/Header";
import Banner from "../components/Banner";
import Testemunhos from "../components/Testemunhos";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <Banner />
        <Testemunhos />
      </main>
      <Footer />
    </>
  );
}
