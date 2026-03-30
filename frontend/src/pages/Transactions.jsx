import { useNavigate } from "react-router-dom";

export default function Transactions() {
  const navigate = useNavigate();

  // get role from localStorage
  const role = localStorage.getItem("role");

  const goHome = () => {
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <button onClick={goHome} className="bg-gray-400 px-3 py-1 text-white rounded">
          Home
        </button>

        <h1 className="text-xl font-bold">Transactions</h1>

        <button onClick={() => navigate("/")} className="bg-red-500 px-3 py-1 text-white rounded">
          Log Out
        </button>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-4 w-64 mx-auto">

        <button
          onClick={() => navigate("/book-available")}
          className="bg-blue-500 text-white py-2 rounded"
       >
          Is Book Available?
        </button>

        <button
          onClick={() => navigate("/issue-book")}
          className="bg-green-500 text-white py-2 rounded"
        >
          Issue Book
        </button>

        <button
          onClick={() => navigate("/return-book")}
          className="bg-yellow-500 text-white py-2 rounded"
       >
          Return Book
        </button>

        <button
            onClick={() => navigate("/pay-fine")}
            className="bg-purple-500 text-white py-2 rounded"
        >
          Pay Fine
        </button>

      </div>
    </div>
  );
}