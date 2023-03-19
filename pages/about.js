import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Home.module.css'

const about = () => {
  return (<>
    <Head>
        <title>Coder Hunt | About</title>
    </Head>
    <div className={styles.main_container}>
    <h2 className={styles.heading}>About us</h2>
    </div>
    <div className={styles.content_about}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste in cumque reprehenderit ea. Dicta aut porro magni earum impedit quod suscipit dolor veritatis, nisi laudantium vel harum provident fuga nemo voluptatum debitis ab eaque at inventore repudiandae ex labore quasi. Facilis nostrum, repellendus ipsam labore alias dolor accusamus? Tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio ratione ipsa, molestiae minus unde error natus dolorum reprehenderit culpa officiis ex numquam aut voluptas sed quia ipsum qui repellat provident quis eos nam, nobis quod quibusdam? Deleniti aliquam a sint in, numquam cum perferendis pariatur at doloremque non ipsum, veritatis, molestiae nulla dolor illo rem unde cumque iure reprehenderit nesciunt officiis sed maiores? Error, cum. Vero in laborum perspiciatis quasi delectus fugit. Velit qui at perferendis eum eligendi amet quisquam autem iure libero perspiciatis quae nihil assumenda, ab cum?
    </div>
  </>
  )
}

export default about