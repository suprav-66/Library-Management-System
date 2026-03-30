import { useNavigate } from "react-router-dom";

export default function Overdue() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const goHome = () => {
    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  // ✅ Dummy Overdue Data
  const overdueBooks = [
    {
      serial: "B003",
      name: "Mathematics",
      member: "MEM003",
      issueDate: "2026-02-01",
      expectedReturn: "2026-02-15",
      actualReturn: "2026-02-20",
    },
    {
      serial: "B004",
      name: "Chemistry",
      member: "MEM004",
      issueDate: "2026-02-10",
      expectedReturn: "2026-02-25",
      actualReturn: "2026-03-01",
    },
  ];

  // ✅ Fine Calculation Function
  const calculateFine = (expected, actual) => {
    const eDate = new Date(expected);
    const aDate = new Date(actual);

    if (aDate > eDate) {
      const diffDays = Math.ceil(
        (aDate - eDate) / (1000 * 60 * 60 * 24)
      );
      return diffDays * 10; // ₹10/day
    }
    return 0;
  };

  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between mb-4">
        <button onClick={goHome} className="bg-gray-400 px-3 py-1 text-white rounded">
          Home
        </button>

        <h1 className="font-bold text-lg">Overdue Returns</h1>

        <button onClick={() => navigate("/")} className="bg-red-500 px-3 py-1 text-white rounded">
          Log Out
        </button>
      </div>

      {/* Table */}
      <table className="w-full border border-black">
        <thead>
          <tr className="bg-gray-200">
            <th className="border">Serial No</th>
            <th className="border">Book Name</th>
            <th className="border">Membership ID</th>
            <th className="border">Issue Date</th>
            <th className="border">Expected Return</th>
            <th className="border">Actual Return</th>
            <th className="border">Fine</th>
          </tr>
        </thead>

        <tbody>
          {overdueBooks.map((item, index) => (
            <tr key={index}>
              <td className="border text-center">{item.serial}</td>
              <td className="border text-center">{item.name}</td>
              <td className="border text-center">{item.member}</td>
              <td className="border text-center">{item.issueDate}</td>
              <td className="border text-center">{item.expectedReturn}</td>
              <td className="border text-center">{item.actualReturn}</td>
              <td className="border text-center">
                ₹{calculateFine(item.expectedReturn, item.actualReturn)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}