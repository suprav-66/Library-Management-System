import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReturnBook() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const [book] = useState("A");
  const [author] = useState("Author 1");
  const [serial, setSerial] = useState("");
  const [issueDate] = useState("2026-03-30"); // auto-filled
  const [returnDate, setReturnDate] = useState("");
  const [remarks, setRemarks] = useState("");

  const goHome = () => {
    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  // ✅ Calculate expected return date = issueDate + 15 days
  const getExpectedDate = () => {
    const date = new Date(issueDate);
    date.setDate(date.getDate() + 15);
    return date.toISOString().split("T")[0];
  };

  const handleSubmit = () => {
    if (!serial || !returnDate) {
      alert("Please fill all required fields");
      return;
    }

    const expectedDate = getExpectedDate();

    // ✅ Navigate with real data
    navigate("/pay-fine", {
  state: {
    book,
    author,
    serial,
    issueDate,
    returnDate,
    expectedDate
   }
  });
  };

  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <button onClick={goHome} className="bg-gray-400 px-3 py-1 text-white rounded">
          Home
        </button>

        <h1 className="text-xl font-bold">Return Book</h1>

        <button onClick={() => navigate("/")} className="bg-red-500 px-3 py-1 text-white rounded">
          Log Out
        </button>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4 w-80 mx-auto">

        <input value={book} disabled className="border p-2 bg-gray-200" aria-label="Book name" />

        <input value={author} disabled className="border p-2 bg-gray-200" aria-label="Author name" />

        <select
          onChange={(e) => setSerial(e.target.value)}
          className="border p-2"
          aria-label="Select serial number"
        >
          <option value="">Select Serial No</option>
          <option value="S001">S001</option>
          <option value="S002">S002</option>
        </select>

        <input value={issueDate} disabled className="border p-2 bg-gray-200" aria-label="Issue date" />

        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="border p-2"
          aria-label="Return date"
        />

        <textarea
          placeholder="Remarks (optional)"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          className="border p-2"
          aria-label="Remarks"
        />

        <button
          onClick={handleSubmit}
          className="bg-yellow-500 text-white py-2 rounded"
        >
          Confirm Return
        </button>
      </div>
    </div>
  );
}