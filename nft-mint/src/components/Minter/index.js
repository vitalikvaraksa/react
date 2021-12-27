import React, { useEffect, useState } from 'react'
import { Slider, Button, InputNumber, Row, Col, Select } from 'antd'
import {  BigNumber } from 'ethers'
import Switch from 'react-switch'
import leftImage from '../../assets/img/left.png';
import rightImage from '../../assets/img/right.png';


import './index.css'
import { getContract } from '../../App';

const { Option } = Select

const Minter = (props) => {
    const { 
        loading, totalSupply, saleIsActive, dataLoading,
        presaleIsActive, publicsalePrice, presalePrice, 
        maxTokens, mintedIds, ownerAddr, 
        walletAddress, setStatus, setMintLoading, setPresaleIsActive, setSaleIsActive, alert, superUser } = props
    const [tokenPrice, setTokenPrice] = useState(0)
    const [numberOfCreeptoz, setNumberOfCreeptoz] = useState(0)
    const [mintMax, setMintMax] = useState(0)
    const [options, setOptions] = useState([])
    const [selectSpecial, setSelectSpecial] = useState(false)
    const [specialValue, setSpecialValue] = useState([])

    useEffect(() => {
        let newtokenPrice
        if (saleIsActive) newtokenPrice = publicsalePrice
        if (presaleIsActive && !saleIsActive) newtokenPrice = presalePrice
        setTokenPrice(newtokenPrice)
        if (walletAddress && ownerAddr) {
            const newMintMax = walletAddress.toLowerCase() === ownerAddr.toLowerCase() ? (maxTokens - mintedIds.length) > 100 ? 100 : (maxTokens - mintedIds.length) : 2
            setMintMax(newMintMax)
            setNumberOfCreeptoz(newMintMax)
            walletAddress.toLowerCase() === ownerAddr.toLowerCase() && setTokenPrice(0)
        }
        const children = [];
        const ids = mintedIds.map(id => parseInt(id, 10))
        for (let i = 1; i <= 6666; i++) {
            children.push(<Option key={i} value={i} disabled={ids.indexOf(i) > -1}>{i}</Option>);
        }
        setOptions(children)
    }, [dataLoading])

    const onChangeNumberOfCreeptoz = (value) => {
        setNumberOfCreeptoz(value)
    }

    const getRandomId = (count) => {
        let selectedIds = [];
        const ids = mintedIds.map(id => parseInt(id, 10))
        while(selectedIds.length < numberOfCreeptoz) {
            let randomId = Math.floor((Math.random() * 6666) + 1)
            if (ids.indexOf(randomId) === -1) {
                selectedIds.push(randomId)
                ids.push(randomId)
            }
        } 
        
        return selectedIds;
    }

    const onPreSale = async (contract, ids) => {
        try {
            let tx = await contract.preSaleToken(ids, { value: BigNumber.from(1e9).mul(BigNumber.from(1e9)).mul(tokenPrice * 1000).div(1000).mul(numberOfCreeptoz), from: walletAddress })
            let res = await tx.wait()
            console.log(res)
            if (res.transactionHash) {
                alert('success', 'Success', `You minted ${ids.length} creeptoz Successfully`)
                setMintLoading(false)
            }
        } catch (err) {
            alert('error', 'Error', 'Transaction failed because you have insufficient funds or sales not started')
            setMintLoading(false)
        }
    }

    const onPublicSale = async (contract, ids) => {
        try {
            let tx = await contract.mintToken(ids, { value: BigNumber.from(1e9).mul(BigNumber.from(1e9)).mul(tokenPrice * 1000).div(1000).mul(numberOfCreeptoz), from: walletAddress })
            let res = await tx.wait()
            if (res.transactionHash) {
                alert('success', 'Success', `You minted ${ids.length} creeptoz Successfully`)
                setMintLoading(false)
            }
        } catch (err) {
            alert('error', 'Error', 'Transaction failed because you have insufficient funds or sales not started')
            setMintLoading(false)
        }
    }

    const reserveTokens = async (contract, ids) => {
        console.log(ids)
        try {
            let tx = await contract.reserveTokens(ids, { value: BigNumber.from(1e9).mul(BigNumber.from(1e9)).mul(tokenPrice).mul(numberOfCreeptoz), from: walletAddress })
            let res = await tx.wait()
            if (res.transactionHash) {
                alert('success', 'Success', `You minted ${ids.length} creeptoz Successfully`)
                setMintLoading(false)
            }
        } catch (err) {
            alert('error', 'Error', 'Transaction failed because you have insufficient funds or sales not started')
            setMintLoading(false)
        }
    }

    const onMint = async () => {
        if (!walletAddress) {
            alert('info', 'Error', 'Please connect with Metamask')
            return
        }

        if ( numberOfCreeptoz > maxTokens - totalSupply ) {
            alert('info', 'Error', `We are reached already max supply, You can mint less than ${maxTokens - totalSupply}`)
            return 
        }
        
        const mintIds = getRandomId()
        setMintLoading(true)
        const contract = getContract()
        
        if (ownerAddr.toLowerCase() === walletAddress.toLowerCase() || superUser) {
            if (selectSpecial) {
                reserveTokens(contract, specialValue)
            } else {
                reserveTokens(contract, mintIds)
            }
        } else if (presaleIsActive && !saleIsActive) {
            onPreSale(contract, mintIds)
        } else if (saleIsActive) {
            onPublicSale(contract, mintIds)
        }

    }

    const changeSpecial = (value) => {
        setSpecialValue(value)
    }

    return (
        <div className="feature-image">
            <div className="black-overlay">
                <div className="container-16 w-container">
                    <p className="paragraph-4">
                        6666 creeptoz has invaded the blockchain,<br />
                        Are you ready to hunt them down? <br />
                        <span className='text-base'>STEP 1 : make sure the URL of this page is : https://www.thecreeptoz.com/mint</span> <br />
                        <span className='text-base'>STEP 2 : connect your wallet to proceed</span>
                    </p>
                </div>
                {
                    walletAddress && !presaleIsActive && !saleIsActive &&
                        <div className='text-xl text-white mb-4'>Sale is not started</div>
                }
                {
                    walletAddress && presaleIsActive && !saleIsActive &&
                        <div className='text-xl text-white mb-4'>Presale</div>
                }
                <div className='flex items-center'>
                    <div className='hidden lg:block'><img className='w-full' src={leftImage} /></div>
                    <div className="flex flex-1 mx-auto rounded-3xl bg-black" >
                        {
                            dataLoading
                                ? <div className='text-white text-lg italic py-10 px-52'>Loading...</div>
                                : <div className="flex flex-col items-center p-10 minter-wrapper">
                                        <span className="md:text-6xl text-3xl text-gray-600 md:max-w-[450px] max-w-[300px]" data-nsfw-filter-status="swf">
                                            <span className="text-white drop-shadow-xl" data-nsfw-filter-status="swf">{totalSupply} / 6666</span>
                                            <span className="text-white drop-shadow-xl text-lg">Minted</span><br></br>
                                        </span>
                                        <div className="w-full">
                                            <div className="flex justify-between">
                                                <span className="md:text-2xl text-3xl text-white drop-shadow-xl">
                                                    <center>Mint Price: <b>{tokenPrice} MATIC</b></center>
                                                </span>
                                            </div>
                                            <div className="w-full p-5 rounded-3xl mt-5" style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                                                <div className="w-full py-5">
                                                    {
                                                        walletAddress && ownerAddr && ownerAddr.toLowerCase() === walletAddress.toLowerCase()
                                                            ? <div>
                                                                <Row align='middle' style={{marginBottom: '10px'}}>
                                                                    <input type={'checkbox'} value={selectSpecial} onChange={() => setSelectSpecial(!selectSpecial)} />
                                                                    <span className='text-white text-sm ml-1'>Select for special</span>
                                                                </Row>
                                                                {
                                                                    !selectSpecial
                                                                    ?  <Row>
                                                                            <Col span={14}>
                                                                            <Slider
                                                                                min={1}
                                                                                max={mintMax}
                                                                                onChange={onChangeNumberOfCreeptoz}
                                                                                step={1}
                                                                                value={numberOfCreeptoz}
                                                                                defaultValue={mintMax}
                                                                                disabled={selectSpecial}
                                                                                marks={{
                                                                                    1: <span className="text-white">1</span>,
                                                                                    [mintMax]: <span className="text-white">{mintMax}</span>,
                                                                                }}
                                                                                disabled={!walletAddress}
                                                                            />
                                                                            </Col>
                                                                            <Col span={6}>
                                                                            <InputNumber
                                                                                min={1}
                                                                                max={mintMax}
                                                                                style={{ margin: '0 16px' }}
                                                                                step={1}
                                                                                value={numberOfCreeptoz}
                                                                                defaultValue={mintMax}
                                                                                disabled={selectSpecial}
                                                                                onChange={onChangeNumberOfCreeptoz}
                                                                                disabled={!walletAddress}
                                                                            />
                                                                            </Col>
                                                                        </Row>
                                                                    :  <Row>
                                                                            <Select
                                                                                mode="multiple"
                                                                                showSearch
                                                                                allowClear
                                                                                style={{ width: '100%' }}
                                                                                placeholder="Please select"
                                                                                maxTagCount="responsive"
                                                                                disabled={!selectSpecial}
                                                                                onChange={changeSpecial}
                                                                                disabled={!walletAddress}
                                                                            >
                                                                                {options}
                                                                            </Select>
                                                                        </Row>
                                                                }
                                                            </div>
                                                            : <Slider disabled={!walletAddress} autoFocus={false} value={numberOfCreeptoz} onChange={onChangeNumberOfCreeptoz} defaultValue={2} min={1} max={2} marks={{
                                                                1: <span className="text-white">1</span>,
                                                                2: <span className="text-white">2</span>
                                                            }} />
                                                    }
                                                </div>
                                                <div className="w-full flex flex-col justify-between">
                                                    <span className="text-white drop-shadow-xl my-1">{selectSpecial ? specialValue.length : numberOfCreeptoz} creeptoz</span>
                                                    <span className="text-white drop-shadow-xl fontSize='50px' ">Total Price: {(tokenPrice * numberOfCreeptoz)}MATIC</span>
                                                </div>
                                            </div>

                                            <div className="w-full flex justify-between mt-5">
                                                <span></span>
                                                {
                                                    loading ?
                                                        <Button type="primary" className="rounded-6x2 " size={'large'} style={{ backgroundColor: 'black', borderColor: 'black', fontSize: '50px' }}>
                                                            Minting.....
                                                        </Button> :
                                                        <Button disabled={!walletAddress} type="primary" onClick={onMint} className="rounded-6x2 " size={'large'} style={{ backgroundColor: 'black', borderColor: 'black', fontSize: '50px' }}>
                                                            Mint
                                                        </Button>
                                                }
                                                <br></br><br></br><br></br>
                                            </div>
                                        </div>
                                    </div>
                        }
                    </div>
                    <div className='hidden lg:block md:w-1/4 lg:w-auto'><img className='w-full' src={rightImage} /></div>
                </div>
            </div>
        </div>

    )
}

export default Minter