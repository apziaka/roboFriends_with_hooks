import React, { useState, useEffect } from "react";
//import CardList from './components/CardList';
import Robots from './views/Robots';
import {useFetch} from './hooks/useFetch';

const App = () => {

  const { robots, robotsLoading, robotsError } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h1>Robofriends</h1>
      
      {
        robotsLoading ? 
        <div>Loading...</div> : <Robots robots={robots}/>
      }
      {
        robotsError ?
        <div>{robotsError}</div> : null
      }
    </div>
  );
}

export default App;