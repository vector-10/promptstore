// This page displays the user profile and posts in form of prmompts.
"use client"
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/profile";
import React from 'react'

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      //api call to a dynamic api endpoint for specific user posts with the user id.
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    }
    console.log(posts);     
    if(session?.user.id) {
      fetchPosts();
    }
  }, [])
// Event listener to start the edit prompt function
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`)
  }
//Event listener to start the delete prompt function
  const handleDelete = async(post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt");
    // Last check to enure that the user really want to delete a prompt
    if(hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method:'DELETE'
        });
        const filteredPosts = posts.filter((p) => p._id !== post._id); 
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);        
      }
    }

  }
  return (
    <Profile 
    name="My"
    desc="Welcome to your personalized profile page"
    data={posts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />
  )
}

export default MyProfile