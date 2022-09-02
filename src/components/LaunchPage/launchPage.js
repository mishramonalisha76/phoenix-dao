import React, { useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import GetAccount from "../../hooks/GetAccount";
import Lights from "../../assets/img_lights.jpeg";


export default function LaunchPage() {

  const account = GetAccount()
  return (

    <div class="flex">
      <div class="flex flex-col flex-initial w-3/5 m-8">
        <div class="flex  mb-44">
          <span>
            LOGO
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
      <div class="flex-initial w-2/5">
        <img class="w-full h-full" src={Lights} alt="lights" />
      </div>
    </div>


  );
}