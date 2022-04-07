import React, { useEffect } from "react";
import "./Header.css";
import "./poster.jpg";



const Header = () => {
  useEffect(() => {
    const searchBtn = document.querySelector(".search_icon");
    const searchInput = document.querySelector(".search_input");

    searchBtn.addEventListener("click", () => {
      if (searchInput.value === "") {
        alert("Enter something");
      } else {
        alert("Something entered");
        searchInput.value = "";
      }
    }); 
})
  return (
    <div className="nav">
      <div className="navbar_container">
        <div className="navbar_items_left">
          <i className="fas film_icon fa-film fa-7x"></i>
          <div className="input_container">
            <i className="fas search_icon fa-search"></i>
            <input className="search_input" type="text" />
          </div>
        </div>
        <div className="navbar_items_right">
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>TV Show</li>
            <li>Actors</li>
          </ul>
          <i className="fas fa-user-circle fa-2x"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
