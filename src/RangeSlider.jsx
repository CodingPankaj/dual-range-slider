import "./RangeSlider.css";
import { useState } from "react";

export const RangeSlider = () => {
  const min = 0;
  const max = 100;
  const gap = 20;
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const minPercentage = (minValue / max) * 100;
  const maxPercentage = (maxValue / max) * 100;

  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    if (newMin + gap <= maxValue) {
      setMinValue(newMin);
    }
  };
  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    if (newMax - gap >= minValue) {
      setMaxValue(newMax);
    }
  };
  return (
    <div className="grid h-screen w-full place-items-center bg-blue-400">
      <div className="w-full max-w-[400px] rounded-lg bg-white px-8 py-8 shadow-xl">
        <div className="mb-10">
          <h1 className="text-center text-2xl font-bold text-black">
            Dual Range Slider
          </h1>
        </div>
        <div className="relative pb-2">
          <div
            className="absolute bottom-0 top-0 h-2 w-full rounded-full"
            style={{
              background: `linear-gradient(to right, #ccc ${minPercentage}% , #3b82f6 ${minPercentage}%, #3b82f6 ${maxPercentage}%, #ccc ${maxPercentage}%)`,
            }}
          ></div>
          <input
            type="range"
            value={minValue}
            min={min}
            max={max}
            onChange={handleMinChange}
            className="range-input"
          />
          <input
            type="range"
            value={maxValue}
            min={min}
            max={max}
            onChange={handleMaxChange}
            className="range-input"
          />
        </div>
        <div className="grid w-full grid-cols-[1fr_auto_1fr] gap-5 py-5">
          <div className="flex items-center gap-3">
            <span>Min</span>
            <span className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-black outline-none placeholder:text-center placeholder:text-sm">
              {minValue}
            </span>
          </div>
          <span className="text-xl font-medium">-</span>
          <div className="flex items-center gap-3">
            <span>Max</span>
            <span className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-black outline-none placeholder:text-center placeholder:text-sm">
              {maxValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
