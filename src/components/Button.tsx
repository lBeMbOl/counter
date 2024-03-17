import React from "react";
import "./counter.css";
type BtnType = {
  title: string;
  active: boolean;
  callback: () => void;
};

export const Button = (props: BtnType) => {
  const onclickHandler = () => {
    props.callback();
  };
  return (
    <button className="size" onClick={onclickHandler} disabled={props.active}>
      {props.title}
    </button>
  );
};
