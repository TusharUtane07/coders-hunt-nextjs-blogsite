import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as fs from 'fs'

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

  export async function getStaticProps(context) { 
    let data = await fs.promises.readdir("blog-data");
    let myfile; 
    let allBlogs = [];
      for (let index = 0; index < data.length; index++) {
        const item = data[index];
          console.log(item)
          myfile = await fs.promises.readFile(('blog-data/' + item), 'utf-8') 
          allBlogs.push(JSON.parse(myfile))
      }

  return{
    props: {allBlogs}// This will be passed to page component as Props.
  }
}

export default Blogs;
