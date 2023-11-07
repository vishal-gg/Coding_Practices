// import { useState } from "react";
// import axios from "axios";
import './globals.css';

// const App = () => {
//   const [quote, setQuote] = useState<any>("");
//   const [load, setLoad] = useState(false);
//   const [error, setError] = useState('');
  
//   const getQuote = async () => {
//     try {
//       setQuote("");
//       setLoad(true);
//       const { data } = await axios.get("https://api.quotable.io/random");
//       setQuote(data);
//       setLoad(false);
//     } catch (err) {
//       setLoad(false);
//       setError("Something went wrong");
//       console.log(err);
//     }
//   };
// console.log(error)
// if (error) {
//   return <div>something went wrong</div>
// }
//   return (
//     <div className="wrapper">
//       <div className="container">
//         {!load ? (
//           <>
//             <p id="quote">{quote.content}</p>
//             <h3 id="author">{quote.author}</h3>
//           </>
//         ) : (
//           <div className="load">Loading...</div>
//         )}
//         <button disabled={load} id="btn" onClick={getQuote}>
//           Get Quote
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
import React from 'react'
import Test from './Best Practice/Test'
import SearchFilter from './Best Practice/SearchFilter'
import PaginateSetup from './Paginate/PaginateSetup'
import Carousel from './Carousel/SwiperCarousel'

function App() {
  return (
    <div>
      {/* <Test /> */}
      {/* <SearchFilter /> */}
      {/* <PaginateSetup /> */}
      {/* <Carousel /> */}
      <ul className='flex gap-5'>
        <li className='relative p-5'><a href="#" className='hover:bg-blue-500 after-content-[""] after:w-full after:h-1 after:bg-white hover:after-bg-blue-300 after:absolute after:left-0 after:-bottom-4'>home</a></li>
        <li className='relative p-5'><a href="#" className=' after-content-[""] after:w-full after:h-1 after:bg-white hover:after-bg-blue-300 after:absolute after:left-0 after:-bottom-4'>home</a></li>
        <li className='relative p-5'><a href="#" className=' after-content-[""] after:w-full after:h-1 after:bg-white hover:after-bg-blue-300 after:absolute after:left-0 after:-bottom-4'>home</a></li>
        <li className='relative p-5'><a href="#" className=' after-content-[""] after:w-full after:h-1 after:bg-white hover:after-bg-blue-300 after:absolute after:left-0 after:-bottom-4'>home</a></li>
        <li className='relative p-5'><a href="#" className=' after-content-[""] after:w-full after:h-1 after:bg-white hover:after-bg-blue-300 after:absolute after:left-0 after:-bottom-4'>home</a></li>
      </ul>
    </div>
  )
}

export default App
