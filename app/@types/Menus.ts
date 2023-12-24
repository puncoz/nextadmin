import { ReactElement } from "react"

export interface MenuCategory {
  title: string
  list: MenuItem[]
}

export interface MenuItem {
  title: string
  path: string
  icon: ReactElement
}
