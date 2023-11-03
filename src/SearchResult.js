import React from 'react';
import './SearchResult.css';
import { Link } from 'react-router-dom';
function SearchResult({ img, location, title, description, payout, total }) {
  return (
    <div className="searchResult">
      <Link to={`/details/${title}`}>
        <img src={img} alt="" width="350px" />
      </Link>

      <div className="searchResult__info">
        <div className="infoTop">
          <h3>{title}</h3>
          <p>{location}</p>
          <p>___</p>
          <p>{description}</p>
        </div>
        <div className="infoBottom">
          <div className="searchResults__price">
            <h2>{payout}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
