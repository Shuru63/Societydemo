import React from 'react'
import './userside.css'
import Logo from '../../project_material/logovecto.png';
import { useState } from 'react';
import {
    CModal,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('green');   
     const navigate=useNavigate();
    const Logout = () => {
        setVisible(true);
        setMessageColor('red');
    };
    const confirmlogout = () => {
        setVisible(false);
        navigate('/login')
      
    };
    return (
        <div>
             <CModal
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="LiveDemoExampleLabel"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">YOU WANT CONFIRM LOGOUT</CModalTitle>
                </CModalHeader>
                <CModalFooter>
                <CButton color="primary" onClick={confirmlogout}>
                      YES
                    </CButton>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        NO
                    </CButton>
                </CModalFooter>
            </CModal>
            <div className='side-bar'>
              
                    <div className='nav-log'>
                        <img src={Logo} alt="" />
                    </div>

                    <div className='user-list'>
                        <ul className='user-ul-list'>
                            <li className='user-li'><span class="material-symbols-outlined">
                                speed
                            </span> <p>Dashboard</p></li>
                            <li className='user-li'><span class="material-symbols-outlined">
                                heart_plus
                            </span><p>Fitness</p></li>
                            <li className='user-li'><span class="material-symbols-outlined">
                                fitness_center
                            </span><p>workout</p></li>
                            <li className='user-li'><span class="material-symbols-outlined">
                                directions_run
                            </span><p>Outdoor Activity</p></li>
                            <li className='user-li'><span class="material-symbols-outlined">
                                settings
                            </span><p>Setting</p></li>
                            <li className='user-li' onClick={Logout}><span class="material-symbols-outlined">
                                logout
                            </span><p>Log out</p></li>
                        </ul>
                    </div>
          
            </div>
        </div>
    )
}

export default Sidebar
