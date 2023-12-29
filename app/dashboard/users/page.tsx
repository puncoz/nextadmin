import Pagination from "@/ui/dashboard/pagination/pagination"
import Search from "@/ui/dashboard/search/search"
import styles from "@/ui/dashboard/users/users.module.css"
import Image from "next/image"
import Link from "next/link"
import React, { FunctionComponent } from "react"

type Props = {};

const UsersPage: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..."/>

        <Link href={`/dashboard/users/add`}>
          <button className={styles.addButton}>Add User</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png"
                       alt=""
                       width="40"
                       height="40"
                       className={styles.userImage}/>
                Jane Doe
              </div>
            </td>

            <td>john@doe.com</td>
            <td>13.01.2022</td>
            <td>Admin</td>
            <td>Active</td>

            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>

                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination/>
    </div>
  )
}

export default UsersPage
