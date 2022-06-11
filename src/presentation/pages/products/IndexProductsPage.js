import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { store } from "../../../domain/helpers/store";
import { queryProducts } from "../../../domain/reducers/product.reducer";
import Card from "../../components/atoms/Card";
import Paginate from "../../components/atoms/Paginate";
import {useParams} from "react-router-dom";
import {useLocation} from "react-router";

export default function IndexProductsPage({ setIsLoading }) {
  const products = useSelector((state) => state.products);
  const paging = useSelector((state) => state.paging);
  const { category } = useParams();
  const component = useLocation().search;

  useEffect(() => {
    const query = new URLSearchParams(component).get('q');
    store.dispatch(queryProducts(query, category, paging, setIsLoading))
  }, []);

  return (
      <div className="flex flex-col justify-end items-center h-full">
        {
          products.length ? (
              <>
                <div className="my-10 md:mx-10 md:mx-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 container">
                  {products.map((product, id) => {
                    return (
                        <Card key={id} className="px-10 md:px-0" product={product} />
                    );
                  })}
                </div>
                <Paginate setIsLoading={setIsLoading} />
              </>
          ) : (
              <div className="h-full my-10 items-center self-center text-lg">
                Lo sentimos! No encontramos resultados
              </div>
          )
        }
      </div>
  );
}
