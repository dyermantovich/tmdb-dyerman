import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
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
  const [localRange, setLocalRange] = useState([minValue, maxValue]);

  const timeoutRef = useRef<number | null>(null);

  const handleChange = (value: number | number[]) => {
    if (!Array.isArray(value)) return;

    setLocalRange(value);

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      const [nextMin, nextMax] = value;

      setMinValue(nextMin);
      setMaxValue(nextMax);
    }, 200);
  };

  useEffect(() => {
    setLocalRange([minValue, maxValue]);
  }, [minValue, maxValue]);

  return (
    <div className={s.rating}>
      <h4 className={s.title}>Rating</h4>

      <div className={s.value}>
        {localRange[0].toFixed(1)} – {localRange[1].toFixed(1)}
      </div>

      <Slider
        range
        min={0}
        max={10}
        step={0.1}
        value={localRange}
        onChange={handleChange}
        allowCross={false}
        className={s.slider}
      />
    </div>
  );
};
