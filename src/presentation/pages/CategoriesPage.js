import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "../../domain/helpers/store";
import Card from "../components/atoms/Card";
import Paginate from "../components/atoms/Paginate";
import {queryCategories} from "../../domain/reducers/category.reducer";

export default function CategoriesPage({ setIsLoading }) {
  const categories = useSelector((state) => state.categories);
  const fetchCategories = () => store.dispatch(queryCategories(setIsLoading));

  useEffect(() => {
      fetchCategories();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="my-10 md:mx-10 md:mx-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, id) => {
            return (
              <Card key={id} className="px-10 md:px-0" category={category} />
            );
          })}
        </div>
        <Paginate setIsLoading={setIsLoading} />
      </div>
    </div>
  );
}
