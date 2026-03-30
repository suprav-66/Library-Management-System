import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchResults() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const [selectedBook, setSelectedBook] = useState(null);

  const goHome = () => {
    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  // Dummy data (for now)
  const books = [
    { id: 1, name: "A", author: "Author 1", serial: "S001", available: "Y" },
    { id: 2, name: "A", author: "Author 1", serial: "S002", available: "Y" },
    { id: 3, name: "A", author: "Author 1", serial: "S003", available: "N" },
  ];

  const handleIssue = () => {
    if (!selectedBook) {
      alert("Please select a book to issue");
      return;
    }

    navigate("/issue-book");
  };

  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <button onClick={goHome} className="bg-gray-400 px-3 py-1 text-white rounded">
          Home
        </button>

        <h1 className="text-xl font-bold">Search Results</h1>

        <button onClick={() => navigate("/")} className="bg-red-500 px-3 py-1 text-white rounded">
          Log Out
        </button>
      </div>

      {/* Table */}
      <table className="w-full border border-black mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border">Book Name</th>
            <th className="border">Author</th>
            <th className="border">Serial No</th>
            <th className="border">Available</th>
            <th className="border">Select</th>
          </tr>
        </thead>

        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td className="border text-center">{b.name}</td>
              <td className="border text-center">{b.author}</td>
              <td className="border text-center">{b.serial}</td>
              <td className="border text-center">{b.available}</td>

              <td className="border text-center">
                {b.available === "Y" && (
                  <input
                    type="radio"
                    name="selectBook"
                    onChange={() => setSelectedBook(b)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Issue Button */}
      <button
        onClick={handleIssue}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Issue Selected Book
      </button>
    </div>
  );
}