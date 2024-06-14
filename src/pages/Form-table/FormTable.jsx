import React, { useRef, useState } from "react";
import "./FormTable.css";

const FormTable = () => {
  const inputRef = useRef("");
  const [item, setItem] = useState([]);
  const inputModifyRef = useRef("");
  const [editindex, setEditindex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = inputRef.current.value;

    if (editindex !== -1) {
      const editedItem = inputModifyRef.current.value;
      setItem((prev) => {
        const previousItems = [...prev];
        previousItems[editindex] = editedItem;
        return previousItems;
      });
      setEditindex(-1);
    } else {
      setItem((prev) => [...prev, newItem]);
    }

    inputRef.current.value = "";

    if (editindex !== -1) {
      inputModifyRef.current.value = "";
    }
  };

  const handleDelete = (number) => {
    const updatedItems = item.filter((elem, num) => {
      return num !== number;
    });

    setItem(updatedItems);
  };

  return (
    <div className="formtable">
      <form onSubmit={handleSubmit} className="forma">
        <input ref={inputRef} type="text" placeholder="Add Text" required />
        <button type="submit">Submit</button>
      </form>

      <table className="mytable">
        <thead>
          <tr>
            <th>items</th>
            <th>action</th>
          </tr>
        </thead>

        <tbody>
          {item.map((elem, index) => {
            return (
              <tr key={index}>
                <td>
                  {editindex === index ? (
                    <input type="text" ref={inputModifyRef} />
                  ) : (
                    elem
                  )}
                </td>

                <td>
                  {editindex === index ? (
                    <div className="save-cancel">
                      <button onClick={handleSubmit}>Save</button>
                      <button onClick={() => setEditindex(-1)}>Cancel</button>
                    </div>
                  ) : (
                    <div className="edit-delete">
                      <button onClick={() => setEditindex(index)}>Edit</button>
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormTable;
