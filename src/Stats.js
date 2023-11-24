export default function Stats({ items }) {
  // Early return as conditional rendering
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      🧳
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list and you already packed
        ${numPacked} (${percentage ? percentage : "0"}%)`}
      </em>
    </footer>
  );
}
