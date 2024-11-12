"use client"
import { IoMenu } from "react-icons/io5";
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'   // styles ke naam se ham css module file ko import kar rhy hain or abhi ham navbar.tsx mein hain
// (./) matlab is Navbar.tsx ke parent folder ke andar (modules.css) ki file bhi moujod hai usy get kar ke loadComponents. 
import { motion, AnimatePresence } from "framer-motion"



function Navbar() {

 let [open, setopen] = React.useState<boolean>(false)

  let showFunc = ()=>{
    setopen(!open)
  }


  return (
    <>

        <nav className={styles.navbar}>
          <h1>STYLISH</h1>

<AnimatePresence>
          {open == true ? (

              <motion.div className={`${styles.Responsiv_div} ${styles.adjust_div}`}  
              key={"Slow_close_menu"}
              initial={{height: 0, opacity: 0}}
              animate={{height: "335px", opacity: 1}} 
              exit={{height: 0, opacity: 0}}
              transition={{duration: 0.5}}> 

              <ul>
                <li><Link href="/" style={{color: "#39373A", fontWeight: "600"}} >HOME</Link></li>
                <li><Link href="/shop">SHOP</Link></li>
                <li><Link href="/">FEATURES</Link></li>
                <li><Link href="/">CONTACT</Link></li>
              </ul>
    
              <button>LOGIN</button>
              </ motion.div>
             
              )
              
              :(
                <div className={`${styles.Responsiv_div}`}>      
              <ul>
                <li><Link href="/" style={{color: "#39373A", fontWeight: "600"}} >HOME</Link></li>
                <li><Link href="/shop">SHOP</Link></li>
                <li><Link href="/">FEATURES</Link></li>
                <li><Link href="/">CONTACT</Link></li>
              </ul>
    
              <button>LOGIN</button>
              </div>
              )}  
</AnimatePresence>    

          <IoMenu size={35} className={styles.menu} onClick={showFunc} />
        </nav>

        </>
  )
}

export default Navbar