import React from 'react'
import { useContext } from 'react';
import { Context } from './Movie';
import { useNavigate } from 'react-router-dom';
import '../CSS/favorite.css'

export default function Favorite() {
  const navigate = useNavigate();

  return(
    <div>
      <h1>Favorite</h1>
      <button className='back' onClick={() => navigate(-1)}>return Home</button> 
    </div>
  )
}






// export default function Favorite(props){
   
//     const value = useContext(Context);
//     return (

//     <div>
//         {value.map((movie) => (
//         <div key={movie.id}>
//           <Movie
//             id={movie.id}
//             title={movie.title}
//             description={movie.description}
//           />
//         </div>
//       ))}
//     </div>
//   )
// }
