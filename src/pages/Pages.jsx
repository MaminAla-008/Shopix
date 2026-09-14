import "../styles/pages.scss";
import "../styles/info.scss";


const infoCards = [
  {
    title: "À propos",
    text: "Découvrez notre histoire, notre mission et les valeurs qui guident notre boutique.",
  },
  {
    title: "Contact",
    text: "Notre équipe est disponible pour vous accompagner avant, pendant et après votre achat.",
  },
  {
    title: "FAQ",
    text: "Trouvez rapidement des réponses aux questions les plus fréquentes sur les commandes et les livraisons.",
  },
  {
    title: "Livraison",
    text: "Des expéditions rapides, fiables et suivies, partout où vous êtes.",
  },
];

const Pages = () => {
  return (
    <section className="pages-page">
      <div className="pages-intro">
        <span className="eyebrow">Informations utiles</span>
        <h1>Tout ce qu’il faut savoir sur notre boutique</h1>
        <p>
          Nous mettons à votre disposition des ressources simples et claires pour
          mieux vivre votre expérience d’achat.
        </p>
      </div>

      <div className="info-grid">
        {infoCards.map((item) => (
          <article className="info-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href="#">En savoir plus</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pages;