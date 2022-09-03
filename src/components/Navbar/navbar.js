import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




export default function Navbar() {

    const navigate = useNavigate();
    return (
        <div class="flex justify-between m-6">

            <div>
                <span>
                    LOGO
                </span>
                <span class="text-2xl font-semibold mx-6">
                    PhoenixGuildDao
                </span>
            </div>
            <div class="flex">
                    <button class="text-white mx-6 text-2xl font-semibold uppercase" onClick={()=>navigate('/blog')}>
                        Blogs
                    </button>
                    <button class="text-white mx-6 text-2xl font-semibold uppercase">
                        Perks
                    </button>
                    <button class="text-white mx-6 text-2xl font-semibold uppercase">
                        NFT Staking
                    </button>
            </div>
        </div>

    );
}