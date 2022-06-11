import React from "react";

export default function CategoriesPage({ setIsLoading }) {
  return (
      // eslint-disable-next-line react/style-prop-object
      <div className="hero h-full my-52">
          <div className="hero-content text-center text-blue-600">
              <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hola!</h1>
                  <p className="mb-5">Esta es una aplicación que consume el api de <strong>Mercado libre</strong>. Puedes elegir una categoria o buscar el producto que necesites</p>
              </div>
          </div>
      </div>
  );
}
