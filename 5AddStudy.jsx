import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudy } from "../actions/studyActions";

function AddStudy() {

  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;

    dispatch(addStudy(text));
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "25px"
      }}
    >

      <input
        type="text"
        placeholder="Enter study topic..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />

      <button
        onClick={handleAdd}
        style={{
          padding: "12px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Add
      </button>

    </div>
  );
}

export default AddStudy;
