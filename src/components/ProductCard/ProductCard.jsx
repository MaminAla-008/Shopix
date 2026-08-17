import "./ProductCard.scss";

const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price} $</p>

      <button type="button" onClick={() => onAddToCart?.(product)}>
        Ajouter au panier
      </button>
      <button type="button" className="buy-button" onClick={() => onBuyNow?.(product)}>
        Acheter
      </button>
    </div>
  );
};

export default ProductCard;