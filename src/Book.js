import { Button } from '@mui/material';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Book.css';
function Book() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9osf4c7',
        'template_ly3wdyj',
        form.current,
        '8h8h7g4C7Ry-8jcTL'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <h6>Reserve Your Spot</h6> <br />
          <input
            type="text"
            placeholder="Full Name"
            name="full_name"
            required
          />
          <br />
          <input type="email" placeholder="Email ID" name="email" required />
          <br />
          <input
            type="text"
            placeholder="Job Title *Just For Reference*"
            name="title_job"
            required
          />
          <br />
          <input
            type="number, text"
            maxLength="18"
            placeholder="Phone Number with Country Code"
            name="phone"
            required
          />
          <br />
          <input type="text" placeholder="Country" name="country" required />
          <br />
          <input type="number" placeholder="No Of Days" name="days" required />
          <br />
          <Button variant="outlined" type="submit">
            Send Details
          </Button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}

export default Book;
