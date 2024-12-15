"use client"
import useEmblaCarousel from 'embla-carousel-react'   /* enbla slide import */
import styles from './Best-selling.module.css'
import { itimFont } from '@/font'
import Image from "next/image"
import { FaStar } from "react-icons/fa";
import {card_data} from "@/constant/card"       /* typscript card data import for looping */
import { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

function BestSelling (){


    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, 
          [Autoplay({delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })])   /* get from Embla */

    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])



      

    return(
        <div>

          <section className={styles.bestSelling_Sec}>
            <h1>Best Selling</h1>
            <p>Discover our best-selling styles – customer favorites designed </p>


            <div className={`${styles.Scrolling_Crads_div}  ${styles.embla}`} ref={emblaRef}>
                <div className={styles.embla__container}>

 {/* Cards */}
                   {card_data.map((data) => {return(   // Card repeat looping
                     
                      <div className={styles.embla__slide} key={data.id}>
                        
                      <div className={styles.imageDiv} style={{backgroundColor: data.backgroundColor}}>
                          <Image src={data.image} alt="men picture" width={384} height={492.62} className={styles.card_Img} />
                      </div>

                      <div className={styles.text_div}>
                          <h1>{data.heading}</h1>

                          <div className={styles.price_div}>
                          <p>{data.price}    |   {data.rating}.0 <FaStar size={30.22} color="yellow" className={styles.star} /></p>
                          </div>
                      </div>

                  </div>
                   )})}


                </div>
            </div>

                  <Link href={"/shop"}> <button className={styles.last_button}>See more</button> </Link>

          </section>

        </div>
    )
}

export default BestSelling


/* Notes 


className={itimFont.className}

kisi bhi text style ko node module se download karte hain to is tarhn use karte hain.


style={{backgroundColor: data.backgroundColor}}

isy hamne div mein inline css kar ke lgaya is se hoga ye ke jab bhi loop chalega har div ko alag alag background
color milega.


const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })





*/