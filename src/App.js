import logo from './logo.svg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import GetAccount from './hooks/GetAccount';
import GetContract from './hooks/GetContract';
import { ImageUpload } from 'react-ipfs-uploader'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FileUpload } from 'react-ipfs-uploader'
import LaunchPage from './components/LaunchPage/launchPage';
import Navbar from './components/Navbar/navbar';
import Dashboard from './components/Dashboard/dashboard';
import Perks from './components/Perks/Perks';
import Blog from './components/Blog/blog';


function App() {
    const contract = GetContract('0x5FbDB2315678afecb367f032d93F642f64180aa3', [])
    const [imageUrl, setImageUrl] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    console.log(window.location.pathname)
    const navigate = useNavigate();
    const { address, isConnected } = GetAccount();
    const pvtkey ="302e020100300506032b657004220420441314598020314b6c62b765dadb1dbf89b5a97b5cf245297b632c3d3a88a4ce";
    const pubkey = "302a300506032b6570032100aa0e53a7be2aa2b459aee308e993e90621ef08af8e325a35d28decd9d443e723";
    const acct= "0.0.48153436";
    
    useEffect(() => {
        if(isConnected)
        {
          navigate('/dashboard');
        }
        if(!isConnected)
        {
          navigate('/');
        }
      

    }, [isConnected]);

    return (
        <>


            {/* <div className="text-3xl font-bold underline"> */}
            {/* <label> {account} </label>
    */}

            {/* <ConnectButton /> */}
            {window.location.pathname !== "/" && <Navbar />}
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
