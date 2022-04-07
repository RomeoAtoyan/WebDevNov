import React from "react";
import "./MainContent.css";

const MainConent = () => {
  return (
    <div className="main_content_container">
      <div className="search_container">
        <h1>
          1337<span id="red_x">X</span>
        </h1>
        <input
          className="search_input"
          placeholder="Search for torrents.."
          type="text"
        />
        <div className="domain_names">
          <div className="top_half">
            <h1>1337x Domains</h1>
            <h1>1 month ago</h1>
          </div>
          <div className="bottom_half">
            <p>
              1337x newest alternative domain is <span id="red_1337x">1337xto.to</span>, for
              full list of alternative domains see <span id="red_about">about</span> page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainConent;
