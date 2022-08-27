import React, { useEffect, useState } from "react";
const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => fetchPosts(), []);

  const fetchPosts = async () => {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await fetchData.json();
    return setPosts(data);
  };
  return (
    <div className="postsBox">
      <h1>POSTS</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((val) => (
            <tr key={val.id}>
              <td>{val.title}</td>
              <td>{val.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPosts;
