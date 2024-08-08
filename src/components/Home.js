import React from "react";
import styled from "styled-components";

// Add media queries to src/components/Home.js
const Hero = styled.section`
  background: linear-gradient(to right, #333, #555);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

const Home = () => {
  return (
    <Hero id="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Dhiraj Mistry, a Full-Stack Developer</p>
    </Hero>
  );
};

export default Home;
