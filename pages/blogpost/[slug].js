import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as fs from "fs";

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
        <p>{post && post.description}</p>
        <span>{post && post.author}</span>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "learn-javascript" } },
      { params: { slug: "learn-python" } },
      { params: { slug: "learn-react-native" } },
      { params: { slug: "learn-flutter" } },
    ],
    fallback: true, // false for blocking
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let allPost = await fs.promises.readFile(`blog-data/${slug}.json`, "utf-8");

  return {
    props: { allPost: JSON.parse(allPost) }, // will be passed to page as props
  };
}

export default Slug;
