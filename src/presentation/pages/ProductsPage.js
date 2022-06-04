import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "../../domain/helpers/store";
import { queryProducts } from "../../domain/reducers/product.reducer";
import Card from "../components/atoms/Card";
import Paginate from "../components/atoms/Paginate";
import {useParams} from "react-router-dom";

export default function ProductsPage({ setIsLoading }) {
  const products = useSelector((state) => state.products);
  const paging = useSelector((state) => state.paging);
  const search = useSelector((state) => state.search);
  const { category } = useParams();
  const fetchProducts = () => store.dispatch(queryProducts("", category, paging, setIsLoading));

  useEffect(() => {
    if (!search) {
      fetchProducts();
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="my-10 md:mx-10 md:mx-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 container">
          {products.map((product, id) => {
            return (
              <Card key={id} className="px-10 md:px-0" product={product} />
            );
          })}
        </div>
        <Paginate setIsLoading={setIsLoading} />
      </div>
    </div>
  );
}
