import MenuLink from "@/ui/dashboard/sidebar/menu-link/menu-link"
import Image from "next/image"
import React, { FunctionComponent } from "react"
import { MdLogout } from "react-icons/md"
import menuItems from "./menus"
import styles from "./sidebar.module.css"

type Props = {};

const Sidebar: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/noavatar.png" alt="user pic" width="50" height="50"/>
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>

      <ul className={styles.list}>
        {menuItems.map((category, catIndex) => (
          <li key={catIndex} className="">
            <span className={styles.category}>{category.title}</span>

            {category.list.map((menu, itemIndex) => (
              <MenuLink key={itemIndex} menu={menu}/>
            ))}
          </li>
        ))}
      </ul>

      <button className={styles.logout}>
        <MdLogout/>
        Logout
      </button>
    </div>
  )
}

export default Sidebar
