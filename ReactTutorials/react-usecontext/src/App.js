import { React, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Homepage from "./pages/Home";
import { Database } from "./context/index";

export default function App() {
  // https://jsonplaceholder.typicode.com/posts
  const [state, setState] = useState([1, 2, 3, 4]);
  const [posts, SetPosts] = useState([])

  const SaySomething = () => {
    console.log("this is a function");
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json()) // convert to json
      .then(data => {
        // recieve data here
        SetPosts(data)
      })
      .catch(err => {
        console.error(err)
      })
  },[])

  const OnlyString = "Hello Friend";

  return (
    <Database.Provider value={[state, SaySomething, OnlyString,posts]}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Database.Provider>
  );
}
