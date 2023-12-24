"use client"
import React, {useState, useEffect} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import Form from "@components/Form";

const EditPrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');
  const [submitform, setSubmitform] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  // useEffect(() => {
  //       const getPromptDetails = async () => {
  //           const response = await fetch(`/api/prompt${promptId}`)
  //           const data = await response.json();
  //       }

  //       setPost({
  //           prompt: data.prompt,
  //           tag: data.tag
  //       })

  //       if(promptId) {getPromptDetails();}
  // }, [promptId])

    //get the prompt and populate the form
    useEffect(() => {
      (async () => {
        const response = await fetch(`/api/prompt/${promptId}`);
        const data = await response.json();
        setPost({
          prompt: data.prompt,
          tag: data.tag,
        });
      })();
    }, [promptId]);
  

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitform(true);

    if(!promptId){
        return alert("Prompt ID not found")
    }
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH ',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag
         })
      })
      if(response.ok) {
        alert('success')
        router.push('/profile')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitform(false);
    }

}

  return (
    <Form 
    type= "Edit"
    post={post}
    setPost={setPost}
    submitform={submitform}
    handleSubmit={updatePrompt}
    />
  )
}

export default EditPrompt;