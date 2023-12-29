import Pagination from "@/ui/dashboard/pagination/pagination"
import styles from "@/ui/dashboard/products/products.module.css"
import Search from "@/ui/dashboard/search/search"
import Image from "next/image"
import Link from "next/link"
import React, { FunctionComponent } from "react"

type Props = {};

const ProductsPage: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..."/>

        <Link href={`/dashboard/products/add`}>
          <button className={styles.addButton}>Add Product</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/noproduct.jpg"
                       alt=""
                       width="40"
                       height="40"
                       className={styles.productImage}/>
                Iphone
              </div>
            </td>

            <td>Lorem ipsum dolor sit amet consectetur adipiscing elit congue posuere...</td>
            <td>$999</td>
            <td>13.01.2022</td>
            <td>72</td>

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

export default ProductsPage
