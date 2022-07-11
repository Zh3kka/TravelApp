import React from 'react'
import styles from './ButtonTrip.module.scss'
import {BsArrowRight} from 'react-icons/bs'

const ButtonTrip = () => {
  return (
    <button className={styles.button}>
      <span className={styles.text}>Book a trip</span>
      <span className={styles.icon}>
        <BsArrowRight/>
      </span>
    </button>
  )
}

export default ButtonTrip