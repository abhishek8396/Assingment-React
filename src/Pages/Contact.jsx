import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import '../style/Contact.css';
const Contact = () => {
  //use state to store the information
  const[name, setName]=useState('')
  const[email, setEmail]=useState('')
  const[conatct, setContact]=useState('')
  const[message, setMessage]=useState('')

  //manage the form default behaviour 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Perform form validation
    if (!name || !email || !conatct || !message) {
      alert('Please fill in all fields');
      return;
    }
  
    // Create a payload object with form data
    const payload = {
      name,
      email,
      conatct,
      message,
    };
  
    // For demonstration purposes, we'll simply log the payload to the console
    console.log(payload);
  
    // Clear form fields after submission
    setName('');
    setEmail('');
    setContact('');
    setMessage('');
  
    // Display a success message
    alert(`Thank You ${name}\nForm submitted successfully`);
  };
  
  return (
   <>
   <Navbar/>
   <div className="contact">
    <h1>Contact Form</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type="text" name="name" id="name" value={name} placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/>
      <label htmlFor='email'>Email:</label>
      <input type="email" name="email" id="email" value={email} placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
      <label htmlFor='contact'>Contact:</label>
      <input type="number" name="contact" id="contact" value={conatct} placeholder='Enter Your Contact' onChange={(e)=>setContact(e.target.value)}/>
      <label htmlFor='message'>Message:</label>
      <textarea type="text" name="message" id="message" value={message}  placeholder='Enter Your Message' onChange={(e)=>setMessage(e.target.value)}></textarea>
      <button type='submit'>Submit</button>
    </form>
   </div>
   </>
  )
}

export default Contact