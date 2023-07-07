import React from 'react'
import Navbar from '../Components/Navbar'
import Cart from '../Components/Cart';
import '../style/Home.css';
import Todoapp from '../Components/Todoapp';
import Api from '../Components/Api';
const Home = () => {
  return (
    <>
    <Navbar/>
    {/* <div className="main-container">
      <h1>Welcome to Assignment: React Application Development</h1>
      <h2>Abhishek Kumar</h2>
      <h3>Highly motivated and enthusiastic web developer with a strong foundation in HTML, CSS, and JavaScript seeking an entry-level position to utilize and
further develop my technical skills. Committed to delivering high-quality web solutions while continuously learning and staying up-to-date with
industry trends and best practices</h3>
    </div> */}
    <div className="introduction-container">
      <h1 className="welcome-heading">Welcome to My Introduction Page</h1>
      <div className="intro-content">
        <img
          className="profile-picture"
          src="https://dummyimage.com/200x200/000/0011ff.png&text=AB"
          alt="Abhishek Kumar"
        />
        <div className="intro-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Abhishek Kumar, a frontend developer with 1 years of experience working primarily with React. I have a passion for crafting user-friendly and visually appealing web applications.
          </p>
          <p>
            Throughout my career, I have developed a solid understanding of modern web technologies and best practices, allowing me to create efficient and maintainable code. I enjoy working in a collaborative environment and thrive on solving complex problems.
          </p>
          <p>
            My expertise lies in front-end development, including HTML, CSS, JavaScript, and various frontend frameworks. React has been my go-to library for building scalable and interactive user interfaces, and I constantly stay updated with the latest React ecosystem trends and advancements.
          </p>
          <p>
            In addition to technical skills, I also possess excellent communication and teamwork abilities. I have experience working in agile development teams, collaborating with designers, backend developers, and stakeholders to deliver high-quality products.
          </p>
          <p>
            I'm excited about the opportunity to contribute my skills and knowledge to create innovative and user-centric web applications. Feel free to explore my portfolio and get in touch to discuss potential collaboration or employment opportunities.
          </p>
        </div>
      </div>
    </div>
    <Cart/>
    <Api/>
    <Todoapp/>
    </>
  )
}

export default Home