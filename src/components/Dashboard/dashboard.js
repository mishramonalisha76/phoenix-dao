import React, { useState } from "react";
import { ImageUpload } from 'react-ipfs-uploader'
import { FileUpload } from 'react-ipfs-uploader'



export default function Dashboard() {
     
  const [imageUrl, setImageUrl] = useState('')
  const [fileUrl, setFileUrl] = useState('')

    const communityData = [
        [{
            name: "Startnet",
            membersno: "3",
            date: "24/03/2022",
            token: "STR",

        },
        {
            nftName: "Stark NFT",
            eventName: "Stak Event",
            id: "117",
        }
        ],
        [{
            name: "Hedera",
            membersno: "4",
            date: "26/03/2022",
            token: "HED",

        },
        {
            nftName: "Stark NFT",
            eventName: "Stak Event",
            id: "117",
        }],
        [{
            name: "Chingar7",
            membersno: "3",
            date: "29/03/2022",
            token: "GARI",

        },
        {
            nftName: "Stark NFT",
            eventName: "Stak Event",
            id: "117",
        }],
    ];

    return (
        <div class="flex flex-col  mx-24 my-14">

            <h1 class="text-6xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-white">
                {`> Dashboard`}
            </h1>
            <h4 class="my-4">Reputation Score: 3</h4>
            <div class="grid grid-cols-2 gap-16 mt-10">
                {communityData.map(data => (
                    <>
                        <div class="bg-slate-600 p-6 shadow-md shadow-white">
                            <h3 class="text-4xl font-semibold uppercase">
                                {data[0].name}
                            </h3>
                            
                            <p class="text-2xl font-semibold">
                                {`No. of Memebers: ${data[0].membersno}`}
                            </p>
                            <span class="text-1xl font-bold">
                                {`Date: ${data[0].date}`}
                            </span>
                            <span class="ml-14 text-1xl font-bold"> 
                                {`Gov. Token: ${data[0].token}`}
                            </span>
                        </div>
                        <div class="bg-slate-600 p-6 shadow-md shadow-white">
                        <h3 class="text-4xl font-semibold uppercase">
                                {data[1].nftName}
                            </h3>
                            <p class="text-2xl font-semibold">
                                {`Event name: ${data[1].eventName}`}
                            </p>
                            <p class="text-1xl font-bold">
                                {`NFT  #${data[1].eventName}`}
                            </p>
                        </div>
                        {/* <div>
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
        </div> */}
                    </>
                ))}
            </div>
        </div>

    );
}