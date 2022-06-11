import React, {useEffect} from "react";
import SearchInput from "../molecules/SearchInput";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {store} from "../../../domain/helpers/store";
import {queryCategories} from "../../../domain/reducers/category.reducer";
import {searchProductsByCategory} from "../../../domain/helpers/products";

export default function Header({
  setIsLoading,
}) {
    const categories = useSelector((state) => state.categories);
    const fetchCategories = () => store.dispatch(queryCategories(setIsLoading));
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories();
    }, []);

  return (
      <>
          <div className="navbar bg-primary-100 px-4">
              <div className="navbar-start">
                  <Link to="/" className="text-2xl font-extrabold text-blue-600 uppercase focus:outline-none focus:shadow-outline">
                      VALERIA STORE
                  </Link>
              </div>
              <div className="navbar-end hidden lg:flex">
                  <div className="flex gap-4 p-4 w-full">
                      <SearchInput setIsLoading={setIsLoading} />
                  </div>
              </div>
          </div>
          <div className="navbar bg-primary-100 px-4 flex gap-4">
              <ul className="menu menu-horizontal p-0">
                  <li tabIndex="0">
                      <a className="normal-case text-sm mx-6 text-gray-800 hover:bg-transparent  hover:underline focus:bg-transparent">
                          Categorias
                          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                               viewBox="0 0 24 24">
                              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                          </svg>
                      </a>
                      <ul className="p-2 bg-gray-800 scroll-auto max-h-96 overflow-y-scroll z-50">
                          {categories.map((category, id) => {
                              return (
                                  <li><a
                                      key={id}
                                      onClick={() => searchProductsByCategory(navigate, category, setIsLoading)}
                                      className="normal-case text-sm p-3 text-white hover:bg-gray-600 focus:bg-transparent">
                                      {category.name}
                                  </a></li>
                              );
                          })}
                      </ul>
                  </li>
              </ul>
          </div>
      </>
  );
}
