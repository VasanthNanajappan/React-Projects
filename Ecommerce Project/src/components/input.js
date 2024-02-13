export default function Input({ handleChange, value, title, name, color }) {
  return (
    <label className="sidebar-label-container">
      <input value={value} onChange={handleChange} type="radio" name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
}
