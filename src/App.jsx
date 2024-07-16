import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/farmers" replace />} />
      <Route element={<ProtectedRoute/>}>
        <Route exact path="/dashboard/*" element={<Dashboard />}/>
      </Route>
    </Routes>
  );
}

export default App;
