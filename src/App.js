import logo from './logo.svg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { ethers } from "ethers";

import gov from "./abi/gov";
import nft from "./abi/nft";
import GetAccount from './hooks/GetAccount';
import GetContract from './hooks/GetContract';
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
    const govADD = "0xfD595Dc920c1DACef39fA3ba5e20D8D9347B8B15";
    const nftADD = "0x5001F50113744b626becEF54450c431e74Aa2df8";
    let provider,govContract,nftContract;
    // const biconomy = new Biconomy(<web3 provider>,{apiKey: <API Key>, debug: true});
    // let ethersProvider = new ethers.providers.Web3Provider(biconomy);

    const initialiseContract = () => {
        provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        govContract = new ethers.Contract(govADD, gov, provider);
        nftContract = new ethers.Contract(nftADD, nft, provider);
    }
    
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
                <Route path="/Perks" element={<Perks  govContract= {govContract} provider={provider}/>} />

                <Route path="/blog" element={<Blog />} />
            </Routes>

            {/* </div> */}

        </>
    )
}

export default App;
