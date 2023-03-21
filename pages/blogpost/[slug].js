import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Slug = (props) => {
    
  
  const [post, setPost] = useState(props.allPost);
  
  // const router = useRouter();
  // useEffect(() => {

  //   if(!router.isReady) return;

  //   const {slug} = router.query
  //   fetch(`http://localhost:3000/api/home?slug=${slug}`).then((a)=>{
  //     return a.json();
  //   }).then((parsed)=>{
  //     setPost(parsed)
  //   })
  // }, [router.isReady])
    
  return (
    <div>
    <h3>Blog: {post && post.title}</h3>
    <div>
      <p>
       {post && post.description}
      </p>
      <span>{post && post.author}</span>
    </div>
     </div>
  )
}

export async function getServerSideProps(context){

  const {slug} = context.query;
  let data = await fetch(`http://localhost:3000/api/home?slug=${slug}`)
  let allPost = await data.json()

  return {
    props: {allPost}
  }
}

export default Slug