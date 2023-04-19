import axios from 'axios'
import React, { useState ,useEffect} from 'react'
import CoinCard from './CoinCard';
import Loader from './Loader';

const Coins = () => {
    const[coins,setCoins]=useState([]);
    const[page,setPage]=useState(1);
    const[loader,setLoader]=useState(true);

    useEffect(() => {
      const fetchCoins = async()=>{
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=16&page=${page}&sparkline=false`
        )
        setCoins((prev)=> [...prev,...data])
        console.log(data)
        setLoader(false)
      }
      fetchCoins();},[page]
    
     )

     const handleScroll = ()=>{
        if(document.documentElement.scrollTop + window.innerHeight +1 >= document.documentElement.scrollHeight){
            setLoader(true)
            setPage((prev)=>prev+1);
        }
     }


     useEffect(() => {
       window.addEventListener('scroll',handleScroll)
     
       return () => {
         window.removeEventListener('scroll',handleScroll)
       }
     }, [])
     
    
  return (
    <div className='coins'>
         {
        coins.map((i,index)=>{
            return <CoinCard key={index} image={i.image} name={i.symbol} price={i.current_price
            } />
        })
        }
        {
           loader&&<Loader/> 
        }
         </div>
  )
}

export default Coins