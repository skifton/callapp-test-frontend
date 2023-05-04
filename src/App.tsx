import React from "react";
import RoutesWrapper from "./routes/RoutesWrapper";
import LanguageProvider from "./providers/LanguageProvider";
import Loader from "./components/Loader";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Loader>
        <RoutesWrapper />
      </Loader>
    </LanguageProvider>
  );
};

export default App;
