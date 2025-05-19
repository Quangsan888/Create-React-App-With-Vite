import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB"; // bạn cần import ComponentB nếu dùng nó

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Brocode");

  return (
    <div className="box">
      <h1>ComponentA </h1>
      <h2>{`hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
