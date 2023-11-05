import React from "react";
import Header from "./components/Header.jsx";
import AddBook from "./components/AddBook.jsx";
import Books from "./components/Book/Books.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
      <React.Fragment>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
              <Route path='/books' element={<Books />} exact />
              <Route path="/about-me" element={<About />} exact />
              <Route path="/add-book" element={<AddBook />} exact />
          </Routes>
        </main>
      </React.Fragment>
  )
}

export default App
