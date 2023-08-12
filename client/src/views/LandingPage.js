import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Vamos atrapa ese pokemon!</h1>
      <Link to="/home">
        <button>GO!</button>
      </Link>
    </div>
  );
};

export default LandingPage;
