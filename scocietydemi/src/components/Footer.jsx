import React from 'react'
import Logo from '../project_material/logovecto.png';
const Footer = () => {
  return (
    <div>
      <div className='fotter'>
        <div className='fotter-cover'>
          <div className='company'>
            <div className='ftr-logo'>
              <img src={Logo} alt="logo" />
            </div>
            <ul className="footer-social ">
              <li className='fotter-list'><i class="fa-brands fa-whatsapp media"></i></li>
              <li className='fotter-list'><i class="fa-brands fa-facebook media"></i></li>
              <li className='fotter-list'><i class="fa-brands fa-linkedin media"></i></li>
              <li className='fotter-list'><i class="fa-brands fa-instagram media"></i></li>
            </ul>
          </div>
          <div className='time'>
            <h2>OPENING HOURS
            </h2>
            <div className='detail-time'>
              <p className='day'>
                Monday – Saturday
              </p>
              <p className='timing'>
                12.00 – 14.45
              </p>
            </div>
            <div className='detail-time'>
              <p className='day'>
                Monday – Saturday
              </p>
              <p className='timing'>
                12.00 – 14.45
              </p>
            </div>
            <div className='detail-time'>
              <p className='day'>
                Monday – Saturday
              </p>
              <p className='timing'>
                12.00 – 14.45
              </p>
            </div>
          </div>
          <div className='quick-link'>
            <h2>QUICK-LINK            </h2>
            <ul className='link'>
              <li className='ftr-link'><span class="material-symbols-outlined">
                arrow_forward_ios
              </span>About</li>
              <li className='ftr-link'><span class="material-symbols-outlined">
                arrow_forward_ios
              </span>Services</li>
              <li className='ftr-link'><span class="material-symbols-outlined">
                arrow_forward_ios
              </span>workout</li>
              <li className='ftr-link'><span class="material-symbols-outlined">
                arrow_forward_ios
              </span> Contact</li>

            </ul>
          </div>
          <div className='contactus'>
            <h2>Contact           </h2>
            <div className='detail-time'>
              <p className='day'>
                Address:
              </p>
              <p className='timing'>
                mimit malout punjab 8545267
              </p>
            </div>
            <div className='detail-time'>
              <p className='day'>
                Email:

              </p>
              <p className='timing'>
                shubhamkumargarg63@gmail.com
              </p>
            </div>
            <div className='detail-time'>
              <p className='day'>
                Phone:

              </p>
              <p className='timing'>
                776968284
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
