import logo from './logo.svg';
import './App.css';
import Comment from './Comments'

function App() {
  const post = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property!"
  }
  const comments = [ "First!", "Great post", "Hire this author now!" ]

  return (
    <div className="App">
      <h1>{post.title}</h1> {/* can use variables with curly brackets */}
      <h3>by {post.author}</h3>
      <h3>{post.body}</h3>
      <ul>
        {comments.map(comment => (
          <li>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
