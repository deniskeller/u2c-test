import React, { useState } from 'react';
import s from './BaseRadioButton.module.scss';

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

interface Props {
  options: Option[];
  onChange: (value: string) => void;
  className?: string;
  variant?: string;
}

const BaseRadioButton: React.FC<Props> = ({
  options,
  onChange,
  className = '',
  variant = 'default',
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(options[2].value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className={className}>
      {options.map((option) => (
        <label
          key={option.value}
          className={`${s.RadioButton} ${s['RadioButton_' + variant]} ${
            selectedValue === option.value && !option.disabled ? s.isActive : ''
          } ${option.disabled ? s.Disabled : ''}`}
        >
          <input
            disabled={option.disabled}
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
            className={s.Input}
          />

          <div
            className={` ${s.RadioButtonCheck} ${
              selectedValue === option.value && !option.disabled
                ? s.isActive
                : ''
            }`}
          >
            <div className={s.RadioButtonTick}></div>
          </div>

          <span className={s.Title}>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default BaseRadioButton;
