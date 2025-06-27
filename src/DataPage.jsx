import React, { useContext } from "react";
import { Userdata } from "./App";

function DataPage() {
  const datas = useContext(Userdata);
  return (
    <div>
      <h1>User Data</h1>
      {datas
        ? datas.map((data) => (
            <div>
              <ul>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    textAlign: "start",
                    border: "1px solid White",
                    padding: "10px",
                    borderRadius: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Name: {data.username}
                  <br></br> Email : {data.email}
                  <br></br> Age : {data.age}
                </li>
              </ul>
            </div>
          ))
        : "Loading ..."}
    </div>
  );
}

export default DataPage;
