import React from 'react'
import Image from "next/image"
import styles from "@/components/product_detail/ProductDetail.module.css"

function ProductDetail() {
  return (
    <div>

        <section className={styles.product_detail}>

            <div className={styles.leftImg_div} style={{backgroundColor: "tomato"}}>
                <Image src={"/models_pictures/modelsecond.png"} alt="image" width={400} height={600} className={styles.L_img} />
            </div>

            <div className={styles.rightText_div}>
                <h1>Regular fit long sleeve suit</h1>
                <p>$100.00</p>

                <div className={styles.cart_div}>
                <input type='number'/>
                <button>ADD TO CART</button>
                </div>
            </div>

        </section>

    </div>
  )
}

export default ProductDetail