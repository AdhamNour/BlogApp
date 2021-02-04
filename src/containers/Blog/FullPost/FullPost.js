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
        if(this.props.match.params.id !== nextProps.match.params.id || this.state.loadedPosts.id !== +nextProps.match.params.id){
            return true;
        }
        return false;
    }
    
    componentDidMount() {
        console.log(this.props)
        this.loadData();
    }
    componentDidUpdate(){
        console.log(this.props)
        this.loadData();
    }

    loadData () {
        if(this.props.match.params.id != null) {
            axios.get("/posts/"+this.props.match.params.id).then((response)=>this.setState({loadedPosts: response.data}));
        }
    }

    deletePostHandler = () => {
        axios.delete("/posts/"+this.props.match.params.id).then((response)=>console.log(response));
    }
    render () {
        let post = <p style = {{textAlign: 'center'}} >Please select a Post!</p>;
        if(this.props.match.params.id != null) {
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