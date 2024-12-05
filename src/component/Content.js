import Caroussel from "../component/caroussel.js";
import "../asset/content.css";
import { useState, useEffect } from "react";

function Content() {
    const [moviesPage1, setMoviesPage1] = useState(null); // Films de la page 1
    const [moviesPage2, setMoviesPage2] = useState(null); // Films de la page 2

    // Fonction pour récupérer les données d'une page donnée
    const fetchMovies = async (page) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzlkN2FjMzA3NzMwMDZjZWUyNDAzZWYwMDIwZjU0MiIsIm5iZiI6MTczMzE0NTk4Ni4wNjQ5OTk4LCJzdWIiOiI2NzRkYjU4MjQ1NThkYWU0NDkzZGQ3MWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.muvofxzJvbmiTX1zpKGhAff7bSVsDV3UJMBg6lY95Ew',
            },
        };
        const url = `https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=${page}`;
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result.results || [];
        } catch (error) {
            console.error(`Erreur lors de la récupération des films pour la page ${page} :`, error);
            return [];
        }
    };

    // Chargement des films pour les deux pages
    useEffect(() => {
        const loadMovies = async () => {
            const page1 = await fetchMovies(1);
            const page2 = await fetchMovies(2);
            setMoviesPage1(page1);
            setMoviesPage2(page2);
        };
        loadMovies(); // Déclenche les appels API au montage du composant
    }, []);

    // Gestion du chargement
    if (!moviesPage1 || !moviesPage2) {
        return <p>Chargement des films...</p>;
    }

    return (
        <div>
            {/* Passe les films de la page 1 au premier Caroussel */}
            <Caroussel title="Revoir" movies={moviesPage1} />

            {/* Passe les films de la page 2 au second Caroussel */}
            <Caroussel title="Tendances actuelles" movies={moviesPage2} />
        </div>
    );
}

export default Content;
