import React from "react";
import "../../assets/styles/inputs/card.scss";
import {
  formatter,
  getPrices,
} from "../../../domain/helpers/currency-formatter";

export default function Card({ product, className }) {
  const prices = getPrices(product.prices);
  return (
    <div className={"w-full px-20 sm:px-10 md:px-30 lg:p-0 transform duration-150 hover:scale-105 " + className}>
      <div className="w-full bg-white h-full border shadow-sm transform transition cursor-pointer product-card flex flex-col justify-between">
        <img
          className="bg-white w-full"
          src={product.thumbnail}
          alt={product.title}
        />
        <div className="p-5 text-black flex flex-col justify-between gap-2">
          {prices.promotion ? (
              <div>
                <h5 className=" text-left text-gray-300 text-sm line-through">
                  {formatter(prices.standard)}
                </h5>
                <div className="flex justify-between">
                  <h2 className="text-lg text-gray-600 font-semibold">
                    {formatter(prices.promotion)}
                  </h2>
                  <h2 className="text-green-600">
                    {prices.percentage}% OFF
                  </h2>
                </div>
              </div>
          ) : (
            <div className="flex justify-between">
              <h2 className="text-lg text-gray-600 font-semibold">
                {formatter(prices.standard)}
              </h2>
            </div>
          )}
          <h1 className="text-sm text-left">{product.title}</h1>
        </div>
      </div>
    </div>
  );
}
