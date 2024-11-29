import narcos from "../img/narcos.png";
import "../asset/hero.css";

function Hero () {
    return (
        <div className="hero">
            <img src={narcos} alt="narcos" className="hero-bg"/>
            <div className="hero-container">
                
                <div className="hero-desc">
                    {/* j'aurai pu mettre h2 et h3 , mais je ne peux resister a honey */}
                    <h1 className="hero-ntf"><span className="bold">NETFLIX</span> ORIGINAL</h1>
                    <h2 className="bold hero-title">NARCOS</h2>
                    <p className="bold">Regardez la saison 3 maintenant</p>
                    <p>Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs d'Escobar passent à l'action et déclarent la guerre au gouvernement.</p>
                </div>
                <div className="hero-nav">
                    <div>
                        <img src="" alt="" />
                        <a href="">Lecture</a>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <a href="#">My List</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;