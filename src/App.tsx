import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AuthProvider} from "@/context/AuthProvider";import ProtectedRoute from "@/components/ProtectedRoute";
import HomePage from "@/pages/HomePage";
import AuthPage from "@/pages/AuthPage";

function App() {
  return (
      <BrowserRouter>
          <AuthProvider>
              <Routes>
                  <Route
                      path="/"
                      element={
                          <ProtectedRoute>
                              <HomePage />
                          </ProtectedRoute>
                      }
                  />
                  <Route path="/login" element={<AuthPage />} />
              </Routes>
          </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
