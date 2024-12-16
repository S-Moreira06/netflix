import Layout from "./component/Layout";
import Hero from "./component/Hero";
import Content from "./component/Content";
import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// Composant pour la page d'accueil
function Home() {
  return (
    <div>
      <Hero />
      <Content />
    </div>
  );
}

// Composant pour la page "À propos"
function About() {
  return (
    <div>
      <h1>À propos</h1>
      <p>Ceci est la page À propos. Le contenu sera ajouté ici.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      
        {/* Routes pour la navigation */}
        <Routes>
          <Route path="/" element={<Layout />}> {/*Layout n'est pas une balise orpheline: il permet ici deglober des routes dans des routes , et ainsi de creer un contenu qui va s'afficher peut importe la page afficher, tres utile pour le header et le footer*/}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
          </Route>
        </Routes>

        
    </BrowserRouter>
  );
}

export default App;
