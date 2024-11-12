import React from 'react'
import Image from "next/image"
import { IoStar } from "react-icons/io5";
import styles from "./ProductSection.module.css"
import {card_data} from "@/constant/card"
import Link from 'next/link';

function ProductSection() {
  return (
    <div>

        
   <section className={styles.product}>

      {card_data.map((item, index)=> {return (

      <Link href={`shop/id ${item.id}`}>
      <div className={styles.card} key={index}>

         <div className={styles.topImg_div} style={{backgroundColor: item.backgroundColor}}>
            <Image src={item.image} alt="card image" width={300} height={600} className={styles.card_img} />
         </div>


        <div className={styles.bottomText_div}>

          <div className={styles.star_div}>
            {[...Array(item.rating)].map((_, index)=>{ return ( <IoStar color='orange' size={32} key={index} /> )})}
          </div>

          <p>{item.heading}</p>
          <p style={{fontWeight: "600"}}>{item.price}</p>

        </div>

      </div>
      </Link>

        )})}


    </section>

    </div>
  )
}

export default ProductSection