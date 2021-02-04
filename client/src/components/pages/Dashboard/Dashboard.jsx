import React, { useState } from 'react';
import axios from 'axios';
import { MdPublish } from 'react-icons/md';

import './Dashboard.scss';

import NavigationAdmin from '../../elements/NavigationAdmin/NavigationAdmin';

function Dashboard() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [alt, setAlt] = useState('');

  const onChangeHandle = event => {
    setSelectedFile(event.target.files[0]);
  };

  const onClickHandle = () => {
    const data = new FormData();
    data.append('file', selectedFile);
    axios
      .post('http://localhost:8000/api/upload/', data)
      .then(res => res.data)
      .then(res => {
        const newsData = {
          name: res.filename,
          alt: alt
        };
        axios
          .post('http://localhost:8000/api/upload/new', newsData)
          .then(resTwo => {
            alert(`Article créé`);
            window.location.reload();
          })
          .catch(err => {
            alert(err);
          });
      })
      .catch(err => {
        alert(err);
      });
  };

  function onSubmit(e) {
    e.preventDefault();
    if (!alt) {
      alert('Vous devez renseigner un titre et une description');
    } else {
      onClickHandle();
    }
  }

  return (
    <div>
      <div className='dashboard__globalContainer'>
        <NavigationAdmin />
        <div className='dashboard__container'>
          <h1 style={{ textAlign: 'center' }}>Added a new client</h1>

          <form
            className='dashboard__containerForm'
            noValidate
            onSubmit={onSubmit}
          >
            <div className='fileUpload blue-btn btn width100'>
              <span>Upload your Organizations logo</span>
              <input
                type='file'
                accept='image/png, image/jpeg, image/jpg'
                onChange={onChangeHandle}
                className='uploadlogo'
              />
            </div>
            <input
              type='text'
              name='alt'
              id='alt'
              placeholder='Entrez le alt du post'
              onChange={e => setAlt(e.target.value)}
              className='dashboard__input'
            />
            <button className='dashboard__btn' type='submit'>
              <div className='dashboard__containerBtn'>
                <MdPublish className='dashboard__icon' />
                <p>Ajouter le post</p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
