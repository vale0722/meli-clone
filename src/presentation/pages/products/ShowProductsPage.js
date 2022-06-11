import React, {useEffect, useState} from "react";
import { store } from "../../../domain/helpers/store";
import {getProduct} from "../../../domain/reducers/product.reducer";
import { useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {evaluatePercentage, formatter} from "../../../domain/helpers/currency-formatter";

export default function ShowProductsPage({ setIsLoading }) {
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  const navigate = useNavigate();
  const [imageSelected, setImageSelected] = useState("");
  const [images, setImages] = useState("");

    useEffect(() => {
        fetchData().then(r => {
            if(product.id) {
                setImages(product.pictures);
                setImageSelected(product.pictures[0].url);
            }
        });
    }, [product]);

    async function fetchData() {
        if(!product.id) {
            store.dispatch(getProduct(id, setIsLoading))
        }
    }

  return (
      <div className="container flex flex-col justify-center self-center w-full">
          <div className="h-full w-full mt-10 rounded-lg items-center self-center text-lg bg-white">
              <div className="h-full w-full bg-gray-200 p-3 text-left text-gray-700 rounded-t-lg">
                  <button onClick={() => navigate(-1)} className="hover:text-gray-800">
                      Volver al listado
                  </button>
              </div>
              <div className="p-3 flex">
                  <div className="flex-1 flex-auto flex gap-6">
                      <div className="flex flex-col gap-4">
                          {
                              images ? images.map((picture, key) => {
                                  return <button onClick={() => setImageSelected(picture.url)}
                                                 key={key}
                                                 className={"flex-1 px-4 w-24 h-24 m-3 mt-0 rounded-lg " + (picture.url === imageSelected ? 'border-2 border-blue-300' : '')}>
                                          <img src={picture.url} alt={product.name} className="w-full h-full rounded-lg object-contain"></img>
                                      </button>
                              }) : <></>
                          }
                      </div>
                      <div className="flex-1 w-full h-full rounded-lg h-full">
                          <img src={imageSelected} className="w-full h-full object-contain" alt={product.name}></img>
                      </div>
                  </div>
                  <div className="px-4 h-full w-96 text-left">
                      <div className="border-2 border-gray-200 rounded-xl m-3 p-3">
                          <p className="text-gray-500 text-sm">{product.condition}  |  { product.sold_quantity } vendidos</p>
                          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl">{ product.title }</h2>

                          {product.original_price ? (
                              <div>
                                  <h5 className=" text-left text-gray-300 text-sm line-through">
                                      {formatter(product.original_price)}
                                  </h5>
                                  <div className="flex justify-between">
                                      <h2 className="text-lg text-gray-600 font-semibold">
                                          {formatter(product.price)}
                                      </h2>
                                      <h2 className="text-green-600">
                                          {evaluatePercentage(product.price, product.original_price)}% OFF
                                      </h2>
                                  </div>
                              </div>
                          ) : (
                              <div className="flex justify-between">
                                  <h2 className="text-lg text-gray-600 font-semibold">
                                      {formatter(product.price)}
                                  </h2>
                              </div>
                          )}

                          <p>
                              <h5 className="font-bold text-gray-600 mt-6">Stock Disponible:</h5>
                              <span className="text-left text-gray-300 text-sm mb-6"> { product.available_quantity }</span>
                          </p>

                          <button type="button" className="mt-10 h-14 w-full px-6 py-2 font-semibold text-white rounded-xl bg-blue-700 hover:bg-blue-800 text-white">
                              Comprar ahora
                          </button>
                          <button type="button" className="mt-3 h-14 w-full px-6 py-2 font-semibold text-blue-800 rounded-xl bg-blue-100 hover:bg-blue-200 text-white">
                              Agregar al carrito
                          </button>
                      </div>
                      </div>
              </div>
          </div>
      </div>
  );
}
