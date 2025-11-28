import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
  const data = useLoaderData();
  // method one correct code
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AshDev0')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     });
    // },[])
  return (
    <div className='text-center m-4 text-white text-3xl bg-gray-600'>Github followers: {data?.followers}
    <img src={data?.avatar_url} alt="" />
     </div>
  )
}

// Method Two More Optimize code
export const gitHubInfo = async () => {
  const response = await fetch('https://api.github.com/users/AshDev0')
  return response.json();
}