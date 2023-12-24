"use client"
import { MenuItem } from "@/@types/Menus"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { FunctionComponent } from "react"
import styles from "./menu-link.module.css"

type Props = {
  menu: MenuItem
};

const MenuLink: FunctionComponent<Props> = ({ menu }) => {
  const pathname = usePathname()

  return (
    <Link href={menu.path} className={`${styles.container} ${pathname === menu.path && styles.active}`}>
      {menu.icon}
      {menu.title}
    </Link>
  )
}

export default MenuLink
