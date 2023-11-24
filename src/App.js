import "./App.css";
import HeaderBar from "./ProjectComponents/HeaderBar";
import Movie from "./ProjectComponents/Movie";
import movies from "./ProjectComponents/Data.json";

function App() {

  let jhanda = false;

  return (
    <div className="App">
      <HeaderBar />
      <div className="main">
        {movies.map((element, index) => {
          return (
            <Movie
              key={index}
              Title={element.Title}
              Year={element.Year}
              Image={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
