import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './css/homePage.css';

function HomePage() {
  return (
    <div>
      <h1 class="fonto">Welcome to the Game!</h1>
      <Link to="/create">
        <Button color="primary">Create New Player</Button>
      </Link>
      <Link to="/edit">
        <Button color="success">Edit Player</Button>
      </Link>
      <Link to="/search">
        <Button color="info">Search Player</Button>
      </Link>
    </div>
  );
}

export default HomePage;
