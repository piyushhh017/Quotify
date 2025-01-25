import React, { useEffect, useRef } from 'react'
import '../css/home.css'
import homeData from '../data/homeData'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdArrowForward } from "react-icons/md";

const Home = () => {

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions:"play none none reverse"
    })

    gsap.to(".img",{
      scale:52,
      ease:"ease",
      scrollTrigger:{
        trigger:".wrapper",
        scrub:1,
        start:"top top",
        end:"bottom",
        pin:true
      }
    })

    gsap.to('.right' ,{
      autoAlpha:0,
      x:500,
      duration:1.5,
      scrollTrigger:{
        start:1
      }
    })
    gsap.to('.left' ,{
      autoAlpha:0,
      x:-500,
      duration:1.5,
      scrollTrigger:{
        start:1
      }
    })
    
    const timeline = gsap.timeline()
    
    timeline.from('.left-side div',{
      y:150,
      opacity:0,
      stagger:{
        amount:.4
      },
      delay:.5
    }).from('.right-side',{opacity:0,duration:2},.5)
    .to('.homeDiv' ,{x:-window.innerWidth})

    ScrollTrigger.create({
      animation:timeline,
      trigger:'.homeDiv',
      start:"top top",
      end:"+=250",
      scrub:1,
      pin:true,
      ease:"ease"
    })

    gsap.utils.toArray('.col').forEach(image=>{
      gsap.fromTo(image,{
        opacity:.3,
        x:0
      },{
        opacity:1,
        x:-50,
        scrollTrigger:{
          trigger:image,
          start:"2%",
          stagger:{
            amount:.4
          }
        }
      })
    })

    const tl = gsap.timeline()

    tl.from(".spn",{
      y:150,
      opacity:0,
      duration:2
    })

  })

  return (
    <div className='homeDiv'>
      <div className="wrapper">
        <div className="video">
          <video className='homeVdo' src="video/homeFlr.mp4" autoPlay loop muted />
        </div>
        <div className="photo">
          <img className='img' src="images/homeBody/Home.png" alt="images/homeBody/Home.png" />
        </div>

        <div className="text-content">
          <div className="img_txt">
            <div className="title">
              <span className='tx1 spn left'>between</span>
            </div>
            <div className="title">
              <span className='tx2 spn left'>Reality</span>
            </div>
            <div className="title">
              <span className='tx3 spn right'>&</span>
            </div>
            <div className="title">
              <span className='tx4 spn right'>Imagination</span>
            </div>
          </div>
        </div>

        <div className="v_container">
          <div className="left-side">
            <div className="tv">
              <div className='tx3'>Push_The_Envy</div>
            </div>
            <div className="text-container">
              <p>
                Imagination will often carry us to worlds that never were. But without it we go nowhere.
              </p>
              <p>
                It's not what you look at that matters, it's what you see.
              </p>
            </div>
          </div>
          <div className="right-side">
            <p className='expl'> <i className='txt'>Explore more </i> <MdArrowForward className='arw' />  </p>
          </div>
        </div>

      </div>


      <div className="secMain">
        <div className="seSec">
        {homeData.map((v,i)=>{
        return(
          <div className="sec" key={i}>
            <div className="col gif1">
              <img src={v.image1} alt={v.image1} />
              <img src={v.image2} alt={v.image2} />
            </div>
            <div className="cnt">
              <h1>'{v.title}'</h1>
              <p>"{v.para}"</p>
              <div className="name">{v.name}</div>
            </div>
            <div className="col gif2">
              <img src={v.image3} alt={v.image3} />
              <img src={v.image4} alt={v.image4} />
              <img src={v.image5} alt={v.image5} />
            </div>
          </div>
          )
        })} 

          {/* <div className="sec">
            <div className="col gif1">
              <img src='images/sunflower/s1.png' alt='images/sunflower/s1.png' />
              <img src='images/sunflower/s1.png' alt='images/sunflower/s1.png' />
            </div>
            <div className="cnt">
              <h1>'lorem'</h1>
              <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sequi sit magni ut numquam eius praesentium beatae! Distinctio deserunt ea hic laboriosam tenetur? Architecto distinctio consequatur, ut quis modi eaque. "</p>
              <div className="name">lorem</div>
            </div>
            <div className="col gif2">
              <img src='images/sunflower/s1.png' alt='images/sunflower/s1.png' />
              <img src='images/sunflower/s1.png' alt='images/sunflower/s1.png' />
              <img src='images/sunflower/s1.png' alt='images/sunflower/s1.png' />
            </div>
          </div> */}
        </div>
      </div>

    </div>
  )
}

export default Home