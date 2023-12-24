import Image from "next/image"
import React, { FunctionComponent } from "react"
import { MdPlayCircleFilled } from "react-icons/md"
import styles from "./right-bar.module.css"
import data from "./rightbar-data"

type Props = {};

const RightBar: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index} className={styles.item}>
          {item.image && (
            <div className={styles.bgContainer}>
              <Image src={item.image} alt="" fill className={styles.bg}/>
            </div>
          )}

          <div className={styles.text}>
            <span className={styles.notification}>{item.notification}</span>

            <h3 className={styles.title}>{item.title}</h3>

            <span className={styles.subTitle}>{item.subTitle}</span>

            <p className={styles.description}>{item.description}</p>

            <button className={styles.button}>
              <MdPlayCircleFilled/>
              Watch
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RightBar
