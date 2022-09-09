import "./MenuDropdown.css";

export default function MenuDropdown({ category, items }) {
  return (
    <li className="dropdown">
      <span>{category}</span>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
