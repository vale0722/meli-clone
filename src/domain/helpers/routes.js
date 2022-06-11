import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexProductsPage from "../../presentation/pages/products/IndexProductsPage";
import CategoriesPage from "../../presentation/pages/categories/CategoriesPage";
import ShowProductsPage from "../../presentation/pages/products/ShowProductsPage";

export const ROUTES = [
  {
    path: "/",
    key: "dashboard",
    element: RenderRoutes,
    routes: [
      {
        path: "/",
        key: "APP_ROOT",
        exact: true,
        element: CategoriesPage,
      },
    ],
  },
  {
    path: "/resultados/buscar",
    key: "results",
    element: IndexProductsPage,
  },
  {
    path: "/resultados/categorias/:category",
    key: "results-by-category",
    element: IndexProductsPage,
  },
  {
    path: "/:category/:id/:name",
    key: "show-product",
    element: ShowProductsPage,
  },
];

export function RenderRoutes({ routes, setIsLoading }) {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            path={route.path}
            key={route.key}
            element={
              <route.element
                setIsLoading={setIsLoading}
                props={route}
                routes={route.routes}
              />
            }
          />
        );
      })}
    </Routes>
  );
}
