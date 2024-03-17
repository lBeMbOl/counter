// @flow
import * as React from "react";
import { ChangeEvent } from "react";
type Props = {
  value: number;
  setValue: (newValue: number) => void;
  status: boolean;
};
export const Input = (props: Props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setValue(Number(e.currentTarget.value));
  };
  return (
    <input
      className={props.status ? "inputOk" : "inputNO"}
      type="number"
      value={props.value}
      onChange={onChangeHandler}
    ></input>
  );
};
