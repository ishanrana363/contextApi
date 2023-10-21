import React from "react";
import ComponentC from "./components/ComponentC";
import ComponentE from "./components/ComponentE";

export const userContext = React.createContext();
export const chenelContext = React.createContext();
const App = () => {
  return (
    <div>
      <userContext.Provider value={"ishan"} >
        <chenelContext.Provider value={"programmerboy"} >
          <ComponentC/>
          <ComponentE/>
        </chenelContext.Provider>
      </userContext.Provider>
    </div>
  );
};

export default App;