import narcos from "../img/narcos.png";
import "../asset/hero.css";
import { useState, useEffect } from "react";

function Hero() {
    const [movie, setMovie] = useState(null); // Stocke les données récupérées
    
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzlkN2FjMzA3NzMwMDZjZWUyNDAzZWYwMDIwZjU0MiIsIm5iZiI6MTczMzE0NTk4Ni4wNjQ5OTk4LCJzdWIiOiI2NzRkYjU4MjQ1NThkYWU0NDkzZGQ3MWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.muvofxzJvbmiTX1zpKGhAff7bSVsDV3UJMBg6lY95Ew',
                },
            };
            try {
                const response = await fetch(
                    'https://api.themoviedb.org/3/trending/movie/day?language=fr-FR',
                    options
                );
                const result = await response.json();
                if (result.results && result.results.length > 0) {
                    setMovie(result.results[1]); // Stocke le premier film dans l'état
                }
            } catch (error) {
                console.error('Erreur :', error);
            }
        };
        fetchData(); // Déclenche l'appel API lors du montage
    }, []); 

    return (
        <div className="hero">
            <img src={movie?.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : narcos} alt="narcos" className="hero-bg" />
            <div className="hero-container">
                <div className="hero-desc">
                    <h1 className="hero-ntf">
                        <span className="bold">NITFLEX</span> ORIGINAL
                    </h1>
                        <div>
                            <h2 className="bold hero-title">{movie?.title ? movie.title : "NORCAS"}</h2>
                            <p className="bold">{movie?.overview ? movie.overview : "NORCAS"}</p>
                        </div>
                </div>
                <div className="hero-nav">
                    <div>
                        <img src="" alt="" />
                        <a href="#">Lecture</a>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <a href="#">Ma Liste</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
