import React, { useContext } from "react";
import Hero from "./components/Hero";
import { NoPage } from "./components/NoPage";
import { Route, Routes } from "react-router";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Nav } from "./components/Nav";
import { Navigate } from 'react-router-dom';
import { Register } from "./pages/Register";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import RoomPage from "./pages/RoomPage";
import { Dashboard } from "./pages/Dashboard";
import { Context } from "./context/Context";
import Home from "./pages/Home";
const App = () => {
  const user  = true;
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Nav />
        <Routes>
          <Route path='/' exact element={user? <Home /> : <Register/>} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={user? <Home/> : < Login/> } />
          <Route path='/register' element={user? <Home/> : <Register />} />
          <Route path='/dashboard' element={user ? <Dashboard /> : <Login/>} />
          <Route path='/contact' element={user ? <Contact /> : <Login/>} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="room/:id" element={<RoomPage /> ? <RoomPage /> : <NoPage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
