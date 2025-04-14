import { useState } from "react";
import "./App.css";
import FAQComponent from "./Components/Faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/HackerMarket/Home";
import HackerCart from "./Components/HackerMarket/HackerCart";
import Navbar from "./Components/HackerMarket/Navbar";
import Input from "./Components/Dictionary/Input";
import ContactList from "./Components/Dictionary/ContactList";
import InitialContacts from "./Components/Dictionary/InitialContacts.json";

// Example data
const initialData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for UI development.",
  },
  {
    question: "What is useState?",
    answer: "useState is a React Hook for state management.",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const present = cart.some((prev) => prev.id === item.id);
    //alert(present)
    if (!present) {
      const newcart = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      };
      setCart([...cart, newcart]);
    } else {
      console.log(cart);
      //alert('Product is already added');
      setCart(
        cart.map((prev) => {
          if (prev.id === item.id) {
            return { ...prev, price: prev.price + item.price };
          }
          return prev;
        })
        //1+1=2
      );
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((product) => product.id !== item.id));
  };

  const [contacts, setcontacts] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState(0);
  const [srno, setsrno] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    if (
      !name ||
      email.trim() === "" ||
      number.trim() === "" ||
      !email.includes("@") ||
      number.toString().length != 10
    ) {
      alert("Enter Valid Details");
      return;
    } else {
      setsrno(srno + 1);
      setcontacts([
        ...contacts,
        { srno: srno + 1, name: name, email: email, number: number },
      ]);
      console.log(number.toString().length);
      setemail("");
      setname("");
      setnumber(0);
      alert('added successfully');
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    padding: "20px",
    gap: "20px",
    backgroundColor: "#f4f4f4",
    height: "100vh",
  };
  return (
    <div className="App">
      {/* FAQ Question */}
      <FAQComponent data={initialData} />

      {/* Cart Question */}
      {/* <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart}/>} />
        <Route path="/cart" element={<HackerCart cart={cart} removeFromCart={removeFromCart}/>} />
      </Routes>
    </Router> */}

      {/* Phone Dictionary */}
      {/* <div style={containerStyle}>
             {" "}
        <Input
          name={name}
          setname={setname}
          email={email}
          setemail={setemail}
          number={number}
          setnumber={setnumber}
          handleClick={handleClick}
        />
              <ContactList contacts={contacts} />   {" "}
      </div> */}
    </div>
  );
}

export default App;
