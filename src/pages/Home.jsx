
import Hero from "../components/Hero/Hero";
import "../styles/pages.scss";
import "../styles/Home.scss";

const Home = () => {
  return (
    <main className="home-page">

      {/* =========================
          HERO
      ========================= */}
      <Hero />
    </main>
  );
};

export default Home;