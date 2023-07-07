import React from 'react';
import Navbar from '../Components/Navbar';
import '../style/About.css';

const About = () => {
  const handleNavigateToGitHub = () => {
    window.open('https://github.com/anhishek1289', '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="containers">
        <h1>About Project Information</h1>
        <h2>
          E-Commerce App -
          <span>
            <h3>
              describtion: "E-commerce platform that enables businesses to create, manage, and scale their online stores. It provides a robust set of features including product listings, shopping cart functionality, secure payment processing, order management, and customer engagement tools and Admin Panel for Admin to Add product in cart and make the product state management.",
            </h3>
          </span>
        </h2>
        <h2>NetFlix Clone- <span><h3>Its a Complete MERN Project.</h3></span></h2>
        <h2>Doctor Appointment App-<span><h3>It is a Complete MongoDB Express JS, React JS, and Node JS Project and Fully Responsive.</h3></span></h2>
        <h2>Portfolio-<span><h3>It is a Complete React JS Project and Fully Responsive.</h3></span></h2>
        <h2>Blog Project-<span><h3>It is a Complete MERN Project and Fully Responsive.</h3></span></h2>
        <h2>TODO App-<span><h3>It a complete React Project and also made with the help of HTML, CSS, and JavaScript also.</h3></span></h2>
        <h2>Weather App-<span><h3>It is a Complete JavaScript HTML and CSS Project and Fully Responsive.</h3></span></h2>

        <div className="button-container">
          <button className="button" onClick={handleNavigateToGitHub}>
            Visit GitHub
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
