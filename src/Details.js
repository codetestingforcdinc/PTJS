import React from 'react';
import { useParams } from 'react-router-dom';
import jobData from './jobData';
import './Details.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Details = () => {
  let { jobTitle } = useParams();
  const job = jobData.find((job) => job.title === jobTitle);

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="details">
      <img src={job.img} width="350px" height="200px" alt={job.title} /> <br />
      <h2>{job.title}</h2>
      <br />
      <p>Location: {job.location}</p>
      <br />
      <p>Description: {job.description}</p>
      <br />
      <p>Payout: {job.payout}</p>
      <br />
      <p>Total: {job.total}</p>
      <br />
      <Button variant="outlined" className="bigboy">
        <Link
          className="button"
          to={{
            pathname: '/book',
            state: { job: job },
          }}
        >
          Book It!
        </Link>
      </Button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Details;
