import "./MenuDropdown.css";
import { useState } from "react";

export default function MenuDropdown({ category, items }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={`dropdown${open ? " open" : ""}`}>
      <span onClick={() => setOpen((prev) => !prev)}>{category}</span>
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
