import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Link className="linktag" to="/details/Lawn Mowing">
          <Card
            src="https://www.familyhandyman.com/wp-content/uploads/2023/03/GettyImages-1419427330-e1678134597752.jpg"
            title="Lawn Mowing"
            price="Starting $10/day"
          />
        </Link>

        <Link className="linktag" to="/details/Driver">
          <Card
            src="https://driversuvidha.com/assets/images/driver22.jpg"
            title="Part Time Driver"
            price="Starting $1-$2/Mile"
          />
        </Link>

        <Link className="linktag" to="/details/Video Editor">
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjV5QcWge5sWC4j4Zbctd2mzFEwI9fFN_U2bpSy3AkG2ofNIi2SA9_htTuhtDg7-8OpZk&usqp=CAU"
            title="Video Editor"
            price="Starting $18/Hour"
          />
        </Link>
      </div>
      <div className="home__section">
        <Link className="linktag" to="/details/Room Cleaning">
          <Card
            src="https://media.nomadicmatt.com/2018/apartment.jpg"
            title="Room Cleaning"
            price="Starting $10/Room"
          />
        </Link>

        <Link className="linktag" to="/details/Data Entry">
          <Card
            src="https://moneymint.com/wp-content/uploads/2021/02/Best-Online-Data-Entry-Jobs-from-Home-without-Investment.jpg"
            title="Data Entry"
            price="Starting $60/Day"
          />
        </Link>

        <Link className="linktag" to="/details/Spanish Tutor">
          <Card
            src="https://cape.org.nz/wp-content/uploads/2023/07/ASLW-hablas-espanol.jpg"
            title="Spanish Tutor"
            price="$29/Hour"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
