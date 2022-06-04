import React from "react";
import "../../assets/styles/inputs/search.scss";
import Icon from "../atoms/Icon";
import { store } from "../../../domain/helpers/store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { searchState } from "../../../domain/reducers/search.reducer";
import { searchProducts } from "../../../domain/helpers/products";
import * as PropTypes from "prop-types";

function FontAwesomeIcon(props) {
    return null;
}

FontAwesomeIcon.propTypes = {icon: PropTypes.string};
export default function SearchInput({ setIsLoading }) {
  const search = useSelector((state) => state.search);
  const navigate = useNavigate();
  const setSearch = async (value) => await store.dispatch(searchState(value));

  return (
    <div className="flex w-full h-8">
      <input
        type="search"
        className="search w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Busca aquí un producto"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            searchProducts(navigate, search, setIsLoading);
          }
        }}
      />
      <button
        onClick={() => searchProducts(navigate, search, setIsLoading)}
        className="btn-search"
      >
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </button>
    </div>
  );
}
