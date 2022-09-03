import React, { useEffect, useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import GetAccount from "../../hooks/GetAccount";
import Lights from "../../assets/img_lights.jpeg";
import logo from "../../assets/logo.webp";
import community from "../../assets/community.png";


export default function LaunchPage() {

  return (

    <div class="flex items-center justify-evenly" >
      <div class="flex flex-col flex-initial w-3/5 m-8 ml-14 ">
        <div class="flex flex-row  mb-44 -mt-14">
          <span>
            <img src={logo} alt='logo' class="w-16 h-16 mr-6 -mt-4 rounded-full" />
          </span>
          <span class="text-2xl font-semibold">
            PhoenixGuildDao
          </span>
        </div>
        <div class="ml-8 -mt-8" >
          <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-white">
            PhoneixGuildDAO
          </h1>
          <p class="w-4/6 text-3xl mt-4 font-semibold">Earn the most valuable rewards for your holdings
            at PhoenixGuildDAO.</p>
        </div>
        <div class="mt-10 ml-8">
          <div >
            <ConnectButton label="Get Started !" />
          </div>
        </div>
      </div>
      <div class="flex-initial mt-56 h-3/4 mr-20">
        <img class="w-full h-full animate-bounce animation-delay-200" src={community} alt="lights" />
      </div>
    </div>


  );
}