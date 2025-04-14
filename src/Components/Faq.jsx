import React, { useState } from "react";
 
const FAQComponent = ({ string,data }) => {
  const [faqs, setFaqs] = useState(data);
  const [open, setOpen] = useState(null);
  const [newQue, setNewQue] = useState("");
  const [newAns, setNewAns] = useState("");
 
  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  }

  const handleDelete = (index) => {
    setOpen(null);
    setFaqs(faqs.filter((_,indexes)=> indexes !== index));
  };

  const handleAdd = () => {
    setOpen(null)
    if(newAns.length === 0 || newQue.length === 0){
      alert('All fields missing.')
      return;
    }
    const newFaq = {
      question: newQue,
      answer: newAns
    }
    //cart.filter(prev => prev.id !== item.id)
    //setFaqs(prev => [...prev ,newFaq])
    setFaqs([...faqs, newFaq])
    setNewAns("");
    setNewQue("");
  }
  return (
    <div style={{ width: "400px", margin: "20px auto", textAlign: "left" }}>
      <h2>FAQ Section</h2>
      <div className="container">
        { faqs?.map((faq,index) => (
          <div data-testid="faqs-list" key={index} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
            <div
              style={{ fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center" }} 
              onClick={()=> handleToggle(index)}>
              <span style={{ marginRight: "10px", fontSize: "20px", color: "blue" }}>
                {open === index ? `-` : `+`}
              </span>
              {faq.question}
            </div>
            <p>{faq.answer}</p>    correct
              {/* {open === index && <p>{faq.answer}</p>} */}
            <button style={{ color: "red" }} onClick={()=> handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      <h3>Add New FAQ</h3>
      <input
        type="text"
        placeholder="Enter question"
        value={newQue}
        onChange={(e) => setNewQue(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter answer"
        value={newAns}
        onChange={(e)=> setNewAns(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
 

export default FAQComponent;