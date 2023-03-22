import Head from 'next/head'
import React, { useState } from 'react'
import styles from '@/styles/contact.module.css'

const Contact = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [concern, setConcern] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {name, phone, email, concern};

    fetch('http://localhost:3000/api/postContact/', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
      console.log("success", data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (<>
    <Head>
        <title>Coder Hunt | Contact</title>
    </Head>
    <div className={styles.main_container}>
    <h2 className={styles.heading}>Contact us</h2>
    </div>
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label className={styles.labelS} htmlFor="name">Enter your name: </label>
        <input className={styles.inputS} type="text" id='name' name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <br />
        <label className={styles.labelS} htmlFor="email">Enter your email: </label>
        <input className={styles.inputS} type="text" id='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <br />
        <label className={styles.labelS} htmlFor="phone">Enter your phone no: </label>
        <input className={styles.inputS} type="text" id='phone' name='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
        <br />
        <label className={styles.labelS} htmlFor="concern">Enter your concern: </label>
          <textarea name="concern" id="concern" cols="30" rows="10" value={concern} onChange={(e)=>{setConcern(e.target.value)}}/>
        <br />
        <button className={styles.buttonS}>Submit</button>
      </form>
    </div>
    
  </>
  )
}

export default Contact