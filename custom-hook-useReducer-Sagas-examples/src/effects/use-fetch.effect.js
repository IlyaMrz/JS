import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [ data, setData ] = useState('none');
  useEffect(()=>{
    const fetchData = async () => {
      const rawData = await fetch(url)
      const newData = await rawData.json()
      // console.log(newData)
      setData(newData[0])
    }
    fetchData();
  })
  return data;
}

export default useFetch;







// import { useState, useEffect } from 'react';

// const useFetch = url => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(url);
//       const dataArray = await res.json();
//       setData(dataArray[0]);
//     };

//     fetchData();
//   }, [url]);

//   return data;
// };

// export default useFetch;
