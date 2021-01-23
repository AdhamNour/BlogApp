import React, { Component } from 'react';
import axios from '../../../axios'
import Post from '../../../components/Post/Post';
import './Posts.css'

class Posts extends Component {
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
                //this.setState({ erorr: true })
            });
    }

    selectPostHandler = (id) => {
        this.setState({ selectedPostID: id });
    };
    render() { 
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
            
            <section className="Posts">
                    {posts}
            </section>
        );
    }
}

export default Posts;