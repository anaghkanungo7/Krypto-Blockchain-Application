import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';
// Dummy Data
import dummyData from '../utils/dummyData'
import useFetch from '../hooks/useFetch';


// Transaction Card component
const TransactionCard = ({addressTo, addressFrom, timestamp, message, keyword, amount, url}) => {
    const gifUrl = useFetch({ keyword });

    return (
        <div className="bg-[#181918] m-4 flex flex-1
        2xl:min-w-[450px]
        2xl:max-w-[500px]
        2sm:min-w-[270px]
        2sm:max-w-[340px]
        flex-col p-3 rounded-md hover:shadow-2xl
        ">
            <div className="flex flex-col items-center w-full mt-3">
                <div className="w-full mb-6 p-2">
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel='noopener noreferrer'>
                        <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
                    </a>

                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel='noopener noreferrer'>
                        <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
                    </a>

                    <p className="text-white text-base">Amount: {amount} ETH</p>
                    {message && (
                        <div className="">
                            <br />
                            <p className="text-white text-base">Message: {message}</p>
                        </div>
                        
                    )}

                    <img 
                    src={gifUrl || url} 
                    alt="GIF"
                    className='w-full h-64 2x:h-96 rounded-md shadow-lg object-cover'
                    />
                </div>

                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                        <p className="text-[#37c7da] font-bold">{timestamp}</p>
                </div>
            </div>
        </div>
    )
}

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {currentAccount ? (
                    <h className='text-white text-center text-2xl sm:text-4xl py-2 text-gradient'>Latest Transactions</h>
                ) : 
                <h3 className='text-white text-center text-2xl sm:text-4xl py-2 text-gradient '>Connect your account to see your transactions</h3>
            }

            <div className="flex flex-wrap justify-center items-center mt-10">
                {[...transactions].reverse().map((transaction, i) => (
                    <TransactionCard key={i} {...transaction} />
                ))}
            </div>
            </div>
        </div>
    );
}


export default Transactions;