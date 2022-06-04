import React from "react";
import "../../assets/styles/inputs/search.scss";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { store } from "../../../domain/helpers/store";
import {useNavigate, useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import { searchState } from "../../../domain/reducers/search.reducer";
import { searchProducts } from "../../../domain/helpers/products";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SearchInput({ setIsLoading }) {
  const search = useSelector((state) => state.search);
  const { category } = useParams();
  const navigate = useNavigate();
  const setSearch = async (value) => await store.dispatch(searchState(value));

  return (
    <div className="flex w-full h-8 shadow-sm group">
      <input
        type="search"
        className="search w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar productos, marcas y más…"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            searchProducts(navigate, search, category, setIsLoading);
          }
        }}
      />
      <button
        onClick={() => searchProducts(navigate, search, category, setIsLoading)}
        className="btn-search"
      >
          <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
