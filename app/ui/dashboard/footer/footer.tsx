import React, { FunctionComponent } from "react"
import styles from "./footer.module.css"

type Props = {};

const Footer: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>NextAdmin</div>
      <div className={styles.copyright}>
        &copy; All rights reserved.
      </div>
    </div>
  )
}

export default Footer
