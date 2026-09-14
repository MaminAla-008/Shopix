import "./ProductCard.scss";
import ProductImageViewer from "../ProductImageViewer/ProductImageViewer";

const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
  return (
    <div className="product-card">
      <ProductImageViewer product={product} />

      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">
        {String(product.price).includes("$") ? product.price : `${product.price} $`}
      </p>

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