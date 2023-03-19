import { useRouter } from 'next/router'
import React from 'react'

const Slug = () => {
    
    const router = useRouter();
    const {slug} = router.query
  return (
    <div>
    <h3>Blog: {slug}</h3>
    <div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo saepe tenetur rerum architecto iure maiores officiis vero eligendi, a labore dolore quibusdam exercitationem officia. Dolores debitis totam harum nihil laudantium nemo nam tempore in voluptas ipsum quos rerum illum ea dicta, maxime quas eos soluta odit ab asperiores repellat provident!</p></div>
     </div>
  )
}

export default Slug