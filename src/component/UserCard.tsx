import React from "react";

interface IUserProps {
  name: string;
  email: string;
  age: number;
}

const UserCard: React.FC<IUserProps> = ({ name, email, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age} years old</p>
    </div>
  );
};

export default UserCard;


