import React from "react";
import UserCard from "../component/UserCard";

const CardPage: React.FC = () => {
  return (
    <div style={{ border: "2px solid gold", padding: "10px" }}>
      <UserCard name="Natia Tsertsvadze" email="Reagsfrdgcn@com" age={27} />
    </div>
  );
};

export default CardPage;
