import React from "react";
import SearchInput from "../molecules/SearchInput";
import { Link } from "react-router-dom";

export default function Header({
  setIsLoading,
}) {
  return (
      <div className="bg-primary-100">
          <header className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="py-4 flex flex-row items-center justify-between w-full">
                  <div className="flex gap-3">
                      <Link to="/" className="text-2xl font-extrabold text-blue-600 uppercase focus:outline-none focus:shadow-outline">
                          VALERIA STORE
                      </Link>
                  </div>
              </div>
              <div className="flex gap-4 p-4 w-full">
                  <SearchInput setIsLoading={setIsLoading} />
              </div>
          </header>
      </div>
  );
}
