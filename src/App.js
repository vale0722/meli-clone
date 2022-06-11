import "./presentation/assets/styles/app.scss";
import Header from "./presentation/components/organisms/Header";
import React from "react";
import { RenderRoutes, ROUTES } from "./domain/helpers/routes";
import ScrollToTop from "./domain/helpers/scroll";
import { MutatingDots } from "react-loader-spinner";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className="App bg-gray-50 min-h-screen flex flex-col">
      {isLoading ? (
        <main className="fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out flex items-center justify-center">
            <MutatingDots
                color="#fff059"
                secondaryColor="#fff059"
                height="100"
                width="110"
                ariaLabel="loading-indicator"
            />
        </main>
      ) : (
        ""
      )}
      <Header
        setIsLoading={setIsLoading}
      />
      <ScrollToTop>
        <RenderRoutes setIsLoading={setIsLoading} routes={ROUTES} />
      </ScrollToTop>
    </div>
  );
}

export default App;
