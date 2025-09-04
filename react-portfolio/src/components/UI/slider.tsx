import React from 'react';

interface SliderProps {
  id: string;
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Slider({
  id,
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  className = ''
}: SliderProps) {
  return (
    <div className={`slider-container ${className}`}>
      <label htmlFor={id} className="slider-label">
        {label}
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="slider-input"
      />
    </div>
  );
}
