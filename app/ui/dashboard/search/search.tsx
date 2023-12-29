import React, { FunctionComponent } from "react"
import { MdSearch } from "react-icons/md"
import styles from "./search.module.css"

type Props = {
  placeholder?: string
};

const Search: FunctionComponent<Props> = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch/>
      <input type="search"
             placeholder={placeholder || "Search..."}
             className={styles.input}/>
    </div>
  )
}

export default Search
