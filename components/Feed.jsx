"use client"
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return(
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard 
        key ={post._id}
        post={post}
        handleTagClick = {handleTagClick}
        />
      ))}
    </div>
  )
}

//functional react component Feed
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

//useEffect to handle API call to get the data with fetch API
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  },[])

  // logic to filter prompts for search on the feed page
  const filterThroughPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
    // the "i" is to account for case-insensitive prompts
    return posts.filter((item) => 
    regex.test(item.creator.username) ||
    regex.test(item.tag) || 
    regex.test(item.prompt)
    );
  }

  const handleSearchChange = (e) => {
    clearTimeout(setSearchTimeout );
    setSearchText(e.target.value);

    // timeout function for delayed effect
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterThroughPrompts(e.target.value);
        setSearchResult(searchResult);
      }, 1000)
    );
  };

  //Event Listener for tag slection after seacrch
  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const searchResult = filterThroughPrompts(tagName);
    setSearchResult(searchResult);
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
        className="search_input peer"
        />         
      </form>
      {searchText ? (
        <PromptCardList data={searchResult} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  )
}

export default Feed;