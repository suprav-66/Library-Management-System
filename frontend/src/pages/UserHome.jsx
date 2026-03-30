import { useNavigate } from "react-router-dom";

export default function UserHome() {
  const navigate = useNavigate();

  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between mb-4">
        <button onClick={() => navigate("/")} className="bg-gray-400 px-3 py-1 text-white rounded">
          Back
        </button>
        <h1 className="text-xl font-bold">User Home Page</h1>
        <button onClick={() => navigate("/")} className="bg-red-500 px-3 py-1 text-white rounded">
          Log Out
        </button>
      </div>

      {/* Menu */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => navigate("/reports")} className="bg-green-500 text-white px-4 py-2 rounded">
          Reports
        </button>

        <button onClick={() => navigate("/transactions")} className="bg-purple-500 text-white px-4 py-2 rounded">
          Transactions
        </button>
      </div>

      {/* Table */}
      <h2 className="font-bold mb-2">Product Details</h2>

      <table className="w-full border border-black">
        <thead>
          <tr className="bg-gray-200">
            <th className="border">Code No From</th>
            <th className="border">Code No To</th>
            <th className="border">Category</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border">SC(B/M)000001</td>
            <td className="border">SC(B/M)000004</td>
            <td className="border">Science</td>
          </tr>

          <tr>
            <td className="border">EC(B/M)000001</td>
            <td className="border">EC(B/M)000004</td>
            <td className="border">Economics</td>
          </tr>

          <tr>
            <td className="border">FC(B/M)000001</td>
            <td className="border">FC(B/M)000004</td>
            <td className="border">Fiction</td>
          </tr>

          <tr>
            <td className="border">CH(B/M)000001</td>
            <td className="border">CH(B/M)000004</td>
            <td className="border">Children</td>
          </tr>

          <tr>
            <td className="border">PD(B/M)000001</td>
            <td className="border">PD(B/M)000004</td>
            <td className="border">Personal Development</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}