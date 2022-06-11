import React, {useState} from "react";
import "../../assets/styles/inputs/search.scss";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import history from "../../../domain/helpers/history";

export default function SearchInput() {
    const [input, setInput] = useState("");

    const submitAction = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        history.push('/resultados/buscar?q=' + input);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
        await setInput('')
    };

  return (
      <form onSubmit={submitAction} className="flex w-full h-10 shadow-sm group">
          <input
            type="search"
            className="search w-full"
            placeholder="Buscar productos, marcas y más…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={async (event) => {
              if (event.key === "Enter") {
                  await submitAction(event)
              }
            }}
          />
          <button type="submit" className="btn-search">
              <FontAwesomeIcon icon={faSearch} />
          </button>
    </form>
  );
}
