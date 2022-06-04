import React from "react";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../../../domain/helpers/products";

export default function CardPrimary({ category, setIsLoading }) {
  const navigate = useNavigate();
  console.log(category);
  return (
    <button
      onClick={() => searchProducts(navigate, category.id, setIsLoading)}
      className="cursor-pointer group group-hover:bg-opacity-50 bg-gray-900 flex justify-center items-center relative"
    >
        <span className="text-3xl sm:text-4xl font-extrabold flex align-bottom leading-9  italic">
         {category.name}
        </span>
    </button>
  );
}
