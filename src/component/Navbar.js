import logo from "../img/fontbolt.png";
import loupe from "../img/icsearch.png";
import notif from "../img/icnotification.png";
import avatar from "../img/avatar.png";
import crayon from "../img/crayon.png";
import transfert from "../img/transfert.png";
import utilisateur from "../img/utilisateur.png";
import interrogation from "../img/interrogation.png";
import "../asset/navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
    // Déclare l'état pour le dropdown , on declare directement dans la constante les fonctions dropdownactif et le setter, 
    // la fonction useState est une fontion systeme qui sert à attribuer et modifier les états. 
    // Cette syntaxe se nomme la déstructuration
    const [dropdownActif, setDropdownActif] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [burgerActif, setBurgerActif] = useState(false);

    // Fonction pour gérer le clic
    const toggleDropdown = () => {
    setDropdownActif(!dropdownActif); // Change la valeur (true <-> false)
    };
    const toggleBurger = () => {
        setBurgerActif(!burgerActif); // Change la valeur (true <-> false)
        };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setIsScrolled(true); // Si l'utilisateur scrolle de plus de 70px
            } else {
                setIsScrolled(false); // Si on est revenu en haut
            }
        };

        window.addEventListener('scroll', handleScroll); // Écoute l'événement de scroll

        // Nettoyage de l'événement au démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={isScrolled ? "scrolled" : ""}>
            <div className="navBlock">
                <img src={logo} alt="Logo NitFlex" className="logo"/>
                <nav className={dropdownActif == true  ? "navList active" : "navList"}>
                    <a>Acceuil</a>
                    <a>Séries</a>
                    <a>Films</a>
                    <a>Nouveautés les plus regardées</a>
                    <a>Ma liste</a>
                    <a>Explorer la langue</a>
                </nav>
                <div className="dropdown" onMouseOver={toggleDropdown}>
                    Parcourir
                    <svg width="18" height="5" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="ic-dropdown">
                            <path id="caret-down-white" fillRule="evenodd" clipRule="evenodd" d="M1.67989 1.434L17.5229 17.274C17.5829 17.337 17.6849 17.337 17.7449 17.274L33.5879 1.434C33.6869 1.335 33.6179 1.164 33.4739 1.164H1.79089C1.64989 1.164 1.58089 1.335 1.67989 1.434" fill="white"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div className="navIcons">
                <div>
                    <img src={loupe} alt="" className="navIcon1"/>
                </div>
                <div>
                    <img src={notif} alt="" className="navIcon2"/>
                </div>
                <div onClick={toggleBurger}>
                    <img src={avatar} alt="" className="navIcon1"/>
                    <svg width="18" height="5" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="navIcon3">
                        <g id="ic-dropdown">
                            <path id="caret-down-white" fillRule="evenodd" clipRule="evenodd" d="M1.67989 1.434L17.5229 17.274C17.5829 17.337 17.6849 17.337 17.7449 17.274L33.5879 1.434C33.6869 1.335 33.6179 1.164 33.4739 1.164H1.79089C1.64989 1.164 1.58089 1.335 1.67989 1.434" fill="white"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div className={burgerActif == true  ? "burgerActive" : "burger"}>
                <div className="burgerTop">
                    <img src={avatar} alt="" className="burgerIcon1"/>
                    <p>Soso Allstar</p>
                </div>
                <div className="burgerMain">
                    <div>
                        <img src={crayon} alt="" className="burgerIcon2"/>
                        <a href="#">Gérer les profils</a>
                    </div>
                    <div>
                        <img src={transfert} alt="" className="burgerIcon2"/>
                        <a href="#">Transférer un profil</a>
                    </div>
                    <div>
                        <img src={utilisateur} alt="" className="burgerIcon2"/>
                        <a href="#">Compte</a>
                    </div>
                    <div>
                        <img src={interrogation} alt="" className="burgerIcon2"/>
                        <a href="#">Centre d'aide</a>
                    </div>
                </div>
                <div className="logout">
                    <p className="logoutTxt">Se déconnecter</p>
                </div>
            </div>
        </header>
    );
};

export default Navbar;