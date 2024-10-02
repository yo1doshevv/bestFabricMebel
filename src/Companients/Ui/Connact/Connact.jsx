import React, { useState } from 'react';
import "./Connact.scss";
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Connact = () => {

    const [formDataa, setFormData] = useState({
      name: '',
        email: "",
        text: ""
    });

    const handleValueChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    };

    // const handleSubmit = (e)=>{
    //     e.preve
    // }

    console.log(handleValueChange.name);
    
    
  return (
    <div className='con'>
        <div className="con_wrapper">
            <div className="con_select">
                <div className="con_left">
                    <h2>Contact</h2>
                    <input 
                      onChange={handleValueChange} 
                      type="text" 
                      name="name" 
                      value={formDataa.name} 
                      onChangeCapture={handleValueChange}
                      placeholder='Name*' 
                    />
                    <input 
                      onChange={handleValueChange} 
                      type="email" 
                      name="email" 
                      value={formDataa.email} 
                      placeholder='Email*' 
                    />
                    <textarea 
                      onChange={handleValueChange} 
                      name="text" 
                      value={formDataa.text} 
                      placeholder='Your Review*'>
                    </textarea>
                    <Button className='con_btn' variant="contained" size='small' color="error">
                      Send
                    </Button>
                </div>
                <div className="con_right">
                    <iframe 
                      className="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3497342655493!2d144.96143641586043!3d-37.817209979751585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0a9e7cb3%3A0xd80e45f738c7a5c5!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1634231350141!5m2!1sen!2sau" 
                      allowFullScreen="" 
                      loading="lazy">
                    </iframe>
                </div>
            </div>
            <div className="con_contact">
                <div className="con_email">
                    <EmailIcon color='error' fontSize='large'/>
                    <a href="mailto:info@bnpfabric.uz">Email: info@bnpfabric.uz</a>
                </div>
                <div className="con_phon">
                    <LocalPhoneIcon color='error' fontSize='large'/>
                    {/* <h2>Phone: +998910050913</h2> */}
                    <a href="tel:+998910050913">Phone: +998940515560</a>
                </div>
                <div className="con_adres">
                    <FmdGoodIcon color='error' fontSize='large'/>
                    <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3497342655493!2d144.96143641586043!3d-37.817209979751585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0a9e7cb3%3A0xd80e45f738c7a5c5!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1634231350141!5m2!1sen!2sau">Address: Bukhara, st. Alpomysh 80</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Connact;
