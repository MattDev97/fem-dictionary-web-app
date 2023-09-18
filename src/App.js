import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Container } from 'reactstrap';

import Header from './header/Header';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Container className="px-4">
        <Header></Header>
      </Container>
      
    </div>
  );
}

export default App;