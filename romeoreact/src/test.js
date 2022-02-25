import React, { useEffect } from "react";

function Test() {
  var r = document.querySelector(":root");
  const test = deg => {
    r.style.setProperty("--degraden", deg);
  };
  var hours = new Date().getMinutes();
useEffect(() => {
    if (hours == 1) {
        test("-90deg");
      } else if (hours == 59) {
        test("-75deg");
      } else if (hours == 9) {
        test("-50deg");
      } else if (hours == 10) {
        test("35deg");
      } else {
        test("90deg");
      }
},[])
 

  return (
    <div className="containertest">
      <div className="test">test</div>
    </div>
  );
}

export default Test;
