import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import Search from './Search';
import { useNavigate } from 'react-router-dom';
function Banner() {
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner__searchButton"
        >
          {showSearch ? 'Hide' : 'Search Dates For Work'}
        </Button>
      </div>

      <div className="banner__info">
        <h1>Get Out And Strech Your Imagination!</h1>
        <div className="bob">
          <h5>
            Plan A Different Kind Of Getaway To Uncover The Oppurtunities Near
            You!
          </h5>
          <Button variant="outlined" onClick={() => navigate('/search')}>
            Explore Nearby
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
