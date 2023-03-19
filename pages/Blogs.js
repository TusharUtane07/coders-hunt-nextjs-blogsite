import Head from "next/head";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Coders Hunt | Blogs</title>
      </Head>
      <div>Blogs: Boost your knowledge.</div>
      <Link href={'/blogpost/javascript'}>Learn Javascript</Link>
      <Link href={'/blogpost/react-native'}>Learn React Native</Link>
      <Link href={'/blogpost/flutter'}>Learn Flutter</Link>
      <Link href={'/blogpost/python'}>Learn Python</Link>
    </>
  );
};

export default Blogs;
