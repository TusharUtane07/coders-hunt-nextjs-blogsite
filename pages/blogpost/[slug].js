import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Slug = () => {
    
  
  const [post, setPost] = useState();
  
  const router = useRouter();
  useEffect(() => {

    if(!router.isReady) return;

    const {slug} = router.query
    fetch(`http://localhost:3000/api/home?slug=${slug}`).then((a)=>{
      return a.json();
    }).then((parsed)=>{
      setPost(parsed)
    })
  }, [router.isReady])
    
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

export default Slug