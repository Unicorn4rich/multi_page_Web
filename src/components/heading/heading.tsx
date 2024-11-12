import styles from "./heading.module.css"


import React from 'react'

function Heading() {
  return (
    <div className={styles.heading}>

        <h1>Our Product</h1>

        <div className={styles.under_line}></div>

        <p>Heare you can check our New Products with fair price on Stylish</p>

    </div>
  )
}

export default Heading