import React from 'react';
import styles from './button.module.css'

const Button = ({children ,onClick, variant="primary", className}) => {
  console.log("editDoneCss", className, `${styles.button} ${className}`)
  return (
    <button 
      className={`${styles.button} ${className}`}
      onClick={onClick}
     >
      {children}
    </button>
  )
}

export default React.memo(Button)