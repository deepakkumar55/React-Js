import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:postId" component={BlogPost} />
      </Switch>
    </Router>
  );
}

export default App;
