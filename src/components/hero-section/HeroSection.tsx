import Image from "next/image"
import styles from './HeroSection.module.css'
// import {macondo} from '@/font'
// import { livvic } from '@/font';

function HeroSection() {
  return (
     <div>

        <section className={styles.hero_Sec}>

           <div className={styles.heroLeft}>

            <h1>Discover And <br/>
               Find Your <br/>
               Own STYLE
               </h1>

               <p >
               Upgrade your style with Stylish Naak, where Elegance <br/>
               meets trend. Show the world your unique look with a <br/>
               collection designed to make you stand out.
               </p>

               <button>Explore Now</button>

           </div>



           <div className={styles.heroRight}>

            <div className={styles.imgDiv}>
               <Image src={"/models_pictures/main.png"} alt="main" width={355} height={644.11} />
            </div>

           </div>

        </section>

     </div>
  )
}

export default HeroSection