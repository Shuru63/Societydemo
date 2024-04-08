import React from 'react'
import './auth.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { useState } from 'react';
import axios from 'axios'
import {
    CModal,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CButton,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Register = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [emailInput, setEmail] = useState('');
    const [phoneInput, setPhone] = useState('');
    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('green');
    const navigate=useNavigate();
    const handleErrorChange = (e) => {
        setVisible(true);
        setMessage(e);
        setMessageColor('red');
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const validateForm = () => {
            if (!firstName.trim() || !lastName.trim() || !phoneInput.trim() || !password.trim() || !confirmPassword.trim()) {
                handleErrorChange('All fields are required.');
                return false;
            }
            if (!/^[a-zA-Z]*$/.test(firstName.trim()) || !/^[a-zA-Z]*$/.test(lastName.trim())) {
                handleErrorChange('First name and last name should contain only alphabets.');
                return false;
            }
            if (phoneInput.length !== 10) {
                handleErrorChange('Phone number must be 10 digits.');
                return false;
            }
            if (password.length < 6) {
                handleErrorChange('Password must be at least 6 characters long.');
                return false;
            }
            if (password !== confirmPassword) {
                handleErrorChange('Passwords do not match.');
                return false;
            }
            return true;
        };

        if (validateForm()) {
            axios.post('http://localhost:8000/api/createuser', {
                fname: firstName,
                mname: middleName,
                lname: lastName,
                mobile: phoneInput,
                password: password,
                ConfirmPassword: confirmPassword
            })
            .then(result => {
                console.log(result);
                console.log('Registration successful');
                handleErrorChange('Registration successful');
                navigate('/login');
            })
            .catch(err => {
                console.error(err);
                const errorMessage = err.response ? err.response.data.error : 'An error occurred';
                handleErrorChange(errorMessage);
            });
        }
    };


    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            return;
        }
        setPasswordType('password');
    };
    return (
        <div>
            <CModal
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="LiveDemoExampleLabel"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">Alert</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p style={{ color: messageColor }}>{message}</p>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        Close
                    </CButton>
                </CModalFooter>
            </CModal>

            <div className='register-container'>
                <div className='log-in-card'>
                    <div className='from-google'>
                    Society App
                    </div>
                    <div className='cover'>

                        <div className='log-in-form'>

                            <form className='form' action="/" method="post" onSubmit={handleSubmit}>

                                <div className="form-input">
                                    <label htmlFor="f_name">First Name *</label>
                                    <input
                                        type="text"
                                        name="f_name"
                                        id="f_name"
                                        placeholder="(only alphabets)"
                                        required
                                        onChange={(e) => setFirstName(e.target.value.trim())}
                                    />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="m_name">Middle Name</label>
                                    <input
                                        type="text"
                                        name="m_name"
                                        id="m_name"
                                        placeholder="(only alphabets)"
                                        onChange={(e) => setMiddleName(e.target.value.trim())}
                                    />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="l_name">Last Name *</label>
                                    <input
                                        type="text"
                                        name="l_name"
                                        id="l_name"
                                        placeholder="(only alphabets)"
                                        required
                                        onChange={(e) => setLastName(e.target.value.trim())}
                                    />
                                </div>

                                <div className="form-input p-0" style={{ margin: '0%' }}>
                                    <label htmlFor="phone">Mobile *</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="(eg: 9876543210)"
                                        maxLength="10"
                                        required
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                <div className="form-input">
                                    <label htmlFor="password">Password *</label>
                                    <input
                                        type={passwordType}
                                        name="password"
                                        id="password"
                                        placeholder="Enter Your Password"
                                        required
                                        onChange={(e) => setPassword(e.target.value.trim())}
                                    />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="re_password">Confirm Password *</label>
                                    <input
                                        type={passwordType}
                                        name="re_password"
                                        id="re_password"
                                        placeholder="Retype Your Password"
                                        required
                                        onChange={(e) => setConfirmPassword(e.target.value.trim())}
                                    />
                                </div>
                                <br />
                                <div className="show-password ">
                                    <div>
                                        <input
                                            className="my-1"
                                            type="checkbox"
                                            onClick={togglePassword}

                                        />
                                        Show Password
                                    </div>
                                </div>
                                <div className="form-btn">
                                    <button type="submit">Register</button>
                                </div>
                                <div className='register'>
                                    <Link to='/' > <p>Already Have a Account</p></Link>
                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div></div>
        </div>
    )

}

export default Register
