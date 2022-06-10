import React from "react";
import Hero from "./components/Hero";
import { NoPage } from "./components/NoPage";
import { Route, Routes } from "react-router";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { Nav } from "./components/Nav";
import {Navigate} from 'react-router-dom';
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
