import React, { useEffect, useState } from 'react';
import { BaseIcon } from '..';
import s from './BaseInput.module.scss';
import { ALL_ICONS } from 'constants/icons';

interface Props {
  type?: string;
  name: string;
  label?: string;
  pattern?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  withIcon?: boolean;
  className?: string;
  autocomplete?: string;
  error?: boolean;
  errorText?: string;
  value: string | number;
  onChange(value: string | number): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const BaseInput: React.FC<Props> = ({
  value,
  label,
  type = 'text',
  error,
  errorText,
  name,
  min,
  max,
  required = false,
  withIcon = false,
  disabled = false,
  placeholder,
  pattern,
  className = '',
  autocomplete = 'off',
  onChange,
  onKeyDown,
}) => {
  const [focus, setFocus] = useState(false);
  //type password start
  const [newType, setType] = useState<string>(type);
  const [checked, setChecked] = useState<boolean>(false);
  const [iconPassword, setIconPassword] = useState(ALL_ICONS.EYE_OFF);

  useEffect(() => {
    if (type == 'password') {
      if (checked) {
        setType('text');
        setIconPassword(ALL_ICONS.EYE);
      } else {
        setType('password');
        setIconPassword(ALL_ICONS.EYE_OFF);
      }
    }
  }, [checked, type]);

  return (
    <div
      className={`${s.BaseInput} ${focus ? s.BaseInput__Focus : ''} ${
        withIcon ? s.BaseInput__WithIcon : ''
      }  ${error ? s.BaseInput__Error : ''} ${
        disabled ? s.BaseInput__Disabled : ''
      } ${className}`}
    >
      <div className={s.BaseInput_Wrapper}>
        {label ? (
          <label className={`${s.Label} ${value ? s.Label__NoEmpty : ''}`}>
            <span>{label}</span>
          </label>
        ) : null}

        <input
          value={value}
          pattern={pattern}
          type={newType || type}
          className={`${s.Input} ${
            type == 'password' ? s.Input__Password : ''
          }`}
          name={name}
          min={min}
          max={max}
          placeholder={placeholder}
          required={required}
          autoComplete={autocomplete}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onKeyDown={onKeyDown}
        />

        {type === 'password' ? (
          <label title="Показать пароль">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className={s.BaseInput_Checkbox}
            />
            <BaseIcon
              viewBox="0 0 24 24"
              icon={iconPassword}
              className={s.Icon}
            />
          </label>
        ) : null}
      </div>

      {error && errorText && errorText?.length > 0 ? (
        <div className={s.BaseInput_ErrorText}>
          <p>{errorText}</p>
        </div>
      ) : null}
    </div>
  );
};

export default BaseInput;
