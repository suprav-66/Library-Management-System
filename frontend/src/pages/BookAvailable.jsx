import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookAvailable() {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const goHome = () => {
    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  const handleSearch = () => {
    // ✅ Validation: at least one field required
    if (!book && !author) {
      alert("Please enter Book Name or Author");
      return;
    }

    // go to search results
    navigate("/search-results");
  };

  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <button onClick={goHome} className="bg-gray-400 px-3 py-1 text-white rounded">
          Home
        </button>

        <h1 className="text-xl font-bold">Book Availability</h1>

        <button onClick={() => navigate("/")} className="bg-red-500 px-3 py-1 text-white rounded">
          Log Out
        </button>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4 w-80 mx-auto">

        <select
          className="border p-2"
          onChange={(e) => setBook(e.target.value)}
        >
          <option value="">Enter Book Name</option>
          <option value="A">Book A</option>
          <option value="B">Book B</option>
        </select>

        <select
          className="border p-2"
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">Enter Author</option>
          <option value="Author1">Author 1</option>
          <option value="Author2">Author 2</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
}