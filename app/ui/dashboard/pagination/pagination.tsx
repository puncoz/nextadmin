import React, { FunctionComponent } from "react"
import styles from "./pagination.module.css"

type Props = {};

const Pagination: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  )
}

export default Pagination
