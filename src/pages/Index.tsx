import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import ComoFunciona from "@/components/home/ComoFunciona";
import Portfolio from "@/components/home/Portfolio";
import CtaBanner from "@/components/home/CtaBanner";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export default function Index() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <Header />
      <main>
        <Hero />
        <ComoFunciona />
        <Portfolio />
        <CtaBanner />
      </main>
      <WhatsAppFloat />
    </div>
  );
}
