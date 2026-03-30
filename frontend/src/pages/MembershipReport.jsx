import { useNavigate } from "react-router-dom";

export default function MembershipReport() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const goHome = () => {
    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  const members = [
    {
      id: "MEM001",
      name: "Rahul",
      contact: "9876543210",
      address: "Bhubaneswar",
      aadhar: "123456789012",
      start: "2026-01-01",
      end: "2026-06-01",
      status: "Active",
      fine: 20,
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <button onClick={goHome}>Home</button>
        <h1 className="font-bold text-lg">List of Active Memberships</h1>
        <button onClick={() => navigate("/")}>Log Out</button>
      </div>

      <table className="w-full border border-black">
        <thead>
          <tr>
            <th className="border">Membership ID</th>
            <th className="border">Name</th>
            <th className="border">Contact</th>
            <th className="border">Address</th>
            <th className="border">Aadhar</th>
            <th className="border">Start Date</th>
            <th className="border">End Date</th>
            <th className="border">Status</th>
            <th className="border">Fine Pending</th>
          </tr>
        </thead>

        <tbody>
          {members.map((m, i) => (
            <tr key={i}>
              <td className="border">{m.id}</td>
              <td className="border">{m.name}</td>
              <td className="border">{m.contact}</td>
              <td className="border">{m.address}</td>
              <td className="border">{m.aadhar}</td>
              <td className="border">{m.start}</td>
              <td className="border">{m.end}</td>
              <td className="border">{m.status}</td>
              <td className="border">{m.fine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}