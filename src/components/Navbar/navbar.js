import React, { useState } from "react";




export default function Navbar() {

    return (
        <div class="flex">

            <div class=" mb-44">
                <span>
                    LOGO
                </span>
                <span class="text-2xl font-semibold">
                    PhoenixGuildDao
                </span>
            </div>
            <div  >
                <button>
                    Blogs
                </button>
                <button>
                    Perks
                </button>
                <button>
                    NFT Staking
                </button>
            </div>
        </div>

    );
}