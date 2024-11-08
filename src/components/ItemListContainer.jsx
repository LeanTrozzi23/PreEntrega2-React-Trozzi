import React, { useEffect, useState } from "react";
import products from "../assets/data.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../global/style.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        let productsFiltered = [];

        if (categoryId) {
          const q = query(
            collection(db, "products"),
            where("category", "==", categoryId)
          );

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            productsFiltered.push({ id: doc.id, ...doc.data() });
          });
        } else {
          const querySnapshot = await getDocs(collection(db, "products"));
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            productsFiltered.push({ id: doc.id, ...doc.data() });
          });
        }
        setProducts(productsFiltered);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  return <ItemList products={products} />;
};

export default ItemListContainer;
