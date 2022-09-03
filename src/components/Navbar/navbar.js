import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.webp";



export default function Navbar() {

    const navigate = useNavigate();
    return (
        <div class="flex justify-between m-6">

            <div>
                <span>
                    <img src={logo} alt='logo' />
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