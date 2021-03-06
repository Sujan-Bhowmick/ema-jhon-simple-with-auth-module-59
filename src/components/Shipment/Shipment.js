import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();
    
    const handleNameBlur = event => {
        setName(event.target.value);
    
    }
  
    const handleAddressBlur = event => {
        setAddress(event.target.value);
        // setPassword('');
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
        // setConfirmPassword('');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, phone, address}
        console.log(shipping);
       
    }
    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Shipping Information</h2>
            <form  onSubmit={ handleCreateUser}>
                
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                </div>
                <p style={{color: "red"}}>{error}</p>
                <div className="input-group">
                    <input  className='form-submit' type="submit" value="Add Shipping" />
                </div>
            </form>
           
        </div>
    </div>
    );
};

export default Shipment;