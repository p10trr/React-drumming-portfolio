import React from 'react'

export default function About() {

const associatedWorks = [
  {
    work: "Diego Philips",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a08a91442855478233802d1",
    url: "https://diegophilips.com/",
    desc: "studio/live"
  },
  {
    work: "Anastasia Vol",
    image: "https://www.mygwork.com/uploads/summernote/112cc29c47b7035c5e9e45b39fb27374.jpg",
    url: "https://www.facebook.com/anastasiavolmusic/",
    desc: "studio"
  },
  {
    work: "Soma Ansamble",
    image: "https://scontent-lcy1-1.xx.fbcdn.net/v/t1.18169-9/968974_603903842967959_1669328299_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=liW5unkrs_IAX_1-WMb&tn=A4SwrsMDlL7My6h6&_nc_ht=scontent-lcy1-1.xx&oh=00_AT-ZnUe0zws8KglJatSd4olEEMgWAH_8uHO8rD50qp_G8g&oe=627F3735",
    url: "https://www.facebook.com/Soma-Ansamble-168223619876493",
    desc: "studio/live"
  },
  {
    work: "Soulnaturals",
    image: "https://scontent-lcy1-1.xx.fbcdn.net/v/t31.18172-8/18671716_1904949666442140_4573941352868886188_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=HSZGwoJVV84AX8UXkon&_nc_ht=scontent-lcy1-1.xx&oh=00_AT8ineueTY2tF3yjbybeYQH0K1m579g4uxGVYR3TCentdg&oe=627DD3B2",
    url: "https://soulnaturals.bandcamp.com/",
    desc: "studio/live"
  },
  {
    work: "SexyKid",
    image: "https://scontent-lcy1-1.xx.fbcdn.net/v/t31.18172-8/11017498_1055458424478907_1872298667391741991_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=qW-PDZshWXsAX-9ugFC&_nc_ht=scontent-lcy1-1.xx&oh=00_AT-tAakkofRdMg2edNts_xQ6ffVKgwmeHIYcabcGh1nGoA&oe=627EF294",
    url: "https://www.facebook.com/sexykidrocks/?ref=page_internal",
    desc: "studio/live"
  },
  {
    work: "Zyanigh",
    image: "https://angartwork.akamaized.net/webp/?id=145907223&size=296",
    url: "https://www.instagram.com/zyanigh1/",
    desc: "studio"
  },
  {
    work: "River Wild",
    image: "https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/119996053_116633310193063_6779830250623391562_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jg3BVynVS1sAX_ZKz6N&_nc_ht=scontent-lcy1-1.xx&oh=00_AT97GD1A17aT7nDC1L-k-JRRnkT3crLqxsPqZzQt9epBNg&oe=627CC136",
    url: "https://www.facebook.com/The-River-Wild-116597093530018/",
    desc: "studio/live/production"
  },
  {
    work: "OneJah",
    image: "https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/102670728_2996344857116644_6945507745709667151_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=cqzzHlg68HQAX-eDBaH&_nc_ht=scontent-lcy1-1.xx&oh=00_AT-eY6zjVcXZOZw1-d30Gp7DQvOmLgYdnzb_9nFyh8nrIw&oe=627F5FAC",
    url: "https://soundcloud.com/maurice-onejah",
    desc: "studio"
  },
  {
    work: "Abdiel's Pearl",
    image: "https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/117307645_630494644247999_6008484453237496468_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KanhcIDbLlUAX962Svm&_nc_ht=scontent-lcy1-1.xx&oh=00_AT9ajpZ-Iy9Yk3vp2z5URW1k7Cs3ysB2tsVCAqT22xxBjg&oe=627CAE9B",
    url: "https://www.facebook.com/Abdiels-Pearl-630492947581502",
    desc: "studio/live"
  },
  {
    work: "Inverted Worlds",
    image: "https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/260358397_183980953950114_6167225631308413946_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=340051&_nc_ohc=bV_TOLoo6VIAX8YxZeT&tn=A4SwrsMDlL7My6h6&_nc_ht=scontent-lcy1-1.xx&oh=00_AT9ACiz4K8TEqQtTrZj0IqbOgtL5ZQOyLNA__J2lJSedeg&oe=625E089F",
    url: "https://www.facebook.com/profile.php?id=100070204280219",
    desc: "studio/live/production"
  },
  {
    work: "Involuntary Astronaut",
    image: "img/poster.png",
    url: "",
    desc: "studio/live/MD/production"
  },
  {
    work: "Tileyard London",
    image: "https://tileyard.co.uk/app/uploads/2019/02/Tileyard-Music.jpg",
    url: "https://tileyard.co.uk/",
    desc: "studio/house drummer"
  },
  {
    work: "London Sync",
    image: "https://i1.sndcdn.com/avatars-000528196023-705u25-t500x500.jpg",
    url: "https://www.londonsyncmusic.com/",
    desc: "library works contributor"
  }
]


  return (
    <div>
        <div className='about-container'>
        <img src='img/maumau.jpeg'/>
          <h1>About me</h1>
          <p>I'm a session drummer and composer based in London, United Kingdom. Throughout my carrier
            I've been a part of many interesting and diverse projects,
            spanning different genres. Since graduating from BIMM London in 2019, I've been involved in many musical projects, some just involving studio recordings and some extending to live performances and tours. 
            I'm always looking forward to new challenges and I never shy away from discovering and experimenting with 
            new styles and approaches to music. 
          </p>
          
        </div>
        <h1>Associated Works</h1>
        <div className='works-container'>
        {associatedWorks.map(item=>{
            return <div className='works-card'>
              <img src={item.image} alt={item.work}/>
              <a href={item.url}><h3>{item.work}</h3></a>
              <p><em>{item.desc}</em></p>
            </div>
          })}
        </div>
    </div>
  )
}
