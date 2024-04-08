import React from 'react'
import './userside.css'

import Sidebar from './Sidebar';
import { useState } from 'react'
const Usernav = ({toggleSidebar }) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar);
        toggleSidebar(); 
    };
    return (
        <div>
            <div className='out-dash'>
                <div className='user-nav'>
                    <div className={showSidebar ? 'side-off' : 'nav-left-side'}>
                        <Sidebar />
                    </div>
                    <div className={showSidebar ? 'nav-right' : 'nav-right-side'}>
                        
                        <div className='intro-name'>
                            <div className='menu'>
                              <span class="material-symbols-outlined " onClick={handleToggleSidebar}>
                            menu
                        </span>   
                            </div>
                           WELCOME Shubham, Good Morning
                        </div>
                        <div className='all-equipment'>
                            <span className='nav-search'>
                                <input type="text" />
                            </span>
                            <span className='nav-search'>
                                <span class="material-symbols-outlined">
                                    notifications
                                </span>
                            </span>
                            <span className='nav-search'>
                                <span class="material-symbols-outlined">
                                    chat
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usernav
