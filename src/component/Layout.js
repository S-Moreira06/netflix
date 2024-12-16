import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Layout() {

    return (
        <div className="App">
        {/* Header commun */}
            <Navbar />
            <Outlet />{/* OUTLET est un composant magique qui permet de dire que le reste des routes de App.js se placera ici */}
        {/* Footer commun */}
            <Footer />
        </div>
    )
}

export default Layout;