import React from 'react';
import logo from './logo.png';

export default function About() {
  return (
    <section className='hero'>
      <img src={logo} alt='Logo' style={{ height: '271px', width: '399px', borderRadius: '0px', marginBottom: '20px' }} />
      <h1 style={{ textAlign: 'center' }}>About Us</h1>
      <p>
        InfoTech University is an all Information Technology Course University in the Philippines. It was recently established, 
        on February 6, 2023, with the goal of creating a university that primarily focuses on technology, specifically information technology. It was established with the goal of fostering excellence in students and producing people of note on a national scale.
      </p>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        <div><strong>Facebook Page:</strong> Infotect University</div>
        <div><strong>Email:</strong> infotechuniversity@infouniv.com</div>
        <div><strong>Contact Number:</strong> 09090114021</div>
      </div>
    </section>
  )
}
