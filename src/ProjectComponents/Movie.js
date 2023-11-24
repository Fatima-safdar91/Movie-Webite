

const Movie = (props) => {
  return (
    <div className="movie">
    <img src = {props.Image}  alt = "" />
    <p>{props.Title}</p>
    <p> Year : {props.Year}</p>
    </div>
  )
}

export default Movie