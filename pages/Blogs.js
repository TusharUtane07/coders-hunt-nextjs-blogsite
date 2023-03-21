import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blogs = (props) => {

  // console.log(props)

  const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(() => {
    
  // }, [])
  

  return (
    <>
      <Head>
        <title>Coders Hunt | Blogs</title>
      </Head>
      <div className="">
      {
        blogs.map((item, index)=>{
          return(
            <div key={index}>
              <Link href={`/blogpost/${item.slug}`}>
                <h2>{item.title}</h2>
              </Link>
              <p>{item.description}</p>
              <span>{item.author}</span>
            </div>
          )
        })
      }
      </div>
    </>
  );
};

export async function getServerSideProps(context){

  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()

  // .then((a)=>{
  //     return a.json();
  //   }).then((parsed)=>{
  //     setBlogs(parsed)
  //   })

  return{
    props: {allBlogs}// This will be passed to page component as Props.
  }
}

export default Blogs;
