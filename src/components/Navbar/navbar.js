import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.webp";



export default function Navbar() {

    const navigate = useNavigate();
    return (
        <div class="flex justify-between m-8">

            <div class="flex flex-row">
                <span>
                    <img src={logo} alt='logo' class="w-16 h-16 -mt-2 rounded-full"/>
                </span>
                <span class="text-2xl font-semibold mx-6">
                    PhoenixGuildDao
                </span>
            </div>
            <div class="flex">
                    <button class="text-white mx-6 text-2xl font-semibold uppercase" onClick={()=>navigate('/blog')}>
                        Blogs
                    </button>
                    <button class="text-white mx-6 text-2xl font-semibold uppercase" onClick={()=>navigate('/Perks')}>
                        Perks
                    </button>
                    <button class="text-white mx-6 text-2xl font-semibold uppercase" onClick={()=>navigate('/blog')}>
                        NFT Staking
                    </button>
            </div>
        </div>

    );
}