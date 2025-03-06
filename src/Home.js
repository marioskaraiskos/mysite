import React from "react";
import pic2 from './img/pic2.PNG';
import './App.css';
import './techstack';
import TechStack from "./techstack";
import './output.css';
import stopwatch from './img/stopwatch.PNG';
import todoBoard from './img/todo board.PNG';



function Home() {
  return (
    <div>
      <div className="picture-container">
        <div className="picture-container-row">
          <img src={pic2} className="picture" alt="Profile" />
          <div className="himarios">
            Hey, I'm Marios Karaiskos <div className="wave-emoji">👋</div>
          </div>
        </div>
        <div className="status">
          <span className="status-dot online"></span>
          <span className="status-text">Available to work</span>
        </div>
      </div>

      <p className="description">
        A passionate and driven 22-year-old software developer currently graduating from New York College Athens,
        I dedicate much of my free time creating projects with different technologies and troubleshooting code on various platforms.
      </p>

      <p className="tech-stack">current tech stack:</p>
      <div className="tech-stack-div">
      <TechStack />
      <div class="mb-1 w-fit rounded-md bg-muted px-1.5 py-1 text-muted-foreground text-xs" className="recent-projects">Recent projects</div>
      <div className="cards">
      <div class="card">
  <img src={stopwatch} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Stopwatch App</h5>
    <p class="card-text">This is a Stopwatch App i created in react and tailwind css</p>
    <a href="https://marioskaraiskos.github.io/stopwatch/"                  
    class="btn-primary">Press Here to see my Stopwatch App!
    </a>
  </div>

      </div>
      <div class="card">
  <img src={todoBoard} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Todo Board App</h5>
    <p class="card-text">This is a Todo Board App i also created in react and tailwind css! :)</p>
    <a href="https://marioskaraiskos.github.io/to-do-board/"                  
    class="btn-primary">Press Here to see my To-Do Board App!
    </a>
  </div>

      </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
