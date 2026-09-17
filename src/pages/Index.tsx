import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import QuemSomos from "@/components/home/QuemSomos";
import ComoFunciona from "@/components/home/ComoFunciona";
import Portfolio from "@/components/home/Portfolio";
import CtaBanner from "@/components/home/CtaBanner";
import Contato from "@/components/home/Contato";
import Footer from "@/components/home/Footer";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export default function Index() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <ComoFunciona />
        <Portfolio />
        <CtaBanner />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
