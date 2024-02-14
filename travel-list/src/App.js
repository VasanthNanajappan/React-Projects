import React, { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packinglist";
import Stats from "./stats";

export default function App() {
  const [items, setItem] = useState([]);

  function handleForm(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeletion(id) {
    setItem(function (item) {
      return item.filter((item) => item.id !== id);
    });
  }

  function handleToggleItem(id) {
    setItem(function (item) {
      return item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      );
    });
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure to delete the Entire List?");

    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onaddItems={handleForm} />
      <PackingList
        items={items}
        onDeleteitems={handleDeletion}
        onPackeditems={handleToggleItem}
        onClearitems={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
