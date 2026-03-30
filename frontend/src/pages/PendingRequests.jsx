import { useNavigate } from "react-router-dom";

export default function PendingRequests() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const goHome = () => {
    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  // ✅ Dummy Data
  const requests = [
    {
      memberId: "MEM001",
      name: "Physics",
      requestedDate: "2026-03-20",
      fulfilledDate: "", // not fulfilled
    },
    {
      memberId: "MEM002",
      name: "Inception",
      requestedDate: "2026-03-18",
      fulfilledDate: "2026-03-19",
    },
  ];

  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between mb-4">
        <button
          onClick={goHome}
          className="bg-gray-400 px-3 py-1 text-white rounded"
        >
          Home
        </button>

        <h1 className="font-bold text-lg">Issue Requests</h1>

        <button
          onClick={() => navigate("/")}
          className="bg-red-500 px-3 py-1 text-white rounded"
        >
          Log Out
        </button>
      </div>

      {/* Table */}
      <table className="w-full border border-black">
        <thead>
          <tr className="bg-gray-200">
            <th className="border">Membership ID</th>
            <th className="border">Book/Movie Name</th>
            <th className="border">Requested Date</th>
            <th className="border">Request Fulfilled Date</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((r, index) => (
            <tr key={index}>
              <td className="border text-center">{r.memberId}</td>
              <td className="border text-center">{r.name}</td>
              <td className="border text-center">{r.requestedDate}</td>
              <td className="border text-center">
                {r.fulfilledDate ? r.fulfilledDate : "Pending"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}