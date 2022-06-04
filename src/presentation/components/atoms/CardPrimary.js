import React from "react";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../../../domain/helpers/products";

export default function CardPrimary({ image, title, keyword, setIsLoading }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => searchProducts(navigate, keyword, setIsLoading)}
      className="cursor-pointer w-full h-full group group-hover:bg-opacity-50 bg-gray-900 flex justify-center items-center relative"
    >
      <img
        className="group-hover:opacity-50 transition duration-500 w-full h-full"
        src={image}
        alt={title}
      />
      <div className="absolute flex justify-center h-full pb-5 items-end w-full">
        <span className="text-3xl sm:text-4xl font-extrabold flex align-bottom leading-9 text-white italic">
          {title}
        </span>
      </div>
    </button>
  );
}
