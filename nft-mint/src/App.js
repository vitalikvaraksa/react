import React, { useEffect, useState } from 'react';
import { ethers, BigNumber } from 'ethers'
import { notification } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import NavBar from './components/NavBar';
import Minter from './components/Minter';
import { connectWallet, getCurrentWalletConnected } from './util/interact';
import { contractAddress } from './constants/address';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

export const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contractABI = require("./constants/contract.json")
  const contract = new ethers.Contract(contractAddress, contractABI, signer)
  return contract
}

function App() {

  const [walletAddress, setWalletAddress] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setMintLoading] = useState(false)
  const [dataLoading, setDataLoading] = useState(false)
  const [totalSupply, setTotalSupply] = useState(0)
  const [saleIsActive, setSaleIsActive] = useState(false)
  const [presaleIsActive, setPresaleIsActive] = useState(false)
  const [maxTokens, setMaxTokens] = useState(0)
  const [publicsalePrice, setPublicsalePrice] = useState(0)
  const [presalePrice, setPresalePrice] = useState(0)
  const [mintedIds, setMintedIds] = useState([])
  const [ownerAddr, setOwnerAddr] = useState(null)
  const [superUser, setSuperUser] = useState(false)
  const notify = () => toast.info(status, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  
  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected()
    setWalletAddress(address)
    setStatus(status)
    window.ethereum.on('accountsChanged', (accounts) => {
      setWalletAddress(accounts[0])
    })

    if (window.ethereum.networkVersion != 137 && address) {
      alert('error', 'Error', 'Please change Network to Polygon')
      setDataLoading(true)
    }

    window.ethereum.on('networkChanged', (networkId) => {
      if (networkId != 137){
        alert('error', 'Error', 'Please change Network to Polygon')
        setDataLoading(true)
      } else {
        console.log(networkId)
        setDataLoading(false)
        setWalletAddress(address)
      }
    })
  }, [])

  useEffect( async () => {
    if ( !loading && walletAddress ) {
      setDataLoading(true)
      const contract = getContract()
      const newTotalSupply = await contract.totalSupply()
      setTotalSupply(BigNumber.from(newTotalSupply).toString())
      const newSaleIsActive = await contract.saleIsActive()
      setSaleIsActive(newSaleIsActive)
      const newPresaleIsActive = await contract.preSaleIsActive()
      setPresaleIsActive(newPresaleIsActive)
      const newMaxTokens = await contract.MAX_TOKENS()
      setMaxTokens(BigNumber.from(newMaxTokens).toString())
      const newPublicsalePrice = await contract.tokenPublicsalePrice()
      setPublicsalePrice((BigNumber.from(newPublicsalePrice) / 10**18).toString())
      const newPresalePrice = await contract.tokenPresalePrice()
      setPresalePrice((BigNumber.from(newPresalePrice) / 10**18).toString())
      const newMintedIds = await contract.occupiedList()
      setMintedIds(newMintedIds)
      const newOwnerAddr = await contract.owner()
      setOwnerAddr(newOwnerAddr)
      const newSuperUser = await contract.checkAddress(walletAddress)
      setSuperUser(newSuperUser)
      setDataLoading(false)
    }
  }, [loading, walletAddress])

  useEffect(() => {
    if (status) {
      notify()
      setStatus(null)
    }
  }, [status])

  const onClickConnectWallet = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWalletAddress(walletResponse.address);
  }

  const onClickDisconnectWallet = async () => {
    setWalletAddress(null)
  }
  
  const alert = (type, message, description) => {
    notification[type]({
        message, description, duration: 5,
    })
}


  return (
    <div className="App related">

      <NavBar 
        onClickDisconnectWallet={onClickDisconnectWallet} 
        onClickConnectWallet={onClickConnectWallet} 
        walletAddress={walletAddress} 
        alert={alert}
      />
      <Minter 
        saleIsActive={saleIsActive} 
        loading={loading} 
        walletAddress={walletAddress} 
        totalSupply={totalSupply} 
        setStatus={setStatus} 
        setMintLoading={setMintLoading} 
        publicsalePrice={publicsalePrice}
        presaleIsActive={presaleIsActive}
        presalePrice={presalePrice}
        maxTokens={maxTokens}
        mintedIds={mintedIds}
        ownerAddr={ownerAddr}
        setPresaleIsActive={setPresaleIsActive}
        setSaleIsActive={setSaleIsActive}
        dataLoading={dataLoading}
        alert={alert}
        superUser={superUser}
      />
    </div>
  );
}

export default App;
