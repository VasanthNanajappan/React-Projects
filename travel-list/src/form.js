import React, { useState } from "react";
export default function Form({ onaddItems }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      value,
      packed: false,
    };
    console.log(newItem);

    onaddItems(newItem);

    setDescription("");
    setValue(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your next trip? 😍</h3>
      <select value={value} onChange={(f) => setValue(Number(f.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
