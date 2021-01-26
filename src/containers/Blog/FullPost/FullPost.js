import React, { Component } from 'react';
import axios from '../../../axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPosts: null,
    }

    shouldComponentUpdate (nextProps, nextState) {
        if ( !this.state.loadedPosts) {
            return true;
        }
        if(this.props.selectedPostID !== nextProps.selectedPostID || this.state.loadedPosts.id !== nextProps.selectedPostID){
            return true;
        }
        return false;
    }

    componentDidUpdate() {
        if(this.props.selectedPostID != null) {
            axios.get("/posts/"+this.props.selectedPostID).then((response)=>this.setState({loadedPosts: response.data}));
        }
    }

    deletePostHandler = () => {
        axios.delete("/posts/"+this.props.selectedPostID).then((response)=>console.log(response));
    }
    render () {
        let post = <p style = {{textAlign: 'center'}} >Please select a Post!</p>;
        if(this.props.selectedPostID != null) {
            post = <p style = {{textAlign: 'center'}} >Loading...!</p>;
        }
        if(this.state.loadedPosts != null) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPosts.title}</h1>
                    <p>{this.state.loadedPosts.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        
        return post;
    }
}

export default FullPost;