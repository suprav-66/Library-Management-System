import { useNavigate } from "react-router-dom";

export default function MoviesReport() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const goHome = () => {
    if (role === "admin") navigate("/admin");
    else navigate("/user");
  };

  const movies = [
    {
      serial: "M001",
      name: "Inception",
      author: "Christopher Nolan",
      category: "Sci-Fi",
      status: "Available",
      cost: 800,
      date: "2026-01-05",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <button onClick={goHome}>Home</button>
        <h1 className="font-bold text-lg">Master List of Movies</h1>
        <button onClick={() => navigate("/")}>Log Out</button>
      </div>

      <table className="w-full border border-black">
        <thead>
          <tr>
            <th className="border">Serial No</th>
            <th className="border">Name of Movie</th>
            <th className="border">Author Name</th>
            <th className="border">Category</th>
            <th className="border">Status</th>
            <th className="border">Cost</th>
            <th className="border">Procurement Date</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((m, i) => (
            <tr key={i}>
              <td className="border text-center">{m.serial}</td>
              <td className="border text-center">{m.name}</td>
              <td className="border text-center">{m.author}</td>
              <td className="border text-center">{m.category}</td>
              <td className="border text-center">{m.status}</td>
              <td className="border text-center">{m.cost}</td>
              <td className="border text-center">{m.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}