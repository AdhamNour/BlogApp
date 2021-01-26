import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

import { Route, NavLink } from "react-router-dom";

class Blog extends Component {
    render() {
        return (
        <div className="Blog">
            <header>
            <nav>
                <ul>
                <li>
                    <NavLink
                    to="/"
                    exact
                    activeClassName="my-active"
                    activeStyle={{ color: "red", textDecoration: "underline" }}
                    >
                    HOME
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
            {/* <Route path="/" exact render ={() => <Posts />} />
                    <Route path="/new-post" exact render ={() => <NewPost />} /> */}
            <Route path="/" exact component={Posts} />
            <Route path="/new-post" exact component={NewPost} />
        </div>
        );
    }
}

export default Blog;
