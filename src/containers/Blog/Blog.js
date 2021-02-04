import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncCompenet"

import { Route, NavLink,Switch, Redirect } from "react-router-dom";

const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'))

class Blog extends Component {
    state = {
        auth : true
    }
    render() {
        return (
        <div className="Blog">
            <header>
            <nav>
                <ul>
                <li>
                    <NavLink
                    to="/posts"
                    exact
                    activeClassName="my-active"
                    activeStyle={{ color: "red", textDecoration: "underline" }}
                    >
                    POSTS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/new-post" exact>
                    New Post
                    </NavLink>
                </li>
                </ul>
            </nav>
            </header>
            <Switch>
                {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}
                <Route path="/posts"  component={Posts} />
                <Route render = {() => <h1>Not Found</h1>} />
                {/* <Redirect  from="/" to="/posts"/> */}
            </Switch>
        </div>
        );
    }
}

export default Blog;
