import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login.jsx";
import AdminHome from "./pages/AdminHome";
import UserHome from "./pages/UserHome";
import Transactions from "./pages/Transactions";
import BookAvailable from "./pages/BookAvailable";
import SearchResults from "./pages/SearchResults";
import IssueBook from "./pages/IssueBook";
import ReturnBook from "./pages/ReturnBook";
import PayFine from "./pages/PayFine";

import Reports from "./pages/Reports";
import BooksReport from "./pages/BooksReport";
import MoviesReport from "./pages/MoviesReport.jsx";
import MembershipReport from "./pages/MembershipReport";
import ActiveIssues from "./pages/ActiveIssues";
import Overdue from "./pages/Overdue";
import PendingRequests from "./pages/PendingRequests";

// ✅ ADD THESE (MISSING BEFORE)
import Maintenance from "./pages/Maintenance";
import AddMembership from "./pages/AddMembership";
import AddBook from "./pages/AddBook";
import UserManagement from "./pages/UserManagement";
import UpdateMembership from "./pages/UpdateMembership";
import UpdateBook from "./pages/UpdateBook";
import Success from "./pages/Success";
import Cancel from "./pages/cancel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/user" element={<UserHome />} />

        <Route path="/transactions" element={<Transactions />} />
        <Route path="/book-available" element={<BookAvailable />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/issue-book" element={<IssueBook />} />
        <Route path="/return-book" element={<ReturnBook />} />
        <Route path="/pay-fine" element={<PayFine />} />

        <Route path="/reports" element={<Reports />} />
        <Route path="/books-report" element={<BooksReport />} />
        <Route path="/movies-report" element={<MoviesReport />} />
        <Route path="/memberships-report" element={<MembershipReport />} />
        <Route path="/active-issues" element={<ActiveIssues />} />
        <Route path="/overdue" element={<Overdue />} />
        <Route path="/pending-requests" element={<PendingRequests />} />

        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/add-membership" element={<AddMembership />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/update-membership" element={<UpdateMembership />} />
        <Route path="/update-book" element={<UpdateBook />} />

        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;