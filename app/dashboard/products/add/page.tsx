import styles from "@/ui/dashboard/products/addProduct/addProduct.module.css"
import React, { FunctionComponent } from "react"

type Props = {};

const AddProductPage: FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required/>

        <select name="category" id="category">
          <option value="general">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>

        <input type="number" placeholder="price" name="price"/>

        <input type="number" placeholder="stock" name="stock"/>

        <input type="text" placeholder="color" name="color"/>

        <input type="text" placeholder="size" name="size"/>

        <textarea name="description" id="description" rows={16} placeholder="description"></textarea>

        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProductPage
