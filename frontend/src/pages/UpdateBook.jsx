import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateBook() {
  const navigate = useNavigate();

  const [type, setType] = useState("book");
  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (!name || !serial || !status || !date) {
      alert("All fields required");
      return;
    }

    navigate("/success");
  };

  return (
    <div className="p-4">

      <div className="flex justify-between mb-4">
         <button onClick={() => navigate("/admin")} className="bg-gray-400 px-3 py-1 text-white rounded">
         Home
        </button>
        <h1 className="font-bold">Update Book/Movie</h1>
         <button onClick={() => navigate("/admin")} className="bg-red-400 px-3 py-1 text-white rounded">
         Logout
        </button>
      </div>

      <div className="flex flex-col gap-3 w-80 mx-auto">

        <label>
          <input type="radio" checked={type==="book"} onChange={()=>setType("book")} />
          Book
        </label>

        <label>
          <input type="radio" checked={type==="movie"} onChange={()=>setType("movie")} />
          Movie
        </label>

        <input
          placeholder="Book/Movie Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />

        <input
          placeholder="Serial No"
          value={serial}
          onChange={(e) => setSerial(e.target.value)}
          className="border p-2"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2"
        >
          <option value="">Select Status</option>
          <option value="Available">Available</option>
          <option value="Issued">Issued</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2"
        />

        <div className="flex gap-2">
          <button onClick={() => navigate("/cancel")} className="bg-gray-400 px-3 py-1">
            Cancel
          </button>

          <button onClick={handleSubmit} className="bg-purple-500 text-white px-3 py-1">
            Confirm
          </button>
        </div>

      </div>
    </div>
  );
}