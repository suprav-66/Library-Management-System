import { useNavigate } from "react-router-dom";

export default function Reports() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const goHome = () => {
    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <button
          onClick={goHome}
          className="bg-gray-400 px-3 py-1 text-white rounded"
        >
          Home
        </button>

        <h1 className="text-xl font-bold">Available Reports</h1>

        <button
          onClick={() => navigate("/")}
          className="bg-red-500 px-3 py-1 text-white rounded"
        >
          Log Out
        </button>
      </div>

      {/* Reports List */}
      <div className="flex flex-col gap-4 w-80 mx-auto">

        <button
          onClick={() => navigate("/books-report")}
          className="bg-blue-500 text-white py-2 rounded"
        >
          Master List of Books
        </button>

        <button
          onClick={() => navigate("/movies-report")}
          className="bg-green-500 text-white py-2 rounded"
        >
          Master List of Movies
        </button>

        <button
          onClick={() => navigate("/memberships-report")}
          className="bg-yellow-500 text-white py-2 rounded"
        >
          Master List of Memberships
        </button>

        <button
          onClick={() => navigate("/active-issues")}
          className="bg-purple-500 text-white py-2 rounded"
        >
          Active Issues
        </button>

        <button
          onClick={() => navigate("/overdue")}
          className="bg-red-500 text-white py-2 rounded"
        >
          Overdue Returns
        </button>

        <button
          onClick={() => navigate("/pending-requests")}
          className="bg-gray-600 text-white py-2 rounded"
        >
          Pending Issue Requests
        </button>

      </div>
    </div>
  );
}