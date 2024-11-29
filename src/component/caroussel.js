import vignette from "../img/vignette.png";
function Caroussel (props) {
    return (
        <div>
            <p>{props.title}</p>
            <div className="caroussel">
                <img src={vignette} alt="" className="vignette" />
                <img src={vignette} alt="" className="vignette" />
                <img src={vignette} alt="" className="vignette" />
                <img src={vignette} alt="" className="vignette" />
                <img src={vignette} alt="" className="vignette" />
                <img src={vignette} alt="" className="vignette" />
                <img src={vignette} alt="" className="vignette" />
            </div>
        </div>
    );
}

export default Caroussel;