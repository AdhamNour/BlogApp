import React, { Component } from 'react';

import axios from '../../axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostID: null,
        erorr : false
    };

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0,6);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author:"Adham Nour"
                    }
                })
                this.setState({ posts: updatedPosts})
            }).catch(error => {
                this.setState({ erorr: true })
            });
    }

    selectPostHandler = (id) => {
        this.setState({ selectedPostID: id });
    };
    
    render () {
        let posts = this.state.posts.map(
            post =>{
                return (
                    <Post title={post.title} key={post.id} author={post.author} onSelect={() => this.selectPostHandler(post.id)} />
                )
            }
            )
        if(this.state.erorr){
            posts = <p>Some error with your internet connection</p>
        }
        return (
            <div className= "Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost selectedPostID={this.state.selectedPostID} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;