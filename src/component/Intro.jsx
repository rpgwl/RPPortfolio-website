import bg from '../assets/oie_12wwNwCY0gcq__1_-removebg-fotor-20230903154537.png';
import btnimg from '../assets/hireme.png';
import {Link} from 'react-scroll';
import './Intro.css';
import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function Intro(){

  useEffect(() => {
    const typeData = new Typed(".role", {
      strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });
    // Clean up the Typed instance when the component unmounts
    return () => {
      typeData.destroy();
    };
  }, []);
  
  return(
    <section id='intro' className="intro">
      <div className="introcontent">
        <span className='hello'>Hello</span>
        <span className='introtext'> I'm <span className='introname'>Rahul Pal </span>  <br/> <span className='role'></span> </span>
        <p className='intropara'> I'm skill web developer and experience in creating <br/> the visually appealing and user friendly websites. </p>
        <Link to=''>
          <button className='btn'>  <img src={btnimg} className='btnimg'></img> Hire me </button>
        </Link>
      </div>
      <div className="bg">
        <img src={bg} className='bgimg'  ></img>
      </div>
    </section>
  )
}