import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";
import AppLayout from "./AppLayout";
import Market from "./pages/Market";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthForm from "./features/authentication/AuthForm";
import AuthProvider from "./features/authentication/AuthProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index path="/" element={<Home />} />
              <Route path="market" element={<Market />} />
            </Route>
            <Route path="auth" element={<AuthForm />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            Color: "white",
          },
        }}
      />
    </>
  );
}

export default App;
