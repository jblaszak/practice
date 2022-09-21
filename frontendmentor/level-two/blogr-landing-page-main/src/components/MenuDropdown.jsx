import * as styles from "./MenuDropdown.module.css";
import { useState, useRef } from "react";

export default function MenuDropdown({ category, items }) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  if (typeof window !== "undefined") {
    document.addEventListener("mousedown", (e) => {
      if (dropdownRef.current && open && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    });
  }

  return (
    <li className={`${styles.dropdown}${open ? ` ${styles.open}` : ""}`} ref={dropdownRef}>
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
