import Menu from "./MenuFooter";
import facebook from "../img/ic.png";
import instagram from "../img/icinsta.png";
import youtube from "../img/icyt.png";
import twit from "../img/ictwit.png";
import "../asset/footer.css";

const list1 = ["Audio et sous-titre","Presse","Confidentialité","Nous contacter"];

const list2 = ["Autodescription","Relations investisseurs","Informations légales"];

const list3 = ["Centre d'aide", "Recrutement", "Préférences de cookies"];

const list4 = ["Cartes cadeaux", "Conditions d'utilisation", "Mentions légales"];

function Footer() {
    return (
        <footer>
            <div>
                <img src={facebook} alt="" className="footerIcon"/>
                <img src={instagram} alt="" className="footerIcon"/>
                <img src={youtube} alt="" className="footerIcon"/>
                <img src={twit} alt="" className="footerIcon"/>
            </div>
            <div>
                <div className="footerListBlock">
                    <Menu list={list1} />
                    <Menu list={list2} />
                    <Menu list={list3} />
                    <Menu list={list4} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;