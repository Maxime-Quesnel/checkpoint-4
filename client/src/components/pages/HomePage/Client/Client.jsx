import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './Client.scss';

function Client() {
  const [dataImages, setDataImages] = useState([]);

  function getImages() {
    axios
      .get('http://localhost:8000/api/upload/all')
      .then(res => {
        setDataImages(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className='client__globalContainer' id='client'>
      <h4 className='client__title'>My client</h4>
      <div className='client__imgContainer'>
        {dataImages.length === 0 ? (
          <p
            style={{ fontSize: '30px', textAlign: 'center', color: '#fc9243' }}
          >
            No customer for the moment
          </p>
        ) : (
          dataImages.map(el => {
            return (
              <img
                className='client__img'
                src={`http://localhost:8000/public/images/${el.name}`}
                alt={el.alt}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
export default Client;
