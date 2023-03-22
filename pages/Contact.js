import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Home.module.css'

const Contact = () => {
  return (<>
    <Head>
        <title>Coder Hunt | Contact</title>
    </Head>
    <div className={styles.main_container}>
    <h2 className={styles.heading}>Contact us</h2>
    </div>
    
  </>
  )
}

export default Contact