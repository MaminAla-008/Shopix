
import Hero from "../components/Hero/Hero";
import TechExperience from "../components/TechExperience/TechExperience";
import "../styles/pages.scss";
import "../styles/Home.scss";

const categoryShowcase = [
  {
    title: "Téléphones premium",
    text: "iPhone, Samsung, Pixel, Xiaomi et les grandes gammes Android.",
    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-xl-1.jpg",
    href: "/shop?category=phones",
  },
  {
    title: "Casques immersifs",
    text: "Des formats studio, gaming et nomades pour chaque ambiance.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    href: "/shop?category=headphones",
  },
  {
    title: "Écouteurs sans fil",
    text: "Une sélection de modèles compacts et audio premium.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
    href: "/shop?category=earbuds",
  },
];

const Home = () => {
  return (
    <main className="home-page">

      {/* =========================
          HERO
      ========================= */}
      <Hero />
      <TechExperience categories={categoryShowcase} />
    </main>
  );
};

export default Home;