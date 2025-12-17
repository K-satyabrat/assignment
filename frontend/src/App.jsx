import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FetchConfig from "./pages/FetchConfig";
import UpdateRemark from "./pages/UpdateConfig";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: 20 , display: "flex", gap: 10}}>
        <Link to="/">FetchConfig</Link> 
        <Link to="/update">UpdateRemark</Link>
      </nav>

      <Routes>
        <Route path="/" element={<FetchConfig />} />
        <Route path="/update" element={<UpdateRemark />} />
      </Routes>
    </BrowserRouter>
  );
}
