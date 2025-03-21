import todoBoard from './img/todo board.PNG';
import stopwatch from './img/stopwatch.PNG';
import './Projects.css'; // Ensure this CSS file exists

function Projects() {
    return (
        <div>
           <ul className="projects-list">
    <li>
        <a href="https://marioskaraiskos.github.io/stopwatch/" target="_blank" rel="noopener noreferrer">
            My Stopwatch App created with React
            <img src={stopwatch} className="card-img-top" alt="Stopwatch" />
        </a>
    </li>

    <li>
        <a href="https://marioskaraiskos.github.io/to-do-board/" target="_blank" rel="noopener noreferrer">
            My To-Do-Board  App created with React
            <img src={todoBoard} className="card-img-top" alt="Stopwatch" />
        </a>
    </li>
    
</ul>
        </div>
    );
}

export default Projects;
