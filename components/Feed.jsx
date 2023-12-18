"use client"
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = () => {
    e.preventDefault();
    
  }


  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
        type="text"
        placeholder="Search for a tag or username"
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_imput peer"
        />         
      </form>
    </section>
  )
}

export default Feed