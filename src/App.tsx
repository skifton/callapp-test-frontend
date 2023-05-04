import React from "react";
import RoutesWrapper from "./routes/RoutesWrapper";
import LanguageProvider from "./providers/LanguageProvider";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <RoutesWrapper />
    </LanguageProvider>
  );
};

export default App;
