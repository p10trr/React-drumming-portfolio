import React from 'react';
export default function Footer({socialMedia}) {
  return (
    <div className='footer-container'>
      {socialMedia}
      <p>&copy; 2022 Piotr Paszkiewicz | Session Drummer</p>
      </div>
  )
}
