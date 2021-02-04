import React, { Component } from "react";
import { Route } from "react-router-dom";

import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost"
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostID: null,
    erorr: false,
  };
  componentDidMount() {
    console.log(this.props);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data.slice(0, 6);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Adham Nour",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        //this.setState({ erorr: true })
      });
  }

  selectPostHandler = (id) => {
    this.props.history.push({ pathname: "/posts/" + id });
  };
  render() {
    let posts = this.state.posts.map((post) => {
      return (
        //<Link to={'/'+post.id} key={post.id}>
        <Post
          title={post.title}
          key={post.id}
          author={post.author}
          onSelect={() => this.selectPostHandler(post.id)}
        />
        //</Link>
      );
    });
    if (this.state.erorr) {
      posts = <p>Some error with your internet connection</p>;
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path= {this.props.match.url +"/:id"} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
