import { Button } from '@mui/material';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

function Form() {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log('Selected File:', file);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9osf4c7',
        'template_rcqs4r4',
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
    <section className="form">
      <h1>Become A Host</h1>
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />

          <input
            type="email"
            placeholder="Email ID"
            name="user_email"
            required
          />

          <input
            type="number, text"
            maxLength="18"
            placeholder="Phone Number with Country Code"
            name="user_phone"
            required
          />

          <textarea
            name="description"
            cols="30"
            rows="10"
            placeholder="Description With Location"
          />

          <input
            type="text"
            placeholder="Payout/Day With Currency"
            name="payment"
            minLength="1"
            min="5"
            required
          />
          <input
            type="number"
            placeholder="No Of Days Needed"
            name="days"
            required
          />

          <div>
            <input
              type="file"
              accept="image/*"
              name="job_image"
              id="file-upload"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
            <label htmlFor="file-upload">
              <Button variant="outlined" component="span">
                Upload Image
              </Button>
            </label>
          </div>

          <Button variant="outlined" type="submit">
            Send Details
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Form;
