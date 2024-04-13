import type { MetaFunction } from "@remix-run/node";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "../sections";
import Nav from "../Components/Nav";
export const meta: MetaFunction = () => {
  return [{ title: "Nike" }];
};

const App = () => (
  <main className="relative">
    <Nav />
    <section className="sm:pl-16 pl-8 wide:sm:pr-16 pr-8 sm:pb-24 pb-12">
      <Hero />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <PopularProducts />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SuperQuality />
    </section>
    <section className="sm:px-16 px-8 py-10">
      <Services />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue sm:px-16 px-8 sm:py-24 py-12">
      <CustomerReviews />
    </section>
    <section className="sm:px-16 px-8 sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black text-gray-50 sm:px-16 px-8 sm:pt-24 pt-12 pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
