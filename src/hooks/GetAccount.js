import React from 'react';
import { useAccount } from 'wagmi';

const GetAccount = () => {
    const { address,isConnected, isConnecting, isDisconnected } = useAccount()

  if (isConnecting) return <div>Connecting…</div>
  if (isDisconnected) return <div>Disconnected</div>
  return {address:address,isConnected:isConnected};
}
 
export default GetAccount;