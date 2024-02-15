import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import AuthPage from "@/pages/AuthPage";
import HomePage from "@/pages/HomePage";
import BirdPage from "@/pages/BirdPage";
import LogbookPage from "@/pages/LogbookPage";
import SettingsPage from "@/pages/SettingsPage";
import Sidebar from '@/components/Sidebar';
import { cn } from './lib/utils';
import { Toaster } from './components/ui/toaster';
import BirdDetails from './pages/BirdDetails';

function App() {
    return (
        <BrowserRouter>
            <div className={cn("min-h-screen full flex")}>
                <AuthProvider>
                    <Sidebar />
                    <Toaster />
                    <div className='p-8 w-full'>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <ProtectedRoute>
                                        <HomePage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/bird"
                                element={
                                    <ProtectedRoute>
                                        <BirdPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/bird/:id"
                                element={
                                    <ProtectedRoute>
                                        <BirdDetails />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/logbook"
                                element={
                                    <ProtectedRoute>
                                        <LogbookPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/settings"
                                element={
                                    <ProtectedRoute>
                                        <SettingsPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="/login" element={<AuthPage />} />
                        </Routes>
                    </div>
                </AuthProvider>
            </div>

        </BrowserRouter >
    );
}

export default App;
