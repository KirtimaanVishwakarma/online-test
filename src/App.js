import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [postSearch, setPostSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [change, setChange] = useState("");
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await fetchData.json();
    return setPosts(data);
  };
  const handleChange = (e) => {
    // setPostSearch(e.target.value);
    setChange(e.target.value);
  };
  const searchHandler = (e) => {
    setPostSearch(change);
  };
  return (
    <>
      <div className="container">
        <div className="searchBox">
          <input
            type="text"
            placeholder="search..."
            name="searchValue"
            onChange={handleChange}
          />
          <button onClick={searchHandler}>Search</button>
        </div>
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
              {posts
                .filter((search) =>
                  search.title
                    .toLowerCase()
                    .includes(postSearch.toLocaleLowerCase())
                )
                .map((val) => (
                  <tr key={val.id}>
                    <td>{val.title}</td>
                    <td>{val.body}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
