import React, { useEffect, useState } from "react";
import products from "../assets/data.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "../global/style.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = () => {
      return new Promise((resolve) => {
        const productFound = products.find(
          (productToFind) => productToFind.id === Number(id)
        );
        setTimeout(() => {
          resolve(productFound);
        }, 2000); // Retraso de 2 segundos
      });
    };

    fetchProduct().then((product) => {
      setProduct(product);
      setLoading(false); // Cambiar el estado de carga a falso
    });
  }, [id]);

  // Mostrar mensaje de carga
  if (loading) {
    return <h1 className="h1-loading">Cargando producto...</h1>;
  }

  return product && <ItemDetail product={product} />;
};
export default ItemDetailContainer;
