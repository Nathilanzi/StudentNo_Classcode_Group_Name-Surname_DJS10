import React, { useState, useEffect } from 'react'


function App() {
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    const fetchPosts = async() => {
      try{
        const response = await fetch
        ("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          const errorData = await response.json();
          throw new error(errorData.message|| "An error occured");
        }

        const postsData = await response.json();
        setPosts(postsData);
      }catch (error) {
        setError(error.message);
      }finally {
        setIsLoading(false);
      }
    };
    
      fetchPosts();
  }, []);

  return (
    <>
    <div>
      <h1>post</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <div style={{color: "black", textAlign: "center"}}>
          {error}
        <img
        src={errorImage}
        alt="error"
        style={{ maxWidth: "100%", height: "auto"}}
        />
        </div>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {posts.map((post, index) => (
            <li
            key={post.id}
            >
              <h2>
                {index + 1}. {post.title}
              </h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )
      }
    </div>
      </>
  )
}
export default App
