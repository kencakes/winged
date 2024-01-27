import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AuthProvider} from "@/context/AuthProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import AuthPage from "@/pages/AuthPage";
import HomePage from "@/pages/HomePage";
import BirdPage from "@/pages/BirdPage";
import LogbookPage from "@/pages/LogbookPage";
import SettingsPage from "@/pages/SettingsPage";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <HomePage/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/bird"
                        element={
                            <ProtectedRoute>
                                <BirdPage/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/logbook"
                        element={
                            <ProtectedRoute>
                                <LogbookPage/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            <ProtectedRoute>
                                <SettingsPage/>
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<AuthPage/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
