import React, { useState } from "react";
import Item from "./item";
export default function PackingList({
  items,
  onDeleteitems,
  onPackeditems,
  onClearitems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sorteditems;

  if (sortBy === "input") sorteditems = items;

  if (sortBy === "description")
    sorteditems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sorteditems.map((item) => (
          <Item
            item={item}
            onDeleteitems={onDeleteitems}
            onPackeditems={onPackeditems}
            key={item.id}
          />
        ))}
      </ul>

      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By packed</option>
        </select>
        <button onClick={onClearitems}>Clear List</button>
      </div>
    </div>
  );
}
