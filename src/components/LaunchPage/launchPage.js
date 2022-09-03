import React, { useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import GetAccount from "../../hooks/GetAccount";
import Lights from "../../assets/img_lights.jpeg";
import logo from "../../assets/logo.webp";


export default function LaunchPage() {

  const account = GetAccount()
  return (

    <div class="flex">
      <div class="flex flex-col flex-initial w-3/5 m-8 ml-14 ">
        <div class="flex flex-row  mb-44">
          <span>
            <img src={logo} alt='logo' class="w-16 h-16 mr-6 -mt-4 rounded-full" />
          </span>
          <span class="text-2xl font-semibold">
            PhoenixGuildDao
          </span>
        </div>
        <div>
          <h1 class="text-6xl font-extrabold">
            PhoneixGuildDAO
          </h1>
          <p class="w-4/6 text-3xl mt-4 font-semibold">Earn the most valuable rewards for your holdings
            at PhoenixGuildDAO.</p>
        </div>
        <div>
          <div class="mt-10">
            <ConnectButton label="Get Started" />
          </div>
        </div>
      </div>
      <div class="flex-initial w-3/6 h-screen">
        <img class="w-full h-full" src={Lights} alt="lights" />
      </div>
    </div>


  );
}