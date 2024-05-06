import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CustomerReview from "./components/CustomerReview";
import Subscribe from "./components/Subscribe";
import PopularQuality from "./components/PopularQuality";
import Footer from "./components/Footer";
import SuperQuality from "./components/SuperQuality";
import Services from "./components/Services";
import SpecialOffers from "./components/SpecialOffers";

function App() {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularQuality />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding-x w-full py-16 sm:py-32">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
