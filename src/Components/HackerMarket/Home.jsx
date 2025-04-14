// import React from "react";

// const Home = ({ addToCart }) => {
//   const products = [
//     { id: 1, name: "Product 1" ,price:'12'},
//     { id: 2, name: "Product 2" ,price: '10'},
//     { id: 3, name: "Product 3" ,price:'18'}
//   ];

//   return (
//     <div>
//       <h2>Home</h2>
//       {products.map((product) => (
//         <div key={product.id}>
//           <span>{product.name}</span>
//           <button className="border-1" onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;

import React from "react";

const Home = ({addToCart}) => {
  const products = [
    { id: 1, name: "Product 1" ,price: 10},
    { id: 2, name: "Product 2" ,price: 20},
    { id: 3, name: "Product 3" ,price: 30}
  ];

  return (
    <div>
      <h2>Home</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span data-testid={`product-name-${product.id}`}>{product.name}</span>
          <button data-testid={`add-button-${product.id}`} onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;