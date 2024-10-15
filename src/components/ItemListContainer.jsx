import React, { useEffect, useState } from "react";
import products from "../assets/data.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "../global/style.css";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    const promise1 = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });
    try {
      const getProducts = async () => {
        setLoading(true);
        const product = await promise1;
        let productsFiltered;
        console.log("Category ID:", categoryId);
        if (categoryId) {
          productsFiltered = products.filter(
            (product) =>
              product.category.toLowerCase() === categoryId.toLowerCase()
          );
        } else {
          productsFiltered = products;
        }
        console.log("Filtered Products:", productsFiltered);
        setProduct(productsFiltered);
        setLoading(false);
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, [categoryId]);

  useEffect(() => {
    console.log("Este side effect se ejecuta en el montaje del componente");

    return () => {
      console.log("Aca se va a desmontar el componente!");
    };
  }, []);

  return loading ? (
    <h1 className="h1-loading">Cargando productos ...</h1>
  ) : (
    <ItemList products={product} />
  );
};

export default ItemListContainer;
