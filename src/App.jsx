import PropertyDetails from "./pages/PropertyDetails"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import About from "./pages/About"

import Contact from "./pages/Contact"

import Properties from "./pages/Properties";

import Register from "./pages/Register"

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard"

import Bookings from "./pages/Bookings"

import Favorites from "./pages/Favorites"

import ProtectedRoute from "./components/ProtectedRoute"

import Admin from "./pages/Admin"

import NotFound from "./pages/NotFound"


function App() {
  return (
    <BrowserRouter>

      <main className="pt-20"> 

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/properties" element={<Properties />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/properties/:id" element={<PropertyDetails />}/>

        <Route path="/dashboard" element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        <Route path="/bookings" element={
    <ProtectedRoute>
      <Bookings />
    </ProtectedRoute>
  }
/>

        <Route path="/favorites" element={
    <ProtectedRoute>
      <Favorites />
    </ProtectedRoute>
  }
/>

        <Route path="/admin" element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>

        <Route path="*" element={<NotFound />} />

        
      </Routes>
      </main>    
    </BrowserRouter>
  );
}

export default App;

