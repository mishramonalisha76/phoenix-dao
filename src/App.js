import logo from './logo.svg';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import GetAccount from './hooks/GetAccount';
import GetContract from './hooks/GetContract';
import { ImageUpload } from 'react-ipfs-uploader'
import { useState } from 'react';
import { FileUpload } from 'react-ipfs-uploader'
import LaunchPage from './components/LaunchPage/launchPage';
import Navbar from './components/Navbar/navbar';
import Dashboard from './components/Dashboard/dashboard';
import Perks from './components/Perks/Perks';
import Blog from './components/Blog/blog';


function App() {
  const account = GetAccount()
//   const location = useLocation();
  const contract = GetContract('0x5FbDB2315678afecb367f032d93F642f64180aa3', [])
  const [imageUrl, setImageUrl] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  console.log(window.location.pathname)
 
  return (
    <>

   
    {/* <div className="text-3xl font-bold underline"> */}
    {/* <label> {account} </label>
    */}

          {/* <ConnectButton /> */}
         {window.location.pathname !== "/"  && <Navbar/>}
         {/* <Navbar/> */}
     
              <Routes>
                  <Route path="/" element={<LaunchPage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/Perks" element={<Perks />} />

                  <Route path="/blog" element={<Blog />} />
              </Routes>
      
    {/* </div> */}
   
    </>
  )
}

export default App;
