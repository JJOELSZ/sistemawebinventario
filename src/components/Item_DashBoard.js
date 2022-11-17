import React from "react";
import { BsTagsFill } from "react-icons/bs";

export default function Item_DashBoard({ title, icon : Icon, description }) {
  return (
    <div className="dash__list--item">
      <h3 className="item__title"> {title}</h3>
      <span className="item__icon">
        <Icon size={60} />
      </span>
      <span className="item__description"> {description} </span>
    </div>
  );
}
