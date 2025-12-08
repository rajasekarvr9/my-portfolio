import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Migrations from './components/Migrations.jsx';
import Projects from './components/Projects.jsx';
import Clients from './components/Clients.jsx';
import FutureScope from './components/FutureScope.jsx';
import IVRFlow from './components/IVRFlow.jsx';
import Contact from './components/Contact.jsx';
//import IVRFlow from './components/IVRFlow.jsx';



export default function App() {
return (
<div className="app-root">
<NavBar />
<main>
<Hero />
<AboutMe />
<Skills />
<Certifications />
<Migrations />
<Projects />
<Clients />
<FutureScope />
<IVRFlow />
<Contact />
</main>
<footer className="site-footer">© {new Date().getFullYear()} Rajasekhar Reddy</footer>
</div>
);
}