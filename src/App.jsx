import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ClientRoutes from "./routes/ClientRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Client Pages */}
          <Route path="/*" element={<ClientRoutes />} />

          {/* Admin Pages */}
          <Route path="/admin/*" element={<AdminRoutes />} />

          {/* Authentication Pages */}
          <Route path="/auth/*" element={<AuthRoutes />} />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
