// import React, { useEffect, useState } from "react";

// const HackerCart = ({ cart, removeFromCart }) => {
//     const [amt, setAmt] = useState(0);

//     // const Total = ()=>{
    
//     // }

//     useEffect(()=>{
//         let total = 0;
//         if(cart.length>0){
//             cart.forEach((item)=>{
//                 total+= Number(item.price);
//             })
//             setAmt(total);
//         }
//         else{
//             setAmt(0);
//         }
//     },[cart])
//   return (
//     <div>
//       <h2>Cart</h2>
//       {cart.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id}>
//             <span>{item.name}</span>
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </div>
//         ))
//       )}
//       <p>Total : ${amt}</p>
//     </div>
//   );
// };

// export default HackerCart;

import React, { useEffect, useState } from "react";
 
const HackerCart = ({cart, removeFromCart}) => {
    const [amt, setAmt] = useState(0);

    useEffect(()=>{
        let total = 0;
        console.log(cart)
        if(cart.length !== 0){
            cart.map((item) => {
                total += (Number(item.price));
            })
            console.log('total=>',total);
            const answer = Number(total).toFixed(2);
            setAmt(answer);
        } else {
            setAmt(0);
        }
    },[cart]);
    return (
        <div>
            <h2>HackerCart</h2>
            
            {( cart.map((product) => (
        <div key={product.id} className="border-1">
          <p>{product.name}</p> <span>Total - {product.price}</span><br />
          <button data-testid={`remove-button-${product.id}`}  onClick={()=>removeFromCart(product)}>Remove from cart</button>
        </div>
      )))}
      <p>Total : ${amt}</p>
        </div >
    );
};
 
export default HackerCart;