import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import styles from "./footer.module.css"

function Footer() {
  return (
    <div>
        
        <section className={styles.footer}>


            <div className={styles.stylish_div}>
                <h1>STYLISH</h1>
                <h3>SOCIAL MEDIA</h3>
                <div className={styles.icons}> 
                 <FaFacebookSquare size={48} color="blue"/>
                 <FaXTwitter size={48} color="black" />
                 <BsInstagram size={48} color="#E1306C" />
                </div>
            </div>


            <div className={styles.shop_div}>
                <h1>SHOP</h1>
                <ul>
                    <li>Product</li>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Release</li>
                </ul>
            </div>


            <div className={styles.company_div}>
                <h1>COMPANY</h1>
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>news</li>
                    <li>support</li>
                </ul>
            </div>


            <div className={styles.submit_div}>
                <h1>STAY UP TO DATE</h1>

               <div className={styles.fix_button}>

               <input type="text" placeholder='Enter Your Email' />
               <button>Submit</button>
               
               </div>

            </div>


        </section>

    </div>
  )
}

export default Footer