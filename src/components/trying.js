import React, { useState } from "react";
import { mdiMenuDown } from "@mdi/js";
import './trying';
import Icon from "@mdi/react";
export default function DropDown({ placeholder, content }) {
const [active, setactive] = useState(0);
const [value, setvalue] = useState(0);

return (
<div className={active ? "dropdown_wrapper active" : "dropdown_wrapper"}>
  <span
    onClick={() => {
      setactive(active ? 0 : 1);
    }}
  >
    {value ? value : placeholder} <Icon path={mdiMenuDown} />
  </span>
  <div className="drop_down">
    <ul>
      {content &&
        content.map((item, key) => {
          return (
            <li
              onClick={() => {
                setvalue(item);
                setactive(0);
              }}
              key={key}
            >
              {item}
            </li>
          );
        })}
    </ul>
  </div>
</div>
);}