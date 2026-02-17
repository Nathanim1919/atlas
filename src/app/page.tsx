import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import { client } from "@/sanity/lib/client";
import { TESTIMONIALS_QUERY, SERVICES_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const [testimonials, services] = await Promise.all([
    client.fetch(TESTIMONIALS_QUERY),
    client.fetch(SERVICES_QUERY),
  ]);

  return (
    <div className="w-full mx-auto">
      <Hero />
      <About />
      <Services services={services} />
      <Products />
      <Testimonials testimonials={testimonials} />
      <Clients />
      <Contact />
    </div>
  );
}
