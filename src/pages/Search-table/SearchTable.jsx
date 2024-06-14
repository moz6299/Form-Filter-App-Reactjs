import React, { useRef, useState } from "react";
import "./SearchTable.css";
import contacts from "../../assets/contacts";

const SearchTable = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="searchtable">
      <form>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          value={inputValue}
          placeholder="Search by'Name' OR 'Phone Number'"
        />
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts
            .filter((person) => {
              return (
                inputValue === "" ||
                person.name.toLowerCase().includes(inputValue.toLowerCase()) ||
                person.phone.includes(inputValue)
              );
            })
            .map((person) => {
              return (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.phone}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTable;
