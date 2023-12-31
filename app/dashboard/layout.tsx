import styles from "@/ui/dashboard/dashboard.module.css"
import Footer from "@/ui/dashboard/footer/footer"
import Navbar from "@/ui/dashboard/navbar/navbar"
import Sidebar from "@/ui/dashboard/sidebar/sidebar"
import React, { FunctionComponent, ReactNode } from "react"

type Props = {
  children: ReactNode;
};

const DashboardLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>

      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default DashboardLayout
