import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/posts')
      .then(response => {
        setPosts(response.data);
      });
  }, []);

  const handleSubmit = () => {
    const newPost = {
      title: title,
      content: content
    };

    axios.post('http://localhost:3001/api/posts', newPost)
      .then(response => {
        console.log(response.data.message);
        setTitle('');
        setContent('');
      });
  };

  return (
    <div className="App">
      <h1>My Blogging Website</h1>
      <div className="post-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button onClick={handleSubmit}>Create Post</button>
      </div>
      <div className="posts">
        <h2>Recent Posts</h2>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
