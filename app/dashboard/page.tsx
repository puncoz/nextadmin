import Card from "@/ui/dashboard/card/card"
import Chart from "@/ui/dashboard/chart/chart"
import styles from "@/ui/dashboard/dashboard.module.css"
import RightBar from "@/ui/dashboard/right-bar/right-bar"
import Transactions from "@/ui/dashboard/transactions/transactions"
import React, { FunctionComponent } from "react"

type Props = {};

const DashboardPage: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card/>
          <Card/>
          <Card/>
        </div>

        <Transactions/>
        <Chart/>
      </div>

      <div className={styles.rightBar}>
        <RightBar/>
      </div>
    </div>
  )
}

export default DashboardPage
