import transactions from "@/ui/dashboard/transactions/transactions-data"
import Image from "next/image"
import React, { FunctionComponent } from "react"
import styles from "./transactions.module.css"

type Props = {};

const Transactions: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Latest Transactions
      </h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>
                <div className={styles.user}>
                  <Image src="/noavatar.png" alt={transaction.user} width="40" height="40"
                         className={styles.userImage}/>
                  {transaction.user}
                </div>
              </td>

              <td>
                <span className={`${styles.status} ${styles[transaction.status]}`}>{transaction.status}</span>
              </td>

              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
