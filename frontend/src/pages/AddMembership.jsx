import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMembership() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first: "",
    last: "",
    contact: "",
    address: "",
    aadhar: "",
    start: "",
    end: "",
    plan: "6",
  });

  const handleSubmit = () => {
    if (!form.first || !form.last || !form.contact || !form.address || !form.aadhar || !form.start || !form.end) {
      alert("All fields required");
      return;
    }
    navigate("/success");
  };

  return (
    <div className="p-4">
      <h1>Add Membership</h1>

      <input placeholder="First Name" aria-label="First Name" onChange={e => setForm({...form, first: e.target.value})} className="border p-2 block mb-2"/>
      <input placeholder="Last Name" aria-label="Last Name" onChange={e => setForm({...form, last: e.target.value})} className="border p-2 block mb-2"/>
      <input placeholder="Contact" aria-label="Contact" onChange={e => setForm({...form, contact: e.target.value})} className="border p-2 block mb-2"/>
      <input placeholder="Address" aria-label="Address" onChange={e => setForm({...form, address: e.target.value})} className="border p-2 block mb-2"/>
      <input placeholder="Aadhar" aria-label="Aadhar" onChange={e => setForm({...form, aadhar: e.target.value})} className="border p-2 block mb-2"/>

      <input type="date" aria-label="Start Date" onChange={e => setForm({...form, start: e.target.value})} className="border p-2 block mb-2"/>
      <input type="date" aria-label="End Date" onChange={e => setForm({...form, end: e.target.value})} className="border p-2 block mb-2"/>

      {/* Radio */}
      <label><input type="radio" aria-label="6 Months Plan" checked={form.plan==="6"} onChange={()=>setForm({...form, plan:"6"})}/> 6 Months</label>
      <label><input type="radio" aria-label="1 Year Plan" onChange={()=>setForm({...form, plan:"12"})}/> 1 Year</label>
      <label><input type="radio" aria-label="2 Years Plan" onChange={()=>setForm({...form, plan:"24"})}/> 2 Years</label>

      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 mt-2">Submit</button>
    </div>
  );
}