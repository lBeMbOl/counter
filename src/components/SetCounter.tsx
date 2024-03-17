import "./counter.css";
import { Button } from "./Button";
import { Input } from "./Input";

type propsCounter = {
  maxValue: number;
  setMaxValue: (maxValue: number) => void;
  startValue: number;
  setStartValue: (startValue: number) => void;
  setCount: () => void;
  error: boolean;
};

export const SetCounter = (props: propsCounter) => {
  return (
    <div className={"border"}>
      <div className="radius">
        <div>
          <span>max value:</span>
          <Input
            value={props.maxValue}
            setValue={props.setMaxValue}
            status={props.error}
          />
        </div>

        <div>
          <span>start value:</span>
          <Input
            value={props.startValue}
            setValue={props.setStartValue}
            status={props.error}
          />
        </div>
      </div>
      <div className="radius">
        <Button title={"set"} active={!props.error} callback={props.setCount} />
      </div>
    </div>
  );
};
