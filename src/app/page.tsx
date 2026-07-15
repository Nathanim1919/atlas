import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default async function Home() {
  return (
    <div className="w-full mx-auto">
      <Hero />
      <About />
      <Services />
      <Products />
      <Testimonials />
      <Clients />
      <Contact />
    </div>
  );
}
