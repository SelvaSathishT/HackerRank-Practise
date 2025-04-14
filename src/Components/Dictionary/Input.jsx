import React from 'react'; 
 
const Input = ({name, setname, email, setemail, number, setnumber, handleClick}) => { 
  return ( 
    <div style={leftSideStyle}> 
      <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Add Contact</h2> 
      <form style={formStyle}> 
        <label htmlFor="name" style={labelStyle}> 
          Name 
        </label> 
        <input type="text" id="name" value={name} onChange={(e)=>setname(e.target.value)} style={inputStyle} placeholder="Enter your name" /> 
 
        <label htmlFor="email" style={labelStyle}> 
          Email 
        </label> 
        <input type="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)} style={inputStyle} placeholder="Enter your email" /> 
 
        <label htmlFor="number" style={labelStyle}> 
          Mobile Number 
        </label> 
        <input type="number" id="number" value={number} onChange={(e)=>setnumber(e.target.value)} style={inputStyle} placeholder="Enter your mobile number" /> 
 
        <button onClick={(e)=>handleClick(e)} type="submit" style={buttonStyle}>Add</button> 
      </form> 
    </div> 
  ); 
}; 
 
// Styles 
const leftSideStyle = { 
  flex: '1', 
  padding: '20px', 
  backgroundColor: 'white', 
  borderRadius: '10px', 
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
  maxWidth: '350px', 
}; 
 
const formStyle = { 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '10px', 
}; 
 
const labelStyle = { 
  fontSize: '14px', 
  fontWeight: 'bold', 
}; 
 
const inputStyle = { 
  padding: '10px', 
  fontSize: '14px', 
  borderRadius: '5px', 
  border: '1px solid #ccc', 
  outline: 'none', 
}; 
 
const buttonStyle = { 
  marginTop: '10px', 
  padding: '10px', 
  backgroundColor: '#4CAF50', 
  color: 'white', 
  border: 'none', 
  borderRadius: '5px', 
  cursor: 'pointer', 
  fontSize: '16px', 
}; 
 
export default Input; 