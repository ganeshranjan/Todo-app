import React from 'react';
import styles from '../Checkbox/checkbox.module.css';

const Checkbox = ({onChange, checked, id}) => {
  return (
    <div>
       <input 
       type="checkbox"
       checked={checked}
       onChange={onChange}
       className={styles.Checkbox}
       id={id}
       />
    </div>
  )
}

export default Checkbox