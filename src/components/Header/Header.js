import React, {useState} from 'react';
import Contact from './Contact';

export default function Header({socialMedia}) {
const [openModal, setOpenModal] = useState(false);

const headerContent = <div className='header-container'>
<a href='/'>Home</a>
<a href='/about'>About</a>
<p className='my-name'>Piotr Paszkiewicz<br/>session drummer</p>
<a href='/media'>Media</a>
<span onClick={() => {setOpenModal(true);
}}>Contact</span>

{openModal && <div className='contact-container'>
  <Contact closeModal={setOpenModal} socialMedia={socialMedia}/>
</div>}
</div>;

  return (
    <div>
      <div className='header-desktop'>
       {headerContent}
      </div>
      <div className='hamburger'>
      <p className='my-name-mobile'>Piotr Paszkiewicz<br/>session drummer</p>
      <div className="mobile-menu"></div>
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
        <label for="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
        </label>
         <div id="sidebarMenu">
          
         </div>
         {headerContent}
        </div>
    </div>
    
  )
}
