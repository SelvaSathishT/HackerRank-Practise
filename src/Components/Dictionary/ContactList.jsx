import React from 'react'; 
 
const ContactList = ({ contacts }) => { 
  return ( 
    <div style={rightSideStyle}> 
      <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Contact List</h2> 
      <table style={tableStyle}> 
        <thead> 
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}> 
            <th style={headerStyle}>Id</th> 
            <th style={headerStyle}>Name</th> 
            <th style={headerStyle}>Email</th> 
            <th style={headerStyle}>Mobile</th> 
          </tr> 
        </thead> 
        <tbody> 
          {contacts.map((item, index) => ( 
            <tr key={index} style={index % 2 === 0 ? rowStyleEven : rowStyleOdd}> 
              <td style={cellStyle}>{item.srno}</td> 
              <td style={cellStyle}>{item.name}</td> 
              <td style={cellStyle}>{item.email}</td> 
              <td style={cellStyle}>{item.number}</td> 
            </tr> 
          ))} 
        </tbody> 
      </table> 
    </div> 
  ); 
}; 
 
// Styles 
const rightSideStyle = { 
  flex: '2', 
  padding: '20px', 
  backgroundColor: 'white', 
  borderRadius: '10px', 
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
  overflowX: 'auto', 
}; 
 
const tableStyle = { 
  width: '100%', 
  borderCollapse: 'collapse', 
}; 
 
const headerStyle = { 
  padding: '12px', 
  textAlign: 'left', 
  borderBottom: '2px solid #ddd', 
  fontSize: '16px', 
}; 
 
const cellStyle = { 
  padding: '10px', 
  textAlign: 'left', 
  borderBottom: '1px solid #ddd', 
}; 
 
const rowStyleEven = { 
  backgroundColor: '#f9f9f9', 
}; 
 
const rowStyleOdd = { 
  backgroundColor: '#fff', 
}; 
 
export default ContactList; 