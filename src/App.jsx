import Header from "./sections/Header";
import Slider from "./sections/Slider";
import About from "./sections/About";
import Overview from "./sections/Overview";
import Info from "./sections/Info";
import InstagramEmbed from "./sections/InstagramEmbed";
import SalonPartners from "./sections/SalonPartners";
import Footer from "./sections/Footer";


const App = () => {
  return (
    <main className="relative">
      <Header />
      <section>
        <Slider />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Overview />
      </section>
      <section>
        <Info />
      </section>
      <section>
        <SalonPartners />
      </section>
      <section>
        <InstagramEmbed />
      </section>
      <section>
        <Footer />
      </section>

    </main>
  );
};

export default App;
