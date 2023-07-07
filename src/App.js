import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Project/>}/>
    </Routes>
    </>
  );
}

export default App;
