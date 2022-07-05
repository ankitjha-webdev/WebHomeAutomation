import React from "react";
import Hero from "./components/Hero";
import { NoPage } from "./components/NoPage";
import { Route, Routes } from "react-router";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Nav } from "./components/Nav";
import {Navigate} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Model } from "./components/Model";
import { Light } from "./components/Light";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { StackComp } from "./components/StackComp";
import RoomPage from "./pages/RoomPage";
import { Room } from "./components/Room";
const App = (props) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.heading))

  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>

        <Routes>
          <Route path='/' exact element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/home/light" element={<Light />} />
          <Route path="/home/room" element={<RoomPage/>? <RoomPage/>:<NoPage />} />
          <Route path="room/:id" element={<RoomPage/>? <RoomPage/>:<NoPage />} />
          <Route path="/room" element={<Room />} />
        </Routes>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
