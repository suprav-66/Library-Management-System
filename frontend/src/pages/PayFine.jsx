import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function PayFine() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");

  // Data from ReturnBook
  const book = location.state?.book || "A";
  const author = location.state?.author || "Author 1";
  const serial = location.state?.serial || "S001";
  const issueDate = location.state?.issueDate || "2026-03-30";
  const expectedDate = location.state?.expectedDate;
  const actualReturnDate = location.state?.returnDate;

  // ✅ Fine Calculation
  let fineAmount = 0;

  if (actualReturnDate && expectedDate) {
    const rDate = new Date(actualReturnDate);
    const eDate = new Date(expectedDate);

    if (rDate > eDate) {
      const diffDays = Math.ceil(
        (rDate - eDate) / (1000 * 60 * 60 * 24)
      );
      fineAmount = diffDays * 10;
    }
  }

  const [finePaid, setFinePaid] = useState(false);
  const [remarks, setRemarks] = useState("");

  const goHome = () => {
    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  const handleSubmit = () => {
    if (fineAmount > 0 && !finePaid) {
      alert("Please confirm fine payment");
      return;
    }

    alert("Transaction Completed Successfully");
    navigate("/transactions");
  };

  return (
    <div className="p-4">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <button onClick={goHome} className="bg-gray-400 px-3 py-1 text-white rounded">
          Home
        </button>

        <h1 className="text-xl font-bold">Pay Fine</h1>

        <button onClick={() => navigate("/")} className="bg-red-500 px-3 py-1 text-white rounded">
          Log Out
        </button>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-3 w-96 mx-auto">

        <input value={book} disabled className="border p-2 bg-gray-200" aria-label="Book title" />
        <input value={author} disabled className="border p-2 bg-gray-200" aria-label="Author name" />
        <input value={serial} disabled className="border p-2 bg-gray-200" aria-label="Serial number" />

        <input value={issueDate} disabled className="border p-2 bg-gray-200" aria-label="Issue date" />

        <input value={expectedDate} disabled className="border p-2 bg-gray-200" aria-label="Expected return date" />

        <input value={actualReturnDate} disabled className="border p-2 bg-gray-200" aria-label="Actual return date" />

        {/* Fine */}
        <input
          value={`₹${fineAmount}`}
          disabled
          className="border p-2 bg-gray-200"
          aria-label="Fine amount"
        />

        {/* Checkbox */}
        {fineAmount > 0 && (
          <label>
            <input
              type="checkbox"
              checked={finePaid}
              onChange={() => setFinePaid(!finePaid)}
            />
            <span className="ml-2">Fine Paid</span>
          </label>
        )}

        {/* Remarks */}
        <textarea
          placeholder="Remarks (optional)"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          className="border p-2"
          aria-label="Remarks"
        />

        <button
          onClick={handleSubmit}
          className="bg-purple-500 text-white py-2 rounded"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}