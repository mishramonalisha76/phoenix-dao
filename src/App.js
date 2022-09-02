import logo from './logo.svg';
import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import GetAccount from './hooks/GetAccount';
import GetContract from './hooks/GetContract';
import { ImageUpload } from 'react-ipfs-uploader'
import { useState } from 'react';
import { FileUpload } from 'react-ipfs-uploader'

function App() {
  const account = GetAccount()
  const contract = GetContract('0x5FbDB2315678afecb367f032d93F642f64180aa3', [])
  const [imageUrl, setImageUrl] = useState('')
  const [fileUrl, setFileUrl] = useState('')
 
  return (
    <>

   
    <div className="text-3xl font-bold underline">
    <label> {account} </label>
   

    <ConnectButton />;
    </div>
    <div>
            <ImageUpload setUrl={setImageUrl} />
            ImageUrl : <a
                href={imageUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {imageUrl}
            </a>
        </div>


        <div>
            <FileUpload setUrl={setFileUrl} />
            FileUrl : <a
                href={fileUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {fileUrl}
            </a>
        </div>
    </>
  )
}

export default App;
