
import React,{useState, useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
  })
  return (
    <div>
        {posts && posts.map(post => (
          <div key={post.id}>
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  )
}

export default App
