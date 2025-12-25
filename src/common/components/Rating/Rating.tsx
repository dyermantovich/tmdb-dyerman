import { type ChangeEvent, type Dispatch, type SetStateAction } from 'react';

type Props = {
  minValue: number;
  maxValue: number;
  setMinValue: Dispatch<SetStateAction<number>>;
  setMaxValue: Dispatch<SetStateAction<number>>;
};

export const Rating = ({
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}: Props) => {
  const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= maxValue) {
      setMinValue(value);
    }
  };

  const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= minValue) {
      setMaxValue(value);
    }
  };

  return (
    <div>
      <h4>Rating: </h4>
      <div>
        {minValue.toFixed(1)} - {maxValue.toFixed(1)}
      </div>
      <input
        type="range"
        min={0}
        max={10}
        step={0.1}
        value={minValue}
        onChange={changeMinValueHandler}
      />
      <input
        type="range"
        min={0}
        max={10}
        step={0.1}
        value={maxValue}
        onChange={changeMaxValueHandler}
      />
    </div>
  );
};
