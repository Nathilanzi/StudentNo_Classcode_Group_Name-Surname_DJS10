import React from 'react'
import { useState, useEffect } from 'react'


function App() {
  const [error, setError] = useState(0)
  const [data, setData] = useState(0)
  const [isLoading, setIsLoading]


  useEffect(()=>{
    const fetchPost = async() => {
      try{
        const response = await fetch
        ("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) {
          const errorData = await response.json();
          throw new error(errorData.message|| " ");
        }

        const data = await response.json();
        setPosts(data);
      }catch (error) {
        setError(error.message);
      }finally {
        setIsLoading(false);
      }
    };
    
      })
      fetchPost()
  }, []);

  return (
    <>
    <div>
      <h1>Posts</h1>
      {isLoading ? (
        <p>Loading...</p>
      )
      }
    </div>
    {!error && data
      ? data.map((post)=> (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))
      : null}
      {error ? <h1>{error}</h1> :null}
    </>

  ); }

export default App
