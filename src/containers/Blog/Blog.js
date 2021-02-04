import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

import { Route, NavLink,Switch, Redirect } from "react-router-dom";

class Blog extends Component {
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
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/posts"  component={Posts} />
                <Redirect  from="/" to="/posts"/>
            </Switch>
        </div>
        );
    }
}

export default Blog;
