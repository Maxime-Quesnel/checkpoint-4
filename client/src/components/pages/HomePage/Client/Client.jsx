import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './Client.scss';

function Client() {
  const [dataImages, setDataImages] = useState([]);

  function getImages() {
    axios
      .get('http://localhost:8000/api/upload/')
      .then(res => {
        setDataImages(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className='client__globalContainer'>
      <h4 className='client__title'>My client</h4>
      <div className='client__imgContainer'>
        <img
          className='client__img'
          //src={`http://localhost:8000/public/images/${data.name}`}
          alt='client-logo'
        />
      </div>
    </div>
  );
}
export default Client;
