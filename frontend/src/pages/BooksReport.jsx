import { useNavigate } from "react-router-dom";

export default function BooksReport() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const goHome = () => {
    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  const books = [
    {
      serial: "B001",
      name: "Physics",
      author: "HC Verma",
      category: "Science",
      status: "Available",
      cost: 500,
      date: "2026-01-10",
    },
    {
      serial: "B002",
      name: "Harry Potter",
      author: "J.K. Rowling",
      category: "Fiction",
      status: "Issued",
      cost: 400,
      date: "2026-02-15",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <button onClick={goHome}>Home</button>
        <h1 className="font-bold text-lg">Master List of Books</h1>
        <button onClick={() => navigate("/")}>Log Out</button>
      </div>

      <table className="w-full border border-black">
        <thead>
          <tr>
            <th className="border">Serial No</th>
            <th className="border">Name of Book</th>
            <th className="border">Author Name</th>
            <th className="border">Category</th>
            <th className="border">Status</th>
            <th className="border">Cost</th>
            <th className="border">Procurement Date</th>
          </tr>
        </thead>

        <tbody>
          {books.map((b, i) => (
            <tr key={i}>
              <td className="border text-center">{b.serial}</td>
              <td className="border text-center">{b.name}</td>
              <td className="border text-center">{b.author}</td>
              <td className="border text-center">{b.category}</td>
              <td className="border text-center">{b.status}</td>
              <td className="border text-center">{b.cost}</td>
              <td className="border text-center">{b.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}