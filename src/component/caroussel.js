import vignette from "../img/vignette.png";
function Caroussel (props) {
    const films = props.movies || [];
    console.log(films[1]);
    return (
        <div>
            <p>{props.title}</p>
            <div className="caroussel">
                {films.length > 0 ? (
                    films.map((film) => (
                        <img
                            key={film.id}
                            src={film.backdrop_path ? `https://image.tmdb.org/t/p/w500${film.backdrop_path}` : vignette}
                            alt={film.title || "Film"}
                            className="vignette"
                        />
                    ))
                ) : (
                    <p>Aucun film disponible</p>
                )}
            </div>
        </div>
    );
}

export default Caroussel;