import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate();

  const [type, setType] = useState("book");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [qty, setQty] = useState(1);

  const handleSubmit = () => {
    if (!name || !date || !qty) {
      alert("All fields required");
      return;
    }
    navigate("/success");
  };

  return (
    <div className="p-4">
      <h1>Add Book/Movie</h1>

      <label><input type="radio" checked={type==="book"} onChange={()=>setType("book")}/> Book</label>
      <label><input type="radio" onChange={()=>setType("movie")}/> Movie</label>

      <input placeholder="Name" onChange={e=>setName(e.target.value)} className="border p-2 block"/>
      <input type="date" onChange={e=>setDate(e.target.value)} className="border p-2 block"/>
      <input type="number" value={qty} onChange={e=>setQty(e.target.value)} className="border p-2 block"/>

      <button onClick={handleSubmit} className="bg-green-500 text-white p-2 mt-2">Submit</button>
    </div>
  );
}