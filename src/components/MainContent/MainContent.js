import React from 'react';


export default function MainContent() {

  const comments = [
    { content: "Piotr brings a musicality and maturity to the drums. He has developed a unique voice on the drumkit which is always creative but never overpowering.",
      author: "Billy Morrell | independent"
    }, 
    {
      content: "Groove, solid time and creativity.",
      author: "Mark Rice | Tileyard London"
    },
    {
      content: "I've played with Piotr in a number of different projects and always look forward to working with him. A real professional and a natural musician.",
      author: "Jordan Holmes | independent"
    },
    {
      content: "Piotr has a melodic, musical approach to the drums which is underpinned by a solid groove and a strong command of time. Always listening and striving to serve the song, he is pleasure to play with.",
      author: "Zyanigh"
    }
  ];
  

 
  return (
    <div className='main-container'>
      <img src='img/mainphoto.jpg' alt='mainPhoto' className='main-photo'/> 
      <div>
        <h1 className='testimonials'>Testimonials</h1>
          <div className='testimonials-container'>
            {comments.map(item=>{
            return <div className='testimonials-card'>
              <h2><em>"</em></h2>
              <h3>{item.content}</h3>
              <h2><em>"</em></h2>
              <p>{item.author}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

