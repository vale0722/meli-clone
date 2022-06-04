import React from "react";
import { useNavigate } from "react-router-dom";
import {searchProductsByCategory} from "../../../domain/helpers/products";

export default function CardPrimary({ category, setIsLoading }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => searchProductsByCategory(navigate, category, setIsLoading)}
      className="cursor-pointer bg-white rounded-xl p-4 flex justify-center items-center transform duration-150 hover:scale-105 transition cursor-pointer shadow-sm"
    >
        <span className="text-xl font-semibold text-blue-500 flex align-bottom leading-9">
         {category.name}
        </span>
    </button>
  );
}
