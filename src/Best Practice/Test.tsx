
//optimize code with less re-renders

// import React, { useRef, useState } from "react"

// function Test() {
//   const [inputValue, setInputValue] = useState<string[]>([])
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleClick = () => {
//     if(inputRef.current){
//       setInputValue([...inputValue, inputRef.current?.value])
//       inputRef.current.value = "";
//     }
//   }

// console.log("re-render")

//   return (
//     <div>
//       <input ref={inputRef} type="text"  />      
//       <button onClick={handleClick}>click</button>
//       <div>
//         {inputValue && inputValue.map((items,index)=>(
//           <p key={index}>{items}</p>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Test

import axios, { CancelTokenSource } from 'axios';
import { useState, useEffect, useRef } from 'react';

interface dataT {
  question: string;
  punchline: string;
}

function Test() {
  const [inputValue, setInputValue] = useState('');
  const [printValue, setPrintValue] = useState<dataT[]>([]);
  // const cancelToken = useRef<CancelTokenSource | undefined>(undefined);


  useEffect(() => {
    // cancelToke is deprecated
    
    // if (cancelToken.current) {
    //   cancelToken.current.cancel('cancel previous request');
    // }

    // cancelToken.current = axios.CancelToken.source();

    const controller = new AbortController()

    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://backend-omega-seven.vercel.app/api/getjoke`,
          // { cancelToken: cancelToken.current?.token }
          {signal: controller.signal}
        );
        setPrintValue(data);
      } catch (error:any) {
        if (!axios.isCancel(error)) {
          console.log(error.message);
        } 
        console.log(error)
      }
    };

    fetchData();

    return () => controller.abort()

    // return () => {
    //   if (cancelToken.current) {
    //     cancelToken.current.cancel('cancel request on component unmount');
    //   }
    // }

  }, [inputValue]);

  return (
    <div>
      <input className="border" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {printValue &&
        printValue.map((items, i) => (
          <div key={i} style={{ backgroundColor: 'yellow' }}>
            <div>{items.question}</div>
            <div>{items.punchline}</div>
          </div>
        ))}
    </div>
  );
}

export default Test;

