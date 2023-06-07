import React from "react";
import "./App.css";

interface Passenger {
  id: string;
  name: string;
  age: number;
}

const passengerList: Passenger[] = [
  {
    id: "KJSD93",
    name: "Maria Anders",
    age: 20,
  },
  {
    id: "KJSD94",
    name: "Francisco Chang",
    age: 35,
  },
  {
    id: "KJSD95",
    name: "Anna Angelo",
    age: 28,
  },
];

function App() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {passengerList.map((passenger) => (
          <tr>
            <td>{passenger.id}</td>
            <td>{passenger.name}</td>
            <td>{passenger.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
