import React from 'react'
import style from "./input.module.css"

const Input = ({value, placeholder, onChange, onKeyDown}) => {
  return (
      <input 
        type="text"
        placeholder={placeholder}
        value={value}
        className={style.input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
  );
};

export default Input