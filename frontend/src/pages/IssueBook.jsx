import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function IssueBook() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const [book, setBook] = useState("A");
  const [author, setAuthor] = useState("Author 1");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [remarks, setRemarks] = useState("");

  const today = new Date().toISOString().split("T")[0];

  // auto set return date = +15 days
  useEffect(() => {
    if (issueDate) {
      const date = new Date(issueDate);
      date.setDate(date.getDate() + 15);
      setReturnDate(date.toISOString().split("T")[0]);
    }
  }, [issueDate]);

  const goHome = () => {
    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  const handleSubmit = () => {
    if (!book || !issueDate || !returnDate) {
      alert("Please fill all required fields");
      return;
    }

    if (issueDate < today) {
      alert("Issue date cannot be before today");
      return;
    }

    // check return date max 15 days
    const maxDate = new Date(issueDate);
    maxDate.setDate(maxDate.getDate() + 15);

    if (new Date(returnDate) > maxDate) {
      alert("Return date cannot exceed 15 days");
      return;
    }

    alert("Book Issued Successfully");
    navigate("/transactions");
  };

  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <button onClick={goHome} className="bg-gray-400 px-3 py-1 text-white rounded">
          Home
        </button>

        <h1 className="text-xl font-bold">Book Issue</h1>

        <button onClick={() => navigate("/")} className="bg-red-500 px-3 py-1 text-white rounded">
          Log Out
        </button>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4 w-80 mx-auto">

        <input
          value={book}
          disabled
          className="border p-2 bg-gray-200"
        />

        <input
          value={author}
          disabled
          className="border p-2 bg-gray-200"
        />

        <input
          type="date"
          value={issueDate}
          onChange={(e) => setIssueDate(e.target.value)}
          className="border p-2"
        />

        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="border p-2"
        />

        <textarea
          placeholder="Remarks (optional)"
          onChange={(e) => setRemarks(e.target.value)}
          className="border p-2"
        />

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white py-2 rounded"
        >
          Issue Book
        </button>
      </div>
    </div>
  );
}