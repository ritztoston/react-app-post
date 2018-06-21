import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {
  state = {
    auth: true
  };
  componentDidMount () {
    console.log(this.props);
  }
    render () {
      return (
            <div className="Blog">
              <header>
                <nav>
                  <ul>
                    <li><NavLink exact to="/posts/" >Posts</NavLink></li>
                    <li><NavLink exact to={{
                      pathname: '/new-post',
                      hash: '#submit',
                      search: '?quick-submit=true'
                    }}>New Post</NavLink></li>
                  </ul>
                </nav>
              </header>
              {/*<Route path="/" exact render={() => <Posts/>}/>
              <Route path="/new" exact render={() => <h2>hello</h2>}/>*/}

              <Switch>
                {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost}/> : null}
                <Route path="/posts" component={Posts}/>
                <Route render={() => <h1>Not Found!</h1>}/>
                {/*<Redirect from="/" to="/posts"/>*/}
              </Switch>
            </div>
        );
    }
}

export default Blog;