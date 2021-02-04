import React, { useState, useEffect } from 'react';
import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import axios from 'axios';

import './About.scss';
import MenImg from '../../../../assets/menAbout.jpg';

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get('http://localhost:8000/api/users/');
      setData(res.data);
    };
    fetchApi();
  }, []);

  return (
    <div className='about__globalContainer' id='about'>
      <img className='about__img' src={MenImg} alt='men-about' />
      <div className='about__containerInfos'>
        <p className='about__topTitle'>My intro</p>
        <h4 className='about__title'>About me</h4>
        <p className='about__desc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at
          justo justo. Ut ut efficitur magna. Fusce porta egestas Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Quisque at justo justo.
          Ut ut efficitur magna. Fusce porta egestas
        </p>
        <div className='about__containerUser'>
          <div className='about__containerIconUser'>
            <div className='about__containerIcon'>
              <AiOutlineUser style={{ color: '#fc9243' }} />
              <p className='about__nameIcon'>Name:</p>
            </div>
            <p className='about__resultInfosUser'>
              {data.firstname + ' ' + data.lastname}
            </p>
          </div>
          <div className='about__containerIconUser'>
            <div className='about__containerIcon'>
              <AiOutlinePhone style={{ color: '#fc9243' }} />
              <p className='about__nameIcon'>Phone:</p>
            </div>
            <p className='about__resultInfosUser'>{data.phone}</p>
          </div>
          <div className='about__containerIconUser'>
            <div className='about__containerIcon'>
              <AiOutlineUser style={{ color: '#fc9243' }} />
              <p className='about__nameIcon'>Email:</p>
            </div>
            <p className='about__resultInfosUser'>{data.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
