import React from "react";
import "../../assets/styles/inputs/card.scss";
import "../../assets/styles/inputs/forms.scss";
import Icon from "./Icon";
import {
  formatter,
  getPrices,
} from "../../../domain/helpers/currency-formatter";
import { useSelector } from "react-redux";

export default function Card({ product, className }) {
  const prices = getPrices(product.prices);
  return (
    <div
      className={
        "w-full bg-white px-20 sm:px-10 md:px-30 lg:p-0 transform duration-150 hover:scale-105 " +
        className
      }
    >
      <div className="w-full h-full border border-gray-100 transform indicator transition cursor-pointer product-card flex flex-col justify-between">
        {prices.promotion ? (
          <span className="indicator-item top-5 left-11 indicator-start bg-purple-600 text-sm px-3 text-white font-bold">
            -{prices.percentage}%
          </span>
        ) : (
          ""
        )}
        <img
          className="bg-white w-full"
          src={product.thumbnail}
          alt={product.title}
        />
        <div className="p-5 text-black flex flex-col justify-between gap-2">
          <h1 className="text-sm text-left">{product.title}</h1>
          {prices.promotion ? (
            <div className="flex justify-between">
              <h2 className="text-purple-600 font-bold">
                {formatter(prices.promotion)}
              </h2>
              <h2 className="text-gray-300 line-through">
                {formatter(prices.standard)}
              </h2>
            </div>
          ) : (
            <div className="flex justify-between">
              <h2 className="text-purple-600 font-bold">
                {formatter(prices.standard)}
              </h2>
            </div>
          )}

          <div className="flex items-end justify-center w-full">
            <button
              className="btn-default btn-dark text-white gap-2 transform duration-150 hover:scale-105"
            >
              <Icon className="h-4 w-4" iconName="icon-cart-white" />
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
