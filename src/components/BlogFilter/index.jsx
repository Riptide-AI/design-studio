import React, { useState } from "react";
import style from "./style.module.scss";
/* import {preferredName} from '@/data/blog'; */
export default function Blog_filter() {

  const preferredName = [
    {
      class: style.design,
      name: "Дизайн",
    },
    {
      class: style.design,
      name: "Веб-розробка",
    },
    {
      class: style.design,
      name: "Маркетинг",
    },
    {
      class: style.design,
      name: "Освіта і наука",
    },
    {
      class: style.design,
      name: "Революція ШІ",
    },
    {
      class: style.design,
      name: "Інше",
    },
  ];


  const [callnames, setCallnames] = useState(
    preferredName.map((name) => ({ ...name, isChecked: false }))
  );
  const onChangeCheckBox = (e ) => {
    const { value, checked: isChecked } = e.target;
    // setIsChecked(() => e.target.checked);
    // setIsChecked(() => !isChecked);
    setCallnames((prev) =>
      prev.map((ct) => {
        if (ct.name === value) ct.isChecked = isChecked;
        return ct;
      })
    );
  };
  
  return (
    <div className={style.categorys}>
      <div className={style.category_label}>Категорія</div>
      <div className={style.category_list}>
      {callnames.map((item, index) => (
        <div key={index} className={style.category}>
          <label
            htmlFor={item.name}
            className={style.checkLabel + " " + item.class}
          >
            {item.name}
            <input
              type="checkbox"
              value={item.name}
              name="name"
              onChange={onChangeCheckBox}
              id={item.name}
              checked={item.isChecked}
            />
            <span className={style.checkSpan}></span>
          </label>
        </div>
      ))}</div>
    </div>
  );
}
