// import React from "react";
// import ComponentC from "./components/ComponentC";
// import ComponentE from "./components/ComponentE";

import Counter from "./components/Counter";

// import ReducerHook from "./components/ReducerHook";

// export const userContext = React.createContext();
// export const chenelContext = React.createContext();
const App = () => {
  return (
    <div>
      {/* <userContext.Provider value={"ishan"} >
        <chenelContext.Provider value={"programmerboy"} >
          <ComponentC/>
          <ComponentE/>
        </chenelContext.Provider>
      </userContext.Provider> */}
      {/* <ReducerHook/> */}
      <Counter/>
    </div>
  );
};

export default App;