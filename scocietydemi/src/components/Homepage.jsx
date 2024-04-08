import React from 'react'
import './Homepage.css'
import Navigation from './Navigation'
import Fotter from './Footer'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../project_material/adult-1.jpg'
import img2 from '../project_material/gym1.jpg'
import img3 from '../project_material/gym-5977600_640.jpg'
import img4 from '../project_material/training.jpg'
import img5 from '../project_material/woman-5.jpg'
import { Link } from 'react-router-dom';
const Homepage = () => {
  var settings_client = {
    dots: true,
    speed: 1500,
    nextArrow: null,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settings_services = {
    dots: true,
    speed: 1500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]

  }
  return (
    <div>
      <Navigation/>
      <div className='home-page'>
        <div className='middel-content'>
          <div className='content'>
            <Slider {...settings_client}>
              <div className="slide" >
                <div className='left-card'>
                  <p>XTREME FITNESS</p>
                  <h1>
                    POWER UP
                  </h1>
                  <p>Best GYM & Fitness Center Build Your Health </p>
                  <button> Join us now <span className="material-symbols-outlined play-btn">
                    play_circle
                  </span></button>
                </div>

              </div>
              <div className="slide" >
                <div className='left-card'>
                  <p>XTREME FITNESS</p>
                  <h1>
                    BE STORNG
                  </h1>
                  <p>Best GYM & Fitness Center Build Your Health </p>
                  <button> Join us now<span className="material-symbols-outlined play-btn">
                    play_circle
                  </span></button>
                </div>

              </div>
              <div className="slide" >
                <div className='left-card'>
                  <p>XTREME FITNESS</p>
                  <h1>
                    NO PAIN No GAIN
                  </h1>
                  <p>Best GYM & Fitness Center Build Your Health </p>
                  <button> Join us now<span className="material-symbols-outlined play-btn">
                    play_circle
                  </span></button>
                </div>

              </div>


            </Slider>

          </div>
          <div className='right-card'>
            <p className='right-btn'><span className="material-symbols-outlined">
              play_circle
            </span></p>
          </div>
        </div>
      </div>
      <div className='why'>
        <div className='why-cover'>
          <div className='heading'>
            <p>
              WHY CHOOSE US
            </p>
            <h1>BUILD YOUR BEST BODY</h1>
          </div>
          <div className='services-card-container '>
            <div className='services-card'>
              <Slider {...settings_services}>
                <div className="card  " style={{ width: "15rem;" }}>

                  <img src={img1} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">Weight lifiting</h5>
                    <p className="card-text pb-4">Our integrated platform, comprising a website and mobile app, streamlines employee performance record management. </p>
                    <a href="#" className="service-btn btn-primary">Read More</a>
                  </div>
                </div>
                <div className="card " style={{ width: "15rem;" }}>
                  <img src={img2} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title ">FLEX MUSCLE</h5>
                    <p className="card-text pb-4">
                      Our expertise lies in extracting valuable insights from RailMadad Data, enabling informed decisions and actionable outcomes. </p>
                    <a href="#" className="service-btn btn-primary">Read More</a>
                  </div>
                </div>
                <div className="card " style={{ width: "15rem;" }}>
                  <img src={img3} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">POWERFUL VITAMINS</h5>
                    <p className="card-text pb-4">This integrated solution merges embedded systems and software to real-time monitor solar panel efficiency.</p>
                    <a href="#" className="service-btn btn-primary">Read More</a>
                  </div>
                </div>
                <div className="card " style={{ width: "15rem;" }}>
                  <img src={img4} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">ABOOMINAL SESSION</h5>
                    <p className="card-text pb-4">An IoT-driven railway enhancement system records and tallies Alarm Chain Pulling (ACP) instances, capturing GPS location, trigger time, and resultant train delay. </p>
                    <a href="#" className="service-btn btn-primary">Read More</a>
                  </div>
                </div>
                <div className="card " style={{ width: "15rem;" }}>
                  <img src={img5} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">CHEAF RATE</h5>
                    <p className="card-text pb-4">Revolutionizing train water management, our IoT solution provides real-time updates on water tank storage to upcoming stations.</p>
                    <a href="#" className="service-btn btn-primary">Read More</a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className='about-us'>
        <div className='about-cover'>
          <div className='left-about'>

          </div>
          <div className='right-about'>
            <p className='ab-p'>
              ABOUT US</p>
            <h1 className='h1'>WELCOME TO THE SHURU FITNESS</h1>
            <p>The hard days are the best because that’s when champions are made, so if you push through, you can push through anything.</p>
            <div className='highlight'>
              <div className='highlight-1'>
                <h1>
                  600K+
                </h1>
                <p>WORKING HOURS</p>
              </div>
              <div className='highlight-1'>
                <h1>700+</h1>
                <p>SUCCESS PROGRAM</p>
              </div>
              <div className='highlight-1'>
                <h1>
                  2,560+
                </h1>
                <p>HAPPY CLIENTS</p>
              </div>
              <div className='highlight-1'>
                <h1>
                  830+
                </h1>
                <p>PERFECT BODIES</p>
              </div>
            </div>
            <button className='join-btn'> Join us now<span className="material-symbols-outlined play-btn">
              play_circle
            </span></button>
          </div>
        </div>

      </div>
      <div className='why-price'>
        <div className='price-cover'>
          <div className='heading'>
            <p>
              PRICING TABLE
            </p>
            <h1 className='choose'>CHOOSE YOUR PRICING PLAN</h1>
          </div>
          <div className='price'>
            <div className='price-card'>
              <div className='image'>  </div>
                <div className='circle'>
                  <span>50  MONTHLY</span>
                  
                  </div>
                  
                  <p>BASIC GYM</p>
                  <ul className='basic'>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Unlimited club access</li>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Group attendance</li>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Gym visits</li>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Visits to the bath complex</li>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Gym, fight club</li>
                  </ul>
                <Link to='/payment' style={{color:"white",textDecoration:"none"}}>  <button className='price-btn'> Join us now<span className="material-symbols-outlined play-btn">
              play_circle
            </span></button></Link>
            
            </div>
            <div className='price-card'>
              <div className='image'>  </div>
                <div className='circle'>
                  <span>50 MONTHLY </span>
                 
                  </div>
                  
                  <p>BASIC GYM</p>
                  <ul className='basic'>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Unlimited club access</li>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Group attendance</li>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Gym visits</li>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Visits to the bath complex</li>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Gym, fight club</li>
                  </ul>
                  <Link to='/payment' style={{color:"white",textDecoration:"none"}}>  <button className='price-btn'> Join us now<span className="material-symbols-outlined play-btn">
              play_circle
            </span></button></Link>
            
            </div>
            <div className='price-card'>
              <div className='image'>  </div>
                <div className='circle'>
                  <span>50 MONTHLY </span>
                 
                  </div>
                  
                  <p>BASIC GYM</p>
                  <ul className='basic'>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Unlimited club access</li>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Group attendance</li>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Gym visits</li>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Visits to the bath complex</li>
                    <li className='basic-list'><span class="material-symbols-outlined">
                      done
                    </span>Gym, fight club</li>
                  </ul>
                  <Link to='/payment' style={{color:"white",textDecoration:"none"}}>  <button className='price-btn'> Join us now<span className="material-symbols-outlined play-btn">
              play_circle
            </span></button></Link>
            
            </div>
          </div>
        </div>
      </div>
      <Fotter/>
    </div >
  )
}

export default Homepage
