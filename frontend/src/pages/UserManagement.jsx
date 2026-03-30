import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserManagement() {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState(true);
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleSubmit = () => {
    if (!name) {
      alert("Name required");
      return;
    }
    navigate("/success");
  };

  return (
    <div className="p-4">
      <h1>User Management</h1>

      <label><input type="radio" checked={newUser} onChange={()=>setNewUser(true)}/> New User</label>
      <label><input type="radio" onChange={()=>setNewUser(false)}/> Existing User</label>

      <input placeholder="Name" onChange={e=>setName(e.target.value)} className="border p-2 block"/>

      <label><input type="checkbox" onChange={()=>setActive(!active)}/> Active</label>
      <label><input type="checkbox" onChange={()=>setAdmin(!admin)}/> Admin</label>

      <button onClick={handleSubmit} className="bg-gray-700 text-white p-2 mt-2">Submit</button>
    </div>
  );
}