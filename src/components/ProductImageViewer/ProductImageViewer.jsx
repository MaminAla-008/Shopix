import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./ProductImageViewer.scss";

const ProductImageViewer = ({ product, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("front");
  const isPhone = product.category === "phones";
  const frontImage = product.image;
  const backImage =
    product.backImage || product.image.replace(/-(1|2)\.jpg$/, (_, side) =>
      side === "1" ? "-2.jpg" : "-1.jpg"
    );
  const displayedImage = view === "back" ? backImage : frontImage;

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={`product-image-trigger ${className}`}
        onClick={() => {
          setView("front");
          setIsOpen(true);
        }}
        aria-label={`Voir l'image de ${product.name}`}
      >
        <img src={product.image} alt={product.name} />
        <span>Voir l’image</span>
      </button>

      {isOpen && (
        <div
          className="product-viewer-backdrop"
          role="presentation"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="product-viewer"
            role="dialog"
            aria-modal="true"
            aria-label={`Images de ${product.name}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="product-viewer-header">
              <div>
                <span className="product-viewer-eyebrow">Vue produit</span>
                <h2>{product.name}</h2>
              </div>
              <button
                type="button"
                className="product-viewer-close"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer la vue produit"
              >
                <FaTimes />
              </button>
            </div>

            <div className="product-viewer-image-wrap">
              <img
                src={displayedImage}
                alt={`${product.name} - ${view}`}
                onError={(event) => {
                  if (view === "back") {
                    event.currentTarget.src = frontImage;
                  }
                }}
              />
            </div>

            {isPhone && (
              <div className="product-viewer-switcher" role="group" aria-label="Choisir la vue">
                <button
                  type="button"
                  className={view === "front" ? "active" : ""}
                  onClick={() => setView("front")}
                >
                  Face
                </button>
                <button
                  type="button"
                  className={view === "back" ? "active" : ""}
                  onClick={() => setView("back")}
                >
                  Dos
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductImageViewer;
