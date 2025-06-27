import { createContext, useEffect, useState } from "react";

import "./App.css";
import DataPage from "./DataPage";
export const Userdata = createContext();
function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setData(data.users));
    console.log(data);
  });
  return (
    <>

      <Userdata.Provider value={data}>
        <DataPage />
      </Userdata.Provider>
    </>
  );
}

export default App;
