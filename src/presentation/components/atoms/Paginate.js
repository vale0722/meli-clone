import React from "react";
import { useSelector } from "react-redux";
import { searchProducts } from "../../../domain/helpers/products";
import { useNavigate } from "react-router-dom";

export default function Paginate({ setIsLoading }) {
  const navigator = useNavigate();
  const paging = useSelector((state) => state.paging);
  const search = useSelector((state) => state.search);
  const before = async () => {
    if (paging.offset !== 0) {
      await searchProducts(navigator, search, setIsLoading, {
        offset: paging.offset - 50,
      });
    }
  };

  const next = async () => {
    if (paging.offset <= paging.total) {
      await searchProducts(navigator, search, setIsLoading, {
        offset: paging.offset + 50,
      });
    }
  };

  return (
    <div className="btn-group grid grid-cols-2 my-10">
      <button
        className="btn btn-outline"
        disabled={paging.offset === 0}
        onClick={() => {
          before();
        }}
      >
        Anterior
      </button>
      <button
        className="btn btn-outline"
        disabled={paging.limit >= paging.total}
        onClick={() => {
          next();
        }}
      >
        Siguiente
      </button>
    </div>
  );
}
