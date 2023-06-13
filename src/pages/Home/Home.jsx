import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { data, buttonStyle } from "../../components/Navbar/NavData";
function Home() {
  return (
    <>
      <div className="home">
        <Navbar data={data} buttonStyle={buttonStyle} />
      </div>
    </>
  );
}

export default Home;
