import React, { useContext } from "react";
import { Userdata } from "./App";

function DataPage() {
  const datas = useContext(Userdata);

  return (
    <div>
      <h1 style={{ margin: "20px", textAlign: "center" }}>User Data</h1>

      {datas  ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            padding: "20px",
          }}
        >
          {datas.map((data,) => (
            <div
              style={{
                height: "200px",
                width: "450px",
                borderRadius: "12px",
                padding: "10px",
                backgroundColor: "yellow",
                color: "black",
                border: "1px solid white",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                
                justifyContent:"center",
                fontWeight: "bold",
              }}
            >
              <p>Name: {data.username}</p>
              <p>Email: {data.email}</p>
              <p>Age: {data.age}</p>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            height:"100vh",
            width:"1500px",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
}

export default DataPage;
