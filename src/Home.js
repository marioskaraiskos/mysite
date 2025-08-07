import React from "react";
import pic2 from './img/pic2.PNG';
import './App.css';
import TechStack from "./techstack";
import './output.css';
import stopwatch from './img/stopwatch.PNG';
import todoBoard from './img/todo board.PNG';

function Home({ theme }) {
  return (
    <div>
      <div className="picture-container">
        <div className="picture-container-row">
          <img src={pic2} className="picture" alt="Profile" />
          <div
            className="himarios"
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            Hey, I'm Marios Karaiskos <div className="wave-emoji">👋</div>
          </div>
        </div>
        <div className="status">
          <span className="status-dot online"></span>
          <span className="status-text">Available to work</span>
        </div>
      </div>

      <p
        className="description"
        style={{ color: theme === "dark" ? "white" : "black" }}
      >
        A passionate and driven 22-year-old software developer currently graduating from New York College Athens,
        I dedicate much of my free time creating projects with different technologies and troubleshooting code on various platforms.
      </p>

      <p className="tech-stack">Current tech stack:</p>

      <div className="tech-stack-div">
        <TechStack />

        <div className="recent-projects mb-1 w-fit rounded-md bg-muted px-1.5 py-1 text-muted-foreground text-xs">
          Recent projects
        </div>

        <div className="cards">
          <div className="card">
            <img src={stopwatch} alt="Stopwatch App" className="stopwatch card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Stopwatch App</h5>
              <p className="card-text">This is a Stopwatch App I created using React and Tailwind CSS.</p>
              <a
                href="https://marioskaraiskos.github.io/stopwatch/"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Press Here to see my Stopwatch App!
              </a>
            </div>
          </div>

          <div className="card">
            <img src={todoBoard} alt="Todo Board App" className="todoapp-img card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Todo Board App</h5>
              <p className="card-text">This is a Todo Board App I also created using React and Tailwind CSS! :)</p>
              <a
                href="https://marioskaraiskos.github.io/to-do-board/"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Press Here to see my To-Do Board App!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
