import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navigation}>
    <ul>
      <Link href='/'>
        <li>Home</li>
      </Link>
      <Link href='/about'>
        <li>About</li>
      </Link>
      <Link href='/Blogs'>
        <li>Blogs</li>
      </Link>
      <Link href='/Contact'>
        <li>Contact</li>
      </Link>
    </ul>
  </nav>
  )
}

export default Navbar