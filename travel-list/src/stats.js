export default function Stats({ items }) {
  const noofItems = items.length;
  const noofPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((noofPacked / noofItems) * 100);
  return (
    <footer className="stats">
      {noofItems > 0
        ? percentage === 100
          ? "You have got everything donee! Let's Goooo!🚀"
          : `
        🎒You Have ${noofItems} items on your List, and you already packed
        ${noofPacked} (${percentage}%);
      `
        : "You need to enter any data to get started!🎒"}
    </footer>
  );
}
