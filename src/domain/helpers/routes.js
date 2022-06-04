import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "../../presentation/pages/ProductsPage";
import CategoriesPage from "../../presentation/pages/CategoriesPage";

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
    element: ProductsPage,
  },
  {
    path: "/resultados/categorias/:category",
    key: "results-by-category",
    element: ProductsPage,
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
