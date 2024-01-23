
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Contact from './Pages/Contact';
import { analytics } from './Helper/index';
import { logEvent } from 'firebase/analytics';
import Chat from './Pages/Chat';

function App() {
 
if (analytics){
  logEvent(analytics,'Init...')
}
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/chat" element={<Chat/>}/>
        
        
  
      </Routes>
      <Footer/>


      
      
    </div>
  )
}

export default App
