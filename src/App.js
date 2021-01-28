
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Work from './Work'
import People from './People'
import ErrorPage from './ErrorPage'
import Post from './Post'

import './App.css';

function App() {

  // const [data,setData]=useState([]);

  // const getLocalData=()=>{
  //   fetch('data/data.json'
  //   ,{headers : { 
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //    }}
  //   )
  //     .then(function(response){
  //       // console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       setData(myJson)
  //       console.log(myJson);
  //     });
  // }


  // useEffect(()=>{
  //   getLocalData()
  // }, [])

  return (
    <Router>
      <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/work' exact component={Work}/>
    <Route path='/people' exact component={People}/>
    <Route path='/posts/:id' exact component={Post}/>
    {/* <Route
            exact
            path='/posts/:id'
            render={props => (
              <Post {...props} data={{data}} />
            )}
          /> */}
    <Route path='/' component={ErrorPage}/>
      </Switch>
    </Router>
  );
}

export default App;
