import React from "react";

function Home({ name, location }) {
  return (
    <div id="home">
      <h1>
        {name} is a Web Developer from {location}
      </h1>
    </div>
  );
}

export default Home;
