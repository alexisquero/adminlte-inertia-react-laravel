
import React, { ChangeEvent, FC } from 'react';
import InputError from './InputError';
interface InputProps {
    type: 'text' | 'number' | 'email' | 'password'
    label: string
    value: string | number
    name: string
    placeholder?: string
    //error: boolean
    autoComplete?: string
    disabled?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    colclass:string;
    ref?: React.ForwardedRef<HTMLInputElement>;
    error?:string
  }
const FormControlInput: FC <InputProps>  = ({
    type,
    label,
    value,
    name,
    placeholder,
    //error,
    autoComplete,
    disabled,
    onChange,
    colclass,
    ref,
    error
  }) => (
  <div className={colclass}>
    <div className="form-group">
      <label>{label}</label>
      <input type={type}
        ref={ref}
        id={name}
        value={value}
        name={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="form-control" />
    </div>
    <InputError message={error} />    
  </div>
);

export default FormControlInput;
