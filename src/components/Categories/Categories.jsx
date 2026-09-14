import "./Categories.scss";

import {
  FaMobileAlt,
  FaHeadphones,
  FaTag,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaMobileAlt />,
    title: "Téléphone portable",
    items: "128 produits",
  },
  {
    id: 2,
    icon: <FaHeadphones />,
    title: "Casque Bluetooth",
    items: "58 produits",
  },
  {
    id: 3,
    icon: <FaTag />,
    title: "Écouteurs sans fil",
    items: "33 produits",
  },
];

const Categories = () => {
  return (
    <section className="categories">

      <div className="container">

        <div className="title">

          <h2>Par catégories</h2>

          <a href="/">Voir tout</a>

        </div>

        <div className="category-grid">

          {data.map((item)=>(
            <div className="category-card" key={item.id}>

              <div className="icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.items}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;