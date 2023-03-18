import React from 'react';
import logo from './logo.png';

export default function Contact() {
  return (
    <section className='hero'>
      <img src={logo} alt='Logo' style={{ height: '271px', width: '399px', borderRadius: '0px', marginBottom: '20px' }} />
      <h1 style={{ textAlign: 'center' }}>Contact Us Directly</h1>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        <div><strong>Facebook Page:</strong> Infotect University</div>
        <div><strong>Email:</strong> infotechuniversity@infouniv.com</div>
        <div><strong>Contact Number:</strong> 09090114021</div>
      </div>
    </section>
  )
}
