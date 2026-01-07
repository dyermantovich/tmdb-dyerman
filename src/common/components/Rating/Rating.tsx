import { type Dispatch, type SetStateAction } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import s from './Rating.module.css';

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
  const changeRangeHandler = (value: number | number[]) => {
    if (!Array.isArray(value)) {
      return;
    }
    const [nextMin, nextMax] = value;
    if (nextMin <= nextMax) {
      setMinValue(nextMin);
      setMaxValue(nextMax);
    }
  };

  return (
    <div className={s.rating}>
      <h4 className={s.title}>Rating</h4>
      <div className={s.value}>
        {minValue.toFixed(1)} - {maxValue.toFixed(1)}
      </div>
      <Slider
        range
        min={0}
        max={10}
        step={0.1}
        value={[minValue, maxValue]}
        onChange={changeRangeHandler}
        className={s.slider}
      />
    </div>
  );
};
