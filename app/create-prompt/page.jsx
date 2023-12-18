"use client"
import React, {useState} from 'react';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import Form from "@components/Form";

const CreatePrompt = () => {
  const [submitform, setSubmitform] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const CreatePrompt = async (e) => {
    const router = useRouter();
    const { data:session } = useSession();
    // to prevent the default behaviour of browsers in our apps
    e.preventDefault();
    setSubmitform(true);

    try {
      const response = await fetch("/api/prompt/new/", {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag
         })
      })
      if(response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitform(false);
    }

  }

  return (
    <Form 
    type= "Create"
    post={post}
    setPost={setPost}
    submitform={submitform}
    handleSubmit={CreatePrompt}
    />
  )
}

export default CreatePrompt;