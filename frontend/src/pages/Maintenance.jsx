import { useNavigate } from "react-router-dom";

export default function Maintenance() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  // ✅ NOW it's inside function (correct)
  if (role !== "admin") {
    return (
      <div className="text-center mt-20">
        <h1 className="text-xl font-bold text-red-500">Access Denied</h1>
      </div>
    );
  }

  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <button onClick={() => navigate("/admin")} className="bg-gray-400 px-3 py-1 text-white rounded">
          Home
        </button>

        <h1 className="text-xl font-bold">Maintenance</h1>

        <button onClick={() => navigate("/")} className="bg-red-500 px-3 py-1 text-white rounded">
          Log Out
        </button>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-4 w-80 mx-auto">

        <h2 className="font-bold">Membership</h2>
        <button onClick={() => navigate("/add-membership")} className="bg-blue-500 text-white py-2 rounded">
          Add Membership
        </button>
        <button onClick={() => navigate("/update-membership")} className="bg-yellow-500 text-white py-2 rounded">
          Update Membership
        </button>

        <h2 className="font-bold">Books/Movies</h2>
        <button onClick={() => navigate("/add-book")} className="bg-green-500 text-white py-2 rounded">
          Add Book/Movie
        </button>
        <button onClick={() => navigate("/update-book")} className="bg-yellow-500 text-white py-2 rounded">
          Update Book
        </button>

        <h2 className="font-bold">User Management</h2>
        <button onClick={() => navigate("/user-management")} className="bg-gray-600 text-white py-2 rounded">
          Manage Users
        </button>

      </div>
    </div>
  );
}