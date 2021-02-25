import './App.css';
import { Component } from 'react';
import Comment from './Comment';

class App extends Component {
  // name and sotre variables before return statement
  state = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Checkout out this body property",
    comments: ['First!', 'Great post', 'Hire this author now!']
  }

  addComment = () => {
    const newComment = prompt('add a new comment')


    this.setState({ comments: [...this.state.comments, newComment]}) //spread opperator
    //? we can also switch the order of ...this.state.comments and newComment so that the new comment will be added to the top


  }

  //method that will update 'body' state
  changeBody = () => {
    const userInput = prompt('Give a new body')

    this.setState({ body: userInput})
  }

  render () {
    // map returns an array 
    const comments = this.state.comments.map((comment, index)=> (<Comment text={comment} key={index}/>))
    // comments = [ <Comment text={post.comments[0]} />, <Comment text={post.comments[1]} />, <Comment text={post.comments[1]} />]

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <p>by {this.state.author}</p>
        <p>{this.state.body}</p>
        <button onClick={this.changeBody}>Change Body</button>
        <h3>Comments:</h3>
        <button onClick={this.addComment}>Add a Comment</button>
        { comments }
      </div>
    );
  }
}

export default App;