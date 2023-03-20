import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json();
    }).then((parsed)=>{
      setBlogs(parsed)
    })
  }, [])
  

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
              <h2>{item.title}</h2>
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

export default Blogs;
