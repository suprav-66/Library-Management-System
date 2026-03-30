import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateMembership() {
  const navigate = useNavigate();

  const [membershipNo, setMembershipNo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [plan, setPlan] = useState("6");
  const [remove, setRemove] = useState(false);

  const handleSubmit = () => {
    if (!membershipNo || !startDate || !endDate) {
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
        <h1 className="font-bold">Update Membership</h1>
        <button onClick={() => navigate("/admin")} className="bg-red-400 px-3 py-1 text-white rounded">
         Logout
        </button>
      </div>

      <div className="flex flex-col gap-3 w-80 mx-auto">

        <input
          placeholder="Membership Number"
          value={membershipNo}
          onChange={(e) => setMembershipNo(e.target.value)}
          className="border p-2"
        />

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2"
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2"
        />

        <p>Membership Extension:</p>

        <label><input type="radio" checked={plan==="6"} onChange={()=>setPlan("6")}/> 6 Months</label>
        <label><input type="radio" checked={plan==="12"} onChange={()=>setPlan("12")}/> 1 Year</label>
        <label><input type="radio" checked={plan==="24"} onChange={()=>setPlan("24")}/> 2 Years</label>

        <label>
          <input type="checkbox" checked={remove} onChange={()=>setRemove(!remove)} />
          Remove Membership
        </label>

        <div className="flex gap-2">
          <button onClick={() => navigate("/cancel")} className="bg-gray-400 px-3 py-1">
            Cancel
          </button>

          <button onClick={handleSubmit} className="bg-blue-500 text-white px-3 py-1">
            Confirm
          </button>
        </div>

      </div>
    </div>
  );
}