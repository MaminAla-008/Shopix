import "./Categories.scss";

import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaGamepad,
  FaClock,
  FaCamera
} from "react-icons/fa";

const data = [
  {
    id:1,
    icon:<FaMobileAlt/>,
    title:"Smartphones",
    items:"128 produits"
  },
  {
    id:2,
    icon:<FaLaptop/>,
    title:"Ordinateurs portables",
    items:"76 produits"
  },
  {
    id:3,
    icon:<FaHeadphones/>,
    title:"Casques audio",
    items:"58 produits"
  },
  {
    id:4,
    icon:<FaClock/>,
    title:"Montres connectées",
    items:"42 produits"
  },
  {
    id:5,
    icon:<FaGamepad/>,
    title:"Gaming",
    items:"95 produits"
  },
  {
    id:6,
    icon:<FaCamera/>,
    title:"Appareils photo",
    items:"33 produits"
  }
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