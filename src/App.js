import React from 'react';
import AddPosts from './Components/AddPosts';
import EditPosts from './Components/EditPosts';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path = {`/:id`} component = {EditPosts}/>
        <Route path = {`/`} component = {AddPosts}/>
      </Switch>
    </Router>
  ); 
} 

export default App;
