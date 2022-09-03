import React, { useState } from "react";




export default function Navbar() {

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
                <button class="text-white mx-6 text-2xl font-semibold uppercase">
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