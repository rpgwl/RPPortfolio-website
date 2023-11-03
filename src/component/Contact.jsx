import './Contactpage.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import linkdin from '../assets/linkedin.png'
import github from '../assets/github-logo.png'
import whatsapp from '../assets/whatsapp.png'
import calling from '../assets/calling-app.png'
import {toast} from 'react-hot-toast'

export default function Contact(){

  const form = useRef();

  const sendEmail = (e) => {
    console.log("Email send");
    e.preventDefault();

    emailjs.sendForm('service_x7bcnwh', 'template_t6xx6vs', form.current, 'v_iBwCLmYRYMsLtB7')
      .then((result) => {
        toast.success("Response send")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return(
    <section id='contact' className='contactpage'>
      <div className='client' >
        <h1 className='clientpagetitile'>My Clients Section</h1>
        <p className='clientdesc'>I have the apportunity to work with a diverse group of companies. some of the notables componies I have worked with includes  </p>
        <div className='clientimgs'> 
          <img className='clientimg'></img>
          <img className='clientimg'></img>
          <img className='clientimg' ></img>
          <img className='clientimg' ></img>
        </div>
      </div>

      <div  className='contact'>
        <h1 className='clientpagetitile' >Contact Me</h1>
        <span className='contactdes'>Please Fill out the form below to discuse any work apportunities.</span>
        <form id='contactmob' className='contactform' ref={form}>
          <input type='text' name="form_name" className='name' placeholder='Your name' />
          <input type='email' name="form_email" className='email' placeholder='Your Email' />
          <textarea name="message" rows='5' className='msg' placeholder='Your Message'></textarea>
          <button type='submit' value="Send" className='workbtn' onClick={sendEmail}>Submit</button>
        </form>
      </div>

      <div className='links'>
        <a href="https://www.linkedin.com/in/rahulpal-04233622b/" target="_blank" ><img src={linkdin} className='link'></img></a >
        <a href="https://github.com/rahul72pal" target="_blank" ><img src={github} className='link'></img></a >
        <a href="https://wa.me/8962113963" target="_blank"> <img src={whatsapp} className='link' ></img>  </a>
        <a href="tel:8962113962" target="_blank"><img src={calling} className='link' ></img > </a>
      </div>
      
    </section>
  )
}