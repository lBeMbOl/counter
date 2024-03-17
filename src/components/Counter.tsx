import "./counter.css";
import { Button } from "./Button";

type propsCounter = {
  count: number;
  setCount: (newCount: number) => void;
  max: number;
  start: number;
  error: boolean;
  newcount: boolean;
};

export const Counter = (props: propsCounter) => {
  return (
    <div className={props.count == props.max ? "color" : "border"}>
      {!props.newcount && props.error && (
        <div className="radius3">Введите значение и нажмите SET</div>
      )}
      {props.newcount && props.error && (
        <div className="radius">{props.count}</div>
      )}
      {!props.error && <div className="radius2">Некорректное значение</div>}
      <div className="radius">
        <Button
          title="INC"
          active={!(props.count != props.max && props.newcount)}
          callback={() => {
            if (props.count < props.max) {
              props.setCount(props.count + 1);
            }
          }}
        />
        <Button
          title="RESET"
          active={!(props.count != props.start && props.newcount)}
          callback={() => {
            props.setCount(props.start);
          }}
        />
      </div>
    </div>
  );
};
