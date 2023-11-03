import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <h1>35 Jobs Found</h1>
      </div>
      <SearchResult
        img="https://media.istockphoto.com/id/520135246/photo/mowing-the-grass.jpg?s=612x612&w=0&k=20&c=9ZlrazlneuDiU6Rdv9nYq0k_ZNoGwJ_JXTiE8djJGVc="
        location="El Dorado, CA, United States"
        title="Lawn Mowing"
        description="2 Lawns - Front And Back in El Dorado. Tip For Good Work"
        payout="$23/Lawn"
        total="$23+Possible Tip"
      />

      <SearchResult
        img="https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_become_a_better_driver.jpg"
        location="Orderville, Utah, United States"
        title="Driver"
        description="A 6 Hour Driver. Extra Payout For Exceeding Time"
        payout="$115/Day"
        total="6 Days- $710"
      />

      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjV5QcWge5sWC4j4Zbctd2mzFEwI9fFN_U2bpSy3AkG2ofNIi2SA9_htTuhtDg7-8OpZk&usqp=CAU"
        location="Columbus, Ohio, United States"
        title="Video Editor"
        description="A Job For A Content Creator Doing Challenges. 4h/day"
        payout="$2800/Month"
        total="$17000 For 6 Months"
      />

      <SearchResult
        img="https://cape.org.nz/wp-content/uploads/2023/07/ASLW-hablas-espanol.jpg"
        location="Austin, Texas, United States"
        title="Spanish Tutor"
        description="A Spanish Tutor For A Family of 4. 2h/day "
        payout="$48/Day(2h)"
        total="$1500/month"
      />

      <SearchResult
        img="https://e1.pxfuel.com/desktop-wallpaper/655/959/desktop-wallpaper-cameraman.jpg"
        location="Columbus, Ohio, United States"
        title="Cameraman"
        description="A Job For A Content Creator Doing Challenges. 4h/day. Camera Will Be Provided"
        payout="$3000/Month"
        total="$18500 For 6 Months"
      />

      <SearchResult
        img="https://media.nomadicmatt.com/2018/apartment.jpg"
        location="New York City, United States"
        title="Room Cleaning"
        description="Clean 6 Rooms Every Day and Kitchen. 3h"
        payout="$48/Day"
        total="7 Days- $350"
      />

      <SearchResult
        img="https://moneymint.com/wp-content/uploads/2021/02/Best-Online-Data-Entry-Jobs-from-Home-without-Investment.jpg"
        location="Juneau, Alaska, United States"
        title="Data Entry"
        description="6 Excel Sheets Data/Day. 116 lines/Sheet "
        payout="$60/Day"
        total="7 Days- $450"
      />

      <SearchResult
        img="https://www.monarch.edu.au//wp-content/webpc-passthru.php?src=https://www.monarch.edu.au/wp-content/uploads/Social-media-manager-jobs.jpg&nocache=1"
        location="Sacramento, California, United States"
        title="Social Media Manager. 40 min Job"
        description="Manage and create content for social media accounts for a business. "
        payout="$9/Post"
        total="18/Day"
      />

      <SearchResult
        img="https://static.wixstatic.com/media/6ad146_07de431e446c423c9019de7f147250b8~mv2.jpg/v1/crop/x_0,y_345,w_1894,h_1549/fill/w_560,h_458,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Vegetable%20Garden_edited_edited.jpg"
        location="Tallahassee, Florida, United States"
        title="Garden Manager"
        description="2 Lawns With 20 Plants in each. Water Plants Every Day And Study And Suggest Pesticides."
        payout="$30/Lawn"
        total="7 Days- $210"
      />

      <SearchResult
        img="https://www.tagvenue.com/blog/wp-content/uploads/2022/08/jon-tyson-CP68p1fZS8k-unsplash-1024x683.jpg"
        location="Richmond, Virginia, United States"
        title="Event Host"
        description="A Birthday Party Host. It Will Take Up To 4 Hours."
        payout="$200"
        total="$200"
      />

      <SearchResult
        img="https://i.ytimg.com/vi/ARByGQcLsrc/maxresdefault.jpg"
        location="Honolulu, Hawaii, United States"
        title="Dog Walker"
        description="A 1 Hour Walk With A Siberian Husky. She is Friendly"
        payout="$18/Day"
        total="$126/Week"
      />

      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYU6Lx4j7y88vUeRPaCG6gVUCFT-vja1P5fQ&usqp=CAU"
        location="Hilo, Hawaii, United States"
        title="Lifeguard"
        description="Lifeguard. 8h/Day"
        payout="$120/Day"
        total="$120"
      />

      <SearchResult
        img="https://media.istockphoto.com/id/1155488040/photo/assortment-of-italian-pizzas-in-a-shop-display-female-workers-serving-the-pizzas.jpg?s=612x612&w=0&k=20&c=xBVbBc2C0bcw0pPKWOgO1XCgjjRqSuieSMcH7lZ9GzA="
        location="Birmingham, United Kingdom"
        title="Catering Staff"
        description="Catering Staff At A Pizza Shop. 9h/Day"
        payout="£70/Day"
        total="£2100/Month"
      />

      <SearchResult
        img="https://www.cloudtalk.io/wp-content/uploads/2022/11/illustration-working-in-a-call-centrum-1024x538.png"
        location="London, United Kingdom"
        title="Call Centre Agent"
        description="Call Centre In London. 8h/Day"
        payout="£73/Day"
        total="£2190/Month"
      />

      <SearchResult
        img="https://www.liveabout.com/thmb/uHVbCiHzm4JwYWX_ID9Uc7LTKWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/a-dog-trainer-giving-a-hand-command-to-black-labrador-dog--1153579373-cb14c8fb30724468a702c972910c6f2a.jpg"
        location="Manchester, United Kingdom"
        title="Pet Trainer"
        description="Pet Trainer, Breed-PitBull. 2h/Day"
        payout="£38/Day"
        total="£1140/Month"
      />

      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqW6BPFV3pZnn4KVni_DDRkmQEklaoxk8Lw&usqp=CAU"
        location="Chelsea,  United Kingdom"
        title="Chef"
        description="Chef At A House(Bunglow). 2h+2h+2h/Day(Breakfast, Lunch, Dinner) "
        payout="£14/Hour"
        total="£85/Day"
      />
    </div>
  );
}

export default SearchPage;
